(this["webpackJsonpreact_tabs-with-router"]=this["webpackJsonpreact_tabs-with-router"]||[]).push([[0],{16:function(e,t,c){},18:function(e,t,c){"use strict";c.r(t);var a=c(9),s=c.n(a),n=c(4),i=c(2),b=(c(14),c(15),c(16),c(6)),j=c.n(b),l=c(1),r=function(){return Object(l.jsx)("nav",{className:"navbar is-light is-fixed-top is-mobile has-shadow","data-cy":"Nav",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsxs)("div",{className:"navbar-brand",children:[Object(l.jsx)(n.c,{to:"/",className:function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},children:"Home"}),Object(l.jsx)(n.c,{to:"/tabs",className:function(e){var t=e.isActive;return j()("navbar-item",{"is-active":t})},children:"Tabs"})]})})})},d=(c(0),function(){return Object(l.jsx)("div",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("h1",{className:"title",children:"Home page"})})})}),o=function(){return Object(l.jsx)("div",{className:"section",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)("h1",{className:"title",children:"Page not found"})})})},x=function(e){var t=e.tabs,c=e.selectedTab;return Object(l.jsx)("div",{className:"tabs is-boxed",children:Object(l.jsx)("ul",{children:t.map((function(e){var t=e.title,a=e.id,s=Boolean((null===c||void 0===c?void 0:c.id)===a);return Object(l.jsx)("li",{"data-cy":"Tab",className:j()({"is-active":s}),children:Object(l.jsx)(n.b,{to:"../".concat(a),children:t})})}))})})},h=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],O=function(){var e=Object(i.h)().tabId,t=void 0===e?0:e,c=h.find((function(e){return e.id===t}))||null,a=Boolean(c);return Object(l.jsx)("div",{className:"section",children:Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)("h1",{className:"title",children:"Tabs page"}),Object(l.jsx)(x,{tabs:h,selectedTab:c}),Object(l.jsx)("div",{className:"block","data-cy":"TabContent",children:a?null===c||void 0===c?void 0:c.content:"Please select a tab"})]})})},m=function(){return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(r,{}),Object(l.jsxs)(i.d,{children:[Object(l.jsx)(i.b,{path:"/",element:Object(l.jsx)(d,{})}),Object(l.jsx)(i.b,{path:"home",element:Object(l.jsx)(i.a,{to:"/",replace:!0})}),Object(l.jsxs)(i.b,{path:"tabs",children:[Object(l.jsx)(i.b,{index:!0,element:Object(l.jsx)(O,{})}),Object(l.jsx)(i.b,{path:":tabId",element:Object(l.jsx)(O,{})})]}),Object(l.jsx)(i.b,{path:"*",element:Object(l.jsx)(o,{})})]})]})};s.a.render(Object(l.jsx)(n.a,{children:Object(l.jsx)(m,{})}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.3ae060df.chunk.js.map