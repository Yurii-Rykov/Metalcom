"use strict";(self.webpackChunkmetalcom=self.webpackChunkmetalcom||[]).push([[483],{483:function(a,e,c){c.r(e),c.d(e,{default:function(){return o}});var t=c(885),r=c(2791),s=c(1087),i=c(7689),n=c(9434),d=c(2722),l=c(3439),_={thumb:"ProductCard_thumb__pS5z4",container:"ProductCard_container__hZ+ht",aside:"ProductCard_aside__cWrh1",category:"ProductCard_category__MEhYQ",list:"ProductCard_list__iDfEQ",cardContainer:"ProductCard_cardContainer__J1pd-",card:"ProductCard_card__2vPPq",item:"ProductCard_item__mYUcL",active:"ProductCard_active__lBomi ProductCard_item__mYUcL",img:"ProductCard_img__aAmZW",listImg:"ProductCard_listImg__ICgpx",itemImg:"ProductCard_itemImg__hEgtj",card_wrapper:"ProductCard_card_wrapper__c-Zks",features:"ProductCard_features__2TVlu",features_item:"ProductCard_features_item__i9RM9",card_title:"ProductCard_card_title__WR+X4",card_size_item:"ProductCard_card_size_item__ivm+t",card_text_base:"ProductCard_card_text_base__V0Hc-",btn_connect:"ProductCard_btn_connect__a65w1"},m=c(184),o=function(){var a,e,c=(0,i.UO)().productId,o=(0,s.lr)(),u=(0,t.Z)(o,1)[0],h=(0,r.useState)(!1),x=(0,t.Z)(h,2),f=x[0],j=x[1],g=(0,r.useState)(),C=(0,t.Z)(g,2),p=C[0],N=C[1],v=(0,r.useRef)(null),P=(0,i.s0)(),b=u.get("catalog"),z=(0,n.v9)((function(a){return a.catalogs[b-1]})),k=null===z||void 0===z?void 0:z.find((function(a){return a.id===c}));(0,r.useEffect)((function(){!k&&P("/pageNotFound")}));var w=function(){j((function(a){return!a}))};return console.log("product: ",k),k&&(0,m.jsxs)("div",{className:"sectionWidth",children:[(0,m.jsxs)("div",{className:_.thumb,children:[(0,m.jsx)(d.zx,{text:"\u041d\u0430\u0437\u0430\u0434",icon:"".concat(l.Z,"#arrowLeft"),onClick:function(){return P(-1)}}),(0,m.jsxs)("h2",{className:_.card_title,children:[k.subname,': "',k.name,'"']}),(0,m.jsx)(d.aV,{})]}),(0,m.jsxs)("div",{className:_.container,children:[(0,m.jsx)("aside",{className:_.aside,children:(0,m.jsx)("ul",{className:_.list,children:z.map((function(a){var e=a.subname,t=a.name,r=a.img,s=a.id;return(0,m.jsxs)("li",{className:s===c?_.active:_.item,children:[(0,m.jsxs)("p",{className:_.category,children:[e,": ",(0,m.jsx)("span",{className:_.cardName,children:t})]}),(0,m.jsx)("img",{className:_.img,src:r,alt:"",width:"150",onClick:function(){return function(a){P("/product/".concat(a,"?catalog=").concat(b),{replace:!0})}(s)}})]},s)}))})}),(0,m.jsxs)("div",{className:_.cardContainer,children:[(0,m.jsxs)("div",{className:_.card,children:[(0,m.jsx)("div",{className:_.card_wrapper,children:(0,m.jsx)("img",{src:k.img,alt:"",width:"600",ref:v,className:_.card_img,onClick:function(){N((0,m.jsx)("img",{src:v.current.src,alt:""})),w()}})}),(0,m.jsxs)("ul",{className:_.features,children:[k.features.map((function(a){return(0,m.jsx)("li",{className:_.features_item,children:a},a)})),(0,m.jsxs)("ul",{className:_.card_size,children:[k.support&&(0,m.jsxs)("li",{className:_.card_size_item,children:["square"===k.support?"\u041a\u0432\u0430\u0434\u0440\u0430\u0442":"\u0414\u0438\u0430\u043c\u0435\u0442\u0440"," ",k.supportSize," mm"]}),(0,m.jsx)("li",{className:_.card_size_item,children:k.minHeight?"\u041c\u0438\u043d\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u044b\u0441\u043e\u0442\u0430:  ".concat(k.minHeight,"mm"):""}),(0,m.jsx)("li",{className:_.card_size_item,children:k.maxHeight?"\u041c\u0430\u043a\u0441\u0438\u043c\u0430\u043b\u044c\u043d\u0430\u044f \u0432\u044b\u0441\u043e\u0442\u0430:  ".concat(k.maxHeight,"mm"):""}),(0,m.jsx)("li",{className:_.card_size_item,children:k.fastening?"\u041a\u0440\u0435\u043f\u043b\u0435\u043d\u0438\u0435 \u0441\u0442\u043e\u043b\u0435\u0448\u043d\u0438\u0446\u044b: ".concat(k.fastening):""}),(0,m.jsx)("li",{className:_.card_size_item,children:k.base?(0,m.jsxs)("div",{className:_.card_text_base,children:["\u0411\u0430\u0437\u0430:\xa0",null===(a=k.base)||void 0===a?void 0:a.map((function(a){return(0,m.jsxs)("p",{className:_.card_text_item,children:[a,"\xa0"]},a)}))]}):""})]}),(0,m.jsx)("div",{className:_.btn_connect,children:(0,m.jsx)(d.zx,{text:"\u0417\u0432'\u044f\u0437\u0430\u0442\u0438\u0441\u044c \u0437 \u043d\u0430\u043c\u0438",onClick:function(){N((0,m.jsx)(d.t,{})),w()}})})]})]}),(0,m.jsx)("ul",{className:_.listImg,children:null===(e=k.additionalImg)||void 0===e?void 0:e.map((function(a){return(0,m.jsx)("li",{className:_.itemImg,children:(0,m.jsx)("img",{src:a,alt:"",width:"150",onClick:function(){return e=a,void(v.current.src=e);var e}})},a)}))})]})]}),f&&(0,m.jsx)(d.u_,{onClose:w,child:p})]})}}}]);
//# sourceMappingURL=483.c3b9fb49.chunk.js.map