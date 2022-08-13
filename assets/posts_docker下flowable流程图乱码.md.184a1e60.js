import{_ as s,c as a,o as n,d as l}from"./app.152919ed.js";const u=JSON.parse('{"title":"docker\u90E8\u7F72\u7684springboot\u5E94\u7528flowable\u6D41\u7A0B\u56FE\u4E71\u7801","description":"docker\u3001springboot\u3001flowable","frontmatter":{"title":"docker\u90E8\u7F72\u7684springboot\u5E94\u7528flowable\u6D41\u7A0B\u56FE\u4E71\u7801","description":"docker\u3001springboot\u3001flowable","date":"2022-08-09T00:00:00.000Z","category":"Bug","tags":["docker","flowable"]},"headers":[{"level":3,"title":"docker\u90E8\u7F72\u7684flowable\u6D41\u7A0B\u56FE\u4E71\u7801","slug":"docker\u90E8\u7F72\u7684flowable\u6D41\u7A0B\u56FE\u4E71\u7801"}],"relativePath":"posts/docker\u4E0Bflowable\u6D41\u7A0B\u56FE\u4E71\u7801.md","lastUpdated":1660395537000}'),e={name:"posts/docker\u4E0Bflowable\u6D41\u7A0B\u56FE\u4E71\u7801.md"},p=l(`<h3 id="docker\u90E8\u7F72\u7684flowable\u6D41\u7A0B\u56FE\u4E71\u7801" tabindex="-1">docker\u90E8\u7F72\u7684flowable\u6D41\u7A0B\u56FE\u4E71\u7801 <a class="header-anchor" href="#docker\u90E8\u7F72\u7684flowable\u6D41\u7A0B\u56FE\u4E71\u7801" aria-hidden="true">#</a></h3><p>docker \u67E5\u770B\u5BB9\u5668\u7684\u957Fid</p><div class="language-sh line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker inspect -f </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{{.ID}}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> \u77EDid</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>docker\u590D\u5236\u6587\u4EF6\u81F3\u5BB9\u5668\u5185</p><div class="language-sh line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker cp \u672C\u5730\u8DEF\u5F84 \u5BB9\u5668\u957FID:\u5BB9\u5668\u8DEF\u5F84</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u5C06Windows\u4E0B C:\\Windows\\Fonts\u4E0B\u7684\u5B57\u4F53\u6587\u4EF6\u63D0\u53D6</p><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">simsun.ttc \u5B8B\u4F53\u5E38\u89C4</span></span>
<span class="line"><span style="color:#A6ACCD;">simhei.ttf \u9ED1\u4F53\u5E38\u89C4</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><div class="language- line-numbers-mode"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">#\u4F9D\u8D56\u955C\u50CF\u540D\u79F0\u548CID</span></span>
<span class="line"><span style="color:#A6ACCD;">FROM centos:7</span></span>
<span class="line"><span style="color:#A6ACCD;">#\u6307\u5B9A\u955C\u50CF\u521B\u5EFA\u8005\u4FE1\u606F</span></span>
<span class="line"><span style="color:#A6ACCD;">MAINTAINER admin</span></span>
<span class="line"><span style="color:#A6ACCD;">#\u5207\u6362\u5DE5\u4F5C\u76EE\u5F55</span></span>
<span class="line"><span style="color:#A6ACCD;">WORKDIR /usr</span></span>
<span class="line"><span style="color:#A6ACCD;">RUN mkdir /usr/local/java</span></span>
<span class="line"><span style="color:#A6ACCD;">#ADD \u662F\u76F8\u5BF9\u8DEF\u5F84jar,\u628Ajava\u6DFB\u52A0\u5230\u5BB9\u5668\u4E2D</span></span>
<span class="line"><span style="color:#A6ACCD;">ADD jdk-8u333-linux-x64.tar.gz /usr/local/java/</span></span>
<span class="line"><span style="color:#A6ACCD;">ADD simsun.ttc /usr/local/java/jdk1.8.0_333/jre/lib/fonts</span></span>
<span class="line"><span style="color:#A6ACCD;">ADD simhei.ttf /usr/local/java/jdk1.8.0_333/jre/lib/fonts</span></span>
<span class="line"><span style="color:#A6ACCD;">#\u914D\u7F6Ejava\u73AF\u5883\u53D8\u91CF</span></span>
<span class="line"><span style="color:#A6ACCD;">ENV JAVA_HOME /usr/local/java/jdk1.8.0_333</span></span>
<span class="line"><span style="color:#A6ACCD;">ENV JRE_HOME $JAVA_HOME/jre</span></span>
<span class="line"><span style="color:#A6ACCD;">ENV CLASSPATH $JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib:$CLASSPATH</span></span>
<span class="line"><span style="color:#A6ACCD;">ENV PATH $JAVA_HOME/bin:$PATH</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br></div></div>`,8),r=[p];function o(c,i,t,d,b,A){return n(),a("div",null,r)}var m=s(e,[["render",o]]);export{u as __pageData,m as default};
