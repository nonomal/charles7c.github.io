import{_ as r}from"./chunks/ArticleMetadata.f3b87b78.js";import{_ as l,c,E as i,B as _,z as t,a as d,R as m,G as h,o,A as g,C as u}from"./chunks/framework.23582046.js";import"./chunks/md5.3856627a.js";const f="/assets/202112132257200.42f1bc97.png",b="/assets/202112132257205.4d83e3bb.png",F="/assets/202112132257210.70869602.png",k="/assets/202112132257215.bd697728.png",y="/assets/202112132257220.90403509.png",C="/assets/202112132257225.19cc083a.png",A="/assets/202112132257230.f6b3687f.png",v="/assets/202112132257235.f55895d3.png",M=JSON.parse('{"title":"无法访问 F:\\\\。文件或目录损坏且无法读取。","description":"","frontmatter":{"title":"无法访问 F:\\\\。文件或目录损坏且无法读取。","author":"查尔斯","date":"2021/12/13 22:57","categories":["Bug万象集"],"tags":["Windows"]},"headers":[],"relativePath":"categories/issues/2021/12/13/无法访问F盘。文件或目录损坏且无法读取.md","filePath":"categories/issues/2021/12/13/无法访问F盘。文件或目录损坏且无法读取.md","lastUpdated":1663747241000}'),D={name:"categories/issues/2021/12/13/无法访问F盘。文件或目录损坏且无法读取.md"},P=t("h1",{id:"无法访问-f-。文件或目录损坏且无法读取。",tabindex:"-1"},[d("无法访问 F:\\。文件或目录损坏且无法读取。 "),t("a",{class:"header-anchor",href:"#无法访问-f-。文件或目录损坏且无法读取。","aria-label":'Permalink to "无法访问 F:\\。文件或目录损坏且无法读取。"'},"​")],-1),q=m('<h2 id="问题描述" tabindex="-1">问题描述 <a class="header-anchor" href="#问题描述" aria-label="Permalink to &quot;问题描述&quot;">​</a></h2><p>笔者这块西数的移动硬盘最近真的是问题频发，前段时间无法删除损坏的回收站，这两天在家里电脑上插上之后，双击 F 盘提示已损坏，较之以前问题更甚。</p><p>这的确给了笔者一个 “惊喜”，最近两周好像没开 Drive 备份到 NAS 。硬盘要是坏了，这两周的东西还能剩下多少就不好说了。</p><p>不过好在最后问题解决了，跟笔者来一起看看解决方法吧。</p><p><img src="'+f+'" alt="202112132257200"></p><h2 id="解决方案" tabindex="-1">解决方案 <a class="header-anchor" href="#解决方案" aria-label="Permalink to &quot;解决方案&quot;">​</a></h2><h3 id="尝试1-尝试检查与修复" tabindex="-1">尝试1：尝试检查与修复 <a class="header-anchor" href="#尝试1-尝试检查与修复" aria-label="Permalink to &quot;尝试1：尝试检查与修复&quot;">​</a></h3><p>首先，在出现问题的磁盘上【右键】单击，然后选择【属性】。</p><p><img src="'+b+'" alt="202112132257205"></p><p>在弹出的【属性】对话框中，选择【工具】选项卡，然后点击【检查】按钮。这个功能是用来检查磁盘文件系统错误的，检查完还会有个错误修复的环节。</p><p><img src="'+F+'" alt="202112132257210"></p><p>可惜的是，不知道是笔者这台电脑登录的账号权限问题，还是系统错误，这项修复手段，笔者用不了。</p><p><img src="'+k+'" alt="202112132257215"></p><h3 id="尝试2-命令行修复" tabindex="-1">尝试2：命令行修复 <a class="header-anchor" href="#尝试2-命令行修复" aria-label="Permalink to &quot;尝试2：命令行修复&quot;">​</a></h3><p>还是老规矩，桌面可视化中的功能只是一种手段，每一项功能都有其对应的系统命令。</p><p>按下【Windows】键，弹出【开始】菜单，直接输入【cmd】来在菜单中搜索。搜索出来后，在【cmd.exe/命令行】上【右键】单击，选择【以管理员身份运行】。</p><p><img src="'+y+`" alt="202112132257220"></p><p>在弹出的 CMD 命令行窗口中，输入以下命令：</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#768390;"># 这条命令是用来检查磁盘并修复的，中间的 f: 换成你出现上方问题的盘符即可。 </span></span>
<span class="line"><span style="color:#F69D50;">chkdsk</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">f:</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">/f</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 这条命令是用来检查磁盘并修复的，中间的 f: 换成你出现上方问题的盘符即可。 </span></span>
<span class="line"><span style="color:#6F42C1;">chkdsk</span><span style="color:#24292E;"> </span><span style="color:#032F62;">f:</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/f</span></span></code></pre></div><p><img src="`+C+'" alt="202112132257225"></p><p><img src="'+A+'" alt="202112132257230"></p><p>等待检查修复结束，笔者的 F 盘又回来了。</p><p><img src="'+v+'" alt="202112132257235"></p>',23);function x(s,B,N,T,V,$){const n=r,p=h("ClientOnly");return o(),c("div",null,[P,i(p,null,{default:_(()=>{var a,e;return[(((a=s.$frontmatter)==null?void 0:a.aside)??!0)&&(((e=s.$frontmatter)==null?void 0:e.showArticleMetadata)??!0)?(o(),g(n,{key:0,article:s.$frontmatter},null,8,["article"])):u("",!0)]}),_:1}),q])}const O=l(D,[["render",x]]);export{M as __pageData,O as default};
