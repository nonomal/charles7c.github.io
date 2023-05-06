import{_ as c}from"./chunks/ArticleMetadata.f3b87b78.js";import{_ as t,c as r,E as y,B as i,z as l,a as A,R as D,G as C,o as p,A as B,C as g}from"./chunks/framework.23582046.js";import"./chunks/md5.3856627a.js";const d="/assets/202105291230868.be8d6fcb.jpg",j=JSON.parse('{"title":"设计模式之单例模式","description":"","frontmatter":{"title":"设计模式之单例模式","author":"查尔斯","date":"2021/05/29 13:14","categories":["杂碎逆袭史"],"tags":["设计模式"]},"headers":[],"relativePath":"categories/fragments/2021/05/29/设计模式之单例模式.md","filePath":"categories/fragments/2021/05/29/设计模式之单例模式.md","lastUpdated":1662734844000}'),E={name:"categories/fragments/2021/05/29/设计模式之单例模式.md"},F=l("h1",{id:"设计模式之单例模式",tabindex:"-1"},[A("设计模式之单例模式 "),l("a",{class:"header-anchor",href:"#设计模式之单例模式","aria-label":'Permalink to "设计模式之单例模式"'},"​")],-1),u=D('<p><strong>C：</strong> 在现代程序开发过程中，无论是新手还是老手，都要熟练掌握面向对象的编程思想及编程方式。</p><p>而在面向对象的编程方式中，我们作为程序的掌控者，在操作一些业务单元时，都要先创建好对应的对象，然后通过操作对象来实现业务处理。</p><p>正因如此，对象的创建自然是每个程序员都手到擒来的事情了。</p><p><img src="'+d+`" alt="202105291230868"></p><p>大多数情况下，我们创建对象都是采用如下方式实现的：</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#ADBAC7;">类名 对象名 </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">new</span><span style="color:#ADBAC7;"> 类名();</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">类名 对象名 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> 类名();</span></span></code></pre></div><p>这种方式是最基本的对象创建方式，每次执行 new 关键字，都会为该类产生一个新的对象。</p><p>但在一些特殊的场景下，对于一个特定的类，我们可能希望它在全局只产生一个对象，即每次我们获取它的对象时，获取到的永远都是同一个！</p><p>这个需求很常见，在众多设计模式中也恰好有一种可以满足我们这项需求的模式，它就是单例模式。</p><h2 id="简介" tabindex="-1">简介 <a class="header-anchor" href="#简介" aria-label="Permalink to &quot;简介&quot;">​</a></h2><p>单例模式（Singleton Pattern）是 Java 中最简单的设计模式之一。这种类型的设计模式属于创建型模式，它提供了一种创建对象的最佳方式。</p><p>这种模式涉及到一个单一的类，该类负责创建自己的对象，同时确保只有单个对象被创建。这个类提供了一种访问其唯一的对象的方式，可以直接访问，不需要实例化该类的对象。</p><p>作为创建型设计模式一员的单例模式，无论是在日常工作使用中，还是在基础面试过程中，亦或是面试一些框架原理时，都或多或少会提及它。</p><p>但是，大多数初级程序员对单例模式，仅仅是了解到两种实现方式，即懒汉式、饿汉式的程度，而实际上呢，在面对多线程的环境下，单例模式也诞生了很多性能又佳且线程安全的实现方式，本篇笔者就带你一起研究。</p><h2 id="饿汉式" tabindex="-1">饿汉式 <a class="header-anchor" href="#饿汉式" aria-label="Permalink to &quot;饿汉式&quot;">​</a></h2><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Singleton</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">    /**</span></span>
<span class="line"><span style="color:#768390;">     * 私有化构造方法</span></span>
<span class="line"><span style="color:#768390;">     */</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">Singleton</span><span style="color:#ADBAC7;">() {}</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span></span>
<span class="line"><span style="color:#768390;">    /**</span></span>
<span class="line"><span style="color:#768390;">     * 静态唯一实例</span></span>
<span class="line"><span style="color:#768390;">     */</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">static</span><span style="color:#ADBAC7;"> Singleton</span><span style="color:#F69D50;"> </span><span style="color:#ADBAC7;">instance</span><span style="color:#F69D50;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">new</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">Singleton</span><span style="color:#ADBAC7;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">    /**</span></span>
<span class="line"><span style="color:#768390;">     * 公共的获取该类唯一实例的方法</span></span>
<span class="line"><span style="color:#768390;">     *</span></span>
<span class="line"><span style="color:#768390;">     * </span><span style="color:#F47067;">@return</span><span style="color:#768390;"> 该类唯一实例</span></span>
<span class="line"><span style="color:#768390;">     */</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">static</span><span style="color:#ADBAC7;"> Singleton </span><span style="color:#DCBDFB;">getInstance</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F47067;">return</span><span style="color:#ADBAC7;"> instance;</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Singleton</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 私有化构造方法</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Singleton</span><span style="color:#24292E;">() {}</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 静态唯一实例</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> Singleton instance </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Singleton</span><span style="color:#24292E;">();</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 公共的获取该类唯一实例的方法</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> 该类唯一实例</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> Singleton </span><span style="color:#6F42C1;">getInstance</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> instance;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>首先，通过私有化构造方法，外界就不能再直接通过 new 的方式来创建该类的对象了。</p><p>其次，为了保证在全局只有一个该类的实例，那么就要考虑将该类的唯一实例设置为静态的，因为静态信息是随着类的加载而初始化的，所以它只会执行一次且会一直随着该类的存在而存在。</p><p>最后，为了让外界能够获取到该类的唯一实例，我们就必须要准备一个公共的静态方法来提供这一唯一实例。</p><h2 id="懒汉式" tabindex="-1">懒汉式 <a class="header-anchor" href="#懒汉式" aria-label="Permalink to &quot;懒汉式&quot;">​</a></h2><p>饿汉式之所以称之为饿汉式，就是因为饿汉式不管你是不是立刻需要该类的唯一实例，只要它的类加载，这个唯一实例就创建好了，像一个饿了很久的大汉一样迫不及待。</p><p>但是，当我们暂时不需要该类的唯一实例时，饿汉式所提供的唯一实例依然会出现在内存中，占据着我们宝贵的内存空间。</p><p>所以，随之而来的就是，我们希望这个类在我们需要它的唯一实例时再去给我们提供好，懒汉式也就随之出现了。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Singleton</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">    /**</span></span>
<span class="line"><span style="color:#768390;">     * 私有化构造方法</span></span>
<span class="line"><span style="color:#768390;">     */</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">Singleton</span><span style="color:#ADBAC7;">() {}</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span></span>
<span class="line"><span style="color:#768390;">    /**</span></span>
<span class="line"><span style="color:#768390;">     * 静态唯一实例</span></span>
<span class="line"><span style="color:#768390;">     */</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">static</span><span style="color:#ADBAC7;"> Singleton</span><span style="color:#F69D50;"> </span><span style="color:#ADBAC7;">instance;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">    /**</span></span>
<span class="line"><span style="color:#768390;">     * 公共的获取该类唯一实例的方法</span></span>
<span class="line"><span style="color:#768390;">     *</span></span>
<span class="line"><span style="color:#768390;">     * </span><span style="color:#F47067;">@return</span><span style="color:#768390;"> 该类唯一实例</span></span>
<span class="line"><span style="color:#768390;">     */</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">static</span><span style="color:#ADBAC7;"> Singleton </span><span style="color:#DCBDFB;">getInstance</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F47067;">if</span><span style="color:#ADBAC7;"> (</span><span style="color:#6CB6FF;">null</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">==</span><span style="color:#ADBAC7;"> instance) {</span></span>
<span class="line"><span style="color:#ADBAC7;">            instance </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">new</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">Singleton</span><span style="color:#ADBAC7;">();</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F47067;">return</span><span style="color:#ADBAC7;"> instance;</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Singleton</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 私有化构造方法</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Singleton</span><span style="color:#24292E;">() {}</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 静态唯一实例</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> Singleton instance;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 公共的获取该类唯一实例的方法</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> 该类唯一实例</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> Singleton </span><span style="color:#6F42C1;">getInstance</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> instance) {</span></span>
<span class="line"><span style="color:#24292E;">            instance </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Singleton</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> instance;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>通过在 getInstance 方法中判断没有唯一实例后，再进行初始化，就可以保证这个唯一实例会在我们需要它的时候才会进行创建，我们称之为懒加载。</p><h2 id="线程安全的懒汉式" tabindex="-1">线程安全的懒汉式 <a class="header-anchor" href="#线程安全的懒汉式" aria-label="Permalink to &quot;线程安全的懒汉式&quot;">​</a></h2><p>但是，因为我们把这个创建实例的过程放在了 getInstance 方法中，如果是单线程来操作该方法，那没有任何意外。</p><p>可惜的是，很多时候，我们的系统环境都是多线程的，当多线程来操作该方法时，因为线程抢占式执行，可能会出现：线程 1 在执行该方法，通过 if null 判断之后，被线程 2 抢占了 CPU 资源，这时候线程 2 在执行该方法的时候，因为该类唯一的实例还没创建，所以线程 2 也可以通过 if null 判断 ...，于是后面就会创建多个该类的实例了。</p><p>为了解决多线程的安全问题，首先应该想到的就是给这个方法添加 synchronized 关键字，这样就可以保证同一时刻只允许一个线程来操作该方法了。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Singleton</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">    /**</span></span>
<span class="line"><span style="color:#768390;">     * 私有化构造方法</span></span>
<span class="line"><span style="color:#768390;">     */</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">Singleton</span><span style="color:#ADBAC7;">() {}</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span></span>
<span class="line"><span style="color:#768390;">    /**</span></span>
<span class="line"><span style="color:#768390;">     * 静态唯一实例</span></span>
<span class="line"><span style="color:#768390;">     */</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">static</span><span style="color:#ADBAC7;"> Singleton</span><span style="color:#F69D50;"> </span><span style="color:#ADBAC7;">instance;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">    /**</span></span>
<span class="line"><span style="color:#768390;">     * 公共的获取该类唯一实例的方法</span></span>
<span class="line"><span style="color:#768390;">     *</span></span>
<span class="line"><span style="color:#768390;">     * </span><span style="color:#F47067;">@return</span><span style="color:#768390;"> 该类唯一实例</span></span>
<span class="line"><span style="color:#768390;">     */</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">synchronized</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">static</span><span style="color:#ADBAC7;"> Singleton </span><span style="color:#DCBDFB;">getInstance</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F47067;">if</span><span style="color:#ADBAC7;"> (</span><span style="color:#6CB6FF;">null</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">==</span><span style="color:#ADBAC7;"> instance) {</span></span>
<span class="line"><span style="color:#ADBAC7;">            instance </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">new</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">Singleton</span><span style="color:#ADBAC7;">();</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F47067;">return</span><span style="color:#ADBAC7;"> instance;</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Singleton</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 私有化构造方法</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Singleton</span><span style="color:#24292E;">() {}</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 静态唯一实例</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> Singleton instance;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 公共的获取该类唯一实例的方法</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> 该类唯一实例</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">synchronized</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> Singleton </span><span style="color:#6F42C1;">getInstance</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> instance) {</span></span>
<span class="line"><span style="color:#24292E;">            instance </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Singleton</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> instance;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="双重校验锁-双检索" tabindex="-1">双重校验锁（双检索） <a class="header-anchor" href="#双重校验锁-双检索" aria-label="Permalink to &quot;双重校验锁（双检索）&quot;">​</a></h2><p>但是在方法层面添加锁之后，意味着后续哪怕已经创建好了唯一实例，每次还是要被锁 “严防死守”，效率太低，那怎么办才好呢？</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Singleton</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">    /**</span></span>
<span class="line"><span style="color:#768390;">     * 私有化构造方法</span></span>
<span class="line"><span style="color:#768390;">     */</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">Singleton</span><span style="color:#ADBAC7;">() {}</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span></span>
<span class="line"><span style="color:#768390;">    /**</span></span>
<span class="line"><span style="color:#768390;">     * 静态唯一实例，添加volatile关键字防止指令重排</span></span>
<span class="line"><span style="color:#768390;">     */</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">static</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">volatile</span><span style="color:#ADBAC7;"> Singleton</span><span style="color:#F69D50;"> </span><span style="color:#ADBAC7;">instance;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">    /**</span></span>
<span class="line"><span style="color:#768390;">     * 公共的获取该类唯一实例的方法</span></span>
<span class="line"><span style="color:#768390;">     *</span></span>
<span class="line"><span style="color:#768390;">     * </span><span style="color:#F47067;">@return</span><span style="color:#768390;"> 该类唯一实例</span></span>
<span class="line"><span style="color:#768390;">     */</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">static</span><span style="color:#ADBAC7;"> Singleton </span><span style="color:#DCBDFB;">getInstance</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#768390;">// 提升效率的实例检测</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F47067;">if</span><span style="color:#ADBAC7;"> (</span><span style="color:#6CB6FF;">null</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">==</span><span style="color:#ADBAC7;"> instance) {</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#768390;">// 同步锁，解决线程安全问题</span></span>
<span class="line"><span style="color:#ADBAC7;">            </span><span style="color:#F47067;">synchronized</span><span style="color:#ADBAC7;"> (Singleton.class) {</span></span>
<span class="line"><span style="color:#ADBAC7;">                </span><span style="color:#768390;">// 再次实例检测</span></span>
<span class="line"><span style="color:#ADBAC7;">                </span><span style="color:#F47067;">if</span><span style="color:#ADBAC7;"> (</span><span style="color:#6CB6FF;">null</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">==</span><span style="color:#ADBAC7;"> instance) {</span></span>
<span class="line"><span style="color:#ADBAC7;">                    instance </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">new</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">Singleton</span><span style="color:#ADBAC7;">();</span></span>
<span class="line"><span style="color:#ADBAC7;">                }</span></span>
<span class="line"><span style="color:#ADBAC7;">            }</span></span>
<span class="line"><span style="color:#ADBAC7;">        }</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F47067;">return</span><span style="color:#ADBAC7;"> instance;</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Singleton</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 私有化构造方法</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Singleton</span><span style="color:#24292E;">() {}</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 静态唯一实例，添加volatile关键字防止指令重排</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">volatile</span><span style="color:#24292E;"> Singleton instance;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 公共的获取该类唯一实例的方法</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> 该类唯一实例</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> Singleton </span><span style="color:#6F42C1;">getInstance</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 提升效率的实例检测</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> instance) {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#6A737D;">// 同步锁，解决线程安全问题</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#D73A49;">synchronized</span><span style="color:#24292E;"> (Singleton.class) {</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#6A737D;">// 再次实例检测</span></span>
<span class="line"><span style="color:#24292E;">                </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#005CC5;">null</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> instance) {</span></span>
<span class="line"><span style="color:#24292E;">                    instance </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Singleton</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">                }</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> instance;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>在这种方式里，getInstance 方法不再添加 synchronized 关键字，而是通过在方法体中添加同步代码块的方式来解决线程安全问题。</p><p>为什么要先做一次 if null 判断呢？上一种方式中也提到了，懒汉式实现中，线程不安全的地方是因为最开始还没有创建好唯一实例的时候，多个线程可能都通过了 if null 判断，然后导致多个实例被创建。而如果在创建了唯一实例之后，是不是多线程环境其实就没有什么影响了，因为多个线程过来都是无法通过 if null 判断，直接获取该类的唯一实例就可以了，所以它可以有效地提升后续多线程操作该方法的效率。</p><p>至于后面的同步代码块，笔者觉得不需要解释了吧？它就是对上一种方式的锁范围进行了缩小而已，缩小之后，之前该如何，现在自然还如何。</p><p>当然，笔者也明白，还是会有同学疑惑为什么同步锁内还要再判断，为什么不用对象锁？一个个再解答一下。</p><p>同步锁内还要进行判断，是因为 getInstance 方法这回没加锁，如果是最开始没创建好唯一实例的时候，多线程来操作该方法，可能都会通过 if null 判断，如果同步锁内不加判断，那只不过是让创建多个实例的过程变成排队方式而已，最终它还是会出现多个实例。所以必须再加一次判断，来让即使通过了 if null 判断的线程也不能 “放肆”。正因为如此，这种方式被称为双重校验。</p><p>还有，不用对象锁是因为它也用不了，静态方法内只能用静态信息啊。</p><p>当然，笔者也差点忘记提的是，我们在这个静态唯一实例前添加了一个 volatile 关键字，这也是你们容易忽视掉的。</p><p>为什么要添加这个关键字呢？因为 Java 中通过 new 来创建对象过程中有一些小问题存在。想要看看 new 对象究竟是如何执行的，可以通过 <strong>javap -c 字节码文件</strong> 指令来查看一下它所执行的 JVM 指令。</p><p>笔者这里就不贴 JVM 指令代码了，简单说一下创建对象的流程。</p><p>1.分配对象的内存空间</p><p>2.调用构造器方法，执行对象初始化</p><p>3.将对象内存地址赋值给引用变量</p><p>在这些指令实际执行的过程中，指令顺序是有可能经过 JVM 和 CPU 优化而重排顺序的。以上代码 2，3 可能发生重新排序，也就是说，最终执行的顺序可能是 1，3，2，即先将分配的内存地址赋值给引用变量再初始化对象。</p><p>单线程情况下，自然没有问题，但如果是多线程环境的话，当线程 1 执行完了 1，3 之后，唯一实例虽然还没有完成初始化，但是此时它也不再指向 null 了，如果这时候线程 2 抢占到了 CPU 资源，执行外层的 if null 判断后发现实例已经不为 null 了，直接返回，这时候返回的是一个未初始化的实例，如果线程 2 恰好又立即使用上了这个未初始化的实例，就会出现一系列的问题。</p><p>所以，我们要禁止在 new 这个唯一实例时发生指令重排序，那就需要将它用 volatile 关键字来进行修饰，volatile 关键字可以阻止变量访问前后的指令重排，保证指令执行顺序。这样它就不会发生这个问题了，也就保证了多线程环境内的系统安全。</p><h2 id="静态内部类-登记式" tabindex="-1">静态内部类（登记式） <a class="header-anchor" href="#静态内部类-登记式" aria-label="Permalink to &quot;静态内部类（登记式）&quot;">​</a></h2><p>双重校验锁形式设计的还真的挺不错的。不过，笔者相信还是会有同学不太甘心，难道就没有又能拥有懒汉式的懒加载特点，又拥有饿汉式无需关注线程安全的方式吗？</p><p>你再看看下面的这种方式。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Singleton</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">    /**</span></span>
<span class="line"><span style="color:#768390;">     * 私有化构造方法</span></span>
<span class="line"><span style="color:#768390;">     */</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">Singleton</span><span style="color:#ADBAC7;">() {}</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span></span>
<span class="line"><span style="color:#768390;">    /**</span></span>
<span class="line"><span style="color:#768390;">     * 静态内部类</span></span>
<span class="line"><span style="color:#768390;">     */</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">static</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">class</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">SingletonHolder</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F47067;">private</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">static</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">final</span><span style="color:#ADBAC7;"> Singleton</span><span style="color:#F69D50;"> </span><span style="color:#ADBAC7;">INSTANCE</span><span style="color:#F69D50;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">new</span><span style="color:#ADBAC7;"> </span><span style="color:#DCBDFB;">Singleton</span><span style="color:#ADBAC7;">();</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span></span>
<span class="line"><span style="color:#768390;">    /**</span></span>
<span class="line"><span style="color:#768390;">     * 公共的获取该类唯一实例的方法</span></span>
<span class="line"><span style="color:#768390;">     *</span></span>
<span class="line"><span style="color:#768390;">     * </span><span style="color:#F47067;">@return</span><span style="color:#768390;"> 该类唯一实例</span></span>
<span class="line"><span style="color:#768390;">     */</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">static</span><span style="color:#ADBAC7;"> Singleton </span><span style="color:#DCBDFB;">getInstance</span><span style="color:#ADBAC7;">() {</span></span>
<span class="line"><span style="color:#ADBAC7;">        </span><span style="color:#F47067;">return</span><span style="color:#ADBAC7;"> SingletonHolder.instance;</span></span>
<span class="line"><span style="color:#ADBAC7;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Singleton</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 私有化构造方法</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Singleton</span><span style="color:#24292E;">() {}</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 静态内部类</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">class</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">SingletonHolder</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">private</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">final</span><span style="color:#24292E;"> Singleton INSTANCE </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Singleton</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 公共的获取该类唯一实例的方法</span></span>
<span class="line"><span style="color:#6A737D;">     *</span></span>
<span class="line"><span style="color:#6A737D;">     * </span><span style="color:#D73A49;">@return</span><span style="color:#6A737D;"> 该类唯一实例</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">static</span><span style="color:#24292E;"> Singleton </span><span style="color:#6F42C1;">getInstance</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> SingletonHolder.instance;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>在这种方式里，我们定义了一个静态内部类，在静态内部类中，定义了一个静态常量，它就是当前类的唯一实例。然后在 getInstance 方法中，我们只需要从静态内部类中将这个唯一实例取出来就可以了。</p><p>因为这个唯一实例是定义在静态内部类中的，静态内部类是在使用时才会加载的，而不是在 Singleton 类加载的时候加载的，所以它拥有了懒汉式的懒加载特点。</p><p>又因为它是定义在一个静态内部类中的静态常量，所以它也不存在线程安全问题，真可谓是一举两得。</p><h2 id="枚举" tabindex="-1">枚举 <a class="header-anchor" href="#枚举" aria-label="Permalink to &quot;枚举&quot;">​</a></h2><p>除了双重校验锁方式之外，还有优雅的静态内部类方式，看起来似乎已经能够满足我们使用了。没错，在大多数情况下，它们已经没有问题了。但还不算完，上述的这些方式，它们都还存在着一种致命的问题，这个问题会破坏我们设计的单例实现。</p><p>不知道你还认不认识 Java 的一个高级特性：反射呢？这个让我们又爱又恨的特性，在这个时候只能给我们带来无穷的碎碎念了。</p><p>通过暴力反射，我们对这个单例类所设置的构造方法私有化，就失去了它的价值。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#768390;">// 获取字节码对象</span></span>
<span class="line"><span style="color:#ADBAC7;">Class</span><span style="color:#F69D50;">&lt;</span><span style="color:#F47067;">Singleton</span><span style="color:#F69D50;">&gt; </span><span style="color:#ADBAC7;">singletonClass</span><span style="color:#F69D50;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> Singleton.class;</span></span>
<span class="line"><span style="color:#768390;">// 获取无参构造方法</span></span>
<span class="line"><span style="color:#ADBAC7;">Constructor</span><span style="color:#F69D50;">&lt;</span><span style="color:#F47067;">Singleton</span><span style="color:#F69D50;">&gt; </span><span style="color:#ADBAC7;">constructor</span><span style="color:#F69D50;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> singletonClass.</span><span style="color:#DCBDFB;">getDeclaredConstructor</span><span style="color:#ADBAC7;">();</span></span>
<span class="line"><span style="color:#768390;">// 暴力反射</span></span>
<span class="line"><span style="color:#ADBAC7;">constructor.</span><span style="color:#DCBDFB;">setAccessible</span><span style="color:#ADBAC7;">(</span><span style="color:#6CB6FF;">true</span><span style="color:#ADBAC7;">);</span></span>
<span class="line"><span style="color:#768390;">// 创建两个对象</span></span>
<span class="line"><span style="color:#ADBAC7;">Singleton</span><span style="color:#F69D50;"> </span><span style="color:#ADBAC7;">singleton1</span><span style="color:#F69D50;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> constructor.</span><span style="color:#DCBDFB;">newInstance</span><span style="color:#ADBAC7;">();</span></span>
<span class="line"><span style="color:#ADBAC7;">Singleton</span><span style="color:#F69D50;"> </span><span style="color:#ADBAC7;">singleton2</span><span style="color:#F69D50;"> </span><span style="color:#F47067;">=</span><span style="color:#ADBAC7;"> constructor.</span><span style="color:#DCBDFB;">newInstance</span><span style="color:#ADBAC7;">();</span></span>
<span class="line"><span style="color:#768390;">// 比较结果，并非同一个对象</span></span>
<span class="line"><span style="color:#ADBAC7;">System.out.</span><span style="color:#DCBDFB;">println</span><span style="color:#ADBAC7;">(singleton1 </span><span style="color:#F47067;">==</span><span style="color:#ADBAC7;"> singleton2); </span><span style="color:#768390;">// false</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 获取字节码对象</span></span>
<span class="line"><span style="color:#24292E;">Class&lt;</span><span style="color:#D73A49;">Singleton</span><span style="color:#24292E;">&gt; singletonClass </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> Singleton.class;</span></span>
<span class="line"><span style="color:#6A737D;">// 获取无参构造方法</span></span>
<span class="line"><span style="color:#24292E;">Constructor&lt;</span><span style="color:#D73A49;">Singleton</span><span style="color:#24292E;">&gt; constructor </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> singletonClass.</span><span style="color:#6F42C1;">getDeclaredConstructor</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;">// 暴力反射</span></span>
<span class="line"><span style="color:#24292E;">constructor.</span><span style="color:#6F42C1;">setAccessible</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">true</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 创建两个对象</span></span>
<span class="line"><span style="color:#24292E;">Singleton singleton1 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> constructor.</span><span style="color:#6F42C1;">newInstance</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">Singleton singleton2 </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> constructor.</span><span style="color:#6F42C1;">newInstance</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#6A737D;">// 比较结果，并非同一个对象</span></span>
<span class="line"><span style="color:#24292E;">System.out.</span><span style="color:#6F42C1;">println</span><span style="color:#24292E;">(singleton1 </span><span style="color:#D73A49;">==</span><span style="color:#24292E;"> singleton2); </span><span style="color:#6A737D;">// false</span></span></code></pre></div><p>不要急，我们再来认识最后一种比较优雅的单例实现：枚举。通过定义一个枚举类型就可以实现单例模式，并且还可以解决掉反射的问题。</p><p>我们都知道枚举类型实际上就是一个继承自 Enum 类型的 final 类，枚举类型的构造默认也是私有的，而在枚举类型中定义的枚举值们则实际上是该类的一个个静态实例对象而已。所以，我们只定义一个枚举值，这不就是该类的单例了吗？</p><p>再加上枚举是 Java 团队制定的一种语法，在运行时，JVM 会阻止反射方式获取枚举类的私有构造方法。这样我们的单例模式就不会被破坏掉了。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#F47067;">public</span><span style="color:#ADBAC7;"> </span><span style="color:#F47067;">enum</span><span style="color:#ADBAC7;"> </span><span style="color:#F69D50;">Singleton</span><span style="color:#ADBAC7;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#768390;">    /**</span></span>
<span class="line"><span style="color:#768390;">     * 静态唯一实例</span></span>
<span class="line"><span style="color:#768390;">     */</span></span>
<span class="line"><span style="color:#ADBAC7;">    </span><span style="color:#6CB6FF;">INSTANCE</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ADBAC7;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">public</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">enum</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Singleton</span><span style="color:#24292E;"> {</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">    /**</span></span>
<span class="line"><span style="color:#6A737D;">     * 静态唯一实例</span></span>
<span class="line"><span style="color:#6A737D;">     */</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">INSTANCE</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>如果你不相信，可以用反射去试试，你将会遇见下方的结果。</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki github-dark-dimmed vp-code-dark"><code><span class="line"><span style="color:#ADBAC7;">Exception in thread </span><span style="color:#96D0FF;">&quot;main&quot;</span><span style="color:#ADBAC7;"> java.lang.NoSuchMethodException</span><span style="color:#F47067;">:</span><span style="color:#ADBAC7;"> com.example.pattern05.SingletonPattern.demo6.Singleton.</span><span style="color:#F47067;">&lt;</span><span style="color:#ADBAC7;">init</span><span style="color:#F47067;">&gt;</span><span style="color:#ADBAC7;">()</span></span>
<span class="line"><span style="color:#ADBAC7;">    at java.lang.Class.</span><span style="color:#DCBDFB;">getConstructor0</span><span style="color:#ADBAC7;">(Class.java</span><span style="color:#F47067;">:</span><span style="color:#6CB6FF;">3082</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">    at java.lang.Class.</span><span style="color:#DCBDFB;">getDeclaredConstructor</span><span style="color:#ADBAC7;">(Class.java</span><span style="color:#F47067;">:</span><span style="color:#6CB6FF;">2178</span><span style="color:#ADBAC7;">)</span></span>
<span class="line"><span style="color:#ADBAC7;">    at com.example.pattern05.SingletonPattern.demo6.Test.</span><span style="color:#DCBDFB;">main</span><span style="color:#ADBAC7;">(Test.java</span><span style="color:#F47067;">:</span><span style="color:#6CB6FF;">16</span><span style="color:#ADBAC7;">)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">Exception in thread </span><span style="color:#032F62;">&quot;main&quot;</span><span style="color:#24292E;"> java.lang.NoSuchMethodException</span><span style="color:#D73A49;">:</span><span style="color:#24292E;"> com.example.pattern05.SingletonPattern.demo6.Singleton.</span><span style="color:#D73A49;">&lt;</span><span style="color:#24292E;">init</span><span style="color:#D73A49;">&gt;</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">    at java.lang.Class.</span><span style="color:#6F42C1;">getConstructor0</span><span style="color:#24292E;">(Class.java</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">3082</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    at java.lang.Class.</span><span style="color:#6F42C1;">getDeclaredConstructor</span><span style="color:#24292E;">(Class.java</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">2178</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    at com.example.pattern05.SingletonPattern.demo6.Test.</span><span style="color:#6F42C1;">main</span><span style="color:#24292E;">(Test.java</span><span style="color:#D73A49;">:</span><span style="color:#005CC5;">16</span><span style="color:#24292E;">)</span></span></code></pre></div><p>另外，其实枚举式还有一个好处，就是如果涉及到反序列化创建单例对象时，它可以保证反序列化的返回结果是同一对象。对于其他方式实现的单例模式，如果既想要做到可序列化，又想要反序列化为同一对象，则必须实现 readResolve 方法。</p><h2 id="后记" tabindex="-1">后记 <a class="header-anchor" href="#后记" aria-label="Permalink to &quot;后记&quot;">​</a></h2><p><strong>C：</strong> 其实，还有一些像 CAS 等方式实现的单例模式，有兴趣的同学们可以自行去了解一下。而上述的这些方式，是我们平时用到最多的单例模式实现方式。</p><p>在实际使用的时候，需要根据实际的需求来灵活进行选择，当你确定要在全局持续使用的时候，那么饿汉式、枚举式都比较适合，而如果明确需要懒加载的时候，那么双重校验锁、静态内部类的方式就比较适合。而如果你想防止反射破坏的话，那就可以选择枚举式。如果你需要涉及反序列化创建对象，那也可以选择枚举式。但是，如果你需要对单例类进行继承等操作，那就不能选择它了。</p><p>总之，能够解决需求的方式就是好方式。</p><h2 id="参考资料" tabindex="-1">参考资料 <a class="header-anchor" href="#参考资料" aria-label="Permalink to &quot;参考资料&quot;">​</a></h2><p>[1]单例模式：<a href="https://www.runoob.com/design-pattern/singleton-pattern.html" target="_blank" rel="noreferrer">https://www.runoob.com/design-pattern/singleton-pattern.html</a></p><p>[2]为什么双重检查锁模式需要 volatile ？<a href="https://www.cnblogs.com/goodAndyxublog/p/11356402.html" target="_blank" rel="noreferrer">https://www.cnblogs.com/goodAndyxublog/p/11356402.html</a></p><p>[3]如何写出更优雅的单例模式？<a href="https://mp.weixin.qq.com/s/AdJI5a4w515SPPI_4gVImA" target="_blank" rel="noreferrer">https://mp.weixin.qq.com/s/AdJI5a4w515SPPI_4gVImA</a></p>`,75);function h(s,v,m,S,b,f){const o=c,e=C("ClientOnly");return p(),r("div",null,[F,y(e,null,{default:i(()=>{var n,a;return[(((n=s.$frontmatter)==null?void 0:n.aside)??!0)&&(((a=s.$frontmatter)==null?void 0:a.showArticleMetadata)??!0)?(p(),B(o,{key:0,article:s.$frontmatter},null,8,["article"])):g("",!0)]}),_:1}),u])}const I=t(E,[["render",h]]);export{j as __pageData,I as default};
