(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{5166:function(e,t,n){Promise.resolve().then(n.bind(n,6151))},6151:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return DragDrop}});var r=n(7437),l=n(812),a=n(1368),o=(0,n(9782).Z)((0,r.jsx)("path",{d:"M14 12c0-1.1-.9-2-2-2s-2 .9-2 2 .9 2 2 2 2-.9 2-2m-2-9c-4.97 0-9 4.03-9 9H0l4 4 4-4H5c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.51 0-2.91-.49-4.06-1.3l-1.42 1.44C8.04 20.3 9.94 21 12 21c4.97 0 9-4.03 9-9s-4.03-9-9-9"}),"SettingsBackupRestore"),d=n(4262),i=n(4749),s=n(3457),c=n(3245),p=n(3428),u=n(791),g=n(2265),x=n(7042),b=n(5256),f=n(7947),h=n(3381),j=n(5191);let m=["className","component"];function createBox(e={}){let{themeId:t,defaultTheme:n,defaultClassName:l="MuiBox-root",generateClassName:a}=e,o=(0,b.default)("div",{shouldForwardProp:e=>"theme"!==e&&"sx"!==e&&"as"!==e})(f.Z),d=g.forwardRef(function(e,d){let i=(0,j.Z)(n),s=(0,h.Z)(e),{className:c,component:g="div"}=s,b=(0,u.Z)(s,m);return(0,r.jsx)(o,(0,p.Z)({as:g,ref:d,className:(0,x.Z)(c,a?a(l):l),theme:t&&i[t]||i},b))});return d}var Z=n(900),v=n(8595),_=n(3469),D=n(2423);let O=(0,D.Z)("MuiBox",["root"]),k=(0,v.Z)(),C=createBox({themeId:_.Z,defaultTheme:k,defaultClassName:O.root,generateClassName:Z.Z.generate});var I=n(2629),S=n(5187),y=n(5883);function DragDrop(){let[e,t]=(0,y.FV)(a.q),[n,d]=(0,y.FV)(a.s);return(0,g.useEffect)(()=>{try{let e=localStorage.getItem("todos");null!==localStorage.getItem("todos")&&"[object Object]"===Object.prototype.toString.call(JSON.parse(e))?t(JSON.parse(e)):t({todo:[],doing:[],done:[]})}catch(n){let e={todo:[],doing:[],done:[]};t(e),localStorage.setItem("todos",JSON.stringify(e))}},[]),(0,g.useEffect)(()=>(localStorage.setItem("todos",JSON.stringify(e)),()=>{}),[e]),(0,r.jsxs)(s.Z,{sx:{flexGrow:1,minHeight:"100dvh"},overflow:"scroll",bgcolor:"#C5EBAA",borderRadius:2,children:[(0,r.jsx)(c.Z,{onClick:()=>{t({todo:[],doing:[],done:[]})},children:(0,r.jsx)(o,{})}),(0,r.jsx)(S.Z5,{onDragStart:e=>{d(e.source.droppableId)},onDragEnd:n=>{if(!n.destination)return;let{draggableId:r,destination:l,source:a}=n;if("all"===a.droppableId){let n=Object.keys(e);n.splice(a.index,1),n.splice(l.index,0,r.replace("board-","")),t(e=>{let t={};for(let r=0;r<n.length;r++)t[n[r]]=e[n[r]];return t});return}l.droppableId===a.droppableId?t(e=>{let t=[...e[a.droppableId]],n=t.splice(a.index,1)[0];return t.splice(null==l?void 0:l.index,0,n),{...e,[a.droppableId]:t}}):t(e=>{let t=[...e[a.droppableId]],n=[...e[l.droppableId]],r=t.splice(a.index,1)[0];return n.splice(null==l?void 0:l.index,0,r),{...e,[a.droppableId]:t,[l.droppableId]:n}})},children:(0,r.jsx)(S.bK,{direction:"horizontal",droppableId:"all",isDropDisabled:"all"!==n,children:t=>(0,r.jsxs)(s.Z,{alignItems:"flex-start",direction:"row",gap:1,p:2,sx:{flexGrow:1},overflow:"scroll",bgcolor:"#C5EBAA",borderRadius:2,ref:t.innerRef,...t.droppableProps,children:[Object.keys(e).map((t,n)=>(0,r.jsx)(S._l,{draggableId:"board-".concat(t),index:n,children:n=>(0,r.jsx)(l.Z,{draggableProvider:n,todos:e[t],droppableId:t})},"board-".concat(t))),t.placeholder,(0,r.jsx)(MakeBoard,{})]})})})]})}function MakeBoard(){let[e,t]=(0,y.FV)(a.q),[n,l]=(0,g.useState)(""),[o,p]=(0,g.useState)(!1),onHandleAdd=()=>{l(""),p(e=>!e)};return(0,r.jsx)(C,{borderRadius:2,bgcolor:"rgb(241, 242, 244, 0.7 )",flexShrink:0,width:272,children:o?(0,r.jsx)("form",{onSubmit:e=>{e.preventDefault(),n&&(t(e=>{let t={...e};return t[n]=[],t}),l(""),onHandleAdd())},children:(0,r.jsxs)(s.Z,{p:1,gap:1,children:[(0,r.jsx)(I.Z,{placeholder:"Enter a title for this card…",value:n,onChange:e=>{l(e.currentTarget.value)},autoFocus:!0}),(0,r.jsxs)(s.Z,{direction:"row",gap:1,className:"",children:[(0,r.jsx)(c.Z,{sx:{flexGrow:1},variant:"contained",type:"submit",children:"add card"}),(0,r.jsx)(c.Z,{onClick:onHandleAdd,children:(0,r.jsx)(d.Z,{})})]})]})}):(0,r.jsxs)(c.Z,{sx:{display:"flex",alignItems:"center",gap:"5px"},onClick:onHandleAdd,fullWidth:!0,children:[(0,r.jsx)(i.Z,{}),(0,r.jsx)("span",{children:"add a board"})]})})}},812:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var r=n(230),l=n(7437),a=n(2265),o=n(5187),d=n(5883),i=n(9212),s=n(1368);function _templateObject(){let e=(0,r._)(["\n  background-color: ",";\n  padding: 10px;\n  border-radius: 5px;\n\n  display: flex;\n  justify-content: space-between;\n  .delete-btn {\n    visibility: hidden;\n    transition: 0.15s;\n    color: white;\n    cursor: pointer;\n  }\n  &:hover {\n    .delete-btn {\n      visibility: visible;\n      color: black;\n    }\n  }\n"]);return _templateObject=function(){return e},e}function DraggableCard(e){let{todo:t,index:n,droppableId:r}=e,a=(0,d.Zl)(s.q),onClickDelete=e=>{a(t=>({...t,[r]:t[r].filter((t,n)=>t.id!==e)}))};return(0,l.jsx)(o._l,{draggableId:"".concat(r,"-").concat(n,"-").concat(t.id),index:n,children:(e,n)=>(0,l.jsxs)(p,{isDragging:n.isDragging,ref:e.innerRef,...e.dragHandleProps,...e.draggableProps,children:[(0,l.jsx)("span",{children:t.text}),(0,l.jsx)("span",{className:"delete-btn",onClick:()=>onClickDelete(t.id),children:"x"})]})})}var c=a.memo(DraggableCard);let p=i.ZP.li(_templateObject(),e=>e.isDragging?"#BEADFA":e.theme.cardBgColor);var u=n(3457),g=n(2629),x=n(3245),b=n(4262),f=n(4749);function Board_templateObject(){let e=(0,r._)([""]);return Board_templateObject=function(){return e},e}function _templateObject1(){let e=(0,r._)(["\n  background-color: ",";\n  padding: 20px;\n  border-radius: 5px;\n\n  width: 300px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  transition: 0.15s;\n  /* "," */\n"]);return _templateObject1=function(){return e},e}function _templateObject2(){let e=(0,r._)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n"]);return _templateObject2=function(){return e},e}function _templateObject3(){let e=(0,r._)(["\n  border: unset;\n  border-radius: 5px;\n  padding: 10px;\n"]);return _templateObject3=function(){return e},e}function Board(e){let{todos:t,droppableId:n,draggableProvider:r}=e,i=(0,d.sJ)(s.s),p=(0,d.Zl)(s.q),[h,j]=(0,a.useState)(""),[m,Z]=(0,a.useState)(n),[v,_]=(0,a.useState)(!1),[D,O]=(0,a.useState)(!1),onHandleAdd=()=>{j(""),O(e=>!e)};return(0,l.jsxs)(u.Z,{flexShrink:0,width:272,gap:1,p:1,borderRadius:2,bgcolor:"rgb(241, 242, 244)",ref:r.innerRef,...r.draggableProps,children:[(0,l.jsx)("form",{onSubmit:e=>{e.preventDefault(),m&&(p(e=>{let t={...e};return t[m]=[...t[n]],delete t[n],t}),j(""))},style:{height:40,padding:10},children:v?(0,l.jsx)(g.Z,{size:"small",type:"text",value:m,onChange:e=>Z(e.target.value),onBlur:()=>{_(!1)},autoFocus:!0}):(0,l.jsx)("h2",{...r.dragHandleProps,onClick:()=>{_(!0)},children:m})}),(0,l.jsx)(o.bK,{droppableId:n,isDropDisabled:"all"===i,children:(e,r)=>(0,l.jsxs)(u.Z,{gap:1,ref:e.innerRef,...e.droppableProps,children:[t.map((e,t)=>(0,l.jsx)(c,{index:t,todo:e,droppableId:n},"".concat(n,"-").concat(t,"-").concat(e.id))),e.placeholder]})}),D?(0,l.jsx)("form",{onSubmit:e=>{e.preventDefault(),h&&(p(e=>{let t={...e},r={id:Date.now(),text:h};return t[n]=[...t[n],r],t}),j(""),onHandleAdd())},children:(0,l.jsxs)(u.Z,{gap:1,children:[(0,l.jsx)(g.Z,{placeholder:"Enter a title for this card…",value:h,onChange:e=>{j(e.currentTarget.value)},autoFocus:!0}),(0,l.jsxs)(u.Z,{direction:"row",gap:1,className:"",children:[(0,l.jsx)(x.Z,{sx:{flexGrow:1},variant:"contained",type:"submit",children:"add card"}),(0,l.jsx)(x.Z,{onClick:onHandleAdd,children:(0,l.jsx)(b.Z,{})})]})]})}):(0,l.jsxs)(x.Z,{sx:{display:"flex",alignItems:"center",gap:"5px"},onClick:onHandleAdd,children:[(0,l.jsx)(f.Z,{}),(0,l.jsx)("span",{children:"add a card"})]})]})}var h=a.memo(Board);i.ZP.ul(_templateObject1(),e=>e.isDraggingOver?"#D0BFFF":e.draggingFromThisWith?"#DFCCFB":"#FFF8C9",e=>e.isDraggingOver&&(0,i.iv)(Board_templateObject())),i.ZP.div(_templateObject2()),i.ZP.input(_templateObject3())},1368:function(e,t,n){"use strict";n.d(t,{q:function(){return l},s:function(){return a}});var r=n(5883);let l=(0,r.cn)({key:"toDos",default:{}}),a=(0,r.cn)({key:"draggingBoard",default:"all"})}},function(e){e.O(0,[691,216,265,62,913,971,472,744],function(){return e(e.s=5166)}),_N_E=e.O()}]);