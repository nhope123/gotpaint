(this.webpackJsonpgotpaint=this.webpackJsonpgotpaint||[]).push([[0],{28:function(e,t,c){},29:function(e,t,c){},30:function(e,t,c){},31:function(e,t,c){"use strict";c.r(t);var i=c(0),n=c(1),o=c.n(n),a=c(5),r=c.n(a),s=c(4),d=c(3),l="searchSelect",h="addSelect",u="removeSelect",j="logSelect",b="saveSelect",p="backupSelect",O=function(){return{type:l}},m=function(){return{type:h}},v=function(){return{type:u}},N=function(){return{type:j}},x=function(){return{type:b}},P=function(){return{type:p}},f={role:["show","hide","hide","hide","hide","hide"],select:["active","","","","",""]};var M=c(2),A=c(16),S={Acura:{},BMW:{283:1,300:1,482:2,475:1,A51:1,A52:1,A22:1,A35:1,B39:1,X04:1},Chrysler:{EBL:1,PBX:1,PVK:1,PGH:1,PXR:2,PAV:1,PR3:1,PRH:2,PEL:2,PG8:1,PDM:1,PS2:2,PP4:1,PBV:1,PSC:1,PQD:1,PVG:1},Fiat:{PX8:1},Ford:{G2:1,G3:2,JV:1,NZ:1,UH:2,U6:1,UG:1,VX:1,VH:2,VJ:1,Y2:1},GMC:{"122V":1,"224L":1,"534F":1,"706S":1,"817K":2,"810T":1,9792:1,"994L":1,"403P":1,WS5:1,WA565Q:1,WA139X:1,WA232M:1,WA9753:1,WA502Q:2,WA213M:1,WA960:1,WA505Q:1,WA707S:1,WA503Q:1,YR600M:1},Honda:{B561P:1,B527P:2,B537M:2,B588P:1,B92P:1,G508P:1,G51P:1,NH624P:3,NH788P:3,NH797M:3,NH578:1,NH658P:5,NH739M:1,NH707:1,NH623M:1,NH731P:1,NH741:1,NH737M:2,NH883P:1,NH782M:1,NH675M:1,NH603P:1,NH677P:1,"NAH-BASE":1,R525P:2,R530P:1,R543P:1,RP32P:1,R81:1,YR562P:1,YR573M:1,YR574M:1,YR578M:1},Hyundai:{P3:2,WJ:1,DO:1,TR3:2,NGA:1,"2X":1,T3:1,EB:1,P9R:1,NAA:1,TG4:1,SWP:1,BV:1},Infiniti:{},Kia:{"SWP-BASE":1,ABP:1,"7V":1,U4:1,IM:1,IE:1,HO:1,DRB:1},Mazada:{189:1,"27A":1,211:1,"22V":1,"28B":1,"26X":1,"28W":1,"38H":1,"34J":2,"32V":1,"35N":1,"34R":1,"38P":1,"34K":1,"32S":1,"42A":2,"42S":2,"42M":1,"46G":1,"41W":1,JAG:1},Mercedes:{149:2,197:2,650:1,775:1,792:1,903:1},Mini:{A31:1,D14:1,850:1},Mitsubishi:{X42:1},Nissan:{C12:1,G41:3,L5D:1,LAE:1,K23:1,K26:1,KAD:2,KY2:1,KX6:1,K36:1,NAH:1,QX3:2,RAB:1,W40:1},Porsche:{LM3W:1},Subaru:{A9K:1,C62:1,O2C:1,"61K":1},Toyota:{"1E3":1,"1G1":1,"1F7":1,"1D2":1,"1C6":1,"1G0":1,"1F9":1,"2O2":1,"2O9":1,"2I8":1,"3Q3":2,"3Q4":2,"3T0":1,"4Q2":2,"4T8":1,"6S5":1,"6R1":1,"6Q7":1,"6N1":1,"7U8":1,"8V3":1,"8W6":1,"8V5":1,"8R6":1,"083":1,"070":1,CRO:1,UAFO:1,WA140X:1},Volkswagen:{"497W":1,B5H:1,L29Y:1,LD7X:1,LD1W:1,LM7W:1,L479:1,LA9W:1,L49C:1,664:1,WV2:1},Volvo:{}},C="addSubmit",k="removeSubmit",I=function(e,t,c){var i=function(e,t){var c=document.getElementById(e).value,i=document.getElementById(t).value;return document.getElementById(t).value="",[c,i]}(t,c),n=Object(A.a)(i,2),o=n[0],a=n[1],r=W.getState().submit[o],s=void 0!==r[a]?r[a]:0;switch(a=""===a||null===a?"noCode":a,e){case"search":return"noCode"===a?(alert("Enter code"),""):(alert(o+"\n\nPaint code: "+a+"\nIn stock: "+s),"");case"add":return"noCode"===a?(alert("Enter code"),Object(M.a)({},o,r)):Object(M.a)({},o,Object.assign({},r,Object(M.a)({},a,s+1)));case"remove":return"noCode"===a?(alert("Enter code"),Object(M.a)({},o,r)):0===s?Object(M.a)({},o,Object.assign({},r,Object(M.a)({},a,s))):Object(M.a)({},o,Object.assign({},r,Object(M.a)({},a,s-1)))}},g=function(){return I("search","searchMake","searchCode"),{type:"searchSubmit"}},y=function(){return{type:C,value:I("add","addMake","addCode")}},H=function(){return{type:k,value:I("remove","removeMake","removeCode")}},W=Object(d.c)(Object(d.b)({select:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:f,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case l:return{role:["show","hide","hide","hide","hide","hide"],select:["active","","","","",""]};case h:return{role:["hide","show","hide","hide","hide","hide"],select:["","active","","","",""]};case u:return{role:["hide","hide","show","hide","hide","hide"],select:["","","active","","",""]};case j:return{role:["hide","hide","hide","show","hide","hide"],select:["","","","active","",""]};case b:return{role:["hide","hide","hide","hide","show","hide"],select:["","","","","active",""]};case p:return{role:["hide","hide","hide","hide","hide","show"],select:["","","","","","active"]};default:return e}},submit:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C:case k:return Object.assign({},e,t.value);default:return e}}}),window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__()),w=(c(28),c(29),c(30),c(10)),B=c(6),R=c(7),E=c(9),V=c(8),F=c.p+"static/media/logo.f84c56a6.png",G=Object(s.b)((function(e){return{select:e.select.select}}),(function(e){return Object(d.a)({search:O,add:m,remove:v,logAction:N,save:x,backup:P},e)}))((function(e){return Object(i.jsxs)("nav",{children:[Object(i.jsxs)("div",{children:[Object(i.jsx)("img",{src:F,alt:"Paint logo"}),Object(i.jsx)("span",{children:"Got Paint"})]}),Object(i.jsxs)("ul",{children:[Object(i.jsx)("li",{className:e.select[0],onClick:e.search,children:"Search"}),Object(i.jsx)("li",{className:e.select[1],onClick:e.add,children:"Add"}),Object(i.jsx)("li",{className:e.select[2],onClick:e.remove,children:"Remove"}),Object(i.jsx)("li",{className:e.select[3],onClick:e.logAction,children:"Inventory"}),Object(i.jsx)("li",{className:e.select[4],onClick:e.save,children:"Save"}),Object(i.jsx)("li",{className:e.select[5],onClick:e.backup,children:"Backup"})]})]})})),D=function(e){Object(E.a)(c,e);var t=Object(V.a)(c);function c(){return Object(B.a)(this,c),t.apply(this,arguments)}return Object(R.a)(c,[{key:"render",value:function(){var e="box "+this.props.cName;return Object(i.jsxs)("div",{className:e,children:[Object(i.jsx)("div",{className:"title",children:this.props.title}),Object(i.jsxs)("form",{id:this.props.formId,action:"",method:"",children:[Object(i.jsxs)("div",{className:"choice",children:[Object(i.jsxs)("label",{htmlFor:this.props.dropdownName,children:[" ","Auto Maker"]}),Object(i.jsxs)("select",{name:this.props.dropdownName,id:this.props.makeId,children:[Object(i.jsx)("option",{value:"Acura",children:"Acura"}),Object(i.jsx)("option",{value:"BMW",children:"BMW"}),Object(i.jsx)("option",{value:"Chrysler",children:"Chrysler"}),Object(i.jsx)("option",{value:"Fiat",children:"Fiat"}),Object(i.jsx)("option",{value:"Ford",children:"Ford"}),Object(i.jsx)("option",{value:"GMC",children:"GMC"}),Object(i.jsx)("option",{value:"Honda",children:"Honda"}),Object(i.jsx)("option",{value:"Hyundai",children:"Hyundai"}),Object(i.jsx)("option",{value:"Infiniti",children:"Infiniti"}),Object(i.jsx)("option",{value:"Kia",children:"Kia "}),Object(i.jsx)("option",{value:"Mazada",children:"Mazda "}),Object(i.jsx)("option",{value:"Mercedes",children:"Mercedes"}),Object(i.jsx)("option",{value:"Mini",children:"MINI"}),Object(i.jsx)("option",{value:"Mitsubishi",children:"Mitsubishi"}),Object(i.jsx)("option",{value:"Nissan",children:"Nissan"}),Object(i.jsx)("option",{value:"Porsche",children:"Porsche"}),Object(i.jsx)("option",{value:"Subaru",children:"Subaru"}),Object(i.jsx)("option",{value:"Toyota",children:"Toyota "}),Object(i.jsx)("option",{value:"Volkswagen",children:"Volkswagen "}),Object(i.jsx)("option",{value:"Volvo",children:"Volvo "})]})]}),Object(i.jsxs)("div",{className:"code",children:[Object(i.jsxs)("label",{htmlFor:this.props.inputName,children:[" ","Paint code"]}),Object(i.jsx)("input",{name:this.props.inputName,type:"text",id:this.props.codeId,tabIndex:"0",placeholder:"Paint code",required:!0})]}),Object(i.jsx)("div",{className:"submit",children:Object(i.jsx)("button",{type:"submit",form:this.props.formId,onClick:this.props.callback,children:"Enter"})})]})]})}}]),c}(o.a.Component),L=function(e){Object(E.a)(c,e);var t=Object(V.a)(c);function c(){return Object(B.a)(this,c),t.apply(this,arguments)}return Object(R.a)(c,[{key:"render",value:function(){var e={title:"Search Color",makeId:"searchMake",codeId:"searchCode",cName:this.props.role[0],callback:this.props.searchSubmit,formId:"searchForm",dropdownName:"searchDown",inputName:"searchInput"},t={title:"Add Color",makeId:"addMake",codeId:"addCode",cName:this.props.role[1],callback:this.props.addSubmit,formId:"addForm",dropdownName:"addDown",inputName:"addInput"},c={title:"Remove Color",makeId:"removeMake",codeId:"removeCode",cName:this.props.role[2],callback:this.props.removeSubmit,formId:"removeForm",dropdownName:"removeDown",inputName:"removeInput"};return console.log(t.callback),Object(i.jsxs)("div",{id:"paint-container",children:[Object(i.jsx)(G,{}),Object(i.jsxs)("div",{id:"content",children:[Object(i.jsx)(D,Object(w.a)({},e)),Object(i.jsx)(D,Object(w.a)({},t)),Object(i.jsx)(D,Object(w.a)({},c))]})]})}}]),c}(o.a.Component),X=Object(s.b)((function(e){return{role:e.select.role}}),(function(e){return Object(d.a)({addSubmit:y,searchSubmit:g,removeSubmit:H},e)}))(L),T=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,32)).then((function(t){var c=t.getCLS,i=t.getFID,n=t.getFCP,o=t.getLCP,a=t.getTTFB;c(e),i(e),n(e),o(e),a(e)}))};r.a.render(Object(i.jsx)(o.a.StrictMode,{children:Object(i.jsx)(s.a,{store:W,children:Object(i.jsx)(X,{})})}),document.getElementById("root")),T()}},[[31,1,2]]]);
//# sourceMappingURL=main.7fdcc752.chunk.js.map