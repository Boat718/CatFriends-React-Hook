(this.webpackJsonprobotfriends=this.webpackJsonprobotfriends||[]).push([[0],{13:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),s=n(4),o=n.n(s),i=(n(13),function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,18)).then((function(t){var n=t.getCLS,c=t.getFID,r=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),c(e),r(e),s(e),o(e)}))}),a=(n(14),n(2)),h=n(0),j=function(e){var t=e.name,n=e.email,c=e.website,r=Math.floor(100*Math.random());return Object(h.jsxs)("div",{className:"tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5",children:[Object(h.jsx)("img",{alt:"Robottt",src:"https://robohash.org/".concat(r,"?set=set4")}),Object(h.jsxs)("div",{children:[Object(h.jsx)("h2",{children:t}),Object(h.jsx)("h3",{children:n}),Object(h.jsx)("h4",{children:c})]})]})},b=function(e){var t=e.robots.map((function(e){return Object(h.jsx)(j,{name:e.name,email:e.email,website:e.website},e.id)}));return Object(h.jsx)("div",{children:t})},l=function(e){var t=e.searchChange;return Object(h.jsx)("div",{className:"pa2",children:Object(h.jsx)("input",{className:"tc dib br3 pa3 ma2 grow bw2 shadow-5",type:"search",placeholder:"search cats",onChange:t})})},u=(n(16),function(e){return Object(h.jsx)("div",{style:{overflowY:"scroll",border:"4px solid black",height:"800px"},children:e.children})}),d=n(5),O=n(6),f=n(8),x=n(7),m=function(e){Object(f.a)(n,e);var t=Object(x.a)(n);function n(e){var c;return Object(d.a)(this,n),(c=t.call(this,e)).state={hasError:!1},c}return Object(O.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?Object(h.jsx)("h1",{children:"Oooops, That is not good"}):this.props.children}}]),n}(c.Component),g=function(){var e=(new Date).toLocaleTimeString(),t=Object(c.useState)(e),n=Object(a.a)(t,2),r=n[0],s=n[1];return Object(c.useEffect)((function(){setTimeout((function(){s(e)}),1e3)})),Object(h.jsx)("div",{children:Object(h.jsx)("h3",{children:r})})};var p=function(){var e=Object(c.useState)([]),t=Object(a.a)(e,2),n=t[0],r=t[1],s=Object(c.useState)(""),o=Object(a.a)(s,2),i=o[0],j=o[1];Object(c.useEffect)((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return r(e)})),console.log("didmount")}),[]);var d=n.filter((function(e){return e.name.toLowerCase().includes(i.toLowerCase())}));return d.length?Object(h.jsxs)("div",{className:"tc",children:[Object(h.jsx)("h1",{children:" CatFriends "}),Object(h.jsx)(g,{}),Object(h.jsx)(l,{searchChange:function(e){j({searchfield:e.target.value})}}),Object(h.jsx)(u,{children:Object(h.jsx)(m,{children:Object(h.jsx)(b,{robots:d})})})]}):Object(h.jsx)("h1",{children:"Loading"})};o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(p,{})}),document.getElementById("root")),i()}},[[17,1,2]]]);
//# sourceMappingURL=main.54f020f6.chunk.js.map