(this["webpackJsonpto-do-list"]=this["webpackJsonpto-do-list"]||[]).push([[0],{11:function(e,t,n){e.exports={li:"List_li__2JXXT",label:"List_label__1r1xI",span:"List_span__DR7jK",ul:"List_ul__2Iprr",checkbox:"List_checkbox__3poBb",done:"List_done__39dvZ",delete:"List_delete__4VRRG",index:"List_index__6EI6F",post:"List_post__3SKfM"}},132:function(e,t,n){e.exports=n(253)},137:function(e,t,n){},138:function(e,t,n){},253:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),s=n(46),c=n.n(s),i=(n(137),n(138),n(17)),r=n(6),l=n(102),d=n(71),u=n(37),m={lists:[{idOfPost:1,postInList:"Reading",done:!1},{idOfPost:2,postInList:"Cooking",done:!1}]},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:m,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_POST":var n={idOfPost:t.id,postInList:t.newPostText,done:!1};return Object(u.a)(Object(u.a)({},e),{},{lists:[].concat(Object(d.a)(e.lists),[n])});case"REMOVE_TODO":return Object(u.a)(Object(u.a)({},e),{},{lists:Object(d.a)(e.lists.filter((function(e){return e.idOfPost!==t.id})))});default:return e}},p=n(100),E=Object(r.c)({toDoList:_,form:p.a}),O=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||r.d,b=Object(r.e)(E,O(Object(r.a)(l.a)));window.store=b;var f=b,h=n(11),T=n.n(h),v=n(98),x=n(99),g=n(67),D=n.n(g),L=n(49),w=n(105),P=n(106),j=function(e){var t=e.index,n=Object(P.a)(e,["index"]),s=Object(a.useState)(!1),c=Object(w.a)(s,2),i=c[0],r=c[1];return o.a.createElement(o.a.Fragment,null,o.a.createElement("ul",{className:T.a.ul},o.a.createElement("li",{className:D()(T.a.li,Object(L.a)({},T.a.done,!0===i))},o.a.createElement("span",{className:T.a.span},o.a.createElement("input",{className:T.a.checkbox,type:"checkbox",checked:i,onChange:function(e){!function(e){r(e.target.checked),console.log(i)}(e)}}),o.a.createElement("div",{className:T.a.index},n.id=t+1),o.a.createElement("div",{className:T.a.post},n.post)),o.a.createElement("button",{className:T.a.delete,onClick:function(){return e=n.id,void n.removeToDoAC(e);var e}},"\xd7"))))},I=n(104),N=Object(x.a)({form:"newPostText"})((function(e){var t=e.lists.map((function(t,n){return o.a.createElement("div",{key:t.idOfPost},o.a.createElement(j,{index:n,post:t.postInList,id:t.idOfPost,done:t.done,changeToDone:e.changeToDone,changeIndex:e.changeIndex,removeToDoAC:e.removeToDoAC}))})),n=e.handleSubmit;return o.a.createElement("form",{onSubmit:n},o.a.createElement("div",null,o.a.createElement("label",{className:T.a.label},"Tasks to do:"),t,o.a.createElement(v.a,{name:"newPostText",component:"input",type:"text",validate:[Object(I.required)()]})),o.a.createElement("button",{type:"submit"},"Add Item"))})),k=n(22),A=Object(i.b)((function(e){return{lists:e.toDoList.lists}}),{addPostToList:function(e,t){return{type:"ADD_POST",newPostText:e,id:t}},changeToDone:function(e){return{type:"CHANGE_TO_DONE",ids:e}},changeIndex:function(e){return{type:"CHANGE_INDEX",index:e}},removeToDoAC:function(e){return{type:"REMOVE_TODO",id:e}}})((function(e){return o.a.createElement(N,{lists:e.lists,addPostToList:e.addPostToList,changeIndex:e.changeIndex,changeToDone:e.changeToDone,onSubmit:function(t,n){e.addPostToList(t.newPostText),n(Object(k.a)("newPostText"))},removeToDoAC:e.removeToDoAC})}));var C=function(e){return o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:"App"},o.a.createElement(i.a,{store:f},o.a.createElement("header",{className:"App-header"},o.a.createElement(A,null)))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[132,1,2]]]);
//# sourceMappingURL=main.17239bff.chunk.js.map