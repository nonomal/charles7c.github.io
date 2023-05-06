import{_ as p}from"./chunks/ArticleMetadata.f3b87b78.js";import{_ as c,c as r,E as i,B as d,z as t,a as h,R as m,G as y,o,A as u,C as _}from"./chunks/framework.23582046.js";import"./chunks/md5.3856627a.js";const G=JSON.parse('{"title":"修改Git最后一次提交记录的作者和邮箱","description":"","frontmatter":{"title":"修改Git最后一次提交记录的作者和邮箱","author":"查尔斯","date":"2022/03/26 10:30","categories":["杂碎逆袭史"],"tags":["Git"]},"headers":[],"relativePath":"categories/fragments/2022/03/26/修改Git最后一次提交记录的作者和邮箱.md","filePath":"categories/fragments/2022/03/26/修改Git最后一次提交记录的作者和邮箱.md","lastUpdated":1661780865000}'),g={name:"categories/fragments/2022/03/26/修改Git最后一次提交记录的作者和邮箱.md"},C=t("h1",{id:"修改git最后一次提交记录的作者和邮箱",tabindex:"-1"},[h("修改Git最后一次提交记录的作者和邮箱 "),t("a",{class:"header-anchor",href:"#修改git最后一次提交记录的作者和邮箱","aria-label":'Permalink to "修改Git最后一次提交记录的作者和邮箱"'},"​")],-1),F=m('<h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p><strong>C：</strong> 今天周末了，抽出了一点时间继续维护下之前提到过的衍生开源项目。修了一个 bug 后，提交了一下。但是突然想起来，今天开发用的是工作本，工作本中的 Git author、email 是配的真实姓名和公司邮箱，提交前忘了修改，现在已经推送到开源平台了，这肯定不行啊。</p><p>但是现在即使修改了本地的 Git author、email 配置，历史提交记录也改变不了啊。别着急，看看怎么解决的。</p><h2 id="问题解决" tabindex="-1">问题解决 <a class="header-anchor" href="#问题解决" aria-label="Permalink to &quot;问题解决&quot;">​</a></h2><p>如果你确定是和笔者一样的情况，即确保是要修改最后一次提交记录，无论有没有推送到远程仓库都没问题。解决方法就两步，是不是很简单？</p><ol><li><p>修改最后一次提交的作者和邮箱信息</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F69D50;">git</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">commit</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">--amend</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">--author=</span><span style="color:#96D0FF;">&quot;Charles7c &lt;charles7c@126.com&gt;&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--amend</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--author=</span><span style="color:#032F62;">&quot;Charles7c &lt;charles7c@126.com&gt;&quot;</span></span></code></pre></div></li><li><p>最后将本地的修改强制推送到远程仓库即可（如果你没推送到远程仓库，这步就不需要执行了）</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F69D50;">git</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">push</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">--force</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">push</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--force</span></span></code></pre></div></li></ol><h2 id="后记" tabindex="-1">后记 <a class="header-anchor" href="#后记" aria-label="Permalink to &quot;后记&quot;">​</a></h2><p><strong>C：</strong> 另外说一下，如果你要修改最后一次提交记录的 commit message，执行下面的命令就可以了。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F69D50;">git</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">commit</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">--amend</span><span style="color:#ADBAC7;"> </span><span style="color:#6CB6FF;">-m</span><span style="color:#ADBAC7;"> </span><span style="color:#96D0FF;">&quot;要修改为的提交信息&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">git</span><span style="color:#24292E;"> </span><span style="color:#032F62;">commit</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">--amend</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-m</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;要修改为的提交信息&quot;</span></span></code></pre></div><p>上方修改作者和邮箱信息的命令，还可以继续加参数 <code>--date</code> 来修改提交时间，有需要的话去试试去吧。</p>',10);function A(s,f,b,v,k,B){const l=p,n=y("ClientOnly");return o(),r("div",null,[C,i(n,null,{default:d(()=>{var a,e;return[(((a=s.$frontmatter)==null?void 0:a.aside)??!0)&&(((e=s.$frontmatter)==null?void 0:e.showArticleMetadata)??!0)?(o(),u(l,{key:0,article:s.$frontmatter},null,8,["article"])):_("",!0)]}),_:1}),F])}const P=c(g,[["render",A]]);export{G as __pageData,P as default};
