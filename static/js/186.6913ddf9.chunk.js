"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[186],{22:function(e,n,t){t.d(n,{Hg:function(){return s},Jh:function(){return p},TP:function(){return f},Ui:function(){return o},_r:function(){return l}});var r=t(861),a=t(687),u=t.n(a),c=t(243);c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="233297d4a0bf302b0bc846d2e5d7a397",s=function(){var e=(0,r.Z)(u().mark((function e(){var n;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("trending/movie/day?api_key=".concat(i));case 2:return n=e.sent,e.abrupt("return",n.data.results);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(n));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),f=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),p=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return t=e.sent,e.abrupt("return",t.data.cast);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),l=function(){var e=(0,r.Z)(u().mark((function e(n){var t;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,c.Z.get("movie/".concat(n,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return t=e.sent,e.abrupt("return",t.data.results);case 4:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}()},186:function(e,n,t){t.r(n);var r=t(439),a=t(689),u=t(791),c=t(22),i=t(510),s=t(184);n.default=function(){var e=(0,a.UO)().movieId,n=(0,u.useState)([]),t=(0,r.Z)(n,2),o=t[0],f=t[1],p=(0,u.useState)(!1),l=(0,r.Z)(p,2),h=l[0],d=l[1];return(0,u.useEffect)((function(){d(!0),(0,c._r)(e).then((function(e){f(e)})).catch((function(e){console.log(e)})).finally((function(){d(!1)}))}),[e]),(0,s.jsxs)(s.Fragment,{children:[h&&(0,s.jsx)(i.a,{}),0!==o.length&&(0,s.jsx)("div",{children:(0,s.jsx)("ul",{children:o.map((function(e){return(0,s.jsxs)("li",{children:[(0,s.jsxs)("h2",{children:["Author: ",e.author]}),(0,s.jsx)("p",{children:e.content})]},e.id)}))})}),0===o.length&&(0,s.jsx)("p",{children:"Sorry, there aren't any reviews for this movie"})]})}}}]);
//# sourceMappingURL=186.6913ddf9.chunk.js.map