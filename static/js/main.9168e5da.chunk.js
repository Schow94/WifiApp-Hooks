(window["webpackJsonpwifi-app"]=window["webpackJsonpwifi-app"]||[]).push([[0],{147:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(22),i=a.n(o),c=a(27),l=a(25),s=a(31),u=a.n(s),m=a(30),p=a(38),d=a(47),g=a.n(d),b=a(16),f=a.n(b),h=a(183),E=a(178),v=a(186),y=a(181),O=a(187),j=a(185),w=a(184),x=a(182),k=a(20),C=Object(n.createContext)();function B(e){var t=Object(n.useState)({}),a=Object(k.a)(t,2),o=a[0],i=a[1];return r.a.createElement(C.Provider,{value:{selectedBiz:o,changeBiz:function(e){i(e),console.log(o)}}},e.children)}var N=f()((function(e){return{titleContainer:{display:"flex",flexDirection:"row",alignItems:"center",marginBottom:"1em"},card:{minWidth:275,maxWidth:345,marginBottom:"1em"},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:"1.5em",fontWeight:400,color:"black",marginTop:"0.4em",textDecoration:"none"},pos:{marginBottom:12},icon:{backgroundColor:"red",fontSize:"1.2em",marginRight:"1em",boxShadow:"none",fontWeight:400}}}))((function(e){var t=e.classes,a=e.business,o=e.i,i=Object(n.useContext)(C).changeBiz;return r.a.createElement(E.a,{className:t.card,onClick:function(){return i(a)}},r.a.createElement(y.a,null,r.a.createElement("div",{className:t.titleContainer},r.a.createElement(x.a,{className:t.icon,size:"small"},"".concat(o+1)),r.a.createElement(c.b,{to:"/".concat(a.name),className:t.title},r.a.createElement(h.a,{color:"textSecondary",gutterBottom:!0},a.name))),r.a.createElement(h.a,{variant:"body2",component:"p"},"".concat((a.distance/1609.344).toFixed(2)," miles away")),r.a.createElement("br",null),r.a.createElement(h.a,{variant:"body2",component:"p"},"".concat(a.location.display_address[0]," ").concat(a.location.display_address[1]))),r.a.createElement(w.a,null,r.a.createElement(j.a,{component:"img",alt:"".concat(a.name," Image"),height:"140",image:a.image_url,title:a.name})),r.a.createElement(v.a,null,r.a.createElement(O.a,{size:"small"},"More Details")))})),P=Object(n.createContext)(),z=[];function S(e){var t=Object(n.useState)(z),a=Object(k.a)(t,2),o=a[0],i=a[1];return r.a.createElement(P.Provider,{value:{biz:o,getBiz:function(e){return i(e)}}},e.children)}var R=Object(n.createContext)(),A={lat:80.836319,long:-118.340042};function D(e){var t=Object(n.useState)(A),a=Object(k.a)(t,2),o=a[0],i=a[1];function c(){return(c=Object(p.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,navigator.geolocation.getCurrentPosition((function(e){var t=e.coords;console.log(t),i({lat:t.latitude,long:t.longitude})}));case 2:return t=e.sent,e.abrupt("return",t);case 4:case"end":return e.stop()}}),e)})))).apply(this,arguments)}return r.a.createElement(R.Provider,{value:{position:o,getPosition:function(){return c.apply(this,arguments)}}},e.children)}var I=f()((function(e){return{allResults:{marginTop:"1em",marginLeft:"1em"}}}))((function(e){var t=e.classes,a=Object(n.useContext)(P),o=a.biz;return a.getBiz,Object(n.useContext)(R).position,r.a.createElement("div",null,r.a.createElement(h.a,{variant:"h5",className:t.allResults},"All Results"),r.a.createElement("ul",null,o.map((function(e,t){return r.a.createElement(N,{key:t,business:e,i:t})}))))})),L=a(34);var F={map:{height:"50%",width:"50%",position:"relative",marginLeft:"5em",marginTop:"10em"}},M=Object(L.GoogleApiWrapper)({apiKey:"AIzaSyBBHgTZpPDyCpEzIPga6jBebGKcjCUZPwY"})((function(e){var t=e.lat,a=e.long,o=Object(n.useContext)(P).biz,i=Object(n.useState)(!1),c=Object(k.a)(i,2),l=c[0],s=c[1],u=Object(n.useState)({}),m=Object(k.a)(u,2),p=m[0],d=m[1],g=Object(n.useState)({}),b=Object(k.a)(g,2),f=b[0],h=b[1],E=function(e,t,a){h(e),d(t),s(!0)};return r.a.createElement(L.Map,{onClick:function(e){l&&(d(null),s(!1))},style:F.map,google:e.google,zoom:14,center:{lat:t,lng:a}},r.a.createElement(L.Marker,{onClick:E,name:"Current Location",position:{lat:t,lng:a}}),r.a.createElement(L.InfoWindow,{marker:p,visible:l},r.a.createElement("h1",null,f.name)),o.map((function(e,t){return r.a.createElement(L.Marker,{onClick:E,name:"".concat(t+1,". ").concat(e.name),label:"".concat(t+1),position:{lat:e.coordinates.latitude,lng:e.coordinates.longitude},key:t})})))})),T=a(188);var W=f()((function(e){return{parent:{position:"absolute",left:"30%",top:"30%"},progress:{marginLeft:e.spacing(2)}}}))((function(e){var t=e.classes;return r.a.createElement("div",{className:t.parent},r.a.createElement(T.a,{size:200,className:t.progress}))})),X="Li5lf6uc6T_PcnX4CSB1TAE9piKJ6OQ-Cgth2uk3qvJ03br_EZgUX1R8oEv_EXnZ5yqwrXMhgKX6sUb1V4ppXtpNNe8e0hA2vtWAKsO1RnhARMAsSr6XLdiL1F11XXYx",_="https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search";var K=f()((function(e){return{body:{fontFamily:"Roboto",display:"flex",flexDirection:"row",width:"100%"},allResults:{marginTop:"1em",marginLeft:"1em"}}}))((function(e){var t=e.classes,a=Object(n.useContext)(R),o=a.position,i=a.getPosition,c=Object(n.useContext)(P),l=c.biz,s=c.getBiz,d=function(){var e=Object(p.a)(u.a.mark((function e(){var t,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get(_,{headers:{Authorization:"Bearer ".concat(X)},params:{latitude:o.lat,longitude:o.long,term:"free wifi"}});case 2:return t=e.sent,a=t.data.businesses,console.log(a),e.abrupt("return",a.map((function(e){return s((function(t){return[].concat(Object(m.a)(t),[e])}))})));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){i(),console.log(o)}),[]),Object(n.useEffect)((function(){d()}),[o]),r.a.createElement("div",{className:t.body},l[0]?r.a.createElement(r.a.Fragment,null,r.a.createElement(I,null),r.a.createElement(M,{lat:o.lat,long:o.long})):r.a.createElement(W,null))})),G=a(10),J=a(78),Z=a(189);function U(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function q(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?U(a,!0).forEach((function(t){Object(G.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):U(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var Y=f()((function(e){return{mainFeaturedPost:{position:"relative",backgroundColor:e.palette.grey[800],height:"200px",color:e.palette.common.white,marginBottom:e.spacing(4),backgroundSize:"cover",backgroundRepeat:"repeat",backgroundPosition:"center"},overlay:{position:"absolute",top:0,bottom:0,right:0,left:0,backgroundColor:"rgba(0,0,0,.3)"},mainFeaturedPostContent:Object(G.a)({position:"relative",padding:e.spacing(3)},e.breakpoints.up("md"),{padding:e.spacing(6),paddingRight:0}),mainGrid:{marginTop:e.spacing(3)},card:{display:"flex"},cardDetails:{flex:1},cardMedia:{width:160},markdown:q({},e.typography.body2,{padding:e.spacing(3,0)}),sidebarAboutBox:{padding:e.spacing(2),backgroundColor:e.palette.grey[200]},sidebarSection:{marginTop:e.spacing(3)},footer:{backgroundColor:e.palette.background.paper,marginTop:e.spacing(8),padding:e.spacing(6,0)}}}))((function(e){var t=Object(n.useContext)(C).selectedBiz,a=e.classes;return r.a.createElement(r.a.Fragment,null,r.a.createElement(J.a,{className:a.mainFeaturedPost},r.a.createElement("img",{src:t.image_url,alt:t.name}),r.a.createElement("div",{className:a.overlay}),r.a.createElement(h.a,{variant:"h5",color:"inherit",paragraph:!0},"Image from yelp goes here")),r.a.createElement(Z.a,{item:!0,xs:12,md:4},r.a.createElement(J.a,{elevation:0,className:a.sidebarAboutBox},r.a.createElement(h.a,{variant:"h6",gutterBottom:!0},"About"),r.a.createElement(h.a,null,"Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.")),r.a.createElement(h.a,{variant:"h6",gutterBottom:!0,className:a.sidebarSection},"Archives"),"Side bar goes here",r.a.createElement(h.a,{variant:"h6",gutterBottom:!0,className:a.sidebarSection},"Social"),"More sidebar stuff goes here - supposed to be aligned right"))}));function H(){Object(n.useContext)(C).selectedBiz;return r.a.createElement(l.c,null,r.a.createElement(l.a,{exact:!0,path:"/",render:function(){return r.a.createElement(K,null)}}),r.a.createElement(l.a,{exact:!0,path:"/testing",render:function(){return r.a.createElement(Y,null)}}))}var Q=a(12),V=a(190),$=a(191),ee=a(192),te=a(194),ae=a(193),ne=a(48),re=a.n(ne),oe=a(76),ie=a.n(oe),ce=a(74),le=a.n(ce),se=a(75),ue=a.n(se),me=a(77),pe=a.n(me),de=a(73),ge=a.n(de);var be=f()((function(e){return{grow:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:Object(G.a)({display:"none"},e.breakpoints.up("sm"),{display:"block"}),search:Object(G.a)({position:"relative",borderRadius:e.shape.borderRadius,backgroundColor:Object(Q.b)(e.palette.common.white,.15),"&:hover":{backgroundColor:Object(Q.b)(e.palette.common.white,.25)},marginRight:e.spacing(2),marginLeft:0,width:"100%"},e.breakpoints.up("sm"),{marginLeft:e.spacing(3),width:"auto"}),searchIcon:{width:e.spacing(7),height:"100%",position:"absolute",pointerEvents:"none",display:"flex",alignItems:"center",justifyContent:"center"},inputRoot:{color:"inherit"},inputInput:Object(G.a)({padding:e.spacing(1,1,1,7),transition:e.transitions.create("width"),width:"100%"},e.breakpoints.up("md"),{width:400}),sectionDesktop:Object(G.a)({display:"none"},e.breakpoints.up("md"),{display:"flex"}),sectionMobile:Object(G.a)({display:"flex"},e.breakpoints.up("md"),{display:"none"}),link:{textDecoration:"none",color:"white",marginRight:"0.5em"}}}))((function(e){var t=e.classes,a=Object(n.useContext)(R).position,o=a.lat,i=a.long;return r.a.createElement("div",{className:t.grow},r.a.createElement(V.a,{position:"static",style:{backgroundColor:"#d32323"}},r.a.createElement($.a,null,r.a.createElement(ee.a,{edge:"start",className:t.menuButton,color:"inherit","aria-label":"open drawer"}),r.a.createElement(c.b,{to:"/",className:t.link},r.a.createElement(h.a,{className:t.title,variant:"h6",noWrap:!0},"Wifree")),r.a.createElement(ge.a,{style:{fontSize:"3em"}}),r.a.createElement("div",{className:t.search},r.a.createElement("div",{className:t.searchIcon},r.a.createElement(re.a,null)),r.a.createElement(te.a,{placeholder:"Find",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"}}),"|",r.a.createElement(te.a,{placeholder:"Near",classes:{root:t.inputRoot,input:t.inputInput},inputProps:{"aria-label":"search"},value:"Lat: ".concat(o.toFixed(3),", Long: ").concat(i.toFixed(3))})),r.a.createElement("div",{className:t.grow}),r.a.createElement("div",{className:t.sectionDesktop},r.a.createElement(ee.a,{"aria-label":"show 4 new mails",color:"inherit"},r.a.createElement(ae.a,{badgeContent:4,color:"secondary"},r.a.createElement(le.a,null))),r.a.createElement(ee.a,{"aria-label":"show 17 new notifications",color:"inherit"},r.a.createElement(ae.a,{badgeContent:17,color:"secondary"},r.a.createElement(ue.a,null))),r.a.createElement(ee.a,{edge:"end","aria-label":"account of current user","aria-controls":"primary-search-account-menu","aria-haspopup":"true",color:"inherit"},r.a.createElement(ie.a,null))),r.a.createElement("div",{className:t.sectionMobile},r.a.createElement(ee.a,{"aria-label":"show more","aria-controls":"primary-search-account-menu-mobile","aria-haspopup":"true",color:"inherit"},r.a.createElement(pe.a,null))))))})),fe=a(195);var he=function(){return r.a.createElement(D,null,r.a.createElement(S,null,r.a.createElement(B,null,r.a.createElement(fe.a,null),r.a.createElement(be,null),r.a.createElement(H,null))))};i.a.render(r.a.createElement(c.a,null,r.a.createElement(he,null)),document.getElementById("root"))},89:function(e,t,a){e.exports=a(147)}},[[89,1,2]]]);
//# sourceMappingURL=main.9168e5da.chunk.js.map