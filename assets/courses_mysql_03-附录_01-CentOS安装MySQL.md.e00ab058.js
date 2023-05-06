import{_ as c}from"./chunks/ArticleMetadata.f3b87b78.js";import{_ as t,c as r,E as y,B as i,z as n,a as d,R as F,G as C,o as p,A as m,C as h}from"./chunks/framework.23582046.js";import"./chunks/md5.3856627a.js";const A="/assets/202210222130166.2c01aa58.png",M=JSON.parse('{"title":"CentOS 8.2 安装 MySQL 5.7.39","description":"","frontmatter":{"title":"CentOS 8.2 安装 MySQL 5.7.39","author":"查尔斯","date":"2022/10/22 21:30","categories":["MySQL快速入门"],"tags":["MySQL","Linux","CentOS"],"showComment":false},"headers":[],"relativePath":"courses/mysql/03-附录/01-CentOS安装MySQL.md","filePath":"courses/mysql/03-附录/01-CentOS安装MySQL.md","lastUpdated":1666499156000}'),D={name:"courses/mysql/03-附录/01-CentOS安装MySQL.md"},u=n("h1",{id:"centos-8-2-安装-mysql-5-7-39",tabindex:"-1"},[d("CentOS 8.2 安装 MySQL 5.7.39 "),n("a",{class:"header-anchor",href:"#centos-8-2-安装-mysql-5-7-39","aria-label":'Permalink to "CentOS 8.2 安装 MySQL 5.7.39"'},"​")],-1),g=F(`<h2 id="检查系统是否自带mysql" tabindex="-1">检查系统是否自带MySQL <a class="header-anchor" href="#检查系统是否自带mysql" aria-label="Permalink to &quot;检查系统是否自带MySQL&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p>检查系统中是否已经安装了 MySQL 或 MariaDB ，如果已经安装了，那就必须提前卸载掉它们，否则它们占用的端口号、服务名或是一些其他配置很可能会干扰到后续我们要安装的 MySQL 版本。</p><p>以前笔者就遇到过几次由这个情况引发的问题，要么是 MySQL 无法安装成功，要么是 MySQL 安装成功后输入正确密码却登录不进去。</p></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F69D50;">rpm</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">-qa</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">|</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">grep</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">mysql</span></span>
<span class="line"><span style="color:#F69D50;">rpm</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">-qa</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">|</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">grep</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">mariadb</span></span>
<span class="line"><span style="color:#768390;"># 如果上方两条命令查询出了内容，就把查出的软件卸载掉</span></span>
<span class="line"><span style="color:#F69D50;">rpm</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">-e</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">--nodeps</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">软件名</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">rpm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-qa</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">grep</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql</span></span>
<span class="line"><span style="color:#6F42C1;">rpm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-qa</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">|</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">grep</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mariadb</span></span>
<span class="line"><span style="color:#6A737D;"># 如果上方两条命令查询出了内容，就把查出的软件卸载掉</span></span>
<span class="line"><span style="color:#6F42C1;">rpm</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-e</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--nodeps</span><span style="color:#24292E;"> </span><span style="color:#032F62;">软件名</span></span></code></pre></div><h2 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-label="Permalink to &quot;安装依赖&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p>和在 Windows 系统中一样，Linux 系统中安装程序也需要准备好所需的运行库。</p><p>不确认安装好它们，那在安装 MySQL 时就会出现这样那样的依赖报错，像下面这段报错就是由于没有安装好 <code>libaio</code> 库引起的。</p><blockquote><p>/bin/mysqld: error while loading shared libraries: libaio.so.1: cannot open shared object file: No such file or directory</p></blockquote></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F69D50;">yum</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">-y</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">install</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">numactl</span></span>
<span class="line"><span style="color:#F69D50;">yum</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">-y</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">install</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">libncurses</span><span style="color:#6CB6FF;">*</span></span>
<span class="line"><span style="color:#F69D50;">yum</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">-y</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">install</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">libaio</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">numactl</span></span>
<span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libncurses</span><span style="color:#005CC5;">*</span></span>
<span class="line"><span style="color:#6F42C1;">yum</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-y</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">libaio</span></span></code></pre></div><h2 id="下载并上传安装包" tabindex="-1">下载并上传安装包 <a class="header-anchor" href="#下载并上传安装包" aria-label="Permalink to &quot;下载并上传安装包&quot;">​</a></h2><p>可前往 <a href="https://downloads.mysql.com/archives/community" target="_blank" rel="noreferrer">官网</a> 下载 MySQL Linux 安装包然后上传到服务器。</p><p><img src="`+A+`" alt="202210222130166"></p><p>也可以直接在服务器内下载。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F69D50;">wget</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">https://cdn.mysql.com/archives/mysql-5.7/mysql-5.7.39-linux-glibc2.12-x86_64.tar.gz</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">wget</span><span style="color:#24292E;"> </span><span style="color:#032F62;">https://cdn.mysql.com/archives/mysql-5.7/mysql-5.7.39-linux-glibc2.12-x86_64.tar.gz</span></span></code></pre></div><h2 id="解压安装包" tabindex="-1">解压安装包 <a class="header-anchor" href="#解压安装包" aria-label="Permalink to &quot;解压安装包&quot;">​</a></h2><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p>除去一些固定的东西，一定要记得根据你实际的情况调整好目录位置或命名。</p></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#768390;"># 解压安装包到指定目录（如指定目录不存在则需要先提前用 mkdir 创建）</span></span>
<span class="line"><span style="color:#768390;"># 下方 /opt/disk 是服务器的一块数据盘挂载目录</span></span>
<span class="line"><span style="color:#F69D50;">tar</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">-zxvf</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">mysql-5.7.39-linux-glibc2.12-x86_64.tar.gz</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">-C</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">/opt/disk</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;"># 重命名目录</span></span>
<span class="line"><span style="color:#6CB6FF;">cd</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">/opt/disk</span></span>
<span class="line"><span style="color:#F69D50;">mv</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">mysql-5.7.39-linux-glibc2.12-x86_64</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;"># 创建 MySQL 数据存储目录</span></span>
<span class="line"><span style="color:#6CB6FF;">cd</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">mysql</span></span>
<span class="line"><span style="color:#F69D50;">mkdir</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">data</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 解压安装包到指定目录（如指定目录不存在则需要先提前用 mkdir 创建）</span></span>
<span class="line"><span style="color:#6A737D;"># 下方 /opt/disk 是服务器的一块数据盘挂载目录</span></span>
<span class="line"><span style="color:#6F42C1;">tar</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-zxvf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql-5.7.39-linux-glibc2.12-x86_64.tar.gz</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-C</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/opt/disk</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 重命名目录</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/opt/disk</span></span>
<span class="line"><span style="color:#6F42C1;">mv</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql-5.7.39-linux-glibc2.12-x86_64</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建 MySQL 数据存储目录</span></span>
<span class="line"><span style="color:#005CC5;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql</span></span>
<span class="line"><span style="color:#6F42C1;">mkdir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">data</span></span></code></pre></div><h2 id="创建mysql用户组和mysql用户" tabindex="-1">创建mysql用户组和mysql用户 <a class="header-anchor" href="#创建mysql用户组和mysql用户" aria-label="Permalink to &quot;创建mysql用户组和mysql用户&quot;">​</a></h2><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#768390;"># 创建 mysql 用户组</span></span>
<span class="line"><span style="color:#F69D50;">groupadd</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;"># 创建 mysql 用户</span></span>
<span class="line"><span style="color:#F69D50;">useradd</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">-r</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">-g</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">mysql</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;"># 将 MySQL 安装目录授权给 mysql 用户组的 mysql 用户</span></span>
<span class="line"><span style="color:#F69D50;">chown</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">-R</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">mysql:mysql</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">./</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 创建 mysql 用户组</span></span>
<span class="line"><span style="color:#6F42C1;">groupadd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 创建 mysql 用户</span></span>
<span class="line"><span style="color:#6F42C1;">useradd</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-r</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-g</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 将 MySQL 安装目录授权给 mysql 用户组的 mysql 用户</span></span>
<span class="line"><span style="color:#6F42C1;">chown</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-R</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql:mysql</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./</span></span></code></pre></div><h2 id="创建配置文件" tabindex="-1">创建配置文件 <a class="header-anchor" href="#创建配置文件" aria-label="Permalink to &quot;创建配置文件&quot;">​</a></h2><p>创建 my_default.cnf 配置文件。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F69D50;">vim</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">/opt/disk/mysql/support-files/my_default.cnf</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">vim</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/opt/disk/mysql/support-files/my_default.cnf</span></span></code></pre></div><p>将下方内容插入到配置文件中，保存并退出编辑。</p><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>下方的配置中，指定了 MySQL 安装目录、MySQL 数据存储目录、MySQL 服务占用端口、MySQL 默认字符集、MySQL 日志文件位置、MySQL 进程文件位置等。</p><p><strong>一定记得根据你实际的情况调整好。</strong></p></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#ADBAC7;">[mysqld]</span></span>
<span class="line"><span style="color:#ADBAC7;">sql_mode</span><span style="color:#F47067;">=</span><span style="color:#96D0FF;">NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES</span><span style="color:#ADBAC7;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#F69D50;">basedir</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">/opt/disk/mysql</span></span>
<span class="line"><span style="color:#F69D50;">datadir</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">/opt/disk/mysql/data</span></span>
<span class="line"><span style="color:#F69D50;">port</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">3306</span></span>
<span class="line"><span style="color:#F69D50;">socket</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">/tmp/mysql.sock</span></span>
<span class="line"><span style="color:#ADBAC7;">character-set-server</span><span style="color:#F47067;">=</span><span style="color:#96D0FF;">utf8</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F69D50;">log-error</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">/opt/disk/mysql/data/mysqld.log</span></span>
<span class="line"><span style="color:#F69D50;">pid-file</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">/opt/disk/mysql/data/mysqld.pid</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">[mysqld]</span></span>
<span class="line"><span style="color:#24292E;">sql_mode</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES</span><span style="color:#24292E;"> </span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">basedir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/opt/disk/mysql</span></span>
<span class="line"><span style="color:#6F42C1;">datadir</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/opt/disk/mysql/data</span></span>
<span class="line"><span style="color:#6F42C1;">port</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">3306</span></span>
<span class="line"><span style="color:#6F42C1;">socket</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/tmp/mysql.sock</span></span>
<span class="line"><span style="color:#24292E;">character-set-server</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">utf8</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6F42C1;">log-error</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/opt/disk/mysql/data/mysqld.log</span></span>
<span class="line"><span style="color:#6F42C1;">pid-file</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/opt/disk/mysql/data/mysqld.pid</span></span></code></pre></div><p>拷贝一份配置文件到 /etc 目录下，命名为 <code>my.cnf</code>。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F69D50;">cp</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">support-files/my_default.cnf</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">/etc/my.cnf</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">support-files/my_default.cnf</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/my.cnf</span></span></code></pre></div><h2 id="安装并启动mysql服务" tabindex="-1">安装并启动MySQL服务 <a class="header-anchor" href="#安装并启动mysql服务" aria-label="Permalink to &quot;安装并启动MySQL服务&quot;">​</a></h2><p>使用 <code>mysqld</code> 命令来安装 MySQL 服务，并指定好用户名、MySQL 安装目录、MySQL 数据存储目录。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F69D50;">bin/mysqld</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">--initialize</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">--user=mysql</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">--basedir=/opt/disk/mysql/</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">--datadir=/opt/disk/mysql/data/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">bin/mysqld</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--initialize</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--user=mysql</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--basedir=/opt/disk/mysql/</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--datadir=/opt/disk/mysql/data/</span></span></code></pre></div><p>拷贝一份 MySQL 服务脚本到 <code>/etc/init.d</code> 目录下，命名为 <code>mysql</code>。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F69D50;">cp</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">support-files/mysql.server</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">/etc/init.d/mysql</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cp</span><span style="color:#24292E;"> </span><span style="color:#032F62;">support-files/mysql.server</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/init.d/mysql</span></span></code></pre></div><p>启动 MySQL 服务。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F69D50;">systemctl</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">start</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">mysql</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">start</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql</span></span></code></pre></div><p>配置 MySQL 开机自启动。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F69D50;">systemctl</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">enable</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">mysql</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">systemctl</span><span style="color:#24292E;"> </span><span style="color:#032F62;">enable</span><span style="color:#24292E;"> </span><span style="color:#032F62;">mysql</span></span></code></pre></div><p>到此，MySQL 服务就安装完成了。但别着急，还需要做些配置才能真正用起来。</p><h2 id="设置环境变量" tabindex="-1">设置环境变量 <a class="header-anchor" href="#设置环境变量" aria-label="Permalink to &quot;设置环境变量&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>配置好环境变量，我们才能方便的在任何目录下使用 MySQL 的命令。</p></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#768390;"># 1、打开 profile 文件</span></span>
<span class="line"><span style="color:#F69D50;">vim</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">/etc/profile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;"># 2、在其中插入环境变量配置</span></span>
<span class="line"><span style="color:#ADBAC7;">MYSQL_HOME</span><span style="color:#F47067;">=</span><span style="color:#96D0FF;">/opt/disk/mysql</span></span>
<span class="line"><span style="color:#ADBAC7;">PATH</span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;">$MYSQL_HOME</span><span style="color:#96D0FF;">/bin:</span><span style="color:#ADBAC7;">$PATH</span></span>
<span class="line"><span style="color:#F47067;">export</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">MYSQL_HOME</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">PATH</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;"># 3、重新加载 profile 文件，使最新配置生效</span></span>
<span class="line"><span style="color:#6CB6FF;">source</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">/etc/profile</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># 1、打开 profile 文件</span></span>
<span class="line"><span style="color:#6F42C1;">vim</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/profile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 2、在其中插入环境变量配置</span></span>
<span class="line"><span style="color:#24292E;">MYSQL_HOME</span><span style="color:#D73A49;">=</span><span style="color:#032F62;">/opt/disk/mysql</span></span>
<span class="line"><span style="color:#24292E;">PATH</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">$MYSQL_HOME</span><span style="color:#032F62;">/bin:</span><span style="color:#24292E;">$PATH</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#032F62;">MYSQL_HOME</span><span style="color:#24292E;"> </span><span style="color:#032F62;">PATH</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;"># 3、重新加载 profile 文件，使最新配置生效</span></span>
<span class="line"><span style="color:#005CC5;">source</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/etc/profile</span></span></code></pre></div><h2 id="登录并修改密码" tabindex="-1">登录并修改密码 <a class="header-anchor" href="#登录并修改密码" aria-label="Permalink to &quot;登录并修改密码&quot;">​</a></h2><p>第一次登录时，首先从日志文件中找到随机生成的密码。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F69D50;">cat</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">/opt/disk/mysql/data/mysqld.log</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">cat</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/opt/disk/mysql/data/mysqld.log</span></span></code></pre></div><p>在日志文件中找到类似于下方输出的位置，其中 <code>8QE2NEqhB:ks</code> 就是密码。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#adbac7;">[Note] A temporary password is generated for root@localhost: 8QE2NEqhB:ks</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292e;">[Note] A temporary password is generated for root@localhost: 8QE2NEqhB:ks</span></span></code></pre></div><p>登录到 MySQL 服务端。</p><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p>有些时候随机生成的密码包含特殊符号，例如：<code>&amp;</code>、<code>/</code>、<code>.</code>（你没看错，有时候最后有个 <code>.</code> 可千万别当作是句子结尾。</p><p>这种密码你在登录的时候，记得用 <code>&#39;</code> 单引号给它引起来。</p><p>例如：<code>mysql -uroot -p&#39;7AB5CDadE&amp;&#39;</code></p></div><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F69D50;">mysql</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">-uroot</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">-p刚才从日志中找到的随机密码</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">mysql</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-uroot</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p刚才从日志中找到的随机密码</span></span></code></pre></div><p>修改密码。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#6CB6FF;">set</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">password</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">password</span><span style="color:#ADBAC7;">(</span><span style="color:#F69D50;">&#39;新密码&#39;</span><span style="color:#ADBAC7;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">set</span><span style="color:#24292E;"> </span><span style="color:#032F62;">password</span><span style="color:#24292E;"> </span><span style="color:#032F62;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">password</span><span style="color:#24292E;">(</span><span style="color:#6F42C1;">&#39;新密码&#39;</span><span style="color:#24292E;">);</span></span></code></pre></div><h2 id="创建用户并授权" tabindex="-1">创建用户并授权 <a class="header-anchor" href="#创建用户并授权" aria-label="Permalink to &quot;创建用户并授权&quot;">​</a></h2><p>这一步就要根据你的实际个人需要来操作了。</p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F69D50;">grant</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">all</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">on</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">*</span><span style="color:#96D0FF;">.</span><span style="color:#6CB6FF;">*</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">to</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">root@&#39;%&#39;</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">identified</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">by</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&#39;你的密码&#39;</span><span style="color:#ADBAC7;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">grant</span><span style="color:#24292E;"> </span><span style="color:#032F62;">all</span><span style="color:#24292E;"> </span><span style="color:#032F62;">on</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">*</span><span style="color:#032F62;">.</span><span style="color:#005CC5;">*</span><span style="color:#24292E;"> </span><span style="color:#032F62;">to</span><span style="color:#24292E;"> </span><span style="color:#032F62;">root@&#39;%&#39;</span><span style="color:#24292E;"> </span><span style="color:#032F62;">identified</span><span style="color:#24292E;"> </span><span style="color:#032F62;">by</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;你的密码&#39;</span><span style="color:#24292E;">;</span></span></code></pre></div>`,50);function b(s,v,k,B,q,E){const o=c,e=C("ClientOnly");return p(),r("div",null,[u,y(e,null,{default:i(()=>{var a,l;return[(((a=s.$frontmatter)==null?void 0:a.aside)??!0)&&(((l=s.$frontmatter)==null?void 0:l.showArticleMetadata)??!0)?(p(),m(o,{key:0,article:s.$frontmatter},null,8,["article"])):h("",!0)]}),_:1}),g])}const L=t(D,[["render",b]]);export{M as __pageData,L as default};
