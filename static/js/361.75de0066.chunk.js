"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[361],{5159:function(e,n,t){t.d(n,{Z:function(){return a}});var r=t(3500),i=t(184);function a(e){var n=e.type,t=e.name,a=e.labelText,c=e.onChange,o=void 0===c?Function.prototype:c;return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(r.Z,{onChange:o,fullWidth:!0,label:a,id:t,type:n,name:t,variant:"outlined",required:!0})})}},2361:function(e,n,t){t.r(n),t.d(n,{default:function(){return F}});var r=t(266),i=t(9276),a=t(2791),c=t(9434),o=t(5264),s=t(6052),l=t(8870),u=t(890),m=t(6151),x=t(5159),d=function(e){return e.contacts.contacts},f=function(e){return e.contacts.isLoading},h=function(e){return e.filter},p=t(184);function j(){var e=(0,c.I0)(),n=(0,c.v9)(d),t=function(e){return e.toLowerCase().trim()};return(0,p.jsxs)(l.Z,{component:"form",onSubmit:function(r){r.preventDefault();var i=r.target,a=i.elements.name.value,c=i.elements.number.value;n.some((function(e){return t(e.name)===t(a)}))?o.Notify.info("This contact is already in list"):(e((0,s.uK)({name:a,number:c})),i.reset())},sx:{"& > :not(style)":{m:1,maxWidth:500},display:"flex",flexDirection:"column",alignItems:"center",textAlign:"center"},autoComplete:"off",children:[(0,p.jsx)(u.Z,{variant:"h5",component:"h2",children:"Add contact"}),(0,p.jsx)(x.Z,{name:"name",type:"text",labelText:"Name"}),(0,p.jsx)(x.Z,{name:"number",type:"tel",labelText:"Phone number"}),(0,p.jsx)(m.Z,{type:"submit",variant:"contained",fullWidth:!0,size:"large",children:"Add contact"})]})}var v=t(1413);function g(e){var n,t=0;for(n=0;n<e.length;n+=1)t=e.charCodeAt(n)+((t<<5)-t);var r="#";for(n=0;n<3;n+=1){r+="00".concat((t>>8*n&255).toString(16)).slice(-2)}return r}function Z(e){var n=e.includes(" ")?e:e.replace(e[0],"".concat(e[0]," "));return{sx:{bgcolor:g(e)},children:"".concat(n.split(" ")[0][0].toUpperCase()).concat(n.split(" ")[1][0].toUpperCase())}}var b=t(7247),y=t(757),C=t(7621),w=t(9504),I=t(3044),k=t(3400);function W(){var e=(0,c.v9)(d),n=(0,c.v9)(h),t=(0,c.I0)();if(e){var r=function(e){return e.toLowerCase().trim()},a=e.filter((function(e){return r(e.name).includes(r(n))}));return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsxs)(i.Z,{sx:{display:"flex",alignItems:" center",justifyContent:"center",gap:"1em",mb:"0.6em",mt:"0.4em"},children:[(0,p.jsx)(u.Z,{variant:"h5",component:"h2",children:"My Phonebook"}),(0,p.jsx)(y.Z,{fontSize:"large",color:"primary"})]}),(0,p.jsx)(i.Z,{sx:{display:"flex",flexWrap:"wrap",gap:"1em",alignItems:"center",width:"100%",minWidth:"280px"},children:a.map((function(e){var n=e.id,r=e.name,a=e.number;return(0,p.jsx)(C.Z,{sx:{width:"100%"},children:(0,p.jsxs)(w.Z,{sx:{display:"flex",alignItems:"center"},children:[(0,p.jsx)(I.Z,(0,v.Z)({},Z(r))),(0,p.jsxs)(i.Z,{sx:{ml:"1em"},children:[(0,p.jsx)(u.Z,{children:r}),(0,p.jsx)(u.Z,{children:a})]}),(0,p.jsx)(k.Z,{sx:{ml:"auto"},edge:"end","aria-label":"delete",onClick:function(){return t((0,s.zY)(n))},children:(0,p.jsx)(b.Z,{})})]})},n)}))})]})}}var _=t(1634);function T(){var e=(0,c.I0)();return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(u.Z,{variant:"h5",component:"h2",sx:{m:"0.5em 0",textAlign:"center"},children:"Search contact"}),(0,p.jsx)(x.Z,{name:"filter",type:"text",labelText:"Enter contact name",onChange:function(n){e((0,_.T)(n.target.value))}})]})}var A=t(7645);function F(){var e=(0,c.I0)(),n=(0,c.v9)(f);return(0,a.useEffect)((function(){e((0,s.yF)())}),[]),(0,p.jsxs)(r.Z,{maxWidth:"md",component:"main",sx:{m:"1em auto",display:"flex",flexWrap:"wrap",justifyContent:{sm:"space-between",xs:"center"}},children:[(0,p.jsxs)(i.Z,{sx:{width:"40%",minWidth:"250px",mr:"1em"},children:[(0,p.jsx)(j,{}),(0,p.jsx)(T,{})]}),(0,p.jsx)(i.Z,{sx:{width:"50%",display:"flex",flexDirection:"column",alignItems:"center"},children:(0,p.jsx)(W,{})}),n&&(0,p.jsx)(A.Z,{})]})}}}]);
//# sourceMappingURL=361.75de0066.chunk.js.map