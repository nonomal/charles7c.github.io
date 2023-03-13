import{_ as d}from"./chunks/ArticleMetadata.1e241581.js";import{_ as y,c as C,x as c,a as l,C as e,z as h,Q as B,D as p,o,y as A,A as D}from"./chunks/framework.2cf2879d.js";import"./chunks/md5.d51b63f1.js";const q=JSON.parse('{"title":"个人常用 Docker 命令","description":"","frontmatter":{"title":"个人常用 Docker 命令","author":"查尔斯","date":"2022/10/01 22:33","isTop":true,"categories":["杂碎逆袭史"],"tags":["Docker"]},"headers":[{"level":2,"title":"镜像相关","slug":"镜像相关","link":"#镜像相关","children":[{"level":3,"title":"查看本地镜像列表","slug":"查看本地镜像列表","link":"#查看本地镜像列表","children":[]},{"level":3,"title":"从记录中心查询镜像","slug":"从记录中心查询镜像","link":"#从记录中心查询镜像","children":[]},{"level":3,"title":"从记录中心拉取镜像到本地","slug":"从记录中心拉取镜像到本地","link":"#从记录中心拉取镜像到本地","children":[]},{"level":3,"title":"删除本地镜像","slug":"删除本地镜像","link":"#删除本地镜像","children":[]},{"level":3,"title":"从 Dockerfile 创建镜像","slug":"从-dockerfile-创建镜像","link":"#从-dockerfile-创建镜像","children":[]},{"level":3,"title":"将本地镜像导出为 tar 文件","slug":"将本地镜像导出为-tar-文件","link":"#将本地镜像导出为-tar-文件","children":[]},{"level":3,"title":"从 tar 文件导入为本地镜像","slug":"从-tar-文件导入为本地镜像","link":"#从-tar-文件导入为本地镜像","children":[]}]},{"level":2,"title":"容器相关","slug":"容器相关","link":"#容器相关","children":[{"level":3,"title":"查看容器列表","slug":"查看容器列表","link":"#查看容器列表","children":[]},{"level":3,"title":"创建容器并运行","slug":"创建容器并运行","link":"#创建容器并运行","children":[]},{"level":3,"title":"停止容器","slug":"停止容器","link":"#停止容器","children":[]},{"level":3,"title":"启动容器","slug":"启动容器","link":"#启动容器","children":[]},{"level":3,"title":"重启容器","slug":"重启容器","link":"#重启容器","children":[]},{"level":3,"title":"删除容器","slug":"删除容器","link":"#删除容器","children":[]},{"level":3,"title":"进入容器内部","slug":"进入容器内部","link":"#进入容器内部","children":[]},{"level":3,"title":"从容器内部退出","slug":"从容器内部退出","link":"#从容器内部退出","children":[]},{"level":3,"title":"向容器内拷贝文件","slug":"向容器内拷贝文件","link":"#向容器内拷贝文件","children":[]},{"level":3,"title":"查看容器日志","slug":"查看容器日志","link":"#查看容器日志","children":[]},{"level":3,"title":"备份容器为本地镜像","slug":"备份容器为本地镜像","link":"#备份容器为本地镜像","children":[]},{"level":3,"title":"将容器导出为 tar.gz 文件","slug":"将容器导出为-tar-gz-文件","link":"#将容器导出为-tar-gz-文件","children":[]},{"level":3,"title":"将 tar.gz 文件导入为镜像","slug":"将-tar-gz-文件导入为镜像","link":"#将-tar-gz-文件导入为镜像","children":[]}]},{"level":2,"title":"网络相关","slug":"网络相关","link":"#网络相关","children":[{"level":3,"title":"查看网络列表","slug":"查看网络列表","link":"#查看网络列表","children":[]},{"level":3,"title":"创建 bridge 网络","slug":"创建-bridge-网络","link":"#创建-bridge-网络","children":[]},{"level":3,"title":"删除网络","slug":"删除网络","link":"#删除网络","children":[]}]},{"level":2,"title":"其他","slug":"其他","link":"#其他","children":[{"level":3,"title":"查看 docker 版本","slug":"查看-docker-版本","link":"#查看-docker-版本","children":[]},{"level":3,"title":"查看 docker 信息","slug":"查看-docker-信息","link":"#查看-docker-信息","children":[]}]},{"level":2,"title":"docker-compose命令","slug":"docker-compose命令","link":"#docker-compose命令","children":[{"level":3,"title":"启动并后台运行所有的服务","slug":"启动并后台运行所有的服务","link":"#启动并后台运行所有的服务","children":[]},{"level":3,"title":"停止并删除容器、网络、卷、镜像","slug":"停止并删除容器、网络、卷、镜像","link":"#停止并删除容器、网络、卷、镜像","children":[]},{"level":3,"title":"列出项目中目前的所有容器","slug":"列出项目中目前的所有容器","link":"#列出项目中目前的所有容器","children":[]},{"level":3,"title":"停止容器","slug":"停止容器-1","link":"#停止容器-1","children":[]},{"level":3,"title":"启动容器","slug":"启动容器-1","link":"#启动容器-1","children":[]},{"level":3,"title":"修改 yml 文件后，重新启动并后台运行","slug":"修改-yml-文件后-重新启动并后台运行","link":"#修改-yml-文件后-重新启动并后台运行","children":[]}]}],"relativePath":"categories/fragments/2022/10/01/个人常用Docker命令.md","lastUpdated":1667738288000}'),k={name:"categories/fragments/2022/10/01/个人常用Docker命令.md"},F={id:"个人常用-docker-命令",tabindex:"-1"},g=c("a",{class:"header-anchor",href:"#个人常用-docker-命令","aria-hidden":"true"},"#",-1),u=B("",76);function v(s,b,m,E,f,x){const t=p("Badge"),r=d,i=p("ClientOnly");return o(),C("div",null,[c("h1",F,[l("个人常用 Docker 命令 "),e(t,{text:"持续更新",type:"warning"}),l(),g]),e(i,null,{default:h(()=>{var a,n;return[(((a=s.$frontmatter)==null?void 0:a.aside)??!0)&&(((n=s.$frontmatter)==null?void 0:n.showArticleMetadata)??!0)?(o(),A(r,{key:0,article:s.$frontmatter},null,8,["article"])):D("",!0)]}),_:1}),u])}const z=y(k,[["render",v]]);export{q as __pageData,z as default};
