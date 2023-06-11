import{_ as d}from"./chunks/ArticleMetadata.f3b87b78.js";import{_ as A,c as D,z as s,a,E as n,B as E,R as p,G as c,o as r,A as _,C}from"./chunks/framework.23582046.js";import"./chunks/md5.3856627a.js";const z=JSON.parse('{"title":"个人 SQL 优化技巧","description":"","frontmatter":{"title":"个人 SQL 优化技巧","author":"查尔斯","date":"2019/12/28 10:00","isTop":true,"categories":["杂碎逆袭史"],"tags":["SQL","SQL优化"]},"headers":[],"relativePath":"categories/fragments/2019/12/28/个人SQL优化技巧.md","filePath":"categories/fragments/2019/12/28/个人SQL优化技巧.md","lastUpdated":1671423875000}'),F={name:"categories/fragments/2019/12/28/个人SQL优化技巧.md"},h={id:"个人-sql-优化技巧",tabindex:"-1"},B=s("a",{class:"header-anchor",href:"#个人-sql-优化技巧","aria-label":'Permalink to "个人 SQL 优化技巧 <Badge text="持续更新" type="warning" />"'},"​",-1),u=s("h2",{id:"查询优化",tabindex:"-1"},[a("查询优化 "),s("a",{class:"header-anchor",href:"#查询优化","aria-label":'Permalink to "查询优化"'},"​")],-1),g={id:"如果确定结果只有一条-使用-limit-1",tabindex:"-1"},T=s("a",{class:"header-anchor",href:"#如果确定结果只有一条-使用-limit-1","aria-label":'Permalink to "如果确定结果只有一条，使用 LIMIT 1 <Badge text="建议" />"'},"​",-1),b=p('<p>我们在根据一个或多个条件查询数据时，如果确定查询结果只有一条，可以在结尾处添加 LIMIT 1 进行限制。</p><p>这样既可以让 EXPLAIN 中的 type 达到 const 类型，又可以免去担忧在程序中出现接收是单个对象却返回了一个集合对象的异常问题。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-NOOGL" id="tab-oOS_Rr4" checked="checked"><label for="tab-oOS_Rr4">正例</label><input type="radio" name="group-NOOGL" id="tab-gMqeETm"><label for="tab-gMqeETm">反例</label></div><div class="blocks"><div class="language-sql vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#ADBAC7;"># email 不是主键，也没有设置唯一约束，根据熵增定律，查询结果是有可能会出现多条的</span></span>\n<span class="line"><span style="color:#F47067;">SELECT</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">*</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">FROM</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">`sys_user`</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">WHERE</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">`email`</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&#39;charles7c@126.com&#39;</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">LIMIT</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">1</span><span style="color:#ADBAC7;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"># email 不是主键，也没有设置唯一约束，根据熵增定律，查询结果是有可能会出现多条的</span></span>\n<span class="line"><span style="color:#D73A49;">SELECT</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> </span><span style="color:#032F62;">`sys_user`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">WHERE</span><span style="color:#24292E;"> </span><span style="color:#032F62;">`email`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;charles7c@126.com&#39;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">LIMIT</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span></code></pre></div><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#ADBAC7;"># user_id 是主键，主键是非空唯一的，那么不需要添加 </span><span style="color:#F47067;">LIMIT</span><span style="color:#ADBAC7;"> 进行限制</span></span>\n<span class="line"><span style="color:#F47067;">SELECT</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">*</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">FROM</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">`sys_user`</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">WHERE</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">`user_id`</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">1</span><span style="color:#ADBAC7;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"># user_id 是主键，主键是非空唯一的，那么不需要添加 </span><span style="color:#D73A49;">LIMIT</span><span style="color:#24292E;"> 进行限制</span></span>\n<span class="line"><span style="color:#D73A49;">SELECT</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> </span><span style="color:#032F62;">`sys_user`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">WHERE</span><span style="color:#24292E;"> </span><span style="color:#032F62;">`user_id`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">1</span><span style="color:#24292E;">;</span></span></code></pre></div></div></div>',3),m={id:"避免隐式类型转换",tabindex:"-1"},N=s("a",{class:"header-anchor",href:"#避免隐式类型转换","aria-label":'Permalink to "避免隐式类型转换 <Badge text="强制" type="danger" />"'},"​",-1),v=p('<p>我们在使用 MySQL 时，或多或少都感受过 MySQL 的隐式类型转换。例如：user_id 是整数类型，但是依然可以使用字符串类型数据来进行判断。MySQL 帮你做完这种隐式类型转换是有代价的，什么代价呢？ <strong>索引不再生效了而已</strong> 。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-ZkTso" id="tab-bKaSH97" checked="checked"><label for="tab-bKaSH97">正例</label><input type="radio" name="group-ZkTso" id="tab-CZT7LnE"><label for="tab-CZT7LnE">反例</label></div><div class="blocks"><div class="language-sql vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F47067;">SELECT</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">*</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">FROM</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">`sys_user`</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">WHERE</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">`user_id`</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">10</span><span style="color:#ADBAC7;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">SELECT</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> </span><span style="color:#032F62;">`sys_user`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">WHERE</span><span style="color:#24292E;"> </span><span style="color:#032F62;">`user_id`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">10</span><span style="color:#24292E;">;</span></span></code></pre></div><div class="language-sql vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F47067;">SELECT</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">*</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">FROM</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">`sys_user`</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">WHERE</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">`user_id`</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&#39;10&#39;</span><span style="color:#ADBAC7;">;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">SELECT</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> </span><span style="color:#032F62;">`sys_user`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">WHERE</span><span style="color:#24292E;"> </span><span style="color:#032F62;">`user_id`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;10&#39;</span><span style="color:#24292E;">;</span></span></code></pre></div></div></div><h2 id="数据库表设计" tabindex="-1">数据库表设计 <a class="header-anchor" href="#数据库表设计" aria-label="Permalink to &quot;数据库表设计&quot;">​</a></h2>',3),I={id:"列名带上前缀",tabindex:"-1"},f=s("a",{class:"header-anchor",href:"#列名带上前缀","aria-label":'Permalink to "列名带上前缀 <Badge text="建议" />"'},"​",-1),L=p('<p>部分列名带上前缀或缩写，可以有效减少在连接查询、ORM 映射等场景下刻意起别名或思考区分不同的问题。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-wZews" id="tab-dyq7NEx" checked="checked"><label for="tab-dyq7NEx">正例</label></div><div class="blocks"><div class="language-sql vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F47067;">CREATE</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">TABLE</span><span style="color:#ADBAC7;"> `</span><span style="color:#DCBDFB;">sys_customer</span><span style="color:#ADBAC7;">` (</span></span>\n<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#96D0FF;">`customer_id`</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">bigint</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">20</span><span style="color:#ADBAC7;">) UNSIGNED </span><span style="color:#F47067;">NOT NULL</span><span style="color:#ADBAC7;"> AUTO_INCREMENT COMMENT </span><span style="color:#96D0FF;">&#39;客户ID&#39;</span><span style="color:#ADBAC7;">,</span></span>\n<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#96D0FF;">`customer_name`</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">varchar</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">255</span><span style="color:#ADBAC7;">) </span><span style="color:#F47067;">NOT NULL</span><span style="color:#ADBAC7;"> COMMENT </span><span style="color:#96D0FF;">&#39;客户名称&#39;</span><span style="color:#ADBAC7;">,</span></span>\n<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#F47067;">PRIMARY KEY</span><span style="color:#ADBAC7;"> (</span><span style="color:#96D0FF;">`customer_id`</span><span style="color:#ADBAC7;">) </span><span style="color:#F47067;">USING</span><span style="color:#ADBAC7;"> BTREE,</span></span>\n<span class="line"><span style="color:#ADBAC7;">) COMMENT </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&#39;客户表&#39;</span><span style="color:#ADBAC7;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#F47067;">CREATE</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">TABLE</span><span style="color:#ADBAC7;"> `</span><span style="color:#DCBDFB;">sys_contact_user</span><span style="color:#ADBAC7;">` (</span></span>\n<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#96D0FF;">`contact_user_id`</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">bigint</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">20</span><span style="color:#ADBAC7;">) UNSIGNED </span><span style="color:#F47067;">NOT NULL</span><span style="color:#ADBAC7;"> AUTO_INCREMENT COMMENT </span><span style="color:#96D0FF;">&#39;联系人ID&#39;</span><span style="color:#ADBAC7;">,</span></span>\n<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#96D0FF;">`contact_user_name`</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">varchar</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">255</span><span style="color:#ADBAC7;">) </span><span style="color:#F47067;">NOT NULL</span><span style="color:#ADBAC7;"> COMMENT </span><span style="color:#96D0FF;">&#39;联系人名称&#39;</span><span style="color:#ADBAC7;">,</span></span>\n<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#96D0FF;">`customer_id`</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">bigint</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">20</span><span style="color:#ADBAC7;">) UNSIGNED </span><span style="color:#F47067;">NOT NULL</span><span style="color:#ADBAC7;"> COMMENT </span><span style="color:#96D0FF;">&#39;客户ID&#39;</span><span style="color:#ADBAC7;">,</span></span>\n<span class="line"><span style="color:#ADBAC7;">  </span><span style="color:#F47067;">PRIMARY KEY</span><span style="color:#ADBAC7;"> (</span><span style="color:#96D0FF;">`contact_user_id`</span><span style="color:#ADBAC7;">) </span><span style="color:#F47067;">USING</span><span style="color:#ADBAC7;"> BTREE,</span></span>\n<span class="line"><span style="color:#ADBAC7;">) COMMENT </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&#39;联系人表&#39;</span><span style="color:#ADBAC7;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#ADBAC7;"># 连接查询，你完全不需要用脑去考虑到底是 c.</span><span style="color:#96D0FF;">`id`</span><span style="color:#ADBAC7;"> 还是 cu.</span><span style="color:#96D0FF;">`customer_id`</span><span style="color:#ADBAC7;"> 的问题，都是 </span><span style="color:#96D0FF;">`customer_id`</span></span>\n<span class="line"><span style="color:#F47067;">SELECT</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">*</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">FROM</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">`sys_customer`</span><span style="color:#ADBAC7;"> c </span></span>\n<span class="line"><span style="color:#F47067;">LEFT JOIN</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">`sys_contact_user`</span><span style="color:#ADBAC7;"> cu </span><span style="color:#F47067;">ON</span><span style="color:#ADBAC7;"> c.</span><span style="color:#96D0FF;">`customer_id`</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> cu.</span><span style="color:#96D0FF;">`customer_id`</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">CREATE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">TABLE</span><span style="color:#24292E;"> `</span><span style="color:#6F42C1;">sys_customer</span><span style="color:#24292E;">` (</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">`customer_id`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">bigint</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">20</span><span style="color:#24292E;">) UNSIGNED </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> AUTO_INCREMENT COMMENT </span><span style="color:#032F62;">&#39;客户ID&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">`customer_name`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">varchar</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">255</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> COMMENT </span><span style="color:#032F62;">&#39;客户名称&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">PRIMARY KEY</span><span style="color:#24292E;"> (</span><span style="color:#032F62;">`customer_id`</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">USING</span><span style="color:#24292E;"> BTREE,</span></span>\n<span class="line"><span style="color:#24292E;">) COMMENT </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;客户表&#39;</span><span style="color:#24292E;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#D73A49;">CREATE</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">TABLE</span><span style="color:#24292E;"> `</span><span style="color:#6F42C1;">sys_contact_user</span><span style="color:#24292E;">` (</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">`contact_user_id`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">bigint</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">20</span><span style="color:#24292E;">) UNSIGNED </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> AUTO_INCREMENT COMMENT </span><span style="color:#032F62;">&#39;联系人ID&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">`contact_user_name`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">varchar</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">255</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> COMMENT </span><span style="color:#032F62;">&#39;联系人名称&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">`customer_id`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">bigint</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">20</span><span style="color:#24292E;">) UNSIGNED </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> COMMENT </span><span style="color:#032F62;">&#39;客户ID&#39;</span><span style="color:#24292E;">,</span></span>\n<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">PRIMARY KEY</span><span style="color:#24292E;"> (</span><span style="color:#032F62;">`contact_user_id`</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">USING</span><span style="color:#24292E;"> BTREE,</span></span>\n<span class="line"><span style="color:#24292E;">) COMMENT </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;联系人表&#39;</span><span style="color:#24292E;">;</span></span>\n<span class="line"></span>\n<span class="line"><span style="color:#24292E;"># 连接查询，你完全不需要用脑去考虑到底是 c.</span><span style="color:#032F62;">`id`</span><span style="color:#24292E;"> 还是 cu.</span><span style="color:#032F62;">`customer_id`</span><span style="color:#24292E;"> 的问题，都是 </span><span style="color:#032F62;">`customer_id`</span></span>\n<span class="line"><span style="color:#D73A49;">SELECT</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">*</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">FROM</span><span style="color:#24292E;"> </span><span style="color:#032F62;">`sys_customer`</span><span style="color:#24292E;"> c </span></span>\n<span class="line"><span style="color:#D73A49;">LEFT JOIN</span><span style="color:#24292E;"> </span><span style="color:#032F62;">`sys_contact_user`</span><span style="color:#24292E;"> cu </span><span style="color:#D73A49;">ON</span><span style="color:#24292E;"> c.</span><span style="color:#032F62;">`customer_id`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> cu.</span><span style="color:#032F62;">`customer_id`</span></span></code></pre></div></div></div>',2),S={id:"非负数列添加unsigned无符号约束",tabindex:"-1"},M=s("a",{class:"header-anchor",href:"#非负数列添加unsigned无符号约束","aria-label":'Permalink to "非负数列添加UNSIGNED无符号约束 <Badge text="建议" />"'},"​",-1),k=p(`<p>在大部分的数据存储场景中，我们只会使用正整数，如果能确定该列为非负数，建议添加 <code>UNSIGNED</code> 无符号约束。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-S563C" id="tab-GRZfg03" checked="checked"><label for="tab-GRZfg03">正例</label></div><div class="blocks"><div class="language-sql vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#ADBAC7;"># 不添加 UNSIGNED 约束，取值范围</span></span>
<span class="line"><span style="color:#F47067;">TINYINT</span><span style="color:#ADBAC7;">：[-128, 127]</span></span>
<span class="line"><span style="color:#ADBAC7;"># 添加 UNSIGNED 约束，取值范围</span></span>
<span class="line"><span style="color:#F47067;">TINYINT</span><span style="color:#ADBAC7;">：[0, 255]</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;"># 不添加 UNSIGNED 约束，取值范围</span></span>
<span class="line"><span style="color:#D73A49;">TINYINT</span><span style="color:#24292E;">：[-128, 127]</span></span>
<span class="line"><span style="color:#24292E;"># 添加 UNSIGNED 约束，取值范围</span></span>
<span class="line"><span style="color:#D73A49;">TINYINT</span><span style="color:#24292E;">：[0, 255]</span></span></code></pre></div></div></div>`,2),O={id:"合理采用整数类型",tabindex:"-1"},x=s("a",{class:"header-anchor",href:"#合理采用整数类型","aria-label":'Permalink to "合理采用整数类型 <Badge text="建议" />"'},"​",-1),R=p('<p>例如：状态类的信息，状态再多能有多少个，采用 <code>TINYINT</code> 即可，减少存储空间占用。</p><p>下方表数据整理于：<a href="https://dev.mysql.com/doc/refman/5.7/en/integer-types.html" target="_blank" rel="noreferrer">MySQL 5.7官方文档/数据类型/数值数据类型/整数类型</a></p><table><thead><tr><th style="text-align:left;">类型</th><th style="text-align:left;">存储（字节）</th><th style="text-align:left;">取值范围</th><th style="text-align:left;">取值范围（无符号）</th></tr></thead><tbody><tr><td style="text-align:left;">TINYINT</td><td style="text-align:left;">1</td><td style="text-align:left;">[-128, 127]</td><td style="text-align:left;">[0, 255]</td></tr><tr><td style="text-align:left;">SMALLINT</td><td style="text-align:left;">2</td><td style="text-align:left;">[-32768, 32767]</td><td style="text-align:left;">[0, 65535]</td></tr><tr><td style="text-align:left;">MEDIUMINT</td><td style="text-align:left;">3</td><td style="text-align:left;">[-8388608, 8388607]</td><td style="text-align:left;">[0, 16777215]</td></tr><tr><td style="text-align:left;">INT</td><td style="text-align:left;">4</td><td style="text-align:left;">[-2147483648, 2147483647]</td><td style="text-align:left;">[0, 4294967295]</td></tr><tr><td style="text-align:left;">BIGINT</td><td style="text-align:left;">8</td><td style="text-align:left;">[-2^63^, 2^63^-1]</td><td style="text-align:left;">[0, 2^64^-1]</td></tr></tbody></table>',3),U={id:"布尔列采用bit类型",tabindex:"-1"},P=s("a",{class:"header-anchor",href:"#布尔列采用bit类型","aria-label":'Permalink to "布尔列采用bit类型 <Badge text="建议" />"'},"​",-1),q=p(`<p>例如：是否删除这种只有两种状态的信息，在表设计时建议对该列设置 <code>bit</code> 类型（0表示否/假/false，1表示是/真/true），在程序语言中可以采用 boolean 类型对应。</p><div class="vp-code-group vp-adaptive-theme"><div class="tabs"><input type="radio" name="group-Fgwdi" id="tab-Dx2OF5r" checked="checked"><label for="tab-Dx2OF5r">SQL</label><input type="radio" name="group-Fgwdi" id="tab-DkfOqgD"><label for="tab-DkfOqgD">Java</label></div><div class="blocks"><div class="language-sql vp-adaptive-theme active"><button title="Copy Code" class="copy"></button><span class="lang">sql</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#96D0FF;">\`is_deleted\`</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">bit</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">1</span><span style="color:#ADBAC7;">) </span><span style="color:#F47067;">NOT NULL</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">DEFAULT</span><span style="color:#ADBAC7;"> b</span><span style="color:#96D0FF;">&#39;0&#39;</span><span style="color:#ADBAC7;"> COMMENT </span><span style="color:#96D0FF;">&#39;是否已删除（0否 1是）&#39;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#032F62;">\`is_deleted\`</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">bit</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">1</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">NOT NULL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">DEFAULT</span><span style="color:#24292E;"> b</span><span style="color:#032F62;">&#39;0&#39;</span><span style="color:#24292E;"> COMMENT </span><span style="color:#032F62;">&#39;是否已删除（0否 1是）&#39;</span></span></code></pre></div><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#ADBAC7;">@</span><span style="color:#F47067;">Data</span></span>
<span class="line"><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">User</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#768390;">    /**</span></span>
<span class="line"><span style="color:#768390;">     * 是否已删除（0否 1是）</span></span>
<span class="line"><span style="color:#768390;">     */</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> Boolean</span><span style="color:#F69D50;"> </span><span style="color:#ADBAC7;">isDeleted;</span></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">@</span><span style="color:#D73A49;">Data</span></span>
<span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">User</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 是否已删除（0否 1是）</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> Boolean isDeleted;</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></div></div><h2 id="数据库设计" tabindex="-1">数据库设计 <a class="header-anchor" href="#数据库设计" aria-label="Permalink to &quot;数据库设计&quot;">​</a></h2>`,3),G={id:"采用utf8mb4编码",tabindex:"-1"},V=s("a",{class:"header-anchor",href:"#采用utf8mb4编码","aria-label":'Permalink to "采用utf8mb4编码 <Badge text="建议" />"'},"​",-1),Q=p('<div class="tip custom-block"><p class="custom-block-title">如果要存储特殊字符（例如：emoij表情符），使用 utf8mb4 编码。</p><p>MySQL 5.5.3 后增加了一个新的编码： <code>utf8mb4</code> ，其中 mb4 是 most bytes 4 的意思，用于兼容四字节的 unicode。</p><p><code>utf8mb4</code> 是 utf8 的超集，除了将编码改为 <code>utf8mb4</code> 外不需要做其他转换。</p><p>设计数据库时如果想要允许用户使用特殊符号，最好使用 <code>utf8mb4</code> 编码来存储，使得数据库有更好的兼容性，但是这样设计会导致耗费更多的存储空间。</p></div>',1);function Y(o,H,w,W,Z,$){const l=c("Badge"),y=d,i=c("ClientOnly");return r(),D("div",null,[s("h1",h,[a("个人 SQL 优化技巧 "),n(l,{text:"持续更新",type:"warning"}),a(),B]),n(i,null,{default:E(()=>{var e,t;return[(((e=o.$frontmatter)==null?void 0:e.aside)??!0)&&(((t=o.$frontmatter)==null?void 0:t.showArticleMetadata)??!0)?(r(),_(y,{key:0,article:o.$frontmatter},null,8,["article"])):C("",!0)]}),_:1}),u,s("h3",g,[a("如果确定结果只有一条，使用 LIMIT 1 "),n(l,{text:"建议"}),a(),T]),b,s("h3",m,[a("避免隐式类型转换 "),n(l,{text:"强制",type:"danger"}),a(),N]),v,s("h3",I,[a("列名带上前缀 "),n(l,{text:"建议"}),a(),f]),L,s("h3",S,[a("非负数列添加UNSIGNED无符号约束 "),n(l,{text:"建议"}),a(),M]),k,s("h3",O,[a("合理采用整数类型 "),n(l,{text:"建议"}),a(),x]),R,s("h3",U,[a("布尔列采用bit类型 "),n(l,{text:"建议"}),a(),P]),q,s("h3",G,[a("采用utf8mb4编码 "),n(l,{text:"建议"}),a(),V]),Q])}const X=A(F,[["render",Y]]);export{z as __pageData,X as default};
