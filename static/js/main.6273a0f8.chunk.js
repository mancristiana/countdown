(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports={flex:"CounterDisplay_flex__Kgl9b"}},16:function(e,t,n){e.exports={image:"RandomImage_image__1sm4H"}},19:function(e,t,n){e.exports=n(48)},25:function(e,t,n){},4:function(e,t,n){e.exports={container:"CounterUnit_container___OVO6",number:"CounterUnit_number__3vu56",unit:"CounterUnit_unit__1hEW2"}},48:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),u=(n(25),n(2)),s=n(6),i=n.n(s),l=n(15),m=n.n(l),f=n(4),p=n.n(f);var b=r.a.createContext({color:"#000",setColor:function(){}}),d=function(e){var t,n=e.unit,o=e.number,c=Object(a.useContext)(b).color,u={background:c,color:(t=c,(299*parseInt(t.substr(1,2),16)+587*parseInt(t.substr(3,2),16)+114*parseInt(t.substr(5,2),16))/1e3>=128?"black":"white")};return r.a.createElement("div",{className:p.a.container,style:u},r.a.createElement("div",{className:p.a.number},o),r.a.createElement("div",{className:p.a.unit},n))},v=n(3),h=n.n(v),E="days",_="hours",g="minutes",w="seconds";function x(e){return function(e,t){var n=h()(e),a=h()(t),r=h.a.duration(a.diff(n));return{seconds:r.seconds(),minutes:r.minutes(),hours:r.hours(),days:Math.floor(r.asDays())}}(h()(),e)}var O=function(e){var t=e.days,n=e.hours,a=e.minutes,o=e.seconds;return r.a.createElement("div",{className:m.a.flex},r.a.createElement(d,{unit:E,number:t}),r.a.createElement(d,{unit:_,number:n}),r.a.createElement(d,{unit:g,number:a}),r.a.createElement(d,{unit:w,number:o}))},j=function(e){var t=e.endDate,n=Object(a.useState)(x(t)),o=Object(u.a)(n,2),c=o[0],s=o[1];return Object(a.useEffect)(function(){var e=setInterval(function(){s(x(t))},1e3);return function(){clearInterval(e)}},[]),r.a.createElement(O,c)},y=n(16),C=n.n(y),I=n(7),k=n.n(I),N=n(17),U=n(18),D=n.n(U).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID 042454a26c390216eda97edd0c96560ecb88b5753a79bb740dc8283b7a7d665b"}});function A(){return(A=Object(N.a)(k.a.mark(function e(t){var n;return k.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.get("/photos/random?query=".concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{color:"#CACEE3",urls:{full:"https://images.unsplash.com/photo-1493606371202-6275828f90f3?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjU4MTUwfQ"}});case 11:case"end":return e.stop()}},e,this,[[0,7]])}))).apply(this,arguments)}var S=function(){var e=Object(a.useState)(""),t=Object(u.a)(e,2),n=t[0],o=t[1],c=Object(a.useContext)(b).setColor;return Object(a.useEffect)(function(){(function(e){return A.apply(this,arguments)})("home").then(function(e){var t=e.urls,n=e.color;o(t.full),c(n)})},[]),r.a.createElement("img",{src:n,className:C.a.image,alt:"logo"})},W=function(){var e=Object(a.useState)("#fff"),t=Object(u.a)(e,2),n=t[0],o=t[1];return r.a.createElement("div",{className:i.a.app},r.a.createElement(b.Provider,{value:{color:n,setColor:o}},r.a.createElement(S,null),r.a.createElement("div",{className:i.a.counter},r.a.createElement(j,{endDate:"2019-06-01"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,n){e.exports={app:"App_app__1PUK8",counter:"App_counter__3RDqS"}}},[[19,1,2]]]);
//# sourceMappingURL=main.6273a0f8.chunk.js.map