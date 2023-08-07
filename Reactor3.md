测试文档测试文档测试文档测试文档测试文档测试文档

测试文档测试文档测试文档测试文档测试文档测试文档

测试文档测试文档测试文档测试文档测试文档测试文档

______

假设：在用户界面上显示用户的5个收藏，或者如果没有任何收藏提供5个建议。这需要3个 服务（一个提供收藏的ID列表，第二个服务获取收藏内容，第三个提供建议内容）

使用回调的栗子（反面）

```java
userService.getFavorites(userId, new Callback<List<String>>() { //基于回调的服务使用一个匿名 Callback 作为参数。后者的两个方法分别在异步执行成功 或异常时被调用。
  public void onSuccess(List<String> list) { //	获取到收藏ID的list后调用第一个服务的回调方法
    if (list.isEmpty()) { 
      suggestionService.getSuggestions(new Callback<List<Favorite>>() {		//如果 list 为空，调用该方法
        public void onSuccess(List<Favorite> list) { 	//服务 suggestionService 传递 List<Favorite> 给第二个回调。
          UiUtils.submitOnUiThread(() -> { //既然是处理 UI，我们需要确保消费代码运行在 UI 线程。
            list.stream()
                .limit(5)
                .forEach(uiList::show); //使用 Java 8 Stream 来限制建议数量为5，然后在 UI 中显示。
            });
        }

        public void onError(Throwable error) { //在每一层，我们都以同样的方式处理错误：在一个 popup 中显示错误信息。
          UiUtils.errorPopup(error);
        }
      });
    } else {
      list.stream() //回到收藏 ID 这一层，如果返回 list，我们需要使用 favoriteService 来获取 Favorite 对象。由于只想要5个，因此使用 stream 。
          .limit(5)
          .forEach(favId -> favoriteService.getDetails(favId, //再一次回调。这次对每个ID，获取 Favorite 对象在 UI 线程中推送到前端显示。
            new Callback<Favorite>() {
              public void onSuccess(Favorite details) {
                UiUtils.submitOnUiThread(() -> uiList.show(details));
              }

              public void onError(Throwable error) {
                UiUtils.errorPopup(error);
              }
            }
          ));
    }
  }

  public void onError(Throwable error) {
    UiUtils.errorPopup(error);
  }
});
```

使用Reactor异步处理的栗子：

```java
userService,getFavorites(userId)
    .flatMap(favoriteService::getDetails) 	//异步转换为Favorite
    .switchIfEmpty(suggestionService.getSuggestions()) 	//如果Favorite为空，则执行switchIfEmpty
    .take(5) 	//获取5个数据
    .publishOn(UiUtils.uiThreadScheduler()) 	//发布到该线程处理
    .subscribe(uiList::show, UiUtils::errorPopup); 	//处理结果，并将结果显示在showUI和popup中。
```

增加超时控制

```java
userService,getFavorites(userId)
    .timeout(Duration.ofMillis(800)) //如果超时(800ms)则报异常
    .onErrorResume(cacheService.cachedFavoritesFor(userId)) //收到错误后交给 cacheService处理
    .flatMap(favoriteService::getDetails) 
    .switchIfEmpty(suggestionService.getSuggestions())
    ....
```

Reactor响应式编程与命令式编程在异步处理上的的优势

- **可编排性（Composability）** 以及 **可读性（Readability）**
- 使用丰富的 **操作符** 来处理形如 **流** 的数据
- 在 **订阅（subscribe）** 之前什么都不会发生
- **背压（backpressure）** 具体来说即 *消费者能够反向告知生产者生产内容的速度的能力*
- **高层次** （同时也是有高价值的）的抽象，从而达到 *并发无关* 的效果

