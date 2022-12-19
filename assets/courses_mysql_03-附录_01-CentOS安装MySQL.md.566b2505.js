import{_ as c}from"./chunks/ArticleMetadata.2a1f8ae6.js";import{_ as t,c as i,g as r,w as d,b as l,f as y,a as h,i as m,o as p,e as A,v as C}from"./app.439d55bc.js";const u="/assets/202210222130166.2c01aa58.png",M=JSON.parse('{"title":"CentOS 8.2 安装 MySQL 5.7.39","description":"","frontmatter":{"title":"CentOS 8.2 安装 MySQL 5.7.39","author":"查尔斯","date":"2022/10/22 21:30","categories":["MySQL快速入门"],"tags":["MySQL","Linux","CentOS"],"showComment":false},"headers":[{"level":2,"title":"检查系统是否自带MySQL","slug":"检查系统是否自带mysql","link":"#检查系统是否自带mysql","children":[]},{"level":2,"title":"安装依赖","slug":"安装依赖","link":"#安装依赖","children":[]},{"level":2,"title":"下载并上传安装包","slug":"下载并上传安装包","link":"#下载并上传安装包","children":[]},{"level":2,"title":"解压安装包","slug":"解压安装包","link":"#解压安装包","children":[]},{"level":2,"title":"创建mysql用户组和mysql用户","slug":"创建mysql用户组和mysql用户","link":"#创建mysql用户组和mysql用户","children":[]},{"level":2,"title":"创建配置文件","slug":"创建配置文件","link":"#创建配置文件","children":[]},{"level":2,"title":"安装并启动MySQL服务","slug":"安装并启动mysql服务","link":"#安装并启动mysql服务","children":[]},{"level":2,"title":"设置环境变量","slug":"设置环境变量","link":"#设置环境变量","children":[]},{"level":2,"title":"登录并修改密码","slug":"登录并修改密码","link":"#登录并修改密码","children":[]},{"level":2,"title":"创建用户并授权","slug":"创建用户并授权","link":"#创建用户并授权","children":[]}],"relativePath":"courses/mysql/03-附录/01-CentOS安装MySQL.md","lastUpdated":1666499156000}'),B={name:"courses/mysql/03-附录/01-CentOS安装MySQL.md"},g=l("h1",{id:"centos-8-2-安装-mysql-5-7-39",tabindex:"-1"},[y("CentOS 8.2 安装 MySQL 5.7.39 "),l("a",{class:"header-anchor",href:"#centos-8-2-安装-mysql-5-7-39","aria-hidden":"true"},"#")],-1),k=h(`<h2 id="检查系统是否自带mysql" tabindex="-1">检查系统是否自带MySQL <a class="header-anchor" href="#检查系统是否自带mysql" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p>检查系统中是否已经安装了 MySQL 或 MariaDB ，如果已经安装了，那就必须提前卸载掉它们，否则它们占用的端口号、服务名或是一些其他配置很可能会干扰到后续我们要安装的 MySQL 版本。</p><p>以前笔者就遇到过几次由这个情况引发的问题，要么是 MySQL 无法安装成功，要么是 MySQL 安装成功后输入正确密码却登录不进去。</p></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">rpm -qa | grep mysql</span></span>
<span class="line"><span style="color:#ABB2BF;">rpm -qa | grep mariadb</span></span>
<span class="line"><span style="color:#7F848E;"># 如果上方两条命令查询出了内容，就把查出的软件卸载掉</span></span>
<span class="line"><span style="color:#ABB2BF;">rpm -e --nodeps 软件名</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">rpm -qa </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep mysql</span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -qa </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> grep mariadb</span></span>
<span class="line"><span style="color:#676E95;"># 如果上方两条命令查询出了内容，就把查出的软件卸载掉</span></span>
<span class="line"><span style="color:#A6ACCD;">rpm -e --nodeps 软件名</span></span>
<span class="line"></span></code></pre></div><h2 id="安装依赖" tabindex="-1">安装依赖 <a class="header-anchor" href="#安装依赖" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p>和在 Windows 系统中一样，Linux 系统中安装程序也需要准备好所需的运行库。</p><p>不确认安装好它们，那在安装 MySQL 时就会出现这样那样的依赖报错，像下面这段报错就是由于没有安装好 <code>libaio</code> 库引起的。</p><blockquote><p>/bin/mysqld: error while loading shared libraries: libaio.so.1: cannot open shared object file: No such file or directory</p></blockquote></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">yum -y install numactl</span></span>
<span class="line"><span style="color:#ABB2BF;">yum -y install libncurses*</span></span>
<span class="line"><span style="color:#ABB2BF;">yum -y install libaio</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">yum -y install numactl</span></span>
<span class="line"><span style="color:#A6ACCD;">yum -y install libncurses</span><span style="color:#89DDFF;">*</span></span>
<span class="line"><span style="color:#A6ACCD;">yum -y install libaio</span></span>
<span class="line"></span></code></pre></div><h2 id="下载并上传安装包" tabindex="-1">下载并上传安装包 <a class="header-anchor" href="#下载并上传安装包" aria-hidden="true">#</a></h2><p>可前往 <a href="https://downloads.mysql.com/archives/community" target="_blank" rel="noreferrer">官网</a> 下载 MySQL Linux 安装包然后上传到服务器。</p><p><img src="`+u+`" alt="202210222130166"></p><p>也可以直接在服务器内下载。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">wget https://cdn.mysql.com/archives/mysql-5.7/mysql-5.7.39-linux-glibc2.12-x86_64.tar.gz</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">wget https://cdn.mysql.com/archives/mysql-5.7/mysql-5.7.39-linux-glibc2.12-x86_64.tar.gz</span></span>
<span class="line"></span></code></pre></div><h2 id="解压安装包" tabindex="-1">解压安装包 <a class="header-anchor" href="#解压安装包" aria-hidden="true">#</a></h2><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p>除去一些固定的东西，一定要记得根据你实际的情况调整好目录位置或命名。</p></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#7F848E;"># 解压安装包到指定目录（如指定目录不存在则需要先提前用 mkdir 创建）</span></span>
<span class="line"><span style="color:#7F848E;"># 下方 /opt/disk 是服务器的一块数据盘挂载目录</span></span>
<span class="line"><span style="color:#ABB2BF;">tar -zxvf mysql-5.7.39-linux-glibc2.12-x86_64.tar.gz -C /opt/disk</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;"># 重命名目录</span></span>
<span class="line"><span style="color:#56B6C2;">cd</span><span style="color:#ABB2BF;"> /opt/disk</span></span>
<span class="line"><span style="color:#ABB2BF;">mv mysql-5.7.39-linux-glibc2.12-x86_64 mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;"># 创建 MySQL 数据存储目录</span></span>
<span class="line"><span style="color:#56B6C2;">cd</span><span style="color:#ABB2BF;"> mysql</span></span>
<span class="line"><span style="color:#ABB2BF;">mkdir data</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#676E95;"># 解压安装包到指定目录（如指定目录不存在则需要先提前用 mkdir 创建）</span></span>
<span class="line"><span style="color:#676E95;"># 下方 /opt/disk 是服务器的一块数据盘挂载目录</span></span>
<span class="line"><span style="color:#A6ACCD;">tar -zxvf mysql-5.7.39-linux-glibc2.12-x86_64.tar.gz -C /opt/disk</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 重命名目录</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> /opt/disk</span></span>
<span class="line"><span style="color:#A6ACCD;">mv mysql-5.7.39-linux-glibc2.12-x86_64 mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 创建 MySQL 数据存储目录</span></span>
<span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> mysql</span></span>
<span class="line"><span style="color:#A6ACCD;">mkdir data</span></span>
<span class="line"></span></code></pre></div><h2 id="创建mysql用户组和mysql用户" tabindex="-1">创建mysql用户组和mysql用户 <a class="header-anchor" href="#创建mysql用户组和mysql用户" aria-hidden="true">#</a></h2><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#7F848E;"># 创建 mysql 用户组</span></span>
<span class="line"><span style="color:#ABB2BF;">groupadd mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;"># 创建 mysql 用户</span></span>
<span class="line"><span style="color:#ABB2BF;">useradd -r -g mysql mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;"># 将 MySQL 安装目录授权给 mysql 用户组的 mysql 用户</span></span>
<span class="line"><span style="color:#ABB2BF;">chown -R mysql:mysql ./</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#676E95;"># 创建 mysql 用户组</span></span>
<span class="line"><span style="color:#A6ACCD;">groupadd mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 创建 mysql 用户</span></span>
<span class="line"><span style="color:#A6ACCD;">useradd -r -g mysql mysql</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 将 MySQL 安装目录授权给 mysql 用户组的 mysql 用户</span></span>
<span class="line"><span style="color:#A6ACCD;">chown -R mysql:mysql ./</span></span>
<span class="line"></span></code></pre></div><h2 id="创建配置文件" tabindex="-1">创建配置文件 <a class="header-anchor" href="#创建配置文件" aria-hidden="true">#</a></h2><p>创建 my_default.cnf 配置文件。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">vim /opt/disk/mysql/support-files/my_default.cnf</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">vim /opt/disk/mysql/support-files/my_default.cnf</span></span>
<span class="line"></span></code></pre></div><p>将下方内容插入到配置文件中，保存并退出编辑。</p><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>下方的配置中，指定了 MySQL 安装目录、MySQL 数据存储目录、MySQL 服务占用端口、MySQL 默认字符集、MySQL 日志文件位置、MySQL 进程文件位置等。</p><p><strong>一定记得根据你实际的情况调整好。</strong></p></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">[mysqld]</span></span>
<span class="line"><span style="color:#ABB2BF;">sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES </span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">basedir = /opt/disk/mysql</span></span>
<span class="line"><span style="color:#ABB2BF;">datadir = /opt/disk/mysql/data</span></span>
<span class="line"><span style="color:#ABB2BF;">port = 3306</span></span>
<span class="line"><span style="color:#ABB2BF;">socket = /tmp/mysql.sock</span></span>
<span class="line"><span style="color:#ABB2BF;">character-set-server=utf8</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ABB2BF;">log-error = /opt/disk/mysql/data/mysqld.log</span></span>
<span class="line"><span style="color:#ABB2BF;">pid-file = /opt/disk/mysql/data/mysqld.pid</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">mysqld</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">sql_mode=NO_ENGINE_SUBSTITUTION,STRICT_TRANS_TABLES </span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">basedir = /opt/disk/mysql</span></span>
<span class="line"><span style="color:#A6ACCD;">datadir = /opt/disk/mysql/data</span></span>
<span class="line"><span style="color:#A6ACCD;">port = 3306</span></span>
<span class="line"><span style="color:#A6ACCD;">socket = /tmp/mysql.sock</span></span>
<span class="line"><span style="color:#A6ACCD;">character-set-server=utf8</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">log-error = /opt/disk/mysql/data/mysqld.log</span></span>
<span class="line"><span style="color:#A6ACCD;">pid-file = /opt/disk/mysql/data/mysqld.pid</span></span>
<span class="line"></span></code></pre></div><p>拷贝一份配置文件到 /etc 目录下，命名为 <code>my.cnf</code>。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">cp support-files/my_default.cnf /etc/my.cnf</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">cp support-files/my_default.cnf /etc/my.cnf</span></span>
<span class="line"></span></code></pre></div><h2 id="安装并启动mysql服务" tabindex="-1">安装并启动MySQL服务 <a class="header-anchor" href="#安装并启动mysql服务" aria-hidden="true">#</a></h2><p>使用 <code>mysqld</code> 命令来安装 MySQL 服务，并指定好用户名、MySQL 安装目录、MySQL 数据存储目录。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">bin/mysqld --initialize --user=mysql --basedir=/opt/disk/mysql/ --datadir=/opt/disk/mysql/data/</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">bin/mysqld --initialize --user=mysql --basedir=/opt/disk/mysql/ --datadir=/opt/disk/mysql/data/</span></span>
<span class="line"></span></code></pre></div><p>拷贝一份 MySQL 服务脚本到 <code>/etc/init.d</code> 目录下，命名为 <code>mysql</code>。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">cp support-files/mysql.server /etc/init.d/mysql</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">cp support-files/mysql.server /etc/init.d/mysql</span></span>
<span class="line"></span></code></pre></div><p>启动 MySQL 服务。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">systemctl start mysql</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">systemctl start mysql</span></span>
<span class="line"></span></code></pre></div><p>配置 MySQL 开机自启动。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">systemctl </span><span style="color:#56B6C2;">enable</span><span style="color:#ABB2BF;"> mysql</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">systemctl </span><span style="color:#82AAFF;">enable</span><span style="color:#A6ACCD;"> mysql</span></span>
<span class="line"></span></code></pre></div><p>到此，MySQL 服务就安装完成了。但别着急，还需要做些配置才能真正用起来。</p><h2 id="设置环境变量" tabindex="-1">设置环境变量 <a class="header-anchor" href="#设置环境变量" aria-hidden="true">#</a></h2><div class="tip custom-block"><p class="custom-block-title">笔者说</p><p>配置好环境变量，我们才能方便的在任何目录下使用 MySQL 的命令。</p></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#7F848E;"># 1、打开 profile 文件</span></span>
<span class="line"><span style="color:#ABB2BF;">vim /etc/profile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;"># 2、在其中插入环境变量配置</span></span>
<span class="line"><span style="color:#ABB2BF;">MYSQL_HOME=/opt/disk/mysql</span></span>
<span class="line"><span style="color:#ABB2BF;">PATH=</span><span style="color:#E06C75;">$MYSQL_HOME</span><span style="color:#ABB2BF;">/bin:</span><span style="color:#E06C75;">$PATH</span></span>
<span class="line"><span style="color:#C678DD;">export</span><span style="color:#ABB2BF;"> MYSQL_HOME PATH</span></span>
<span class="line"></span>
<span class="line"><span style="color:#7F848E;"># 3、重新加载 profile 文件，使最新配置生效</span></span>
<span class="line"><span style="color:#56B6C2;">source</span><span style="color:#ABB2BF;"> /etc/profile</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#676E95;"># 1、打开 profile 文件</span></span>
<span class="line"><span style="color:#A6ACCD;">vim /etc/profile</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 2、在其中插入环境变量配置</span></span>
<span class="line"><span style="color:#A6ACCD;">MYSQL_HOME=/opt/disk/mysql</span></span>
<span class="line"><span style="color:#A6ACCD;">PATH=</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">MYSQL_HOME/bin:</span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">PATH</span></span>
<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> MYSQL_HOME PATH</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># 3、重新加载 profile 文件，使最新配置生效</span></span>
<span class="line"><span style="color:#82AAFF;">source</span><span style="color:#A6ACCD;"> /etc/profile</span></span>
<span class="line"></span></code></pre></div><h2 id="登录并修改密码" tabindex="-1">登录并修改密码 <a class="header-anchor" href="#登录并修改密码" aria-hidden="true">#</a></h2><p>第一次登录时，首先从日志文件中找到随机生成的密码。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">cat /opt/disk/mysql/data/mysqld.log</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">cat /opt/disk/mysql/data/mysqld.log</span></span>
<span class="line"></span></code></pre></div><p>在日志文件中找到类似于下方输出的位置，其中 <code>8QE2NEqhB:ks</code> 就是密码。</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#abb2bf;">[Note] A temporary password is generated for root@localhost: 8QE2NEqhB:ks</span></span>
<span class="line"><span style="color:#abb2bf;"></span></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">[Note] A temporary password is generated for root@localhost: 8QE2NEqhB:ks</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><p>登录到 MySQL 服务端。</p><div class="warning custom-block"><p class="custom-block-title">笔者说</p><p>有些时候随机生成的密码包含特殊符号，例如：<code>&amp;</code>、<code>/</code>、<code>.</code>（你没看错，有时候最后有个 <code>.</code> 可千万别当作是句子结尾。</p><p>这种密码你在登录的时候，记得用 <code>&#39;</code> 单引号给它引起来。</p><p>例如：<code>mysql -uroot -p&#39;7AB5CDadE&amp;&#39;</code></p></div><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">mysql -uroot -p刚才从日志中找到的随机密码</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">mysql -uroot -p刚才从日志中找到的随机密码</span></span>
<span class="line"></span></code></pre></div><p>修改密码。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#56B6C2;">set</span><span style="color:#ABB2BF;"> password = password(</span><span style="color:#98C379;">&#39;新密码&#39;</span><span style="color:#ABB2BF;">);</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#82AAFF;">set</span><span style="color:#A6ACCD;"> password = password</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">新密码</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span></code></pre></div><h2 id="创建用户并授权" tabindex="-1">创建用户并授权 <a class="header-anchor" href="#创建用户并授权" aria-hidden="true">#</a></h2><p>这一步就要根据你的实际个人需要来操作了。</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki vp-code-dark"><code><span class="line"><span style="color:#ABB2BF;">grant all on *.* to root@</span><span style="color:#98C379;">&#39;%&#39;</span><span style="color:#ABB2BF;"> identified by </span><span style="color:#98C379;">&#39;你的密码&#39;</span><span style="color:#ABB2BF;">;</span></span>
<span class="line"></span></code></pre><pre class="shiki vp-code-light"><code><span class="line"><span style="color:#A6ACCD;">grant all on </span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">*</span><span style="color:#A6ACCD;"> to root@</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">%</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> identified by </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">你的密码</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div>`,50);function q(s,v,F,b,D,f){const e=c,o=m("ClientOnly");return p(),i("div",null,[g,r(o,null,{default:d(()=>{var a,n;return[(((a=s.$frontmatter)==null?void 0:a.aside)??!0)&&(((n=s.$frontmatter)==null?void 0:n.showArticleMetadata)??!0)?(p(),A(e,{key:0,article:s.$frontmatter},null,8,["article"])):C("",!0)]}),_:1}),k])}const E=t(B,[["render",q]]);export{M as __pageData,E as default};
