"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[544],{22:function(n,t,e){e.d(t,{Hg:function(){return i},Jh:function(){return p},TP:function(){return f},Ui:function(){return s},_r:function(){return l}});var r=e(861),a=e(687),u=e.n(a),c=e(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o="233297d4a0bf302b0bc846d2e5d7a397",i=function(){var n=(0,r.Z)(u().mark((function n(){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(o));case 2:return t=n.sent,n.abrupt("return",t.data.results);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("search/movie?api_key=".concat(o,"&language=en-US&page=1&include_adult=false&query=").concat(t));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data.cast);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(t){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(t,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=n.sent,n.abrupt("return",e.data.results);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()},295:function(n,t,e){e.d(t,{a:function(){return l}});var r,a,u=e(689),c=e(766),o=e(547),i=e(87),s=(0,o.ZP)(i.rU)(r||(r=(0,c.Z)(["\n  color: darkblue;\n  font-size: 20px;\n  font-weight: 500;\n  text-decoration: none;\n\n  &:hover {\n    color: #951d08;\n  }\n"]))),f=o.ZP.dt(a||(a=(0,c.Z)(["\n  margin-bottom: 8px;\n"]))),p=e(184),l=function(n){var t=n.films,e=(0,u.TH)();return(0,p.jsx)("dl",{children:t.map((function(n){return(0,p.jsx)(f,{children:(0,p.jsx)(s,{to:"/movies/".concat(n.id),state:{from:e},children:n.title})},n.id)}))})}},544:function(n,t,e){e.r(t);var r=e(439),a=e(791),u=e(22),c=e(295),o=e(510),i=e(184);t.default=function(){var n=(0,a.useState)([]),t=(0,r.Z)(n,2),e=t[0],s=t[1],f=(0,a.useState)(!1),p=(0,r.Z)(f,2),l=p[0],d=p[1];return(0,a.useEffect)((function(){d(!0),(0,u.Hg)().then((function(n){console.log(n),s(n)})).catch((function(n){console.log(n)})).finally((function(){d(!1)}))}),[]),(0,i.jsxs)("main",{children:[(0,i.jsx)("h1",{children:"Trending today"}),(0,i.jsx)(c.a,{films:e}),l&&(0,i.jsx)(o.a,{})]})}}}]);
//# sourceMappingURL=544.df0fccbf.chunk.js.map