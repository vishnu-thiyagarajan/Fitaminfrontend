(this.webpackJsonpsampleproject=this.webpackJsonpsampleproject||[]).push([[0],{123:function(e,t,n){},147:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n(0),r=n.n(c),i=n(15),o=n.n(i),s=(n(123),n(8)),u=n(35),l=n(98),d=n(99),j=n.n(d),b=n(100),O=n(4),m="LOGIN_USER_REQUEST",p="LOGIN_USER_SUCCESS",h="LOGIN_USER_FAILURE",f="REGISTER_USER_REQUEST",g="REGISTER_USER_SUCCESS",x="REGISTER_USER_FAILURE",v="RESET_PASSWORD_REQUEST",S="RESET_PASSWORD_SUCCESS",y="RESET_PASSWORD_FAILURE",E="FORGOT_PASSWORD_REQUEST",C="FORGOT_PASSWORD_SUCCESS",R="FORGOT_PASSWORD_FAILURE",w="ACCOUNT_ACTIVATION_REQUEST",_="ACCOUNT_ACTIVATION_SUCCESS",U="ACCOUNT_ACTIVATION_FAILURE",T="RESET_STATE",A="RESET_ERR_MSG",N="LOGOUT_USER",W={loading:!1,error:"",user:null,isAuthenticated:!1,message:""},D=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:W,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case p:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,isAuthenticated:!0,user:t.payload});case h:return{loading:!1,user:null,isAuthenticated:!1,error:t.payload};case f:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case g:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,message:t.payload.message});case x:return console.log(t.payload),{loading:!1,user:null,isAuthenticated:!1,error:t.payload};case N:return{loading:!1,isAuthenticated:!1,user:null,error:""};case v:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case S:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,message:t.payload.message});case y:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,error:t.payload});case E:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case C:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,message:t.payload.message});case R:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,error:t.payload});case w:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case _:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,isAuthenticated:!0,user:t.payload});case U:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,error:t.payload});case T:return W;case A:return Object(O.a)(Object(O.a)({},e),{},{error:"",message:""});default:return e}},I="CUSTOMIZED_REQUEST",k="CUSTOMIZED_SUCCESS",F="CUSTOMIZED_FAILURE",L="CORE_REQUEST",P="CORE_SUCCESS",q="CORE_FAILURE",G="RESET_CORE",H="SET_CORE",B="ADD_CORE_REQUEST",M="ADD_CORE_SUCCESS",Q="ADD_CORE_FAILURE",V="ADD_CUSTOM_REQUEST",z="ADD_CUSTOM_SUCCESS",J="ADD_CUSTOM_FAILURE",Z="RESET_UPDATE_CORE",K={core:"",coreid:"",corerecipe:"",corenutrition:"",coreloading:!1,customloading:!1,customrecipe:"",customnutrition:"",allcores:[],error:"",newcoreadded:!1,newcoreloading:!1,newcustomadded:!1,newcustomloading:!1},X=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case H:var n=e.allcores.find((function(e){return e.name===t.name}));return Object(O.a)(Object(O.a)({},e),{},{core:t.name,corerecipe:n.recipe,corenutrition:n.nutrition,customrecipe:"",customnutrition:"",coreid:n._id});case G:return Object(O.a)(Object(O.a)({},e),{},{core:"",corerecipe:"",corenutrition:"",coreid:""});case L:return Object(O.a)(Object(O.a)({},e),{},{coreloading:!0});case P:return Object(O.a)(Object(O.a)({},e),{},{coreloading:!1,allcores:t.payload});case q:return Object(O.a)(Object(O.a)({},e),{},{coreloading:!1,error:t.payload});case I:return Object(O.a)(Object(O.a)({},e),{},{customloading:!0});case k:return Object(O.a)(Object(O.a)({},e),{},{customloading:!1,customrecipe:t.payload.recipe,customnutrition:t.payload.nutrition});case F:return Object(O.a)(Object(O.a)({},e),{},{customloading:!1,customrecipe:"",customnutrition:"",error:t.payload});case B:return Object(O.a)(Object(O.a)({},e),{},{newcoreloading:!0});case M:return Object(O.a)(Object(O.a)({},e),{},{newcoreloading:!1,newcoreadded:!0});case Q:return Object(O.a)(Object(O.a)({},e),{},{newcoreloading:!1,newcoreadded:!1,error:t.payload});case V:return Object(O.a)(Object(O.a)({},e),{},{newcustomloading:!0});case z:return Object(O.a)(Object(O.a)({},e),{},{newcustomloading:!1,newcustomadded:!0});case J:return Object(O.a)(Object(O.a)({},e),{},{newcustomloading:!1,newcustomadded:!1,error:t.payload});case Z:return Object(O.a)(Object(O.a)({},e),{},{newcoreadded:!1,error:"",newcoreloading:!1,newcustomadded:!1,newcustomloading:!1});default:return e}},Y=n(105),$="CREATE_USER_REQUEST",ee="CREATE_USER_SUCCESS",te="CREATE_USER_FAILURE",ne="READ_ALL_USER_REQUEST",ae="READ_ALL_USER_SUCCESS",ce="READ_ALL_USER_FAILURE",re="UPDATE_USER_REQUEST",ie="UPDATE_USER_SUCCESS",oe="UPDATE_USER_FAILURE",se="DELETE_USER_REQUEST",ue="DELETE_USER_SUCCESS",le="DELETE_USER_FAILURE",de="RESET_UPDATE_USER",je={loading:!1,error:"",users:[],updated:!1,updateloading:!1,added:!1},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ne:return Object(O.a)(Object(O.a)({},e),{},{loading:!0});case ae:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,users:t.payload,error:""});case ce:return Object(O.a)(Object(O.a)({},e),{},{loading:!1,users:[],error:t.payload});case ie:var n=e.users.findIndex((function(e){return e.email===t.payload.email}));return e.users[n].name=t.payload.name,e.users[n].role=t.payload.role,Object(O.a)(Object(O.a)({},e),{},{updated:!0,updateloading:!1});case re:return Object(O.a)(Object(O.a)({},e),{},{updated:!1,updateloading:!0});case oe:return Object(O.a)(Object(O.a)({},e),{},{updated:!1,updateloading:!1});case de:return Object(O.a)(Object(O.a)({},e),{},{added:!1,updated:!1,updateloading:!1});case ue:return Object(O.a)(Object(O.a)({},e),{},{users:e.users.filter((function(e){return e.email!==t.payload.email}))});case se:case le:return Object(O.a)({},e);case ee:return Object(O.a)(Object(O.a)({},e),{},{users:[].concat(Object(Y.a)(e.users),[t.payload]),added:!0});case $:return Object(O.a)(Object(O.a)({},e),{},{added:!1});case te:return Object(O.a)(Object(O.a)({},e),{},{added:!1,error:t.payload});default:return e}},Oe=Object(u.combineReducers)({user:D,allusers:be,dish:X}),me=Object(u.createStore)(Oe,Object(l.composeWithDevTools)(Object(u.applyMiddleware)(j.a,b.a))),pe=n(29),he=n(18),fe=n(10),ge=n(211),xe=n(198),ve=n(192),Se=n(212),ye=n(197),Ee=n(208),Ce=n(200),Re=n(199),we=n(49),_e=n.n(we),Ue=n(109),Te=n(190),Ae=n(191),Ne=n(16),We=n.n(Ne),De=function(){return function(e){e(Xe())}},Ie=function(){return{type:E}},ke=function(e){return{type:C,payload:e}},Fe=function(e){return{type:R,payload:e}},Le=function(){return{type:w}},Pe=function(e){return{type:_,payload:e}},qe=function(e){return{type:U,payload:e}},Ge=function(){return{type:v}},He=function(e){return{type:S,payload:e}},Be=function(e){return{type:y,payload:e}},Me=function(){return{type:m}},Qe=function(e){return{type:p,payload:e}},Ve=function(e){return{type:h,payload:e}},ze=function(){return{type:f}},Je=function(e){return{type:g,payload:e}},Ze=function(e){return{type:x,payload:e}},Ke=function(){return{type:T}},Xe=function(){return localStorage.clear(),We.a.defaults.headers.common.Authorization="",{type:N,payload:null}},Ye=function(){return{type:G}},$e=function(){return{type:V}},et=function(){return{type:z}},tt=function(e){return{type:J,payload:e}},nt=function(){return{type:B}},at=function(e){return{type:M,payload:e}},ct=function(e){return{type:Q,payload:e}},rt=function(){return{type:L}},it=function(e){return{type:P,payload:e}},ot=function(e){return{type:q,payload:e}},st=function(){return{type:I}},ut=function(e){return{type:k,payload:e}},lt=function(e){return{type:F,payload:e}},dt=function(){return{type:Z}},jt=n(210),bt=n(206);function Ot(e){return Object(a.jsx)(bt.a,Object(O.a)({elevation:6,variant:"filled"},e))}var mt=Object(Te.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var pt=function(){var e=mt(),t=Object(s.c)((function(e){return e.user.user})),n=Object(c.useState)(""),r=Object(fe.a)(n,2),i=r[0],o=r[1],u=Object(c.useState)(""),l=Object(fe.a)(u,2),d=l[0],j=l[1],b=Object(s.c)((function(e){return e.user.loading})),O=Object(s.c)((function(e){return e.user.isAuthenticated})),m=Object(s.c)((function(e){return e.user.error})),p=Object(c.useState)(!1),h=Object(fe.a)(p,2),f=h[0],g=h[1],x=Object(c.useState)(!1),v=Object(fe.a)(x,2),S=v[0],y=v[1],E=Object(s.b)(),C=function(e,t,n){return E(function(e,t,n){return function(a){a(Me()),We.a.post("/login",{email:e,password:t}).then((function(e){var t=e.data;n&&localStorage.setItem("user",JSON.stringify(t)),We.a.defaults.headers.common.Authorization="Bearer "+t.token,a(Qe(t))})).catch((function(e){e.response?a(Ve(e.response.data.message)):a(Ve(e.message))}))}}(e,t,n))},R=function(){g(!1),E(Ke())};return Object(c.useEffect)((function(){g(Boolean(m))}),[m,g]),Object(a.jsxs)(Ae.a,{component:"main",maxWidth:"xs",children:[Object(a.jsx)(ve.a,{}),Object(a.jsx)(jt.a,{open:f,autoHideDuration:3e3,onClose:R,children:Object(a.jsx)(Ot,{onClose:R,severity:"error",children:m})}),t&&O&&Object(a.jsx)(he.a,{to:"/"}),!O&&Object(a.jsxs)("div",{className:e.paper,children:[Object(a.jsx)(ge.a,{className:e.avatar,children:Object(a.jsx)(_e.a,{})}),Object(a.jsx)(Ue.a,{component:"h1",variant:"h5",children:"Sign in"}),Object(a.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(a.jsx)(Se.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",autoFocus:!0,onChange:function(e){return o(e.target.value)}}),Object(a.jsx)(Se.a,{variant:"outlined",margin:"normal",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",onChange:function(e){return j(e.target.value)}}),Object(a.jsx)(ye.a,{control:Object(a.jsx)(Ee.a,{value:"remember",color:"primary",checked:S,onChange:function(){y(!S)}}),label:"Remember me"}),Object(a.jsx)(xe.a,{disabled:b,type:"button",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){return C(i,d,S)},children:"Sign In"}),Object(a.jsxs)(Re.a,{container:!0,children:[Object(a.jsx)(Re.a,{item:!0,xs:!0,children:Object(a.jsx)(Ce.a,{href:"/forgotpassword",variant:"body2",children:"Forgot password?"})}),Object(a.jsx)(Re.a,{item:!0,children:Object(a.jsx)(Ce.a,{href:"/signup",variant:"body2",children:"Don't have an account? Sign Up"})})]})]})]})]})},ht=n(213),ft=n(214),gt=n(195),xt=n(207);function vt(e){return Object(a.jsx)(bt.a,Object(O.a)({elevation:6,variant:"filled"},e))}var St=Object(Te.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function yt(){var e=Object(c.useState)([]),t=Object(fe.a)(e,2),n=t[0],r=t[1],i=St(),o=Object(c.useState)(""),u=Object(fe.a)(o,2),l=u[0],d=u[1],j=Object(c.useState)(""),b=Object(fe.a)(j,2),O=b[0],m=b[1],p=Object(c.useState)(""),h=Object(fe.a)(p,2),f=h[0],g=h[1],x=Object(c.useState)(""),v=Object(fe.a)(x,2),S=v[0],y=v[1],E=Object(s.c)((function(e){return e.user.loading})),C=Object(s.c)((function(e){return e.user.isAuthenticated})),R=Object(s.c)((function(e){return e.user.message})),w=Object(s.c)((function(e){return e.user.error})),_=Object(c.useState)(!1),U=Object(fe.a)(_,2),T=U[0],A=U[1],N=Object(c.useState)(!1),W=Object(fe.a)(N,2),D=W[0],I=W[1],k=Object(s.b)(),F=function(e,t,n,a){return k(function(e,t,n,a){return function(c){c(ze()),We.a.post("/register",{name:e,email:t,password:n,role:a}).then((function(e){c(Je(e.data))})).catch((function(e){e.response?c(Ze(e.response.data.message)):c(Ze(e.message))}))}}(e,t,n,a))},L=function(e,t){A(!1),I(!1),k(Ke())};return Object(c.useEffect)((function(){R&&(d(""),m(""),g(""),y(""))}),[R]),Object(c.useEffect)((function(){A(Boolean(w)),I(Boolean(R))}),[w,R,A,I]),Object(c.useEffect)((function(){We.a.get("/allroles").then((function(e){r(e.data)})).catch((function(e){alert("error: "+e)}))}),[]),Object(a.jsxs)(Ae.a,{component:"main",maxWidth:"xs",children:[Object(a.jsx)(ve.a,{}),Object(a.jsx)(jt.a,{open:T,autoHideDuration:3e3,onClose:L,children:Object(a.jsx)(vt,{onClose:L,severity:"error",children:w})}),Object(a.jsx)(jt.a,{open:D,autoHideDuration:3e3,onClose:L,children:Object(a.jsx)(vt,{onClose:L,severity:"success",children:R})}),C&&Object(a.jsx)(he.a,{to:"/"}),!C&&Object(a.jsxs)("div",{className:i.paper,children:[Object(a.jsx)(ge.a,{className:i.avatar,children:Object(a.jsx)(_e.a,{})}),Object(a.jsx)(Ue.a,{component:"h1",variant:"h5",children:"Sign up"}),Object(a.jsxs)("form",{className:i.form,noValidate:!0,children:[Object(a.jsxs)(Re.a,{container:!0,spacing:2,children:[Object(a.jsx)(Re.a,{item:!0,xs:12,children:Object(a.jsx)(Se.a,{autoComplete:"fullname",name:"fullName",variant:"outlined",required:!0,fullWidth:!0,id:"fullName",label:"Full Name",autoFocus:!0,value:l,onChange:function(e){return d(e.target.value)}})}),Object(a.jsx)(Re.a,{item:!0,xs:12,children:Object(a.jsx)(Se.a,{variant:"outlined",required:!0,fullWidth:!0,id:"email",label:"Email Address",name:"email",autoComplete:"email",value:O,onChange:function(e){return m(e.target.value)}})}),Object(a.jsx)(Re.a,{item:!0,xs:12,children:Object(a.jsx)(Se.a,{variant:"outlined",required:!0,fullWidth:!0,name:"password",label:"Password",type:"password",id:"password",autoComplete:"current-password",value:f,onChange:function(e){return g(e.target.value)}})}),Object(a.jsx)(Re.a,{item:!0,xs:12,children:Object(a.jsxs)(gt.a,{variant:"outlined",fullWidth:!0,children:[Object(a.jsx)(ht.a,{id:"role",children:"Role"}),Object(a.jsx)(xt.a,{labelId:"role",id:"roleselect",value:S,onChange:function(e){return y(e.target.value)},label:"Role",children:n.map((function(e,t){return Object(a.jsx)(ft.a,{value:e,children:e.name},t)}))})]})})]}),Object(a.jsx)(xe.a,{disabled:E,type:"button",fullWidth:!0,variant:"contained",color:"primary",className:i.submit,onClick:function(){return F(l,O,f,S)},children:"Sign Up"}),Object(a.jsx)(Re.a,{container:!0,justify:"flex-end",children:Object(a.jsx)(Re.a,{item:!0,children:Object(a.jsx)(Ce.a,{href:"/signin",variant:"body2",children:"Already have an account? Sign in"})})})]})]})]})}function Et(e){return Object(a.jsx)(bt.a,Object(O.a)({elevation:6,variant:"filled"},e))}var Ct=Object(Te.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));var Rt=function(){var e=Object(s.c)((function(e){return e.user.message})),t=Object(s.c)((function(e){return e.user.error})),n=Object(s.c)((function(e){return e.user.loading})),r=Ct(),i=Object(c.useState)(""),o=Object(fe.a)(i,2),u=o[0],l=o[1],d=Object(s.b)(),j=function(e){return d(function(e){return function(t){t(Ie()),We.a.put("/forgotpassword",e).then((function(e){t(ke(e.data))})).catch((function(e){e.response?t(Fe(e.response.data.message)):t(Fe(e.message))}))}}(e))},b=Object(c.useState)(!1),O=Object(fe.a)(b,2),m=O[0],p=O[1],h=Object(c.useState)(!1),f=Object(fe.a)(h,2),g=f[0],x=f[1],v=function(){p(!1),x(!1),d(Ke())};return Object(c.useEffect)((function(){e&&l(""),p(Boolean(t)),x(Boolean(e))}),[t,e,p,x,l]),Object(a.jsxs)(Ae.a,{component:"main",maxWidth:"xs",children:[Object(a.jsx)(ve.a,{}),Object(a.jsx)(jt.a,{open:m,autoHideDuration:3e3,onClose:v,children:Object(a.jsx)(Et,{onClose:v,severity:"error",children:t})}),Object(a.jsx)(jt.a,{open:g,autoHideDuration:3e3,onClose:v,children:Object(a.jsx)(Et,{onClose:v,severity:"success",children:e})}),Object(a.jsxs)("div",{className:r.paper,children:[Object(a.jsx)(ge.a,{className:r.avatar,children:Object(a.jsx)(_e.a,{})}),Object(a.jsx)(Ue.a,{component:"h1",variant:"h5",children:"Forgot Password"}),Object(a.jsxs)("form",{className:r.form,noValidate:!0,children:[Object(a.jsx)(Re.a,{container:!0,spacing:2,children:Object(a.jsx)(Re.a,{item:!0,xs:12,children:Object(a.jsx)(Se.a,{variant:"outlined",required:!0,fullWidth:!0,autoFocus:!0,name:"email",label:"Email Address",type:"email",id:"email",value:u,autoComplete:"email",onChange:function(e){return l(e.target.value)}})})}),Object(a.jsx)(xe.a,{disabled:n,type:"button",fullWidth:!0,variant:"contained",color:"primary",className:r.submit,onClick:function(){return j({email:u})},children:"Send New Password"})]}),Object(a.jsx)(Re.a,{container:!0,align:"center",children:Object(a.jsx)(Re.a,{item:!0,xs:!0,children:Object(a.jsx)(Ce.a,{href:"/signin",variant:"body2",children:"Goto login"})})})]})]})},wt=n(106);function _t(e,t){return t.includes(e)}var Ut=function(e,t){var n=Object(s.c)((function(e){return e.user.user}));return function(r){var i=Object(c.useState)(!1),o=Object(fe.a)(i,2),s=o[0],u=o[1];return Object(c.useEffect)((function(){u(_t(n.role.name,r))}),[r]),s?Object(a.jsx)(e,Object(O.a)({},t)):Object(a.jsx)("div",{})}};var Tt=function(e){var t=e.component,n=e.requiredRoles,c=Object(wt.a)(e,["component","requiredRoles"]),r=Object(s.c)((function(e){return e.user}));return console.log(r),Object(a.jsx)(he.b,Object(O.a)(Object(O.a)({},c),{},{render:function(e){return r.isAuthenticated&&_t(r.user.role.name,n)?Object(a.jsx)(t,Object(O.a)({},e)):r.isAuthenticated?Object(a.jsx)(he.a,{to:"/404"}):Object(a.jsx)(he.a,{to:"/signin"})}}))},At=n(201),Nt=n(202),Wt=n(189),Dt=n(101),It=n.n(Dt),kt=n(102),Ft=n.n(kt),Lt=n(104),Pt=Object(Te.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}}));function qt(){var e=Pt(),t=Object(he.g)(),n=Object(s.b)(),r=Object(s.c)((function(e){return e.user.user})),i=Object(c.useState)(null),o=Object(fe.a)(i,2),u=o[0],l=o[1],d=function(){l(null)};return Object(a.jsx)("div",{className:e.root,children:Object(a.jsx)(At.a,{position:"static",children:Object(a.jsxs)(Nt.a,{children:[Object(a.jsx)(Wt.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu",children:Object(a.jsx)(It.a,{})}),Object(a.jsxs)(Ue.a,{variant:"h6",className:e.title,children:["Hi ",r.name]}),Object(a.jsx)(Wt.a,{edge:"end",onClick:function(e){l(e.currentTarget)},color:"inherit","aria-label":"menu",children:Object(a.jsx)(Ft.a,{})}),Object(a.jsxs)(Lt.a,{id:"simple-menu",anchorEl:u,keepMounted:!0,open:Boolean(u),onClose:d,children:[Object(a.jsx)(ft.a,{onClick:d,children:"Profile"}),Object(a.jsx)(ft.a,{onClick:d,children:"My account"}),Object(a.jsx)(ft.a,{onClick:function(){t.push("/resetPassword")},children:"Reset password"}),Object(a.jsx)(ft.a,{onClick:function(){return n(De())},children:"Logout"})]})]})})})}var Gt=n(108),Ht=n(205);function Bt(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.dish.allcores}));return Object(c.useEffect)((function(){e((function(e){e(rt()),We.a.get("/recipe/all").then((function(t){var n=t.data;e(it(n))})).catch((function(t){t.response?e(ot(t.response.data.message)):e(ot(t.message))}))}))}),[e]),Object(a.jsx)(Ht.a,{id:"select-demo",options:t,fullWidth:!0,autoHighlight:!0,onChange:function(t,n){if(!n)return e(Ye());var a;e((a=n.name,{type:H,name:a}))},selectOnFocus:!0,handleHomeEndKeys:!0,getOptionLabel:function(e){return e.name},renderInput:function(e){return Object(a.jsx)(Se.a,Object(O.a)(Object(O.a)({},e),{},{fullWidth:!0,autoFocus:!0,label:"Choose a recipe",variant:"outlined",inputProps:Object(O.a)(Object(O.a)({},e.inputProps),{},{autoComplete:"new-password"})}))}})}var Mt=n(203),Qt=n(204),Vt="superadmin",zt="admin",Jt="chef",Zt="nutrition",Kt={superadmins:[Vt],nutritionandadmins:[zt,Zt,Vt],admins:[zt],nutrition:[Zt],chef:[Jt],all:[Vt,zt,Zt,Jt]},Xt=[{name:"30-35"},{name:"35-40"},{name:"40-45"},{name:"45-50"},{name:"50-55"},{name:"55-60"},{name:"60-65"},{name:"65-70"},{name:"70-75"},{name:"75-80"},{name:"80-85"},{name:"85-90"},{name:"90-95"},{name:"95-100"}],Yt=[{name:"lose"},{name:"maintain"},{name:"gain"}],$t=Object(Te.a)((function(e){return{root:{height:"100vh"},image:{backgroundImage:"url(https://source.unsplash.com/random)",backgroundRepeat:"no-repeat",backgroundColor:"light"===e.palette.type?e.palette.grey[50]:e.palette.grey[900],backgroundSize:"cover",backgroundPosition:"center"},paper:{margin:e.spacing(8,4),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},board:{width:"100%",marginTop:e.spacing(1),marginLeft:e.spacing(1)},form:{width:"100%",marginTop:e.spacing(1)},submit:{margin:e.spacing(3,0,2)}}}));var en=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.user.user}));return Object(a.jsxs)("div",{children:[Object(a.jsxs)("h1",{children:["Hi ",t.name]}),Object(a.jsx)("br",{}),Object(a.jsx)("button",{onClick:function(){return e(De())},children:"logout"}),Object(a.jsx)("br",{}),Object(a.jsx)("h1",{children:"this page is only for admins"})]})},tn=Object(Te.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function nn(e){return Object(a.jsx)(bt.a,Object(O.a)({elevation:6,variant:"filled"},e))}var an=function(){var e=Object(he.g)(),t=Object(s.c)((function(e){return e.dish.newcoreadded})),n=Object(s.c)((function(e){return e.dish.error})),r=Object(s.c)((function(e){return e.dish.newcoreloading})),i=tn(),o=Object(c.useState)(""),u=Object(fe.a)(o,2),l=u[0],d=u[1],j=Object(c.useState)(""),b=Object(fe.a)(j,2),O=b[0],m=b[1],p=Object(c.useState)(""),h=Object(fe.a)(p,2),f=h[0],g=h[1],x=Object(c.useState)(!1),v=Object(fe.a)(x,2),S=v[0],y=v[1],E=Object(c.useState)(!1),C=Object(fe.a)(E,2),R=C[0],w=C[1],_=Object(s.b)(),U=function(e,t){y(!1),w(!1),_(dt())};return Object(c.useEffect)((function(){t&&(_(dt()),d(""),m(""),g(""),w(!0)),n&&y(!0)}),[n,t,_,e]),Object(a.jsxs)(Ae.a,{component:"main",maxWidth:"xs",children:[Object(a.jsx)(ve.a,{}),Object(a.jsx)(jt.a,{open:S,autoHideDuration:3e3,onClose:U,children:Object(a.jsx)(nn,{onClose:U,severity:"error",children:n})}),Object(a.jsx)(jt.a,{open:R,autoHideDuration:3e3,onClose:U,children:Object(a.jsx)(nn,{onClose:U,severity:"success",children:"Added Successfully"})}),Object(a.jsxs)("form",{className:i.form,autoComplete:"off",children:[Object(a.jsxs)(Re.a,{container:!0,spacing:2,children:[Object(a.jsx)(Re.a,{item:!0,xs:12,children:Object(a.jsx)(Se.a,{name:"recipeName",variant:"outlined",required:!0,fullWidth:!0,id:"recipeName",label:"Recipe Name",autoFocus:!0,value:l,onChange:function(e){return d(e.target.value)}})}),Object(a.jsx)(Re.a,{item:!0,xs:12,children:Object(a.jsx)(Se.a,{variant:"outlined",fullWidth:!0,id:"recipe",label:"Recipe ingredients",required:!0,multiline:!0,rows:1,rowsMax:100,value:O,onChange:function(e){return m(e.target.value)}})}),Object(a.jsx)(Re.a,{item:!0,xs:12,children:Object(a.jsx)(Se.a,{variant:"outlined",fullWidth:!0,id:"nutrition",label:"Nutrition",required:!0,multiline:!0,rows:1,rowsMax:100,value:f,onChange:function(e){return g(e.target.value)}})})]}),Object(a.jsx)(xe.a,{fullWidth:!0,disabled:r,variant:"contained",color:"primary",className:i.submit,onClick:function(){var e;l&&O&&f&&_((e={name:l,recipe:O,nutrition:f},function(t){t(nt()),We.a.post("/recipe",e).then((function(e){console.log(e);var n=e.data;t(at(n))})).catch((function(e){e.response?t(ct(e.response.data.message)):t(ct(e.message))}))}))},children:"Add Core Recipe"}),Object(a.jsx)(xe.a,{fullWidth:!0,variant:"contained",color:"primary",className:i.submit,onClick:function(){return e.push("/")},children:"Go Home"})]})]})},cn=[{name:"30-35"},{name:"35-40"},{name:"40-45"},{name:"45-50"},{name:"50-55"},{name:"55-60"},{name:"60-65"},{name:"65-70"},{name:"70-75"},{name:"75-80"},{name:"80-85"},{name:"85-90"},{name:"90-95"},{name:"95-100"}],rn=[{name:"lose"},{name:"maintain"},{name:"gain"}],on=Object(Te.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)}}}));function sn(e){return Object(a.jsx)(bt.a,Object(O.a)({elevation:6,variant:"filled"},e))}var un=function(){var e=Object(he.g)(),t=Object(s.c)((function(e){return e.dish.newcustomadded})),n=Object(s.c)((function(e){return e.dish.coreid})),r=Object(s.c)((function(e){return e.dish.error})),i=Object(s.c)((function(e){return e.dish.newcustomloading})),o=on(),u=Object(c.useState)(""),l=Object(fe.a)(u,2),d=l[0],j=l[1],b=Object(c.useState)(""),O=Object(fe.a)(b,2),m=O[0],p=O[1],h=Object(c.useState)(""),f=Object(fe.a)(h,2),g=f[0],x=f[1],v=Object(c.useState)(""),S=Object(fe.a)(v,2),y=S[0],E=S[1],C=Object(c.useState)(!1),R=Object(fe.a)(C,2),w=R[0],_=R[1],U=Object(c.useState)(!1),T=Object(fe.a)(U,2),A=T[0],N=T[1],W=Object(s.b)(),D=function(e,t){_(!1),N(!1),W(dt())};return Object(c.useEffect)((function(){t&&(W(dt()),j(""),p(""),x(""),E(""),N(!0)),r&&_(!0)}),[r,t,W,e]),Object(a.jsxs)(Ae.a,{component:"main",maxWidth:"xs",children:[Object(a.jsx)(ve.a,{}),Object(a.jsx)(jt.a,{open:w,autoHideDuration:3e3,onClose:D,children:Object(a.jsx)(sn,{onClose:D,severity:"error",children:r})}),Object(a.jsx)(jt.a,{open:A,autoHideDuration:3e3,onClose:D,children:Object(a.jsx)(sn,{onClose:D,severity:"success",children:"Added Successfully"})}),Object(a.jsxs)("form",{className:o.form,autoComplete:"off",children:[Object(a.jsxs)(Re.a,{container:!0,spacing:2,children:[Object(a.jsx)(Re.a,{item:!0,xs:12,children:Object(a.jsx)(Bt,{})}),Object(a.jsx)(Re.a,{item:!0,xs:12,children:Object(a.jsxs)(gt.a,{variant:"outlined",fullWidth:!0,children:[Object(a.jsx)(ht.a,{id:"Wantsto",children:"Wants to"}),Object(a.jsx)(xt.a,{labelId:"wantsto",id:"wantsto",value:d,onChange:function(e){return j(e.target.value)},label:"Wants to?",children:rn.map((function(e,t){return Object(a.jsx)(ft.a,{value:e.name,children:e.name},t)}))})]})}),Object(a.jsx)(Re.a,{item:!0,xs:12,children:Object(a.jsxs)(gt.a,{variant:"outlined",fullWidth:!0,children:[Object(a.jsx)(ht.a,{id:"Weight",children:"Weight"}),Object(a.jsx)(xt.a,{labelId:"weight",id:"weight",value:m,onChange:function(e){return p(e.target.value)},label:"Weight",children:cn.map((function(e,t){return Object(a.jsx)(ft.a,{value:e.name,children:e.name},t)}))})]})}),Object(a.jsx)(Re.a,{item:!0,xs:12,children:Object(a.jsx)(Se.a,{variant:"outlined",fullWidth:!0,id:"recipe",label:"Recipe ingredients",required:!0,multiline:!0,rows:1,rowsMax:100,value:g,onChange:function(e){return x(e.target.value)}})}),Object(a.jsx)(Re.a,{item:!0,xs:12,children:Object(a.jsx)(Se.a,{variant:"outlined",fullWidth:!0,id:"nutrition",label:"Nutrition",required:!0,multiline:!0,rows:1,rowsMax:100,value:y,onChange:function(e){return E(e.target.value)}})})]}),Object(a.jsx)(xe.a,{fullWidth:!0,disabled:i,variant:"contained",color:"primary",className:o.submit,onClick:function(){var e;n&&d&&m&&g&&y&&W((e={coreid:n,wantsto:d,weight:m,recipe:g,nutrition:y},function(t){t($e()),We.a.post("/custom",e).then((function(e){console.log(e);var n=e.data;t(et(n))})).catch((function(e){e.response?t(tt(e.response.data.message)):t(tt(e.message))}))}))},children:"Add Custom Recipe"}),Object(a.jsx)(xe.a,{fullWidth:!0,variant:"contained",color:"primary",className:o.submit,onClick:function(){return e.push("/")},children:"Go Home"})]})]})};function ln(e){return Object(a.jsx)(bt.a,Object(O.a)({elevation:6,variant:"filled"},e))}var dn=Object(Te.a)((function(e){return{paper:{marginTop:e.spacing(8),display:"flex",flexDirection:"column",alignItems:"center"},avatar:{margin:e.spacing(1),backgroundColor:e.palette.secondary.main},form:{width:"100%",marginTop:e.spacing(3)},submit:{margin:e.spacing(3,0,2)},anchor:{cursor:"pointer"}}}));var jn=[{path:"/",component:function(){var e=$t(),t=Object(s.b)(),n=Object(he.g)(),r=Object(s.c)((function(e){return e.dish.corerecipe})),i=Object(s.c)((function(e){return e.dish.coreid})),o=Object(s.c)((function(e){return e.dish.corenutrition})),u=Object(s.c)((function(e){return e.dish.customrecipe})),l=Object(s.c)((function(e){return e.dish.customnutrition})),d=Object(c.useState)(""),j=Object(fe.a)(d,2),b=j[0],O=j[1],m=Object(c.useState)(""),p=Object(fe.a)(m,2),h=p[0],f=p[1];return Object(c.useEffect)((function(){t(Ye())}),[t]),Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(qt,{}),Object(a.jsxs)(Re.a,{container:!0,component:"main",className:e.root,children:[Object(a.jsx)(ve.a,{}),Object(a.jsx)(Re.a,{item:!0,xs:12,sm:7,md:4,component:Gt.a,elevation:6,square:!0,children:Object(a.jsxs)("div",{className:e.paper,children:[Object(a.jsx)(Ue.a,{component:"h1",variant:"h5",children:"Dishes"}),Object(a.jsx)(Bt,{}),Object(a.jsxs)("form",{className:e.form,noValidate:!0,children:[Object(a.jsx)("hr",{}),Object(a.jsxs)(gt.a,{className:e.form,variant:"outlined",fullWidth:!0,children:[Object(a.jsx)(ht.a,{id:"Wantsto",children:"Wants to"}),Object(a.jsx)(xt.a,{labelId:"wantsto",id:"wantsto",value:b,onChange:function(e){return O(e.target.value)},label:"Wants to?",children:Yt.map((function(e,t){return Object(a.jsx)(ft.a,{value:e.name,children:e.name},t)}))})]}),Object(a.jsxs)(gt.a,{className:e.form,variant:"outlined",fullWidth:!0,children:[Object(a.jsx)(ht.a,{id:"Weight",children:"Weight"}),Object(a.jsx)(xt.a,{labelId:"weight",id:"weight",value:h,onChange:function(e){return f(e.target.value)},label:"Weight",children:Xt.map((function(e,t){return Object(a.jsx)(ft.a,{value:e.name,children:e.name},t)}))})]}),Object(a.jsx)(xe.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){i&&b&&h&&t(function(e,t,n){return function(a){a(st()),We.a.get("/custom?corerecipe=".concat(e,"&wantsto=").concat(t,"&weight=").concat(n)).then((function(e){var t=e.data;a(ut(t))})).catch((function(e){e.response?a(lt(e.response.data.message)):a(lt(e.message))}))}}(i,b,h))},children:"Search"}),Ut((function(){return Object(a.jsx)(xe.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){return n.push("/addcore")},children:"Goto add core recipe"})}))(Kt.nutritionandadmins),Ut((function(){return Object(a.jsx)(xe.a,{type:"button",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){return n.push("/addcustom")},children:"Goto add custom recipe"})}))(Kt.nutritionandadmins)]})]})}),!r&&Object(a.jsx)(Re.a,{item:!0,xs:!1,sm:5,md:8,className:e.image}),r&&Object(a.jsxs)(Re.a,{container:!0,spacing:3,item:!0,xs:12,sm:5,md:8,className:e.board,children:[Object(a.jsx)(Re.a,{item:!0,xs:6,children:Object(a.jsx)(Mt.a,{children:Object(a.jsxs)(Qt.a,{children:[Object(a.jsx)(Ue.a,{variant:"h5",component:"h2",children:"Core Recipe"}),Object(a.jsx)(Ue.a,{variant:"body2",component:"p",children:r.split("\n").map((function(e,t){return Object(a.jsx)("li",{children:e},"reci"+t)}))})]})})}),Object(a.jsx)(Re.a,{item:!0,xs:6,children:Object(a.jsx)(Mt.a,{children:Object(a.jsxs)(Qt.a,{children:[Object(a.jsx)(Ue.a,{variant:"h5",component:"h2",children:"Core Nutrition"}),Object(a.jsx)(Ue.a,{variant:"body2",component:"p",children:o.split("\n").map((function(e,t){return Object(a.jsx)("li",{children:e},"nutri"+t)}))})]})})}),u&&Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)(Re.a,{item:!0,xs:6,children:Object(a.jsx)(Mt.a,{children:Object(a.jsxs)(Qt.a,{children:[Object(a.jsx)(Ue.a,{variant:"h5",component:"h2",children:"Customized Recipe"}),Object(a.jsx)(Ue.a,{variant:"body2",component:"p",children:u.split("\n").map((function(e,t){return Object(a.jsx)("li",{children:e},"rec"+t)}))})]})})}),Object(a.jsx)(Re.a,{item:!0,xs:6,children:Object(a.jsx)(Mt.a,{children:Object(a.jsxs)(Qt.a,{children:[Object(a.jsx)(Ue.a,{variant:"h5",component:"h2",children:"Customized Nutrition"}),Object(a.jsx)(Ue.a,{variant:"body2",component:"p",children:l.split("\n").map((function(e,t){return Object(a.jsx)("li",{children:e},"nut"+t)}))})]})})})]})]})]})]})},exact:!0,requiredRoles:Kt.all},{path:"/admin",component:en,exact:!0,requiredRoles:Kt.admins},{path:"/addcore",component:an,exact:!0,requiredRoles:Kt.nutritionandadmins},{path:"/addcustom",component:un,exact:!0,requiredRoles:Kt.nutritionandadmins},{path:"/resetPassword",component:function(){var e=Object(he.g)(),t=Object(s.c)((function(e){return e.user.message})),n=Object(s.c)((function(e){return e.user.error})),r=Object(s.c)((function(e){return e.user.loading})),i=dn(),o=Object(c.useState)(""),u=Object(fe.a)(o,2),l=u[0],d=u[1],j=Object(c.useState)(""),b=Object(fe.a)(j,2),O=b[0],m=b[1],p=Object(s.b)(),h=function(e){return p(function(e){return function(t){t(Ge()),We.a.put("/resetpassword",e).then((function(e){t(He(e.data))})).catch((function(e){e.response?t(Be(e.response.data.message)):t(Be(e.message))}))}}(e))},f=Object(c.useState)(!1),g=Object(fe.a)(f,2),x=g[0],v=g[1],S=Object(c.useState)(!1),y=Object(fe.a)(S,2),E=y[0],C=y[1],R=function(){v(!1),C(!1),p({type:A})};return Object(c.useEffect)((function(){t&&(d(""),m("")),v(Boolean(n)),C(Boolean(t))}),[n,t]),Object(a.jsxs)(Ae.a,{component:"main",maxWidth:"xs",children:[Object(a.jsx)(ve.a,{}),Object(a.jsx)(jt.a,{open:x,autoHideDuration:3e3,onClose:R,children:Object(a.jsx)(ln,{onClose:R,severity:"error",children:n})}),Object(a.jsx)(jt.a,{open:E,autoHideDuration:3e3,onClose:R,children:Object(a.jsx)(ln,{onClose:R,severity:"success",children:t})}),Object(a.jsxs)("div",{className:i.paper,children:[Object(a.jsx)(Ue.a,{component:"h1",variant:"h5",children:"Reset Password"}),Object(a.jsxs)("form",{className:i.form,noValidate:!0,children:[Object(a.jsxs)(Re.a,{container:!0,spacing:2,children:[Object(a.jsx)(Re.a,{item:!0,xs:12,children:Object(a.jsx)(Se.a,{variant:"outlined",required:!0,fullWidth:!0,autoFocus:!0,name:"oldpassword",label:"Old Password",type:"password",id:"oldpassword",value:l,autoComplete:"current-password",onChange:function(e){return d(e.target.value)}})}),Object(a.jsx)(Re.a,{item:!0,xs:12,children:Object(a.jsx)(Se.a,{variant:"outlined",required:!0,fullWidth:!0,name:"newpassword",label:"New Password",type:"password",id:"newpassword",value:O,onChange:function(e){return m(e.target.value)}})})]}),Object(a.jsx)(xe.a,{disabled:r,type:"button",fullWidth:!0,variant:"contained",color:"primary",className:i.submit,onClick:function(){return h({oldpassword:l,newpassword:O})},children:"Reset Password"})]}),Object(a.jsx)(Re.a,{container:!0,align:"center",children:Object(a.jsx)(Re.a,{item:!0,xs:!0,children:Object(a.jsx)(Ce.a,{className:i.anchor,onClick:function(){return e.goBack()},variant:"body2",children:"Go back"})})})]})]})},exact:!0,requiredRoles:Kt.all}];var bn=function(){var e=Object(s.b)(),t=Object(s.c)((function(e){return e.user.isAuthenticated})),n=Object(s.c)((function(e){return e.user.loading})),r=Object(he.h)().token;return Object(c.useEffect)((function(){var t;e((t={token:r},function(e){e(Le()),We.a.put("/activate",t).then((function(t){var n=t.data;localStorage.setItem("user",JSON.stringify(n)),We.a.defaults.headers.common.Authorization="Bearer "+n.token,e(Pe(n))})).catch((function(t){t.response?e(qe(t.response.data.message)):e(qe(t.message))}))}))}),[e,r]),Object(a.jsxs)(a.Fragment,{children:[n&&Object(a.jsx)("h2",{children:"Please wait till your account is activated"}),t&&Object(a.jsx)(he.a,{to:"/"})]})};var On=function(){var e=Object(s.b)();return Object(c.useEffect)((function(){var t=localStorage.getItem("user");if(t){var n=JSON.parse(t);e(Qe(n)),We.a.defaults.headers.common.Authorization="Bearer "+n.token}}),[e]),Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(pe.a,{children:Object(a.jsxs)(he.d,{children:[Object(a.jsx)(he.b,{exact:!0,path:"/signin",component:pt}),Object(a.jsx)(he.b,{exact:!0,path:"/signup",component:yt}),Object(a.jsx)(he.b,{exact:!0,path:"/forgotpassword",component:Rt}),Object(a.jsx)(he.b,{exact:!0,path:"/auth/activate/:token",component:bn}),jn.map((function(e,t){return Object(a.jsx)(Tt,{exact:e.exact,path:e.path,component:e.component,requiredRoles:e.requiredRoles},t)})),Object(a.jsx)(he.b,{path:"*",component:function(){return"404 NOT FOUND"}})]})})})};We.a.defaults.baseURL="https://fitaminnode.herokuapp.com/api";var mn=function(){return Object(a.jsx)(a.Fragment,{children:Object(a.jsx)(s.a,{store:me,children:Object(a.jsx)(On,{})})})},pn=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,216)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),r(e),i(e)}))};o.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(mn,{})}),document.getElementById("root")),pn()}},[[147,1,2]]]);
//# sourceMappingURL=main.5badd7b5.chunk.js.map