"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[247],{22:function(t,e,n){n.d(e,{Hg:function(){return s},Jh:function(){return f},TP:function(){return p},Ui:function(){return o},_r:function(){return l}});var r=n(861),a=n(687),c=n.n(a),u=n(243);u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var i="233297d4a0bf302b0bc846d2e5d7a397",s=function(){var t=(0,r.Z)(c().mark((function t(){var e;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("trending/movie/day?api_key=".concat(i));case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),o=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("search/movie?api_key=".concat(i,"&language=en-US&page=1&include_adult=false&query=").concat(e));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),f=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/credits?api_key=").concat(i,"&language=en-US"));case 2:return n=t.sent,t.abrupt("return",n.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,r.Z)(c().mark((function t(e){var n;return c().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,u.Z.get("movie/".concat(e,"/reviews?api_key=").concat(i,"&language=en-US&page=1"));case 2:return n=t.sent,t.abrupt("return",n.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},247:function(t,e,n){n.r(e);var r=n(439),a=n(689),c=n(791),u=n(22),i=n(510),s=n(184);e.default=function(){var t=(0,a.UO)().movieId,e=(0,c.useState)([]),n=(0,r.Z)(e,2),o=n[0],p=n[1],f=(0,c.useState)(!1),l=(0,r.Z)(f,2),d=l[0],h=l[1];return(0,c.useEffect)((function(){h(!0),(0,u.Jh)(t).then((function(t){p(t)})).catch((function(t){console.log(t)})).finally((function(){h(!1)}))}),[t]),(0,s.jsxs)("div",{children:[d&&(0,s.jsx)(i.a,{}),(0,s.jsx)("ul",{children:o.map((function(t){var e=t.id,n=t.profile_path,r=t.original_name,a=t.name,c=t.character;return(0,s.jsxs)("li",{children:[(0,s.jsx)("img",{width:"200px",src:n?"https://image.tmdb.org/t/p/w500".concat(n):"https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg",alt:r}),(0,s.jsx)("p",{children:a}),(0,s.jsxs)("p",{children:["Character: ",c]})]},e)}))})]})}}}]);
//# sourceMappingURL=247.6148d636.chunk.js.map