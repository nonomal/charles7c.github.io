import{_ as t}from"./chunks/ArticleMetadata.f3b87b78.js";import{_ as c,c as r,E as y,B as C,z as n,a as i,R as A,G as B,o as p,A as F,C as d}from"./chunks/framework.23582046.js";import"./chunks/md5.3856627a.js";const D="/assets/202212072131211.41df0e76.png",g="/assets/202212072131521.fd71e7e7.png",m="/assets/202212072132211.8799fd8a.png",E="/assets/202212072132521.5d4949fe.png",f="/assets/202212072135211.137b5f73.png",z=JSON.parse('{"title":"简单聊聊如何让网站开启灰色显示","description":"","frontmatter":{"title":"简单聊聊如何让网站开启灰色显示","author":"查尔斯","date":"2022/12/07 21:37","categories":["杂碎逆袭史"],"tags":["CSS","前端"]},"headers":[],"relativePath":"categories/fragments/2022/12/07/网站开启灰色显示.md","filePath":"categories/fragments/2022/12/07/网站开启灰色显示.md","lastUpdated":1670428158000}'),u={name:"categories/fragments/2022/12/07/网站开启灰色显示.md"},h=n("h1",{id:"简单聊聊如何让网站开启灰色显示",tabindex:"-1"},[i("简单聊聊如何让网站开启灰色显示 "),n("a",{class:"header-anchor",href:"#简单聊聊如何让网站开启灰色显示","aria-label":'Permalink to "简单聊聊如何让网站开启灰色显示"'},"​")],-1),b=A('<p><strong>C：</strong> 在一些特殊的日子里，为了表达哀思和悼念，除禁娱之外，各网站会将首页或者全站在特定时间内以灰色显示。本篇，笔者就来和各位同学简单聊聊，如何让我们的网站以灰色显示。</p><p><img src="'+D+'" alt="202212072131211"></p><h2 id="源码解析-掘金" tabindex="-1">源码解析-掘金 <a class="header-anchor" href="#源码解析-掘金" aria-label="Permalink to &quot;源码解析-掘金&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>作为一个技术行业从业者，对技术要时刻保持好奇心。</p></div><p>笔者虽然是一个后端开发者，但平时在网页或 APP 上遇到一些用心的效果时，也会停下来想想，在方便的情况下也会简单探究一下。既然各网站都开启了灰色显示，想要知道它们怎么实现的，那就随便找几个网站和笔者一起来看看吧。</p><p>进入掘金首页，按下 [Fn] + F12，打开开发者工具，切换到 [Elements] 选项卡，毕竟是全局性的效果，所以我们要找的”目标“ 也很明显，在 <code>&lt;html&gt;</code> 标签上，有一个叫 <code>gray-mode</code> 的类，从字面意思（灰色模式）就可以猜到它的作用。</p><p><img src="'+g+`" alt="202212072131521"></p><p><code>gray-mode</code> 类的样式代码如下：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#8DDB8C;">html</span><span style="color:#6CB6FF;">.gray-mode</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#6CB6FF;">filter</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">grayscale</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">.95</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#6CB6FF;">-webkit-filter</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">grayscale</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">.95</span><span style="color:#ADBAC7;">); </span><span style="color:#768390;">/* webkit */</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">html</span><span style="color:#6F42C1;">.gray-mode</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">filter</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">grayscale</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">.95</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">-webkit-filter</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">grayscale</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">.95</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">/* webkit */</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>很简单的代码 <code>filter: grayscale(.95);</code>，只需要这一行代码即可，第二行代码是为了保障浏览器兼容性而添加的。</p><p>首先简单认识一下 filter 属性。</p><div class="tip custom-block"><p class="custom-block-title">Web开发技术/CSS/filter（滤镜）</p><p>CSS 属性 filter 将模糊或颜色偏移等图形效果应用于元素。滤镜通常用于调整图像、背景和边框的渲染。[1]</p></div><p>然后我们再来认识一下 <code>grayscale()</code> 函数。</p><div class="tip custom-block"><p class="custom-block-title">Web开发技术/CSS/filter/函数：grayscale()</p><p>使用 CSS 滤镜属性时，你需要设定下面某一函数的值。如果该值无效，函数返回 none。除特殊说明外，函数的值如果接受百分比值（如 34%），那么该函数也接受小数值（如 0.34）。</p><p><code>grayscale(amount)</code> 函数将改变输入图像灰度。amount 的值定义了转换的比例。值为 100% 则完全转为灰度图像，值为 0% 图像无变化。值在 0% 到 100% 之间，则是效果的线性乘数。若未设置值，默认是 0。[1]</p></div><p>介绍的已经很直白了，我们再简单来说一下，<code>filter: grayscale(.95);</code> 这行代码的作用就是将网页中所有的元素转换为灰色显示，<code>.95</code> 就是 <code>95%</code> 的灰度，没有完全转为灰色也是为了护眼，增强一些用户体验。</p><h2 id="源码分析-b站" tabindex="-1">源码分析-B站 <a class="header-anchor" href="#源码分析-b站" aria-label="Permalink to &quot;源码分析-B站&quot;">​</a></h2><p>我们再来看一个网站：B站，同样开启了灰色显示。略有不同的是 B 站的整体感观更舒服一些，没有那么刺眼，一些颜色也能分辨出来。</p><p><img src="`+m+'" alt="202212072132211"></p><p>那咱们也别啰嗦。</p><div class="tip custom-block"><p class="custom-block-title">Linus Torvalds</p><p>Talk is cheap. Show me the code.（废话少说。放码过来。）</p></div><p>依然很快就找到了“目标”，在 <code>&lt;html&gt;</code> 标签上，有一个叫 <code>gray</code> 的类。</p><p><img src="'+E+`" alt="202212072132521"></p><p><code>gray</code> 类的样式代码如下：</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#8DDB8C;">html</span><span style="color:#6CB6FF;">.gray</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#6CB6FF;">filter</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">grayscale</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">85</span><span style="color:#F47067;">%</span><span style="color:#ADBAC7;">) </span><span style="color:#6CB6FF;">saturate</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">80</span><span style="color:#F47067;">%</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#6CB6FF;">-webkit-filter</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">grayscale</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">85</span><span style="color:#F47067;">%</span><span style="color:#ADBAC7;">) </span><span style="color:#6CB6FF;">saturate</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">80</span><span style="color:#F47067;">%</span><span style="color:#ADBAC7;">); </span><span style="color:#768390;">/* webkit */</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#6CB6FF;">-moz-filter</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">grayscale</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">85</span><span style="color:#F47067;">%</span><span style="color:#ADBAC7;">) </span><span style="color:#6CB6FF;">saturate</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">80</span><span style="color:#F47067;">%</span><span style="color:#ADBAC7;">); </span><span style="color:#768390;">/* firefox */</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#6CB6FF;">-ms-filter</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">grayscale</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">85</span><span style="color:#F47067;">%</span><span style="color:#ADBAC7;">) </span><span style="color:#6CB6FF;">saturate</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">80</span><span style="color:#F47067;">%</span><span style="color:#ADBAC7;">); </span><span style="color:#768390;">/* ie9 */</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#6CB6FF;">-o-filter</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">grayscale</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">85</span><span style="color:#F47067;">%</span><span style="color:#ADBAC7;">) </span><span style="color:#6CB6FF;">saturate</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">80</span><span style="color:#F47067;">%</span><span style="color:#ADBAC7;">); </span><span style="color:#768390;">/* opera */</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#6CB6FF;">filter</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">url</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">data:image/svg+xml;utf8,&lt;svg</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">xmlns=</span><span style="color:#96D0FF;">&#39;http://www.w3.org/2000/svg&#39;</span><span style="color:#F69D50;">&gt;&lt;filter</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">id=</span><span style="color:#96D0FF;">&#39;grayscale&#39;</span><span style="color:#F69D50;">&gt;&lt;feColorMatrix</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">type=</span><span style="color:#96D0FF;">&#39;matrix&#39;</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">values=</span><span style="color:#96D0FF;">&#39;0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0&#39;</span><span style="color:#F69D50;">/&gt;&lt;/filter&gt;&lt;/svg&gt;#grayscale</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#6CB6FF;">filter</span><span style="color:#ADBAC7;">: progid:DXImageTransform.Microsoft.BasicImage(</span><span style="color:#6CB6FF;">grayscale</span><span style="color:#ADBAC7;">=</span><span style="color:#6CB6FF;">.85</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#6CB6FF;">-webkit-filter</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">grayscale</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">.85</span><span style="color:#ADBAC7;">) </span><span style="color:#6CB6FF;">saturate</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">.8</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#22863A;">html</span><span style="color:#6F42C1;">.gray</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">filter</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">grayscale</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">85</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">) </span><span style="color:#005CC5;">saturate</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">80</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">-webkit-filter</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">grayscale</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">85</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">) </span><span style="color:#005CC5;">saturate</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">80</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">/* webkit */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">-moz-filter</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">grayscale</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">85</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">) </span><span style="color:#005CC5;">saturate</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">80</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">/* firefox */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">-ms-filter</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">grayscale</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">85</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">) </span><span style="color:#005CC5;">saturate</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">80</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">/* ie9 */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">-o-filter</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">grayscale</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">85</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">) </span><span style="color:#005CC5;">saturate</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">80</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">/* opera */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">filter</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">url</span><span style="color:#24292E;">(</span><span style="color:#E36209;">data:image/svg+xml;utf8,&lt;svg</span><span style="color:#24292E;"> </span><span style="color:#E36209;">xmlns=</span><span style="color:#032F62;">&#39;http://www.w3.org/2000/svg&#39;</span><span style="color:#E36209;">&gt;&lt;filter</span><span style="color:#24292E;"> </span><span style="color:#E36209;">id=</span><span style="color:#032F62;">&#39;grayscale&#39;</span><span style="color:#E36209;">&gt;&lt;feColorMatrix</span><span style="color:#24292E;"> </span><span style="color:#E36209;">type=</span><span style="color:#032F62;">&#39;matrix&#39;</span><span style="color:#24292E;"> </span><span style="color:#E36209;">values=</span><span style="color:#032F62;">&#39;0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0.3333 0.3333 0.3333 0 0 0 0 0 1 0&#39;</span><span style="color:#E36209;">/&gt;&lt;/filter&gt;&lt;/svg&gt;#grayscale</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">filter</span><span style="color:#24292E;">: progid:DXImageTransform.Microsoft.BasicImage(</span><span style="color:#005CC5;">grayscale</span><span style="color:#24292E;">=</span><span style="color:#005CC5;">.85</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">-webkit-filter</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">grayscale</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">.85</span><span style="color:#24292E;">) </span><span style="color:#005CC5;">saturate</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">.8</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>很显然，B 站在处理灰色效果方面也是使用的 <code>filter: grayscale()</code> ，相比掘金不同的地方有 3 点：</p><ol><li>灰度值设为了 85%，这让网站的刺眼程度更低了，观感也就</li><li>增加了更多浏览器兼容的代码</li><li>增加了 <code>saturate()</code> 函数来控制渲染</li></ol><p>前两个好理解，我们来看一下增加的第 3 个函数的作用。</p><div class="tip custom-block"><p class="custom-block-title">Web开发技术/CSS/filter/函数：saturate()</p><p><code>saturate(amount)</code> 函数转换图像饱和度。amount 的值定义转换的比例。值为 0% 则是完全不饱和，值为 100% 则图像无变化。其他值是效果的线性乘数。超过 100% 则有更高的饱和度。若未设置值，则默认为 1。[1]</p></div><p>简单来说，这个函数就是调整页面中颜色的丰富程度的。 <code>filter: saturate(80%);</code> 这行代码将饱和度降低到了 <code>80%</code>，页面的色彩降低了。 <code>grayscale()</code> 函数搭配上它，就可以缓解因为灰度转换低而显得色彩偏亮了。</p><h2 id="动手实现" tabindex="-1">动手实现 <a class="header-anchor" href="#动手实现" aria-label="Permalink to &quot;动手实现&quot;">​</a></h2><p>看了两个源码之后，我们也来尝试一下吧，在网站的 <code>&lt;html&gt;</code> 或 <code>&lt;body&gt;</code> 标签上，添加下面这么一段样式。</p><div class="language-css vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">css</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#768390;">/* 灰度模式 */</span></span>
<span class="line"><span style="color:#8DDB8C;">html</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#6CB6FF;">filter</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">grayscale</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">95</span><span style="color:#F47067;">%</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#6CB6FF;">-webkit-filter</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">grayscale</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">95</span><span style="color:#F47067;">%</span><span style="color:#ADBAC7;">); </span><span style="color:#768390;">/* webkit */</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#6CB6FF;">-moz-filter</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">grayscale</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">95</span><span style="color:#F47067;">%</span><span style="color:#ADBAC7;">); </span><span style="color:#768390;">/* firefox */</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#6CB6FF;">-ms-filter</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">grayscale</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">95</span><span style="color:#F47067;">%</span><span style="color:#ADBAC7;">); </span><span style="color:#768390;">/* ie9 */</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#6CB6FF;">-o-filter</span><span style="color:#ADBAC7;">: </span><span style="color:#6CB6FF;">grayscale</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">95</span><span style="color:#F47067;">%</span><span style="color:#ADBAC7;">); </span><span style="color:#768390;">/* opera */</span></span>
<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#6CB6FF;">filter</span><span style="color:#ADBAC7;">:progid:DXImageTransform.Microsoft.BasicImage(</span><span style="color:#6CB6FF;">grayscale</span><span style="color:#ADBAC7;">=</span><span style="color:#6CB6FF;">.95</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">/* 灰度模式 */</span></span>
<span class="line"><span style="color:#22863A;">html</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">filter</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">grayscale</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">95</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">-webkit-filter</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">grayscale</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">95</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">/* webkit */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">-moz-filter</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">grayscale</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">95</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">/* firefox */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">-ms-filter</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">grayscale</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">95</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">/* ie9 */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">-o-filter</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">grayscale</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">95</span><span style="color:#D73A49;">%</span><span style="color:#24292E;">); </span><span style="color:#6A737D;">/* opera */</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">filter</span><span style="color:#24292E;">:progid:DXImageTransform.Microsoft.BasicImage(</span><span style="color:#005CC5;">grayscale</span><span style="color:#24292E;">=</span><span style="color:#005CC5;">.95</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>实际效果如下：</p><p><img src="`+f+'" alt="202212072135211"></p><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><ol><li>Web开发技术/CSS/filter：<a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter" target="_blank" rel="noreferrer">https://developer.mozilla.org/zh-CN/docs/Web/CSS/filter</a></li></ol>',36);function _(s,k,v,w,S,x){const o=t,e=B("ClientOnly");return p(),r("div",null,[h,y(e,null,{default:C(()=>{var a,l;return[(((a=s.$frontmatter)==null?void 0:a.aside)??!0)&&(((l=s.$frontmatter)==null?void 0:l.showArticleMetadata)??!0)?(p(),F(o,{key:0,article:s.$frontmatter},null,8,["article"])):d("",!0)]}),_:1}),b])}const N=c(u,[["render",_]]);export{z as __pageData,N as default};
