(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){e.exports={flex:"CounterDisplay_flex__Kgl9b"}},16:function(e,t,n){e.exports={image:"RandomImage_image__1sm4H"}},19:function(e,t,n){e.exports={header:"Header_header__1nNrV"}},20:function(e,t,n){e.exports=n(49)},26:function(e,t,n){},4:function(e,t,n){e.exports={container:"CounterUnit_container___OVO6",number:"CounterUnit_number__3vu56",unit:"CounterUnit_unit__1hEW2"}},49:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(14),c=n.n(o),s=(n(26),n(2)),u=n(6),i=n.n(u),l=n(15),m=n.n(l),f=n(4),p=n.n(f);var d=a.a.createContext({color:"#000",setColor:function(){}}),b=function(e){var t,n=e.unit,o=e.number,c=Object(r.useContext)(d).color,s={background:c,color:(t=c,(299*parseInt(t.substr(1,2),16)+587*parseInt(t.substr(3,2),16)+114*parseInt(t.substr(5,2),16))/1e3>=128?"black":"white")};return a.a.createElement("div",{className:p.a.container,style:s},a.a.createElement("div",{className:p.a.number},o),a.a.createElement("div",{className:p.a.unit},n))},h=n(3),v=n.n(h),_="days",E="hours",w="minutes",x="seconds";function g(e){return function(e,t){var n=v()(e),r=v()(t),a=v.a.duration(r.diff(n));return{seconds:a.seconds(),minutes:a.minutes(),hours:a.hours(),days:Math.floor(a.asDays())}}(v()(),e)}var y=function(e){var t=e.days,n=e.hours,r=e.minutes,o=e.seconds;return a.a.createElement("div",{className:m.a.flex},a.a.createElement(b,{unit:_,number:t}),a.a.createElement(b,{unit:E,number:n}),a.a.createElement(b,{unit:w,number:r}),a.a.createElement(b,{unit:x,number:o}))},C=function(e){var t=e.endDate,n=Object(r.useState)(g(t)),o=Object(s.a)(n,2),c=o[0],u=o[1];return Object(r.useEffect)(function(){var e=setInterval(function(){u(g(t))},1e3);return function(){clearInterval(e)}},[]),a.a.createElement(y,c)},O=n(16),j=n.n(O),N=n(7),I=n.n(N),k=n(17),U=n(18),D=n.n(U).a.create({baseURL:"https://api.unsplash.com",headers:{Authorization:"Client-ID 042454a26c390216eda97edd0c96560ecb88b5753a79bb740dc8283b7a7d665b"}});function q(){return(q=Object(k.a)(I.a.mark(function e(t){var n;return I.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,D.get("/photos/random?query=".concat(t));case 3:return n=e.sent,e.abrupt("return",n.data);case 7:return e.prev=7,e.t0=e.catch(0),console.error(e.t0),e.abrupt("return",{color:"#CACEE3",urls:{full:"https://images.unsplash.com/photo-1493606371202-6275828f90f3?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&ixid=eyJhcHBfaWQiOjU4MTUwfQ"}});case 11:case"end":return e.stop()}},e,this,[[0,7]])}))).apply(this,arguments)}var A=function(e){var t=e.query,n=Object(r.useState)(""),o=Object(s.a)(n,2),c=o[0],u=o[1],i=Object(r.useContext)(d).setColor;return Object(r.useEffect)(function(){(function(e){return q.apply(this,arguments)})(t).then(function(e){var t=e.urls,n=e.color;u(t.full),i(n)})},[]),a.a.createElement("img",{src:c,className:j.a.image,alt:"logo"})},S=n(19),W=n.n(S),B=function(e){var t=e.children,n=Object(r.useContext)(d).color;return a.a.createElement("div",{className:W.a.header,style:{color:n}},t)},H=function(){var e=Object(r.useState)("#fff"),t=Object(s.a)(e,2),n=t[0],o=t[1];return a.a.createElement("div",{className:i.a.app},a.a.createElement(d.Provider,{value:{color:n,setColor:o}},a.a.createElement(A,{query:"winter"}),a.a.createElement("div",{className:i.a.counter},a.a.createElement(B,null,"Christmas in"),a.a.createElement(C,{endDate:"2019-12-24"}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(a.a.createElement(H,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,n){e.exports={app:"App_app__1PUK8",counter:"App_counter__3RDqS"}}},[[20,1,2]]]);
//# sourceMappingURL=main.acd930be.chunk.js.map