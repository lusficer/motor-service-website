import{l as I,o as r,c as s,m as a,a as C,B as w,x as y,v as c,n as O,y as h,e as o,t as L,r as b,F as f,G as P,u as M,d as v}from"./index-D6MC70E2.js";var k={name:"ChevronRightIcon",extends:I},N=C("path",{d:"M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z",fill:"currentColor"},null,-1),R=[N];function S(e,i,t,l,m,n){return r(),s("svg",a({width:"14",height:"14",viewBox:"0 0 14 14",fill:"none",xmlns:"http://www.w3.org/2000/svg"},e.pti()),R,16)}k.render=S;var U={root:"p-breadcrumb p-component",menu:"p-breadcrumb-list",home:"p-breadcrumb-home",separator:"p-menuitem-separator",menuitem:function(i){var t=i.instance;return["p-menuitem",{"p-disabled":t.disabled()}]},action:"p-menuitem-link",icon:"p-menuitem-icon",label:"p-menuitem-text"},V=w.extend({name:"breadcrumb",classes:U}),A={name:"BaseBreadcrumb",extends:y,props:{model:{type:Array,default:null},home:{type:null,default:null}},style:V,provide:function(){return{$parentInstance:this}}},g={name:"BreadcrumbItem",hostName:"Breadcrumb",extends:y,props:{item:null,templates:null,index:null},methods:{onClick:function(i){this.item.command&&this.item.command({originalEvent:i,item:this.item})},visible:function(){return typeof this.item.visible=="function"?this.item.visible():this.item.visible!==!1},disabled:function(){return typeof this.item.disabled=="function"?this.item.disabled():this.item.disabled},label:function(){return typeof this.item.label=="function"?this.item.label():this.item.label},isCurrentUrl:function(){var i=this.item,t=i.to,l=i.url,m=typeof window<"u"?window.location.pathname:"";return t===m||l===m?"page":void 0}},computed:{ptmOptions:function(){return{context:{item:this.item,index:this.index}}},getMenuItemProps:function(){var i=this;return{action:a({class:this.cx("action"),"aria-current":this.isCurrentUrl(),onClick:function(l){return i.onClick(l)}},this.ptm("action",this.ptmOptions)),icon:a({class:[this.cx("icon"),this.item.icon]},this.ptm("icon",this.ptmOptions)),label:a({class:this.cx("label")},this.ptm("label",this.ptmOptions))}}}},D=["href","target","aria-current"];function E(e,i,t,l,m,n){return n.visible()?(r(),s("li",a({key:0,class:[e.cx("menuitem"),t.item.class]},e.ptm("menuitem",n.ptmOptions)),[t.templates.item?(r(),c(h(t.templates.item),{key:1,item:t.item,label:n.label(),props:n.getMenuItemProps},null,8,["item","label","props"])):(r(),s("a",a({key:0,href:t.item.url||"#",class:e.cx("action"),target:t.item.target,"aria-current":n.isCurrentUrl(),onClick:i[0]||(i[0]=function(){return n.onClick&&n.onClick.apply(n,arguments)})},e.ptm("action",n.ptmOptions)),[t.templates&&t.templates.itemicon?(r(),c(h(t.templates.itemicon),{key:0,item:t.item,class:O(e.cx("icon",n.ptmOptions))},null,8,["item","class"])):t.item.icon?(r(),s("span",a({key:1,class:[e.cx("icon"),t.item.icon]},e.ptm("icon",n.ptmOptions)),null,16)):o("",!0),t.item.label?(r(),s("span",a({key:2,class:e.cx("label")},e.ptm("label",n.ptmOptions)),L(n.label()),17)):o("",!0)],16,D))],16)):o("",!0)}g.render=E;var F={name:"Breadcrumb",extends:A,inheritAttrs:!1,components:{BreadcrumbItem:g,ChevronRightIcon:k}};function x(e,i,t,l,m,n){var p=b("BreadcrumbItem"),B=b("ChevronRightIcon");return r(),s("nav",a({class:e.cx("root")},e.ptmi("root")),[C("ol",a({class:e.cx("menu")},e.ptm("menu")),[e.home?(r(),c(p,a({key:0,item:e.home,class:e.cx("home"),templates:e.$slots,pt:e.pt,unstyled:e.unstyled},e.ptm("home")),null,16,["item","class","templates","pt","unstyled"])):o("",!0),(r(!0),s(f,null,P(e.model,function(d,u){return r(),s(f,{key:d.label+"_"+u},[e.home||u!==0?(r(),s("li",a({key:0,class:e.cx("separator")},e.ptm("separator")),[M(e.$slots,"separator",{},function(){return[v(B,a({"aria-hidden":"true"},e.ptm("separatorIcon")),null,16)]})],16)):o("",!0),v(p,{item:d,index:u,templates:e.$slots,pt:e.pt,unstyled:e.unstyled},null,8,["item","index","templates","pt","unstyled"])],64)}),128))],16)],16)}F.render=x;export{k as a,F as s};