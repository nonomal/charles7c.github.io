import{_ as p}from"./chunks/ArticleMetadata.1e241581.js";import{_,c as E,C as t,z as u,x as e,a,Q as d,D as n,o,y as A,A as B}from"./chunks/framework.2cf2879d.js";import"./chunks/md5.d51b63f1.js";const f="/assets/202010071016008.4d202ffb.png",g="/assets/202010071027166.60f5cba9.png",m="/assets/202010071032777.5ab8e8b8.png",D="/assets/202010071032888.1275e838.png",C="/assets/202010061032999.816b9f5a.png",R=JSON.parse('{"title":"控制语句和流程图","description":"","frontmatter":{"title":"控制语句和流程图","author":"查尔斯","date":"2020/10/07 11:15","categories":["Java基础快速入门"],"tags":["Java","Java基础"]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"概述","slug":"概述","link":"#概述","children":[]},{"level":2,"title":"顺序控制语句","slug":"顺序控制语句","link":"#顺序控制语句","children":[]},{"level":2,"title":"选择控制语句","slug":"选择控制语句","link":"#选择控制语句","children":[]},{"level":2,"title":"循环控制语句","slug":"循环控制语句","link":"#循环控制语句","children":[]},{"level":2,"title":"流程图","slug":"流程图","link":"#流程图","children":[{"level":3,"title":"概述","slug":"概述-1","link":"#概述-1","children":[]},{"level":3,"title":"图示","slug":"图示","link":"#图示","children":[]},{"level":3,"title":"示例","slug":"示例","link":"#示例","children":[]},{"level":3,"title":"注意事项","slug":"注意事项","link":"#注意事项","children":[]}]},{"level":2,"title":"参考文献","slug":"参考文献","link":"#参考文献","children":[]},{"level":2,"title":"后记","slug":"后记","link":"#后记","children":[]}],"relativePath":"courses/java/01-Java语法入门/07-控制语句和流程图.md","lastUpdated":1663999704000}'),b={name:"courses/java/01-Java语法入门/07-控制语句和流程图.md"},v=e("h1",{id:"控制语句和流程图",tabindex:"-1"},[a("控制语句和流程图 "),e("a",{class:"header-anchor",href:"#控制语句和流程图","aria-hidden":"true"},"#")],-1),w=d("",9),k=e("h2",{id:"选择控制语句",tabindex:"-1"},[a("选择控制语句 "),e("a",{class:"header-anchor",href:"#选择控制语句","aria-hidden":"true"},"#")],-1),x=e("p",null,[a("本篇我们要学习的选择结构就属于 "),e("strong",null,"选择控制语句"),a(" 。 "),e("strong",null,"选择控制语句"),a(" 也被称为分支结构语句，选择结构有特定的语法规则，代码要执行具体的逻辑运算进行判断，逻辑运算的结果有两个或多个（真或假），所以产生了选择，根据不同的选择就会执行不同的代码。[1]")],-1),F=e("h2",{id:"循环控制语句",tabindex:"-1"},[a("循环控制语句 "),e("a",{class:"header-anchor",href:"#循环控制语句","aria-hidden":"true"},"#")],-1),T=e("p",null,"循环控制语句可以在满足循环条件的情况下，反复执行某一段代码，这段被重复执行的代码被称为循环体语句（循环操作）。当反复执行这个循环体时，需要在合适的时候把循环判断条件修改为 false ，从而结束循环，否则循环将一直执行下去，形成死循环。[1]",-1),V=d("",22);function q(l,N,S,J,P,$){const c=p,h=n("ClientOnly"),i=n("Mermaid");return o(),E("div",null,[v,t(h,null,{default:u(()=>{var r,s;return[(((r=l.$frontmatter)==null?void 0:r.aside)??!0)&&(((s=l.$frontmatter)==null?void 0:s.showArticleMetadata)??!0)?(o(),A(c,{key:0,article:l.$frontmatter},null,8,["article"])):B("",!0)]}),_:1}),w,t(i,{id:"mermaid_382ee186",graph:"flowchart%20LR%0A%20%20%20%20A(%5B%E5%BC%80%E5%A7%8B%5D)%20--%3E%20B%5B%E8%AF%AD%E5%8F%A51%5D%0A%20%20%20%20B%20--%3E%20C%5B%E8%AF%AD%E5%8F%A52%5D%0A%20%20%20%20C%20--%3E%20D%5B%E8%AF%AD%E5%8F%A53%5D%0A%20%20%20%20D%20--%3E%20E(%5B%E7%BB%93%E6%9D%9F%5D)"}),k,x,t(i,{id:"mermaid_382ee1a4",graph:"flowchart%20LR%0A%20%20%20%20A(%5B%E5%BC%80%E5%A7%8B%5D)%20--%3E%20B%7B%E6%9D%A1%E4%BB%B6%E8%A1%A8%E8%BE%BE%E5%BC%8F%7D%0A%20%20%20%20B%20--%3E%7C%E6%98%AF%7C%20C%5B%E8%AF%AD%E5%8F%A5%5D%0A%20%20%20%20C%20--%3E%20D%0A%20%20%20%20B%20--%3E%7C%E5%90%A6%7C%20D(%5B%E7%BB%93%E6%9D%9F%5D)"}),F,T,t(i,{id:"mermaid_382ee1c2",graph:"flowchart%20LR%0A%20%20%20%20A(%5B%E5%BC%80%E5%A7%8B%5D)%20--%3E%20B%7B%E5%BE%AA%E7%8E%AF%E6%9D%A1%E4%BB%B6%7D%0A%20%20%20%20B%20--%3E%7C%E6%98%AF%7C%20C%5B%E5%BE%AA%E7%8E%AF%E6%93%8D%E4%BD%9C%5D%0A%20%20%20%20C%20--%3E%20B%0A%20%20%20%20B%20--%3E%7C%E5%90%A6%7C%20D(%5B%E7%BB%93%E6%9D%9F%5D)"}),V])}const y=_(b,[["render",q]]);export{R as __pageData,y as default};
