(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],[,,,,,,,,,,,function(e,t,c){},,function(e,t,c){},,function(e,t,c){},,function(e,t,c){},function(e,t,c){"use strict";c.r(t);var n=c(1),s=c.n(n),a=c(5),i=c.n(a),r=(c(11),c(3)),l=c.n(r),j=c(6),h=c(4),d=(c(13),c(14),c(15),c(0));function o(e){var t=e.weather;return console.log(t.aqi),Object(d.jsxs)("div",{className:"container",children:[Object(d.jsxs)("div",{className:"city",children:[Object(d.jsx)("h4",{children:t.city_name}),Object(d.jsx)("sup",{children:t.country_code})]}),Object(d.jsxs)("div",{className:"temprature",children:[Object(d.jsx)("img",{className:"image",src:"https://www.weatherbit.io/static/img/icons/".concat(t.weather.icon,".png"),alt:"name"}),Object(d.jsxs)("h1",{className:"temp",children:[t.temp,"\xb0C"]}),Object(d.jsx)("p",{className:"temp-desc",children:t.weather.description})]}),Object(d.jsxs)("div",{className:"pres-aqi",children:[Object(d.jsxs)("h6",{className:"aqi",children:["Air Quality Index: ",t.aqi]}),Object(d.jsxs)("h6",{className:"pres",children:["Pressure: ",t.pres," mb "]}),Object(d.jsxs)("h6",{className:"wind-spd",children:["Wind speed: ",t.wind_spd," m/s "]}),Object(d.jsxs)("h6",{className:"wind-dir",children:["Wind Direction: ",t.wind_dir,"\xb0C "]})]})]})}c(17);function u(){return Object(d.jsx)("footer",{className:"footer",children:Object(d.jsx)("p",{className:"title",children:"Copyright \xa9 2021 All Rights Reserved."})})}var b="d0b49537880c4a4193357cc5e92210a0";function p(){var e=Object(n.useState)([]),t=Object(h.a)(e,2),c=t[0],s=t[1],a=Object(n.useState)(""),i=Object(h.a)(a,2),r=i[0],p=i[1];function m(e){return O.apply(this,arguments)}function O(){return O=Object(j.a)(l.a.mark((function e(t){var c,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.weatherbit.io/v2.0/current?city=".concat(t,"&key=").concat(b,"&include=minutely"));case 2:return c=e.sent,e.next=5,c.json();case 5:n=e.sent,s(n.data);case 7:case"end":return e.stop()}}),e)}))),O.apply(this,arguments)}return Object(n.useEffect)((function(){m("Chittorgarh")}),[]),Object(d.jsxs)("div",{className:"main",children:[Object(d.jsx)("div",{className:"navbar",children:Object(d.jsx)("h1",{className:"title",children:"Mausam"})}),Object(d.jsxs)("div",{className:"searchBar",children:[Object(d.jsx)("input",{className:"searchBlock",placeholder:"Search City",onChange:function(e){p(e.target.value)},required:!0}),Object(d.jsx)("button",{className:"searchBtn",onClick:function(){m(r)},children:"Search"})]}),c.length>0?Object(d.jsx)(d.Fragment,{children:Object(d.jsx)(o,{weather:c[0]})}):Object(d.jsx)("p",{children:"Loading..."}),Object(d.jsx)(u,{})]})}var m=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,19)).then((function(t){var c=t.getCLS,n=t.getFID,s=t.getFCP,a=t.getLCP,i=t.getTTFB;c(e),n(e),s(e),a(e),i(e)}))};i.a.render(Object(d.jsx)(s.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root")),m()}],[[18,1,2]]]);
//# sourceMappingURL=main.b89f1362.chunk.js.map