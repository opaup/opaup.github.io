"use strict";(self.webpackChunkdemo_blog=self.webpackChunkdemo_blog||[]).push([[1773],{199:(n,a,s)=>{s.r(a),s.d(a,{data:()=>t});const t={key:"v-9c1c77e2",path:"/feature/recommend.html",title:"文章推荐",lang:"zh-CN",frontmatter:{},excerpt:"",headers:[{level:2,title:"配置",slug:"配置",children:[]},{level:2,title:"组件代码",slug:"组件代码",children:[{level:3,title:"props",slug:"props",children:[]}]},{level:2,title:"搜索功能配置",slug:"搜索功能配置",children:[]}],git:{updatedTime:168077143e4,contributors:[{name:"opaup",email:"525915186@qq.com",commits:1}]}}},7706:(n,a,s)=>{s.r(a),s.d(a,{default:()=>k});var t=s(6252);const p=(0,t._)("h1",{id:"文章推荐",tabindex:"-1"},[(0,t._)("a",{class:"header-anchor",href:"#文章推荐","aria-hidden":"true"},"#"),(0,t.Uk)(" 文章推荐")],-1),e=(0,t._)("p",null,[(0,t.Uk)("此组件并不是全局组件，组件位置"),(0,t._)("code",null,"docs/.vuepress/theme/lib/client/components/RecommendPage.vue")],-1),o=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210831161503804",originSrc:"http://ooszy.cco.vin/img/blog-note/image-20210831161503804.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),l=(0,t.uE)('<h2 id="配置" tabindex="-1"><a class="header-anchor" href="#配置" aria-hidden="true">#</a> 配置</h2><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code>module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span>\n\n    <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token literal-property property">recommendPageLength</span><span class="token operator">:</span> <span class="token number">30</span> <span class="token comment">//最多推荐多少篇文章</span>\n        <span class="token literal-property property">randomColor</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token string">&#39;#ffcad4&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#d8e2dc&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#8d99ae&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#b8f2e6&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;#84c7d0&#39;</span><span class="token punctuation">]</span> <span class="token comment">//每个推荐背景颜色，随机</span>\n    <span class="token literal-property property">recommendNoTitle</span><span class="token operator">:</span> <span class="token string">&#39;`╮(￣▽￣)╭`&#39;</span> <span class="token comment">//文章标题为空时，就会使用这个进行替换</span>\n\t<span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>推荐的文章是随机的，并不能指定</p><h2 id="组件代码" tabindex="-1"><a class="header-anchor" href="#组件代码" aria-hidden="true">#</a> 组件代码</h2><div class="language-vue ext-vue line-numbers-mode"><pre class="language-vue"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BCenter</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#page-center1</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h2</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>recommend-top-title<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>推荐阅读<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h2</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span> <span class="token attr-name">#page-center3</span><span class="token punctuation">&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>recommend<span class="token punctuation">&quot;</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>recommend<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>recommend-item</span>\n            <span class="token attr-name">:item</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>item<span class="token punctuation">&quot;</span></span>\n            <span class="token attr-name">:key</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span>\n            <span class="token attr-name">:theme-property</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>themeProperty<span class="token punctuation">&quot;</span></span>\n            <span class="token attr-name">:index</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>index<span class="token punctuation">&quot;</span></span>\n            <span class="token attr-name">v-for</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>(item,index) in allPages<span class="token punctuation">&quot;</span></span><span class="token punctuation">/&gt;</span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BCenter</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><p>其中<code>&lt;BCenter&gt;</code>组件是一个全局组件，其就是一个居中效果的，展示效果和下图差不多</p>',6),c=(0,t._)("p",null,[(0,t._)("img",{src:"https://ooszy.cco.vin/img/blog-public/ljz.gif",alt:"image-20210831161059607",originSrc:"http://ooszy.cco.vin/img/blog-note/image-20210831161059607.png?x-oss-process=style/pictureProcess1",data:"aurora"})],-1),u=(0,t.uE)('<p>提供了很多插槽</p><h3 id="props" tabindex="-1"><a class="header-anchor" href="#props" aria-hidden="true">#</a> props</h3><div class="language-javascript ext-js line-numbers-mode"><pre class="language-javascript"><code><span class="token literal-property property">props</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n    <span class="token literal-property property">themeProperty</span><span class="token operator">:</span> <span class="token keyword">null</span>\n<span class="token punctuation">}</span>\n</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="搜索功能配置" tabindex="-1"><a class="header-anchor" href="#搜索功能配置" aria-hidden="true">#</a> 搜索功能配置</h2>',4),r=(0,t.Uk)("搜索功能配置"),i={},k=(0,s(3744).Z)(i,[["render",function(n,a){const s=(0,t.up)("RouterLink");return(0,t.wg)(),(0,t.iD)(t.HY,null,[p,e,o,l,c,u,(0,t._)("p",null,[(0,t.Wm)(s,{to:"/feature/search.html"},{default:(0,t.w5)((()=>[r])),_:1})])],64)}]])}}]);