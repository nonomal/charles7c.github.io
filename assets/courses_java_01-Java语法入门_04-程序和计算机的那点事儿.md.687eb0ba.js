import{_ as l}from"./chunks/ArticleMetadata.f3b87b78.js";import{_ as i,c,E as p,B as g,z as e,a as d,R as _,G as m,o,A as Q,C as h}from"./chunks/framework.23582046.js";import"./chunks/md5.3856627a.js";const u="/assets/202010052011277.b7352bfa.jpeg",b="/assets/202010052011666.f7735b17.png",f="/assets/202010052012169.b5d632f7.jpeg",q="/assets/202010052013521.c178036c.png",v="/assets/202010052013602.98cbc7e6.png",x="/assets/202010052013767.63896c2a.png",P="/assets/202010052015666.0961ecfc.png",k="/assets/202010052016288.0840e84b.png",C="/assets/202010052017669.20fed213.png",y="/assets/202010052016288.0840e84b.png",J="/assets/202010052018229.23ddc154.png",A="/assets/202010052019576.bdf8faee.png",N="/assets/202010052019666.58c30ccc.png",T="/assets/202010052020276.ecb9b8af.jpeg",D=JSON.parse('{"title":"程序和计算机的那点事儿","description":"","frontmatter":{"title":"程序和计算机的那点事儿","author":"查尔斯","date":"2020/10/05 23:18","categories":["Java基础快速入门"],"tags":["Java","Java基础"]},"headers":[],"relativePath":"courses/java/01-Java语法入门/04-程序和计算机的那点事儿.md","filePath":"courses/java/01-Java语法入门/04-程序和计算机的那点事儿.md","lastUpdated":1663136815000}'),U={name:"courses/java/01-Java语法入门/04-程序和计算机的那点事儿.md"},V=e("h1",{id:"程序和计算机的那点事儿",tabindex:"-1"},[d("程序和计算机的那点事儿 "),e("a",{class:"header-anchor",href:"#程序和计算机的那点事儿","aria-label":'Permalink to "程序和计算机的那点事儿"'},"​")],-1),$=_('<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p><strong>C：</strong> 在上一篇，我们已经能够很熟练的使用 Eclipse 开发一个入门的 Java 程序，给计算机下达一些简单的指令。虽然它很简陋，但麻雀虽小，五脏俱全，你平时使用的程序们该有的，它也都有。</p><p>按理说呢，我们接下来就要开始学习更多的 Java 指令（语法）了，但笔者担心你的基础还不够，所以还是想给你再加点“料”。</p><p>在我们讲解下一篇 《变量和常量》前，我们先对计算机中的一些基本概念，以及程序在计算机中安装、执行的原理来分析一下。</p><h2 id="计算机三大件" tabindex="-1">计算机三大件 <a class="header-anchor" href="#计算机三大件" aria-label="Permalink to &quot;计算机三大件&quot;">​</a></h2><p>我们现在使用的计算机，它是由很多的硬件组成的。但是一个程序要安装及运行，我们主要关注 <strong>三个</strong> 核心的硬件即可，它们分别是：</p><table><thead><tr><th style="text-align:center;">CPU</th><th style="text-align:center;">RAM</th><th style="text-align:center;">ROM</th></tr></thead><tbody><tr><td style="text-align:center;">中央处理器，负责 <strong>处理数据</strong>／<strong>计算</strong>，是一块超大规模的集成电路。</td><td style="text-align:center;">内存，<strong>临时</strong> 存储数据（断电之后，数据会消失），速度快，空间小。 （单位价格高）</td><td style="text-align:center;">硬盘，<strong>永久</strong> 存储数据，速度慢，空间大。（单位价格低）</td></tr><tr><td style="text-align:center;"><img src="'+u+'" alt="202010052011277"></td><td style="text-align:center;"><img src="'+b+'" alt="202010052011666"></td><td style="text-align:center;"><img src="'+f+'" alt="202010052012169"></td></tr></tbody></table><p>我们可以拿车道的例子来理解它们三者的作用：</p><ul><li>CPU核心数：车道数量</li><li>内存：车道宽度</li><li>磁盘IO：车道限速</li></ul><p><img src="'+q+'" alt="202010052013521"></p><h2 id="案例分析-qq程序" tabindex="-1">案例分析：QQ程序 <a class="header-anchor" href="#案例分析-qq程序" aria-label="Permalink to &quot;案例分析：QQ程序&quot;">​</a></h2><p>结合着 QQ 程序，我们来捋一下一个程序从安装到运行的原理。</p><h3 id="程序安装的原理" tabindex="-1">程序安装的原理 <a class="header-anchor" href="#程序安装的原理" aria-label="Permalink to &quot;程序安装的原理&quot;">​</a></h3><p>像我们以后，在开发好了程序之后，如果需要给客户来使用，就要准备好相应的程序包，否则到了客户电脑上，缺少程序所需的环境就无法运行程序了，例如：Java 程序至少需要配套一份 JRE 。</p><p>我们在平时为了使用 QQ 程序，首先要做的就是下载一个对应的安装程序，然后通过安装程序来引导我们或自动将 QQ 的一系列程序文件解压并存储到 <strong>硬盘</strong> 的指定位置。</p><p><img src="'+v+'" alt="202010052013602"></p><p><img src="'+x+'" alt="202010052013767"></p><p><img src="'+P+'" alt="202010052015666"></p><p><img src="'+k+'" alt="202010052016288"></p><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>安装程序/引导安装程序，它们也是电脑程序，但它们诞生的目的是帮助普通用户快速实现程序的环境初始化、程序文件存储等过程的。</p></div><h3 id="程序执行的原理" tabindex="-1">程序执行的原理 <a class="header-anchor" href="#程序执行的原理" aria-label="Permalink to &quot;程序执行的原理&quot;">​</a></h3><p>安装好之后，而当要运行一个程序时，首先操作系统会让 <strong>CPU</strong> 将存储在 <strong>硬盘</strong> 中的程序文件们读取到 <strong>内存</strong> 中来，然后由 <strong>CPU</strong> 执行 <strong>内存</strong> 中的程序文件/代码来处理数据。</p><p><img src="'+C+'" alt="202010052017669"></p><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>每个程序在运行过程中都会在内存中&quot;占据&quot;一块属于自己的空间，而这块空间的大小及内存的总大小也是决定程序是否可以自如的&quot;施展手脚&quot;。</p><p>所以一般我们想要同时运行更多程序而不卡时，都优先考虑到买大内存的计算机。</p></div><p>当你在双击桌面的 QQ 快捷方式时，快捷方式会链接到对应位置的 QQ 程序，启动开始了。</p><p><img src="'+y+'" alt="202010052017777"></p><p>然后 <strong>CPU</strong> 就会将存储在 <strong>硬盘</strong> 上的 QQ 程序文件加载到 <strong>内存</strong> 中，QQ 程序会在 <strong>内存</strong> 中占据一块自己的内存区域，然后由 <strong>CPU</strong> 执行 <strong>内存</strong> 中的 QQ 程序文件/代码，于是就出现了下方的界面。</p><p><img src="'+J+'" alt="202010052018229"></p><h3 id="程序内存中的数据管理" tabindex="-1">程序内存中的数据管理 <a class="header-anchor" href="#程序内存中的数据管理" aria-label="Permalink to &quot;程序内存中的数据管理&quot;">​</a></h3><p>当我们在 QQ 程序中点击过 “记住密码”，并且登录过一次后，我们再次打开 QQ 程序登录界面，会看到 QQ 号及密码直接回显在了输入框中。</p><p>此时其实是在加载 QQ 程序文件到内存后，QQ 程序代码将保存在硬盘上的帐号数据恢复到了内存中，然后将它们再插入到输入框内。</p><p><img src="'+A+'" alt="202010052019576"></p><p>那 QQ 这个程序是怎么保存用户的 <strong>QQ 号码</strong> 和 <strong>QQ 密码</strong> 的呢？</p><ol><li>在内存中为 <strong>QQ 号码</strong> 和 <strong>QQ 密码</strong> 各自分配一块空间 <ul><li>在 QQ 程序结束之前，这两块空间是由 QQ 程序负责管理的，其他任何程序都不允许使用</li><li>在 QQ 自己使用完成之前，这两块空间始终都只负责保存 <strong>QQ 号码</strong> 和 <strong>QQ 密码</strong></li></ul></li><li>另外为了能够方便找到该内存空间，分别使用一个 <strong>别名</strong> 标记 <strong>QQ 号码</strong> 和 <strong>QQ 密码</strong> 在内存中的位置</li></ol><p><img src="'+N+'" alt="202010052019666"></p><h2 id="后记" tabindex="-1">后记 <a class="header-anchor" href="#后记" aria-label="Permalink to &quot;后记&quot;">​</a></h2><p>实际上，在程序内部，为 <strong>QQ 号码</strong> 和 <strong>QQ 密码</strong> 在内存中分配的空间就叫做 <strong>变量</strong>，这也是我们下一篇要介绍的主要内容！跟上别掉队！</p><p><img src="'+T+'" alt="202010052020276"></p><div class="info custom-block"><p class="custom-block-title">笔者说</p><p>对于技术的学习，笔者一贯遵循的步骤是：先用最最简单的 demo 让它跑起来，然后学学它的最最常用 API 和 配置让自己能用起来，最后熟练使用的基础上，在空闲时尝试阅读它的源码让自己能够洞彻它的运行机制，部分问题出现的原因，同时借鉴这些技术实现来提升自己的代码高度。</p><p>所以在笔者的文章中，前期基本都是小白文，仅仅穿插很少量的源码研究。当然等小白文更新多了，你们还依然喜欢，后期会不定时专门对部分技术的源码进行解析。</p></div>',39);function j(t,B,E,O,R,S){const r=l,n=m("ClientOnly");return o(),c("div",null,[V,p(n,null,{default:g(()=>{var s,a;return[(((s=t.$frontmatter)==null?void 0:s.aside)??!0)&&(((a=t.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(o(),Q(r,{key:0,article:t.$frontmatter},null,8,["article"])):h("",!0)]}),_:1}),$])}const z=i(U,[["render",j]]);export{D as __pageData,z as default};
