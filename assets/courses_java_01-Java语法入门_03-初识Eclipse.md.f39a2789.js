import{_ as a}from"./chunks/ArticleMetadata.a8171d1d.js";import{_ as i,c as l,C as r,z as n,x as o,a as g,Q as h,D as _,o as s,y as m,A as E}from"./app.012a8d21.js";import"./chunks/theme.0af94660.js";const u="/assets/202010042056777.870ae081.jpg",v="/assets/202010042057777.8cdcdce5.png",b="/assets/202010042058590.a86132fa.png",f="/assets/202010042059387.b62581c0.png",J="/assets/202010042058590.a86132fa.png",x="/assets/202010042059777.24b6cb8c.png",k="/assets/202010042059888.784a4f2b.png",I="/assets/202010042059936.bb5997f8.png",D="/assets/202010042103135.c3252abc.png",y="/assets/202010042103962.c332b8f5.png",w="/assets/202010042104888.bda5f68e.png",A="/assets/202010042105575.ef08866f.png",q="/assets/202010042105769.76a14ec4.png",P="/assets/202010042106033.49807d0b.png",C="/assets/202010042106083.a7bce915.png",V="/assets/202010042106188.901e459d.png",j="/assets/202010042106777.c7602caa.png",B="/assets/202010042107605.f761a562.png",S="/assets/202010042107888.edc99a8a.png",M="/assets/202010042108666.2fb9ec42.png",N="/assets/202010042108777.a83c6cd1.png",O="/assets/202010042108888.e9a4eae5.png",T="/assets/202010042108999.bf4c097c.png",K="/assets/202010042109666.d5e61d7b.png",$="/assets/202010042109777.9f76b528.png",F="/assets/202010042109888.a6be9068.png",H="/assets/202010042109999.0813ab11.png",z="/assets/202010042110867.e7be5dda.png",U="/assets/202010042110888.a68f0d03.png",W="/assets/202010042111057.fd510d5e.png",R="/assets/202010042111555.2423292d.png",G="/assets/202010042111666.8863aa5a.png",L="/assets/202010042111777.2d1c25a0.png",Q="/assets/202010042111888.a7682cd9.png",Y="/assets/202010042111999.1b57d000.png",Z="/assets/202010042112666.488104ee.png",X="/assets/202010042112777.47c6365d.png",ee="/assets/202010042112888.9c48d4f1.png",ce="/assets/202010042112999.0dcc910b.png",te="/assets/202010042115555.fe057e5b.png",oe="/assets/202010042115222.324113f9.png",se="/assets/202010042115666.519ae673.png",de="/assets/202010042115777.a7cd38e8.png",pe="/assets/202010042115888.2bf6f7d1.png",ae="/assets/202010042115979.b394d702.jpeg",fe=JSON.parse('{"title":"初识Eclipse","description":"","frontmatter":{"title":"初识Eclipse","author":"查尔斯","date":"2020/10/04 22:09","categories":["Java基础快速入门"],"tags":["Java","Java基础","Eclipse","IDE"]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"IDE(集成开发环境)","slug":"ide-集成开发环境","link":"#ide-集成开发环境","children":[{"level":3,"title":"IDE概述","slug":"ide概述","link":"#ide概述","children":[]},{"level":3,"title":"主流IDE介绍","slug":"主流ide介绍","link":"#主流ide介绍","children":[]}]},{"level":2,"title":"没落的王族IDE","slug":"没落的王族ide","link":"#没落的王族ide","children":[{"level":3,"title":"Eclipse概述","slug":"eclipse概述","link":"#eclipse概述","children":[]},{"level":3,"title":"Eclipse下载","slug":"eclipse下载","link":"#eclipse下载","children":[]},{"level":3,"title":"Eclipse安装","slug":"eclipse安装","link":"#eclipse安装","children":[]}]},{"level":2,"title":"Eclipse初始配置","slug":"eclipse初始配置","link":"#eclipse初始配置","children":[{"level":3,"title":"视图窗口配置","slug":"视图窗口配置","link":"#视图窗口配置","children":[]},{"level":3,"title":"字符编码配置","slug":"字符编码配置","link":"#字符编码配置","children":[]},{"level":3,"title":"字体配置","slug":"字体配置","link":"#字体配置","children":[]}]},{"level":2,"title":"用Eclipse开发Java程序","slug":"用eclipse开发java程序","link":"#用eclipse开发java程序","children":[]},{"level":2,"title":"后记","slug":"后记","link":"#后记","children":[]}],"relativePath":"courses/java/01-Java语法入门/03-初识Eclipse.md","lastUpdated":1661086911000}'),ie={name:"courses/java/01-Java语法入门/03-初识Eclipse.md"},le=o("h1",{id:"初识eclipse",tabindex:"-1"},[g("初识Eclipse "),o("a",{class:"header-anchor",href:"#初识eclipse","aria-hidden":"true"},"#")],-1),re=h('<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-hidden="true">#</a></h2><p><strong>C：</strong> 古语有云：&quot;工欲善其事必先利其器&quot;。我们在上一篇开始编写第一个 Java 程序，体验过了一些单词大小写引发的&quot;磕磕绊绊&quot;，还体验了来自中文输入法的深深&quot;恶意&quot;。</p><p>那么我们对它们就没治了吗？只能到最后运行或单独调试才能知道错误吗？实际上对于这种语法型错误，我们可以使用专业的工具，在代码编写过程中随时解决掉，这种专业工具被称为：<code>IDE</code>。</p><p>今天笔者将带着你领略一款成熟且有魅力的 Java 系 IDE。</p><p><img src="'+u+'" alt="202010042056777"></p><h2 id="ide-集成开发环境" tabindex="-1">IDE(集成开发环境) <a class="header-anchor" href="#ide-集成开发环境" aria-hidden="true">#</a></h2><h3 id="ide概述" tabindex="-1">IDE概述 <a class="header-anchor" href="#ide概述" aria-hidden="true">#</a></h3><p>在前言中，笔者已经简单的说了一下 IDE 的能力，它们除了可以有效解决你的上述问题，还能让你编译和运行程序更便捷（提升开发效率），尤其使用上快捷键之后，可能鼠标都将&quot;失业&quot;！但是前期，笔者建议你，不要着急使用 <code>IDE</code> 的快捷键，先练练打字速度和完整语法吧。</p><p><img src="'+v+'" alt="202010042057777"></p><h3 id="主流ide介绍" tabindex="-1">主流IDE介绍 <a class="header-anchor" href="#主流ide介绍" aria-hidden="true">#</a></h3><p>我们现在是学习 Java 语言的，所以自然要选择适合 Java 开发的 <code>IDE</code>。目前业内主流的 <code>Java IDE</code> 有这么几个。</p><ol><li><p><a href="https://www.eclipse.org/downloads/" target="_blank" rel="noreferrer">Eclipse</a></p><p>开源免费的 <code>Java IDE</code>，由 <code>Eclipse</code> 基金会负责维护，为各种编程语言都开发了对应的版本或插件。在笔者看来，它的软件体积和使用方式比较适合初期和入门的编程人员。</p><p><img src="'+b+'" alt="202010042058590"></p></li><li><p><a href="https://www.jetbrains.com/idea/" target="_blank" rel="noreferrer">IntelliJ IDEA</a></p><p>收费但很多&quot;白嫖学习党&quot;在用的 <code>Java IDE</code>，它所属的公司 <code>JetBrains</code> 也开发了适配各种编程语言的 IDE 版本。例如：适合前端开发的 <code>WebStorm</code>，适合 <code>PHP</code> 开发的 <code>PhpStorm</code>，适合<code>Python</code> 开发的 <code>PyCharm</code> 等，同样都是&quot;价格不菲&quot;。所以在正版收费和破解学习的斗争上，国内开发者们还需要走很远很远。</p></li><li><p><a href="http://www.myeclipsecn.com/" target="_blank" rel="noreferrer">MyEclipse</a></p><p>收费但很多&quot;传统公司&quot;还在用的 <code>Java IDE</code> ，这个软件看名字就知道和 <code>Eclipse</code> 脱不了关系，的确是这样的。它出身于 <code>Eclipse社区</code>，你可以理解为它是 Genuitec 公司为 <code>Java EE</code> 开发者们开发的 VIP 版本，对 <code>Java EE</code> 支持比较友好。其实学会了 <code>Eclipse</code> 之后，<code>MyEclipse</code> 基本就差不多了。</p><p><img src="'+f+'" alt="202010042059387"></p></li><li><p><a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">VSCode(Visual Studio Code)</a></p><p>免费，微软大厂出品，本质上是一个编辑器，不算是 <code>IDE</code>。但是，国外用的挺多，需要自己安装插件进行配置才能支持更多的功能，对于新手来说还是比较麻烦的。</p></li></ol><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>关于 <code>IDE</code> 具体哪个好，笔者最后委婉一下：所处学习阶段，&quot;经费&quot;，个人习惯、公司团队等决定了使用哪一个，笔者个人只是从市场行情来带大家选择性学习，没有引起&quot;IDE圣战&quot;的意思。</p></div><h2 id="没落的王族ide" tabindex="-1">没落的王族IDE <a class="header-anchor" href="#没落的王族ide" aria-hidden="true">#</a></h2><p>在程序开发过程中，得心应手的 <code>IDE</code> 永远令人着迷。在众多 <code>Java IDE</code> 中，如果单纯从初期学习建议和情怀角度评论的话，笔者更喜欢 <code>Eclipse</code> 。<strong>免费</strong> ，扩展性良好，初期使用体验不错，比较简单，这些都是笔者推荐给初期开发者的理由。</p><p>虽然近两年在中高级开发中有所没落，但是不妨碍我们在初期学习一下。</p><h3 id="eclipse概述" tabindex="-1">Eclipse概述 <a class="header-anchor" href="#eclipse概述" aria-hidden="true">#</a></h3><p>好的，我们再来回顾一下 Eclipse ，刚才惊鸿一瞥可能没留下太多印象。<code>Eclipse</code> 是一个开源免费的 <code>Java IDE</code>，由 <code>Eclipse</code> 基金会负责维护，为各种编程语言都开发了对应的版本或插件。在笔者看来，它的软件体积和使用方式比较适合初期和入门的编程人员。</p><p><img src="'+J+'" alt="202010042059697"></p><p>在 2020 年年初的时候，Jrebel 发布了<a href="https://www.jrebel.com/blog/2020-java-technology-report" target="_blank" rel="noreferrer"> 《2020年 Java 技术报告》</a>，从来自全球 Java 开发专业人员的近 400 份回复中对 Java 技术生态进行了统计分析。其中在 IDE 的使用分析报告部分，<code>24%</code> 的人使用 Eclipse，仅次于 <code>IntelliJ IDEA</code>。</p><p><img src="'+x+'" alt="202010042059777"></p><p>在 <code>PYPL</code> 的 <code>TOP IDE</code> 热度排行榜上，<code>Eclipse</code> 则常年霸占第二。（其实也和 <code>Eclipse</code> 适配了很多编程语言版本，名字都叫 <code>Eclipse</code> 有关）。</p><p><img src="'+k+'" alt="202010042059888"></p><p>这些最新的数据看起来也还可以，实际上在更早前，数据还要更加可观。只不过在2017年左右开始，<code>JetBrains</code> 家的产品在国内开始风靡。</p><p>例如：随着 <code>Spring Boot</code> 框架等现代开发技术的兴起，<code>JetBrains</code> 适配 Java 开发的 <code>IntelliJ IDEA</code> 产品以更加方便快捷的优势，快速抢占了 <code>Eclipse</code> 的市场，<code>Eclipse</code> 的使用者们纷纷&quot;投敌&quot;（但是 <code>Eclipse</code> 在现代开发方式中表现不争气，能咋办？很多程序员都是从 <code>Eclipse</code> 跳到<code>IDEA</code>，然后回不去了）。下面是近期 <code>IntelliJ IDEA</code> 与 <code>Eclipse</code> 的话题讨论，管中窥豹，可见一斑。</p><p><img src="'+I+'" alt="202010042059936"></p><p>好了，简单说这些，就是让你了解一下现状，见见&quot;世面&quot;，不至于懵头懵脑的。</p><p>本篇毕竟是 <code>Eclipse</code> 的主场，笔者也不再过多给你介绍其他 <code>IDE</code> 产品。想知道更多的，关于 <code>Eclipse</code> 在不同语言内的生态地位对比，自己度娘即可。</p><h3 id="eclipse下载" tabindex="-1">Eclipse下载 <a class="header-anchor" href="#eclipse下载" aria-hidden="true">#</a></h3><p>接下来我们准备下载 <code>Eclipse</code>，<code>Eclipse</code> 官网有两种下载方式，一种是 <code>Installer</code>（exe 安装包，引导型安装），另一种是 <code>Package</code> （zip 包，解压就可以使用，类似于绿色软件）。</p><p>笔者个人建议以 <code>Package</code> 形式下载，点击下载<a href="https://www.eclipse.org/downloads/eclipse-packages/" target="_blank" rel="noreferrer">Eclipse Zip版</a>。</p><p>下载前一定要牢记好三个注意：</p><ol><li><p>注意要下载的 <code>Eclipse</code> 与安装的 <code>JDK</code> 版本是否契合</p><p>可查看 <a href="https://wiki.eclipse.org/Eclipse/Installation" target="_blank" rel="noreferrer">Eclipse各版本JDK要求</a>。</p><table><thead><tr><th style="text-align:center;">Eclipse版本</th><th style="text-align:center;">首发时间</th><th style="text-align:center;">JDK版本</th></tr></thead><tbody><tr><td style="text-align:center;">Eclipse 4.5 (Mars火星)</td><td style="text-align:center;">2015年6月24日</td><td style="text-align:center;">1.7</td></tr><tr><td style="text-align:center;">Eclipse 4.6 (Neon霓虹灯)</td><td style="text-align:center;">2016年6月22日</td><td style="text-align:center;">1.8</td></tr><tr><td style="text-align:center;">Eclipse 4.7 (Oxygen氧气)</td><td style="text-align:center;">2017年6月28日</td><td style="text-align:center;">1.8及以上，1.9建议选择<strong>4.7.1a</strong> 及以上</td></tr><tr><td style="text-align:center;">Eclipse 4.8 (Photon光子)</td><td style="text-align:center;">2018年6月27日</td><td style="text-align:center;">1.8及以上</td></tr><tr><td style="text-align:center;">Eclipse 4.9 (2018-09)</td><td style="text-align:center;">2018年9月19日</td><td style="text-align:center;">1.8及以上</td></tr><tr><td style="text-align:center;">..........</td><td style="text-align:center;">..........</td><td style="text-align:center;">..........</td></tr><tr><td style="text-align:center;"><strong>Eclipse 4.15 (2020-03)</strong></td><td style="text-align:center;"><strong>2020年3月18日</strong></td><td style="text-align:center;"><strong>1.8及以上，不再支持32位JVM</strong></td></tr></tbody></table></li><li><p>注意要下载的 <code>Eclipse</code> 与安装的 <code>JDK</code> 位数是否契合（要么都是32位，要么都是64位）</p></li><li><p>注意要下载的 <code>Eclipse</code> 与你的电脑系统和位数是否契合</p></li></ol><p>我们现在用的 <code>JDK 8</code>，下载当前的最新版 <code>Eclipse</code>（2020-03版本）就可以了。</p><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p>时间在更替，笔者指的最新版未来不一定是现在这个，但是笔者仅在变动比较大时，会再进行内容更新，所以选择你打开时的最新版即可。</p></div><p><img src="'+D+'" alt="202010042103135"></p><p>在下载确认页面，我们可以点击 <code>Select Another Mirror</code> 选择其他的镜像源，可以选择国内的镜像源，不然下载太慢了。</p><p><img src="'+y+'" alt="202010042103962"></p><p>点击后进入 <code>Eclipse</code> 捐献页面，国外盛行捐赠文化，用来支持这些非盈利组织。不打算捐赠就在页面等一会儿，这个页面按理应该会自动开始下载或弹出下载提示，如果没有开始，你直接点击下图的 <code>click here</code> 也可以开始下载。</p><p><img src="'+w+'" alt="202010042104888"></p><p>等待一会儿，一个 <code>Eclipse</code> 的 <code>zip</code> 安装包就下载好了。</p><p><img src="'+A+'" alt="202010042105575"></p><h3 id="eclipse安装" tabindex="-1">Eclipse安装 <a class="header-anchor" href="#eclipse安装" aria-hidden="true">#</a></h3><p>笔者刚才的下载方式，下载的就是 zip 格式的压缩包。它就像你平时下载的一些破解版绿色软件一样，不需要双击 <code>.exe</code> 安装程序进行引导安装，只需要解压就可以使用。</p><p>右键点击压缩包，寻找个位置解压，笔者还是希望你将其放到你统一的开发软件安装目录(例如：笔者之前建议的 <code>develop</code> 文件夹)。</p><p><img src="'+q+'" alt="202010042105769"></p><p>去掉勾选，否则提取的内容额外带一个压缩包同名文件夹。</p><p><img src="'+P+'" alt="202010042106033"></p><p>解压后，找到解压的位置。其中 <code>.exe</code> 结尾的就是启动程序。为了方便以后快速打开，可以右键在弹出的菜单中将其发送到桌面快捷方式。</p><p><img src="'+C+'" alt="202010042106083"></p><p>然后我们双击这个 <code>.exe </code>程序，或者双击快捷方式就可以打开 <code>Eclipse</code> 了。</p><p><img src="'+V+'" alt="202010042106188"></p><p>只要你上面三条下载注意都核查过了，并且 <code>JDK</code> 的 <code>JAVA_HOME</code> 配置按照笔者要求做了，理论上不会出现别的毛病。没配置好 <code>JAVA_HOME</code> 时，下方就是结果。</p><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>如果你是 <code>win 10</code> 还可能会出现一些兼容性问题：我们环境变量明明配置好了，但是还是提示下图，这时候需要你再次去看一下 <code>JAVA_HOME</code>，甚至不用动，去看环境变量然后确定关闭即可，这个问题曾经在部分同学那儿多次出现。</p></div><p><img src="'+j+'" alt="202010042106777"></p><p>打开之后，第一个弹出的窗口会要求你选择或输入一个文件夹地址作为工作空间，文件夹不存在时会自动创建。<code>Eclipse</code> 会使用此工作空间存储你的代码、项目和一些配置。</p><p>注意：如果切换工作空间，那么你的配置等都需要重新设置，不同的工作空间是相互独立的。</p><p><img src="'+B+'" alt="202010042107605"></p><p>进入之后，则来到了欢迎界面，点击关闭 <code>Welcome选项卡</code> 进入程序主界面。</p><p><img src="'+S+'" alt="202010042107888"></p><h2 id="eclipse初始配置" tabindex="-1">Eclipse初始配置 <a class="header-anchor" href="#eclipse初始配置" aria-hidden="true">#</a></h2><p>好工具想使用好，也得调一调。</p><h3 id="视图窗口配置" tabindex="-1">视图窗口配置 <a class="header-anchor" href="#视图窗口配置" aria-hidden="true">#</a></h3><p>进入了主界面，自然意味着我们安装成功了。本身我们下载的就是适配 <code>Java EE</code> 开发的 <code>Eclipse</code>，所以打开之后，<code>Eclipse</code> 默认就处于 <code>Java EE</code> 视图下。但是笔者喜欢在 Java 视图操作，所以我们需要切换一下视图。不同的视图模式，一些窗口和菜单显示也不太一样，建议初期先用Java 视图模式。</p><p><img src="'+M+'" alt="202010042108666"></p><p>点击 <code>Open Perspective</code> 按钮，在弹出的对话框中，选中 Java，然后点击 <code>Open</code>，则切换到了Java 视图模式。</p><p><img src="'+N+'" alt="202010042108777"></p><p><img src="'+O+'" alt="202010042108888"></p><p>可以在以后学习使用中，逐渐关闭一些自己用不上的选项卡窗口，也可以随意调整每个选项卡窗口的位置。如果弄乱了，不用怕，直接在右上角视图名上右击，选择 <code>Reset(重置)</code> 即可回到视图窗口初始的状态。</p><p><img src="'+T+'" alt="202010042108999"></p><p>另外还可以在 <code>Window</code> 菜单的 <code>Show View</code> 选项中去添加一些自己需要的选项卡窗口。</p><p>例如：我们之后常用的 <code>Console</code> 控制台。</p><p><img src="'+K+'" alt="202010042109666"></p><p>最后初步调整后的窗口效果如下，你们后面使用久了，然后按自己习惯调整就好了。</p><p><img src="'+$+'" alt="202010042109777"></p><h3 id="字符编码配置" tabindex="-1">字符编码配置 <a class="header-anchor" href="#字符编码配置" aria-hidden="true">#</a></h3><p><code>Eclipse</code> 中默认使用 <code>GBK</code> 作为字符编码，但是为了解决我们之后开发的编码问题，我们要求统一字符编码的配置，将默认的字符编码更改为 <code>UTF-8</code>。因为这种字符编码具有更好的适用性，对于汉语和外语支持都比较好。</p><p>点击 <code>Window</code> &gt; <code>Preferences(首选项)</code>，Eclipse 的所有设置基本都在这里。</p><p><img src="'+F+'" alt="202010042109888"></p><p>在搜索框输入 <code>workspace</code>，然后选择图示的选项，在右侧的窗口中设置文本文件编码为 <code>Other</code> &gt; <code>UTF-8</code>，然后点击 <code>Apply and Close(应用并关闭)</code>。</p><p><img src="'+H+'" alt="202010042109999"></p><h3 id="字体配置" tabindex="-1">字体配置 <a class="header-anchor" href="#字体配置" aria-hidden="true">#</a></h3><p>最后一个配置，写代码没有一个合适的字体及大小怎么行？</p><p>再次打开首选项窗口，依次点击 <code>General</code> &gt; <code>Appearance</code> &gt; <code>Colors and Fonts</code> &gt; <code>Basic</code>，然后点击 <code>Basic</code> 里的最后一项 <code>Text Font(文本字体)</code>，双击或者点击 <code>Edit(编辑)</code> 进入修改界面。</p><p><img src="'+z+'" alt="202010042110867"></p><p><img src="'+U+'" alt="202010042110888"></p><p>一般来讲，字体都是使用默认值 <code>Consolas</code>，只是简单改改大小，方便查看而已，选完之后，一直点确定即可应用成功。</p><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>实际上，Eclipse 现在已经支持在文本编辑时，通过 <code>Ctrl</code> 加 <code> +号</code> 或 <code>-号</code> 来调整编辑区的文字大小了，这一步其实可以不用这么麻烦了。</p></div><p><img src="'+W+'" alt="202010042111057"></p><p>另外 <code>JetBrains</code> 为开发者设计了一套字体，据说可以降低眼疲劳，有需要的从 JetBrains 官网下载<a href="https://www.jetbrains.com/zh-cn/lp/mono/" target="_blank" rel="noreferrer">JetBrains Mono字体</a>安装即可。</p><p><img src="'+R+'" alt="202010042111555"></p><h2 id="用eclipse开发java程序" tabindex="-1">用Eclipse开发Java程序 <a class="header-anchor" href="#用eclipse开发java程序" aria-hidden="true">#</a></h2><p>调也跳完了，接下来我们使用 <code>Eclipse</code> 来开发一个 <code>Hello World</code> 程序，看看它比我们第一章是不是要简单一些？</p><p>用 <code>Eclipse</code> 开发 Java 程序，可以分为4个步骤：</p><ol><li>创建一个 Java 项目（一个复杂的程序肯定需要很多源代码文件，我们以项目为单位来组织这些源文件）</li><li>手动创建 Java 源程序</li><li>编译 Java 源程序（在 Eclipse 中此步骤是自动的）</li><li>运行 Java 程序</li></ol><p>首先，我们打开配置好的 <code>Eclipse</code>，点击 <code>File</code> 菜单，选择 <code>New</code> 子菜单中的 <code>Java Project</code> 来创建一个新的 Java 项目。</p><p><img src="'+G+'" alt="202010042111666"></p><p>输入项目名称，然后确认下是否自动指定好了 <code>JRE运行库</code>（JAVA_HOME配置没有问题的话，应该无异常），此项内容很关键，决定是否能正常编写代码和编译运行。</p><p><img src="'+L+'" alt="202010042111777"></p><p>下图就是一个创建好的基本 Java 项目。</p><p><img src="'+Q+'" alt="202010042111888"></p><p>那我们之前编写的源代码这时候要在哪里写？答案是在 <code>src(source)</code> 源码目录下编写。但是别直接就在 <code>src</code> 根目录下创建源文件，笔者要求你先创建一个包组织 <code>Package</code>（现在知道它是分类存放源文件的文件夹就可以了）。</p><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p><code>Package</code> 的命名是由公司域名的倒序组成的，例如：百度公司写com.baidu.xxx，并且包名的单词全部小写。</p></div><p>右击 <code>src</code> 目录，然后 <code>New</code> 一个 <code>Package</code>，输入一个自定义包名，然后 <code>Finish</code>。</p><p><img src="'+Y+'" alt="202010042111999"></p><p><img src="'+Z+'" alt="202010042112666"></p><p>创建好包后，然后右击 <code>包名</code> 进行创建类的操作，这一步才是上一篇我们直接写过的东西。</p><p><img src="'+X+'" alt="202010042112777"></p><p><img src="'+ee+'" alt="202010042112888"></p><p>创建好了，是不是和上篇写的一模一样了，但你发现 <code>pulic class xxx</code> 类声明这部分现在是用<code>Eclipse</code> 快速完成的，你不用再写它了，直接写程序入口 <code>main</code> 方法和内容就可以了。</p><p>编写过程中，如果停下来，这时候没写完呢，<code>Eclipse</code> 会提示报错，这很正常，写完并保存后再看还报不报错。</p><p><img src="'+ce+'" alt="202010042112999"></p><p>一顿火花带闪电的代码敲写，很舒服的把上篇的内容写完了，而且还有高亮及部分回车自动缩进的功能。</p><p><img src="'+te+'" alt="202010042115555"></p><p>输入完代码后，上章节我们需要 <code>javac</code> 先编译然后才能用 <code>java</code> 来运行这代码，现在有了<code>Eclipse</code>，直接在代码空白处右击，在弹出的菜单中选择 <code>Run As</code> &gt; <code>Java Application</code>即可运行了（<code>Eclipse</code>帮你自动编译了）。</p><p><img src="'+oe+'" alt="202010042115222"></p><p><img src="'+se+'" alt="202010042115666"></p><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>其实<code>Eclipse</code>还是在按照我们上篇的形式干活，只不过很多东西帮我们归了归类，做了些自动处理。</p></div><p>你自己打开设定的工作空间地址，你会发现你刚创建的 Java 项目，实际就是一个特殊的多级文件夹。所以也无需担心玩不转 <code>Eclipse</code>，没你想的那么难，慢慢来，熟练就好了。</p><p><img src="'+de+'" alt="202010042115777"></p><p><img src="'+pe+'" alt="202010042115888"></p><h2 id="后记" tabindex="-1">后记 <a class="header-anchor" href="#后记" aria-hidden="true">#</a></h2><p>到这里，<code>Eclipse</code> 的初步认识就结束了。<code>Eclipse</code> 还支持更改主题，自己有兴趣可以了解一下。其他的配置，未来我们需要的时候，就会进行对应讲解，目前已经够了。</p><p>另外再提示一点：前期很多同学喜欢使用汉化版的软件，但是殊不知，在众多 <code>IDE</code> 中，中文的并不是很多，养成依赖之后尤为可怕，所以有“汉化一时爽，xxxx”一说。</p><p>对于我们来讲，编程语言大多是英文的，如果我们连使用工具都要用中文，不仅显得不专业，而且也浪费了大好的学习英文的机会！</p><p>所以谨记笔者的劝告，切勿汉化。</p><p><img src="'+ae+'" alt="202010042115979"></p><p><code>Eclipse</code> 还有一段传闻：据说是当初的 <code>SUN</code> 公司名称缩写是 <code>太阳</code> 的意思，而且 <code>SUN</code> 公司因为<code>Java</code> 的原因真的是如日中天，在互联网行业首屈一指，于是 <code>IBM</code> 希望能出一款产品来盖过太阳的光芒，所以起名为 <code>eclipse(日蚀)</code>。</p><p>孰真孰假，不得而知。只是这个将伴随我们很久的开源 <code>IDE</code>，请记得善待它。</p><div class="info custom-block"><p class="custom-block-title">笔者说</p><p>对于技术的学习，笔者一贯遵循的步骤是：先用最最简单的 demo 让它跑起来，然后学学它的最最常用 API 和 配置让自己能用起来，最后熟练使用的基础上，在空闲时尝试阅读它的源码让自己能够洞彻它的运行机制，部分问题出现的原因，同时借鉴这些技术实现来提升自己的代码高度。</p><p>所以在笔者的文章中，前期基本都是小白文，仅仅穿插很少量的源码研究。当然等小白文更新多了，你们还依然喜欢，后期会不定时专门对部分技术的源码进行解析。</p></div>',130);function ne(e,ge,he,_e,me,Ee){const d=a,p=_("ClientOnly");return s(),l("div",null,[le,r(p,null,{default:n(()=>{var c,t;return[(((c=e.$frontmatter)==null?void 0:c.aside)??!0)&&(((t=e.$frontmatter)==null?void 0:t.showArticleMetadata)??!0)?(s(),m(d,{key:0,article:e.$frontmatter},null,8,["article"])):E("",!0)]}),_:1}),re])}const Je=i(ie,[["render",ne]]);export{fe as __pageData,Je as default};
