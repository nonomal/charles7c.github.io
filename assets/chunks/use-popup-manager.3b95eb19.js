import{g as C,i as k,_,n as w,o as N,f as B}from"./md5.bbc6a2af.js";import{d as S,e as l,o as T,c as v,n as L,Y as h,x as O,a5 as z,f as j,w as P,h as U,a8 as H,L as Y}from"./framework.61d29026.js";const V=S({name:"IconCheckCircleFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:t}){const n=C("icon"),o=l(()=>[n,`${n}-check-circle-fill`,{[`${n}-spin`]:e.spin}]),r=l(()=>{const s={};return e.size&&(s.fontSize=k(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:o,innerStyle:r,onClick:s=>{t("click",s)}}}}),Z=["stroke-width","stroke-linecap","stroke-linejoin"],K=O("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm10.207-24.379a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0L22 26.172l-4.878-4.88a1 1 0 0 0-1.415 0l-1.414 1.415a1 1 0 0 0 0 1.414l7 7a1 1 0 0 0 1.414 0l11.5-11.5Z",fill:"currentColor",stroke:"none"},null,-1),x=[K];function G(e,t,n,o,r,i){return T(),v("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:L(e.cls),style:h(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:t[0]||(t[0]=(...s)=>e.onClick&&e.onClick(...s))},x,14,Z)}var a=_(V,[["render",G]]);const pe=Object.assign(a,{install:(e,t)=>{var n;const o=(n=t==null?void 0:t.iconPrefix)!=null?n:"";e.component(o+a.name,a)}}),X=S({name:"IconCloseCircleFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:t}){const n=C("icon"),o=l(()=>[n,`${n}-close-circle-fill`,{[`${n}-spin`]:e.spin}]),r=l(()=>{const s={};return e.size&&(s.fontSize=k(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:o,innerStyle:r,onClick:s=>{t("click",s)}}}}),q=["stroke-width","stroke-linecap","stroke-linejoin"],W=O("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm4.955-27.771-4.95 4.95-4.95-4.95a1 1 0 0 0-1.414 0l-1.414 1.414a1 1 0 0 0 0 1.414l4.95 4.95-4.95 4.95a1 1 0 0 0 0 1.414l1.414 1.414a1 1 0 0 0 1.414 0l4.95-4.95 4.95 4.95a1 1 0 0 0 1.414 0l1.414-1.414a1 1 0 0 0 0-1.414l-4.95-4.95 4.95-4.95a1 1 0 0 0 0-1.414l-1.414-1.414a1 1 0 0 0-1.414 0Z",fill:"currentColor",stroke:"none"},null,-1),J=[W];function Q(e,t,n,o,r,i){return T(),v("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:L(e.cls),style:h(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:t[0]||(t[0]=(...s)=>e.onClick&&e.onClick(...s))},J,14,q)}var d=_(X,[["render",Q]]);const me=Object.assign(d,{install:(e,t)=>{var n;const o=(n=t==null?void 0:t.iconPrefix)!=null?n:"";e.component(o+d.name,d)}}),F=S({name:"IconExclamationCircleFill",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:t}){const n=C("icon"),o=l(()=>[n,`${n}-exclamation-circle-fill`,{[`${n}-spin`]:e.spin}]),r=l(()=>{const s={};return e.size&&(s.fontSize=k(e.size)?`${e.size}px`:e.size),e.rotate&&(s.transform=`rotate(${e.rotate}deg)`),s});return{cls:o,innerStyle:r,onClick:s=>{t("click",s)}}}}),ee=["stroke-width","stroke-linecap","stroke-linejoin"],te=O("path",{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Zm-2-11a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v2Zm4-18a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1V15Z",fill:"currentColor",stroke:"none"},null,-1),ne=[te];function oe(e,t,n,o,r,i){return T(),v("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:L(e.cls),style:h(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:t[0]||(t[0]=(...s)=>e.onClick&&e.onClick(...s))},ne,14,ee)}var f=_(F,[["render",oe]]);const Ce=Object.assign(f,{install:(e,t)=>{var n;const o=(n=t==null?void 0:t.iconPrefix)!=null?n:"";e.component(o+f.name,f)}});var R;(function(e){e[e.ELEMENT=1]="ELEMENT",e[e.FUNCTIONAL_COMPONENT=2]="FUNCTIONAL_COMPONENT",e[e.STATEFUL_COMPONENT=4]="STATEFUL_COMPONENT",e[e.COMPONENT=6]="COMPONENT",e[e.TEXT_CHILDREN=8]="TEXT_CHILDREN",e[e.ARRAY_CHILDREN=16]="ARRAY_CHILDREN",e[e.SLOTS_CHILDREN=32]="SLOTS_CHILDREN",e[e.TELEPORT=64]="TELEPORT",e[e.SUSPENSE=128]="SUSPENSE",e[e.COMPONENT_SHOULD_KEEP_ALIVE=256]="COMPONENT_SHOULD_KEEP_ALIVE",e[e.COMPONENT_KEPT_ALIVE=512]="COMPONENT_KEPT_ALIVE"})(R||(R={}));var $;(function(e){e[e.TEXT=1]="TEXT",e[e.CLASS=2]="CLASS",e[e.STYLE=4]="STYLE",e[e.PROPS=8]="PROPS",e[e.FULL_PROPS=16]="FULL_PROPS",e[e.HYDRATE_EVENTS=32]="HYDRATE_EVENTS",e[e.STABLE_FRAGMENT=64]="STABLE_FRAGMENT",e[e.KEYED_FRAGMENT=128]="KEYED_FRAGMENT",e[e.UNKEYED_FRAGMENT=256]="UNKEYED_FRAGMENT",e[e.NEED_PATCH=512]="NEED_PATCH",e[e.DYNAMIC_SLOTS=1024]="DYNAMIC_SLOTS",e[e.DEV_ROOT_FRAGMENT=2048]="DEV_ROOT_FRAGMENT",e[e.HOISTED=-1]="HOISTED",e[e.BAIL=-2]="BAIL"})($||($={}));const c=e=>!!(e&&e.shapeFlag&1),u=(e,t)=>!!(e&&e.shapeFlag&6),re=(e,t)=>!!(e&&e.shapeFlag&8),A=(e,t)=>!!(e&&e.shapeFlag&16),b=(e,t)=>!!(e&&e.shapeFlag&32),E=e=>{var t,n;if(e)for(const o of e){if(c(o)||u(o))return o;if(A(o,o.children)){const r=E(o.children);if(r)return r}else if(b(o,o.children)){const r=(n=(t=o.children).default)==null?void 0:n.call(t);if(r){const i=E(r);if(i)return i}}else if(N(o)){const r=E(o);if(r)return r}}},ke=e=>{if(!e)return!0;for(const t of e)if(t.children)return!1;return!0},ie=(e,t)=>{if(e&&e.length>0)for(let n=0;n<e.length;n++){const o=e[n];if(c(o)||u(o)){const i=w(t)?t(o):t;return e[n]=z(o,i,!0),!0}const r=M(o);if(r&&r.length>0&&ie(r,t))return!0}return!1},M=e=>{if(A(e,e.children))return e.children;if(N(e))return e},g=e=>{var t,n;if(c(e))return e.el;if(u(e)){if(((t=e.el)==null?void 0:t.nodeType)===1)return e.el;if((n=e.component)!=null&&n.subTree){const o=g(e.component.subTree);if(o)return o}}else{const o=M(e);return se(o)}},se=e=>{if(e&&e.length>0)for(const t of e){const n=g(t);if(n)return n}},p=(e,t=!1)=>{var n,o;const r=[];for(const i of e??[])c(i)||u(i)||t&&re(i,i.children)?r.push(i):A(i,i.children)?r.push(...p(i.children,t)):b(i,i.children)?r.push(...p((o=(n=i.children).default)==null?void 0:o.call(n),t)):N(i)&&r.push(...p(i,t));return r},_e=e=>{if(e)return w(e)?e:()=>e},y=()=>{},I=(()=>{try{return!(typeof window<"u"&&document!==void 0)}catch{return!0}})(),Ne=(()=>I?y:(e,t,n,o=!1)=>{e.addEventListener(t,n,o)})(),Se=(()=>I?y:(e,t,n,o=!1)=>{e.removeEventListener(t,n,o)})(),Te=e=>{const t=document.createElement("div");return t.setAttribute("class",`arco-overlay arco-overlay-${e}`),t},le=(e,t)=>{var n;return I?y():(n=(t??document).querySelector(e))!=null?n:void 0},ve=(e,t)=>{if(B(e)){const n=e[0]==="#"?`[id='${e.slice(1)}']`:e;return le(n,t)}return e},Le=(e,t)=>{const n=e.getBoundingClientRect(),o=t.getBoundingClientRect();return{top:n.top-o.top,bottom:o.bottom-n.bottom,left:n.left-o.left,right:o.right-n.right,width:n.width,height:n.height}},he=["info","success","warning","error"],Oe=["onFocus","onFocusin","onFocusout","onBlur","onChange","onBeforeinput","onInput","onReset","onSubmit","onInvalid","onKeydown","onKeypress","onKeyup","onCopy","onCut","onPaste","onCompositionstart","onCompositionupdate","onCompositionend","onSelect","autocomplete","autofocus","maxlength","minlength","name","pattern","readonly","required"],ce=1e3,ue=5e3,ae=1;class de{constructor(){this.popupStack={popup:new Set,dialog:new Set,message:new Set},this.getNextZIndex=t=>(t==="message"?Array.from(this.popupStack.message).pop()||ue:Array.from(this.popupStack.popup).pop()||ce)+ae,this.add=t=>{const n=this.getNextZIndex(t);return this.popupStack[t].add(n),t==="dialog"&&this.popupStack.popup.add(n),n},this.delete=(t,n)=>{this.popupStack[n].delete(t),n==="dialog"&&this.popupStack.popup.delete(t)},this.isLastDialog=t=>this.popupStack.dialog.size>1?t===Array.from(this.popupStack.dialog).pop():!0}}const m=new de;function Ae(e,{visible:t,runOnMounted:n}={}){const o=j(0),r=()=>{o.value=m.add(e)},i=()=>{m.delete(o.value,e)},s=()=>e==="dialog"?m.isLastDialog(o.value):!1;return P(()=>t==null?void 0:t.value,D=>{D?r():i()},{immediate:!0}),n&&(U(()=>{r()}),H(()=>{i()})),{zIndex:Y(o),open:r,close:i,isLastDialog:s}}export{pe as I,he as M,Ce as a,me as b,Oe as c,se as d,ve as e,Se as f,E as g,Le as h,ke as i,p as j,_e as k,Te as l,ie as m,Ne as o,Ae as u};