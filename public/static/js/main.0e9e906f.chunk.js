(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{118:function(e,t,a){e.exports=a(228)},123:function(e,t,a){},125:function(e,t,a){},228:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(9),l=a.n(o),c=(a(123),a(11)),i=a(12),s=a(14),u=a(13),m=a(15),p=(a(125),a(238)),h=a(239),d=a(21),g=a.n(d),f=a(22),E=a.n(f),v=a(231),y="https://endlessmemory.herokuapp.com//login",b=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={auth:{}},a.login=function(e){console.log("\u013aoguini"),e.preventDefault();var t=a.state.auth;g.a.post(y,t).then(function(e){console.log(e),E.a.success("Logueadoo"),localStorage.setItem("user",JSON.stringify(e.data.user)),localStorage.setItem("token",e.data.token),a.props.history.push("/profile")}).catch(function(e){console.log(e),E.a.error("malisiososbiscos!")})},a.onChange=function(e){var t=e.target.name,n=e.target.value,r=a.state.auth;r[t]=n,a.setState({auth:r})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.auth;return r.a.createElement("div",{className:"fondito"},r.a.createElement("div",{className:"signup"},r.a.createElement("form",{onSubmit:this.login},r.a.createElement("p",null,r.a.createElement("input",{name:"email",type:"email",onChange:this.onChange,value:e.email,placeholder:"tu correo"})),r.a.createElement("p",null,r.a.createElement("input",{name:"password",type:"password",onChange:this.onChange,value:e.password,placeholder:"tu contrase\xf1a"})),r.a.createElement("button",{type:"submit"},"Inicia sesi\xf3n"),r.a.createElement("br",null),r.a.createElement("p",null,"\xbfAun no tienes sesion? registrate ",r.a.createElement(v.a,{to:"/signup"},"aqui")))))}}]),t}(n.Component),C=a(234),j=a(236),O=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={user:{}},a.setRedirect=function(){a.setState({redirect:!0})},a.setRedirects=function(){a.setState({redirects:!0})},a.setRedirectss=function(){a.setState({redirectss:!0})},a.renderRedirectss=function(){if(a.state.redirectss)return r.a.createElement(j.a,{to:"/Recuerdos"})},a.renderRedirect=function(){if(a.state.redirect)return r.a.createElement(j.a,{to:"/EndlessImg"})},a.renderRedirects=function(){if(a.state.redirects)return r.a.createElement(j.a,{to:"/EndlessText"})},a.getPrivateInfo=function(){g.a.get("https://localhost:3000/private",{headers:{Authorization:localStorage.getItem("token")}}).then(function(e){console.log(e)}).catch(function(e){return E.a.error("Algo sali\xf3 mal",e.message)})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("user"));if(!e)return this.props.history.push("/login");this.setState({user:e})}},{key:"render",value:function(){var e=this.state.user;return r.a.createElement("div",{className:"fondo"},r.a.createElement("h1",null,"Bienvenido a tu capsula ",e.username),this.renderRedirect(),r.a.createElement(C.a,{type:"primary",className:"boton11",onClick:this.setRedirect},"Agrega una imagen"),r.a.createElement("br",null),this.renderRedirects(),r.a.createElement(C.a,{type:"primary",className:"boton2",onClick:this.setRedirects},"Agrega un texto"),r.a.createElement("br",null),this.renderRedirectss(),r.a.createElement(C.a,{type:"primary",className:"boton3",onClick:this.setRedirectss}," Ver tus recuerdos "))}}]),t}(n.Component),w=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={signup:{username:"",email:"",password:"",password2:""}},a.onChange=function(e){console.log(e.target.name,e.target.value);var t=a.state.signup;t[e.target.name]=e.target.value,a.setState({signup:t})},a.createUser=function(e){e.preventDefault();var t=a.state.signup;if(t.password!==t.password2)return E.a.error("No coinciden las contrase\xf1as");g.a.post("https://endlessmemory.herokuapp.com//signup",t).then(function(e){console.log(e),E.a.success("Usuario Creado"),a.props.history.push("/Login")}).catch(function(e){return E.a.error("Noup!")})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.signup;return r.a.createElement("div",{className:"fondito"},r.a.createElement("div",{className:"signup"},r.a.createElement("form",{onSubmit:this.createUser},r.a.createElement("p",null,r.a.createElement("input",{name:"username",type:"text",onChange:this.onChange,value:e.username,placeholder:"username"})),r.a.createElement("p",null,r.a.createElement("input",{name:"email",type:"email",onChange:this.onChange,value:e.email,placeholder:"correo"})),r.a.createElement("p",null,r.a.createElement("input",{name:"password",type:"password",onChange:this.onChange,value:e.password,placeholder:"contrase\xf1a"})),r.a.createElement("p",null,r.a.createElement("input",{name:"password2",type:"password",onChange:this.onChange,value:e.password2,placeholder:"repite tu contrase\xf1a"})),r.a.createElement("p",null,r.a.createElement("button",{type:"submit"}," Registrate !")),r.a.createElement("p",null,"\xbfYa tienes sesion? inicia",r.a.createElement(v.a,{to:"/login"}," aqui")))))}}]),t}(n.Component),x=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={redirect:!1},a.setRedirect=function(){a.setState({redirect:!0})},a.setRedirects=function(){a.setState({redirects:!0})},a.renderRedirect=function(){if(a.state.redirect)return r.a.createElement(j.a,{to:"/Signup"})},a.renderRedirects=function(){if(a.state.redirects)return r.a.createElement(j.a,{to:"/Login"})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"papa"},r.a.createElement("div",{className:"img-trans"},r.a.createElement("h1",null,"Endless memory"),r.a.createElement("br",null),r.a.createElement("p",null,"Tus recuerdos encapsulados para el futuro"),this.renderRedirect(),r.a.createElement(C.a,{type:"primary",className:"boton1",onClick:this.setRedirect},"Signup"))))}}]),t}(n.Component),k="https://endlessmemory.herokuapp.com//",S=function(e){var t=new FormData;t.append("file",e);var a=localStorage.getItem("token");return g.a.post(k+"text/",t,{headers:{Authorization:a}}).then(function(e){return e}).catch(function(e){return e})},N=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={txt:{name:"",endless:"",date:"",explication:"",destination:"",number:""}},a.onChange=function(e){console.log(e.target.name,e.target.value);var t=a.state.txt;t[e.target.name]=e.target.value,a.setState({txt:t})},a.crearRecuerdoTxt=function(e){e.preventDefault();var t=a.state.txt;console.log(t),fetch("https://endlessmemory.herokuapp.com//text",{method:"POST",headers:{"Content-Type":"application/json",Authorization:localStorage.getItem("token")},body:JSON.stringify(t)}).then(function(e){return e.json()}).then(function(e){return a.props.history.push("/profile")}).catch(function(e){return console.log(e)})},a.onChangeFiles=function(e){console.log(e.target.files[0]),S(e.target.files[0]).then(function(e){return console.log(e)}).catch(function(e){return E.a.error("Error")})},a.uploadTexts=function(){a.refs.inputText.click()},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.txt;return r.a.createElement("div",null,r.a.createElement("div",{className:"fonditoUpload"},r.a.createElement("div",{className:"signupUpload"},r.a.createElement("form",{onSubmit:this.crearRecuerdoTxt},r.a.createElement("p",null,r.a.createElement("input",{name:"name",type:"text",placeholder:"Nombre de tu recuerdo",onChange:this.onChange,value:e.name})),r.a.createElement("p",null,r.a.createElement("input",{name:"destination",type:"email",placeholder:"Persona que recibira",onChange:this.onChange,value:e.destination})),r.a.createElement("p",null,r.a.createElement("textarea",{rows:"10",cols:"40",name:"endless",type:"text",placeholder:"Escribe tu recuerdo",onChange:this.onChange,value:e.endless})),r.a.createElement("p",null,r.a.createElement("input",{name:"date",type:"datetime-local",placeholder:"Fecha de entrega",onChange:this.onChange,value:e.date})),r.a.createElement("p",null,r.a.createElement("input",{name:"number",type:"tel",placeholder:"Tu numerin",onChange:this.onChange,value:e.number})),r.a.createElement("button",{type:"submit"},"Agregar"),r.a.createElement("input",{accept:".doc,.txt,.pdf",onChange:this.onChangeFiles,ref:"inputText",hidden:!0,type:"file"}),r.a.createElement("img",{style:{cursor:"pointer"},width:"50px",src:"https://cdn0.iconfinder.com/data/icons/outline-ui-part-4-of-4/100/pack07-07-512.png",onClick:this.uploadTexts})))))}}]),t}(n.Component),R=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={img:{name:"",link:"",date:"",explication:"",destination:""}},a.onChange=function(e){console.log(e.target.name,e.target.value);var t=a.state.img;t[e.target.name]=e.target.value,a.setState({img:t})},a.sub=function(e){e.preventDefault();var t=a.state.img,n=new FormData;for(var r in t)n.append(r,t[r]);g.a.post("https://endlessmemory.herokuapp.com//pictures",n,{headers:{Authorization:localStorage.getItem("token")}}).then(function(e){console.log(e)}).catch(function(e){console.log(e)})},a.crearRecuerdo=function(e){e.preventDefault();var t=a.state.img,n=new FormData;for(var r in t)n.append(r,t[r]);console.log(t,n),fetch("https://endlessmemory.herokuapp.com//pictures",{method:"post",body:JSON.stringify(n),headers:{Authorization:localStorage.getItem("token")}}).then(function(e){return e.json()}).then(function(e){return a.props.history.push("/profile")}).catch(function(e){return console.log(e)})},a.onChangeFile=function(e){console.log(e.target.files[0]);var t=a.state.img;t[e.target.name]=e.target.files[0],a.setState({img:t})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("user"));if(!e)return this.props.history.push("/login");this.setState({user:e})}},{key:"render",value:function(){var e=this.state.img;return r.a.createElement("div",null,r.a.createElement("div",{className:"fonditoUpload"},r.a.createElement("div",{className:"signupUpload"},r.a.createElement("form",{onSubmit:this.sub},r.a.createElement("p",null,r.a.createElement("input",{name:"name",type:"text",onChange:this.onChange,value:e.name,placeholder:"Nombre de tu recuerdo"})),r.a.createElement("p",null,r.a.createElement("input",{name:"destination",type:"email",onChange:this.onChange,value:e.destination,placeholder:"Persona que recibira"})),r.a.createElement("p",null,r.a.createElement("input",{name:"explication",type:"text",onChange:this.onChange,value:e.explication,placeholder:"Describe tu imagen (opcional)"})),r.a.createElement("p",null,r.a.createElement("input",{name:"date",type:"date",onChange:this.onChange,value:e.date,placeholder:"Fecha de entrega"})),r.a.createElement("input",{name:"file",type:"file",onChange:this.onChangeFile,placeholder:"Sube tu imagen"}),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("button",{type:"submit"},"Agregar"),r.a.createElement("input",{accept:"image/*",onChange:this.onChangeFile,ref:"input",hidden:!0,type:"file"})))))}}]),t}(n.Component),A=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return localStorage.removeItem("token"),localStorage.removeItem("user"),r.a.createElement(j.a,{to:"/login"})}}]),t}(n.Component),I=a(232),F=a(229),M=a(230),z=I.a.Meta,T=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(r)))).state={recuerdo:{}},a.getPrivateInfo=function(){g.a.get("https://localhost:3000/text",{headers:{Authorization:localStorage.getItem("token")}}).then(function(e){console.log(e)}).catch(function(e){return E.a.error("Algo sali\xf3 mal",e.message)})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"componentWillMount",value:function(){var e=JSON.parse(localStorage.getItem("recuerdo"));this.setState({recuerdo:e})}},{key:"render",value:function(){this.state.recuerdo;return r.a.createElement("div",{className:"fondoRecuerdo"},r.a.createElement("div",{style:{padding:"30px"}},r.a.createElement(F.a,{gutter:16},r.a.createElement(M.a,{span:6},r.a.createElement(I.a,{hoverable:!0,style:{width:240},cover:r.a.createElement("img",{alt:"example",src:"https://res.cloudinary.com/theledzed/image/upload/v1539789964/photo_2018-10-17_10-14-55.jpg"})},r.a.createElement(z,{title:"Jordy 69",description:"theledzed@gmail.com"})),","),r.a.createElement(M.a,{span:6},r.a.createElement(I.a,{hoverable:!0,style:{width:240},cover:r.a.createElement("img",{style:{width:240,height:360},alt:"example",src:"https://res-console.cloudinary.com/theledzed/thumbnails/v1/image/upload/v1539789964/cGhvdG9fMjAxOC0xMC0xN18xMC0xNC00NQ==/preview"})},r.a.createElement(z,{title:"Irvin pubertin",description:"Fecha de entrega: 20/03/23"})),","),r.a.createElement(M.a,{span:6},r.a.createElement(I.a,{hoverable:!0,style:{width:240},cover:r.a.createElement("img",{style:{width:240,height:360},alt:"example",src:"https://res-console.cloudinary.com/theledzed/thumbnails/v1/image/upload/v1539789964/cGhvdG9fMjAxOC0xMC0xN18xMC0xNC00NV8y/preview"})},r.a.createElement(z,{title:"Josepha y sus chinos",description:"Fecha de entrega: 19/07/20"})),","),r.a.createElement(M.a,{span:6},r.a.createElement(I.a,{hoverable:!0,style:{width:240},cover:r.a.createElement("img",{style:{width:240,height:360},alt:"example",src:"https://res-console.cloudinary.com/theledzed/thumbnails/v1/image/upload/v1539789964/cGhvdG9fMjAxOC0xMC0xN18xMC0xNC01Mg==/preview"})},r.a.createElement(z,{title:"\xbfEstan listos para la reta?",description:"Fecha de entrega: 30/05/19"})),",")),r.a.createElement(M.a,{span:6},r.a.createElement(I.a,{style:{width:240},title:"Experiencia en Ironhack",bordered:!1},"........ ",r.a.createElement("br",null)," Fecha de entrega:17/10/19 ")),r.a.createElement(M.a,{span:6},r.a.createElement(I.a,{style:{width:240},title:"Hola Cris del futuro",bordered:!1},"Al Cris del pasado le gustaba echar chela y juro no dejar de tomarla jamas ",r.a.createElement("br",null)," Fecha de entrega:10/11/29 ")),r.a.createElement(M.a,{span:6},r.a.createElement(I.a,{style:{width:240},title:"Que lees chismoso",bordered:!1}," GGGGG alto ahi prro ",r.a.createElement("br",null)," Fecha de entrega:18/10/18  ")),r.a.createElement(M.a,{span:6},r.a.createElement(I.a,{style:{width:240},title:"Eras un ni\xf1o rata a los 22a\xf1os",bordered:!1}," aunque te duela jugabas minecraft cons tus amigos, espero ya no lo seas ",r.a.createElement("br",null)," Fecha de entrega:15/09/25 "))),",")}}]),t}(n.Component),G=function(){return r.a.createElement(p.a,null,r.a.createElement(h.a,{path:"/Recuerdos",component:T}),r.a.createElement(h.a,{path:"/logout",component:A}),r.a.createElement(h.a,{path:"/endlessText",component:N}),r.a.createElement(h.a,{path:"/endlessImg",component:R}),r.a.createElement(h.a,{path:"/signup",component:w}),r.a.createElement(h.a,{path:"/login",component:b}),r.a.createElement(h.a,{path:"/profile",component:O}),r.a.createElement(h.a,{path:"/",component:x}))},J=a(235),D=a(233),U=function(e){function t(){var e,a;Object(c.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={redirect:!1},a.setRedirect=function(){a.setState({redirect:!0})},a.renderRedirect=function(){if(a.state.redirect)return r.a.createElement(j.a,{to:"/"})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(J.a,null,r.a.createElement(D.a,{theme:"dark",mode:"horizontal",defaultSelectedKeys:["2"],style:{lineHeight:"64px"}},this.renderRedirect(),r.a.createElement(D.a.Item,{key:"1"},r.a.createElement("a",{href:"/"},"Home")),r.a.createElement(D.a.Item,{key:"2"},r.a.createElement("a",{href:"/signup"},"Signup")),r.a.createElement(D.a.Item,{key:"3"},r.a.createElement("a",{href:"/login"},"Login")),r.a.createElement(D.a.Item,{key:"4"},r.a.createElement("a",{href:"/logout"},"Logout")),r.a.createElement(D.a.Item,{key:"4"},r.a.createElement("a",{href:"/profile"},"Profile")))))}}]),t}(r.a.Component),P=function(e){function t(){return Object(c.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(U,null),r.a.createElement(G,null))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var q=a(237);a(226);l.a.render(r.a.createElement(function(){return r.a.createElement(q.a,null,r.a.createElement(P,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[118,2,1]]]);
//# sourceMappingURL=main.0e9e906f.chunk.js.map