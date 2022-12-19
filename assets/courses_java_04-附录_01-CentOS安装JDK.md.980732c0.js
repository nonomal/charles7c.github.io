import{_ as c}from"./chunks/ArticleMetadata.2a1f8ae6.js";import{_ as t,c as i,g as r,w as d,b as l,f as A,a as C,i as y,o as p,e as h,v as D}from"./app.439d55bc.js";const v="/assets/202210231130566.af56c8a6.png",J=JSON.parse('{"title":"CentOS 8.2 安装 JDK 1.8.0_202","description":"","frontmatter":{"title":"CentOS 8.2 安装 JDK 1.8.0_202","author":"查尔斯","date":"2022/10/23 11:29","categories":["Java基础快速入门"],"tags":["Java","JDK","Linux","CentOS"],"showComment":false},"headers":[{"level":2,"title":"检查系统是否自带JDK","slug":"检查系统是否自带jdk","link":"#检查系统是否自带jdk","children":[]},{"level":2,"title":"下载并上传安装包","slug":"下载并上传安装包","link":"#下载并上传安装包","children":[]},{"level":2,"title":"解压安装包","slug":"解压安装包","link":"#解压安装包","children":[]},{"level":2,"title":"设置环境变量","slug":"设置环境变量","link":"#设置环境变量","children":[]},{"level":2,"title":"检验是否安装成功","slug":"检验是否安装成功","link":"#检验是否安装成功","children":[]}],"relativePath":"courses/java/04-附录/01-CentOS安装JDK.md","lastUpdated":1666499156000}'),b={name:"courses/java/04-附录/01-CentOS安装JDK.md"},u=l("h1",{id:"centos-8-2-安装-jdk-1-8-0-202",tabindex:"-1"},[A("CentOS 8.2 安装 JDK 1.8.0_202 "),l("a",{class:"header-anchor",href:"#centos-8-2-安装-jdk-1-8-0-202","aria-hidden":"true"},"#")],-1),k=C(`<h2 id="检查系统是否自带jdk" tabindex="-1">检查系统是否自带JDK <a class="header-anchor" href="#检查系统是否自带jdk" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p>检查系统中是否已经安装了 JDK ，安装的基本是 OpenJDK，如果已经安装了，那就提前卸载掉它。</p></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">rpm -qa | grep jdk</span></span>
<span class="line"><span style="color:#7F848E;"># 如果上方命令查询出了内容，就把查出的软件卸载掉</span></span>
<span class="line"><span style="color:#ABB2BF;">rpm -e --nodeps 软件名</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">rpm -qa </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep jdk</span></span>
<span class="line"><span style="color:#676E95;"># 如果上方命令查询出了内容，就把查出的软件卸载掉</span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -e --nodeps 软件名</span></span>
<span class="line"></span></code></pre></div><h2 id="下载并上传安装包" tabindex="-1">下载并上传安装包 <a class="header-anchor" href="#下载并上传安装包" aria-hidden="true">#</a></h2><p>可前往 <a href="https://www.oracle.com/java/technologies/javase/javase8-archive-downloads.html" target="_blank" rel="noreferrer">官网</a> 下载 JDK Linux 安装包然后上传到服务器。</p><p><img src="`+v+`" alt="202210231130566"></p><p>也可以直接在服务器内下载。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">wget https://repo.huaweicloud.com/java/jdk/8u202-b08/jdk-8u202-linux-x64.tar.gz</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">wget https://repo.huaweicloud.com/java/jdk/8u202-b08/jdk-8u202-linux-x64.tar.gz</span></span>
<span class="line"></span></code></pre></div><h2 id="解压安装包" tabindex="-1">解压安装包 <a class="header-anchor" href="#解压安装包" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p>除去一些固定的东西，一定要记得根据你实际的情况调整好目录位置或命名。</p></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#7F848E;"># 解压安装包到指定目录（如指定目录不存在则需要先提前用 mkdir 创建）</span></span>
<span class="line"><span style="color:#7F848E;"># 下方 /opt/disk 是服务器的一块数据盘挂载目录</span></span>
<span class="line"><span style="color:#ABB2BF;">mkdir -p /opt/disk/java</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">tar -zxvf jdk-8u202-linux-x64.tar.gz -C /opt/disk/java</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#676E95;"># 解压安装包到指定目录（如指定目录不存在则需要先提前用 mkdir 创建）</span></span>
<span class="line"><span style="color:#676E95;"># 下方 /opt/disk 是服务器的一块数据盘挂载目录</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir -p /opt/disk/java</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">tar -zxvf jdk-8u202-linux-x64.tar.gz -C /opt/disk/java</span></span>
<span class="line"></span></code></pre></div><p>切换到 <code>/opt/disk/java/jdk1.8.0_202</code> 目录下。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#56B6C2;">cd</span><span style="color:#ABB2BF;"> /opt/disk/java/jdk1.8.0_202</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> /opt/disk/java/jdk1.8.0_202</span></span>
<span class="line"></span></code></pre></div><p>里面就是我们熟悉的 JDK 那些内容。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#abb2bf;">bin</span></span>
<span class="line"><span style="color:#abb2bf;">include</span></span>
<span class="line"><span style="color:#abb2bf;">jre</span></span>
<span class="line"><span style="color:#abb2bf;">LICENSE</span></span>
<span class="line"><span style="color:#abb2bf;">README.html</span></span>
<span class="line"><span style="color:#abb2bf;">src.zip</span></span>
<span class="line"><span style="color:#abb2bf;">THIRDPARTYLICENSEREADME.txt</span></span>
<span class="line"><span style="color:#abb2bf;">COPYRIGHT</span></span>
<span class="line"><span style="color:#abb2bf;">javafx-src.zip</span></span>
<span class="line"><span style="color:#abb2bf;">lib</span></span>
<span class="line"><span style="color:#abb2bf;">man</span></span>
<span class="line"><span style="color:#abb2bf;">release</span></span>
<span class="line"><span style="color:#abb2bf;">THIRDPARTYLICENSEREADME-JAVAFX.txt</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">bin</span></span>
<span class="line"><span style="color:#A6ACCD;">include</span></span>
<span class="line"><span style="color:#A6ACCD;">jre</span></span>
<span class="line"><span style="color:#A6ACCD;">LICENSE</span></span>
<span class="line"><span style="color:#A6ACCD;">README.html</span></span>
<span class="line"><span style="color:#A6ACCD;">src.zip</span></span>
<span class="line"><span style="color:#A6ACCD;">THIRDPARTYLICENSEREADME.txt</span></span>
<span class="line"><span style="color:#A6ACCD;">COPYRIGHT</span></span>
<span class="line"><span style="color:#A6ACCD;">javafx-src.zip</span></span>
<span class="line"><span style="color:#A6ACCD;">lib</span></span>
<span class="line"><span style="color:#A6ACCD;">man</span></span>
<span class="line"><span style="color:#A6ACCD;">release</span></span>
<span class="line"><span style="color:#A6ACCD;">THIRDPARTYLICENSEREADME-JAVAFX.txt</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h2 id="设置环境变量" tabindex="-1">设置环境变量 <a class="header-anchor" href="#设置环境变量" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>还差最后一步，配置环境变量 JAVA_HOME。不配好它，很多 Java 写的程序可就没法直接使用了。而且你配好了环境变量，我们也可以方便的在任何目录下使用 Java 的命令。</p></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#7F848E;"># 1、打开 profile 文件</span></span>
<span class="line"><span style="color:#ABB2BF;">vim /etc/profile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;"># 2、在其中插入环境变量配置</span></span>
<span class="line"><span style="color:#ABB2BF;">JAVA_HOME=/opt/disk/java/jdk1.8.0_202</span></span>
<span class="line"><span style="color:#ABB2BF;">CLASSPATH=.:</span><span style="color:#E06C75;">$JAVA_HOME</span><span style="color:#ABB2BF;">/lib.tools.jar</span></span>
<span class="line"><span style="color:#ABB2BF;">PATH=</span><span style="color:#E06C75;">$JAVA_HOME</span><span style="color:#ABB2BF;">/bin:</span><span style="color:#E06C75;">$PATH</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> JAVA_HOME CLASSPATH PATH</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;"># 3、重新加载 profile 文件，使最新配置生效</span></span>
<span class="line"><span style="color:#56B6C2;">source</span><span style="color:#ABB2BF;"> /etc/profile</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#676E95;"># 1、打开 profile 文件</span></span>
<span class="line"><span style="color:#A6ACCD;">vim /etc/profile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 2、在其中插入环境变量配置</span></span>
<span class="line"><span style="color:#A6ACCD;">JAVA_HOME=/opt/disk/java/jdk1.8.0_202</span></span>
<span class="line"><span style="color:#A6ACCD;">CLASSPATH=.:</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">JAVA_HOME/lib.tools.jar</span></span>
<span class="line"><span style="color:#A6ACCD;">PATH=</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">JAVA_HOME/bin:</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">PATH</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> JAVA_HOME CLASSPATH PATH</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 3、重新加载 profile 文件，使最新配置生效</span></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> /etc/profile</span></span>
<span class="line"></span></code></pre></div><h2 id="检验是否安装成功" tabindex="-1">检验是否安装成功 <a class="header-anchor" href="#检验是否安装成功" aria-hidden="true">#</a></h2><p>执行查看 Java 版本命令。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">java -version</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">java -version</span></span>
<span class="line"></span></code></pre></div><p>如果能看到下方这么一串版本信息输出，那就道上一声恭喜。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">java version </span><span style="color:#98C379;">&quot;1.8.0_202&quot;</span></span>
<span class="line"><span style="color:#ABB2BF;">Java(TM) SE Runtime Environment (build 1.8.0_202-b08)</span></span>
<span class="line"><span style="color:#ABB2BF;">Java HotSpot(TM) 64-Bit Server VM (build 25.202-b08, mixed mode)</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">java version </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">1.8.0_202</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">Java</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">TM</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> SE Runtime Environment </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">build 1.8.0_202-b08</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">Java HotSpot</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">TM</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> 64-Bit Server VM </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">build 25.202-b08, mixed mode</span><span style="color:#89DDFF;">)</span></span>
<span class="line"></span></code></pre></div>`,23);function B(s,_,F,g,E,m){const e=c,o=y("ClientOnly");return p(),i("div",null,[u,r(o,null,{default:d(()=>{var a,n;return[(((a=s.$frontmatter)==null?void 0:a.aside)??!0)&&(((n=s.$frontmatter)==null?void 0:n.showArticleMetadata)??!0)?(p(),h(e,{key:0,article:s.$frontmatter},null,8,["article"])):D("",!0)]}),_:1}),k])}const S=t(b,[["render",B]]);export{J as __pageData,S as default};
