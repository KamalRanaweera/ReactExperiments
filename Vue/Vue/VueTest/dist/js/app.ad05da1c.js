(function(t){function e(e){for(var r,u,c=e[0],i=e[1],s=e[2],f=0,p=[];f<c.length;f++)u=c[f],Object.prototype.hasOwnProperty.call(o,u)&&o[u]&&p.push(o[u][0]),o[u]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(e--,1),t=u(u.s=n[0]))}return t}var r={},o={app:0},a=[];function u(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.m=t,u.c=r,u.d=function(t,e,n){u.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},u.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},u.t=function(t,e){if(1&e&&(t=u(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)u.d(n,r,function(e){return t[e]}.bind(null,r));return n},u.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return u.d(e,"a",e),e},u.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},u.p="/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],i=c.push.bind(c);c.push=e,c=c.slice();for(var s=0;s<c.length;s++)e(c[s]);var l=i;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"972f":function(t,e,n){"use strict";var r=n("ed73"),o=n.n(r);o.a},cd49:function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("Home",{attrs:{msg:"Tic-tac-toe!"}})],1)},a=[],u=n("d225"),c=n("308d"),i=n("6bb5"),s=n("4e2b"),l=n("9ab4"),f=n("60a3"),p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("h1",[t._v(t._s(t.msg))]),n("div",[t._v("Next Player: "+t._s(t.players[t.turn]))]),t._l(t.gridData.rows,function(e,r){return n("div",{staticClass:"my-row"},t._l(t.gridData.cols,function(r,o){return n("div",{ref:"square"+e+r,refInFor:!0,staticClass:"my-col",on:{click:t.placeToken}})}))}),n("button",{on:{click:t.resetGame}},[t._v("Reset")])],2)},b=[],d=n("b0b4"),v=function(t){function e(){var t;return Object(u["a"])(this,e),t=Object(c["a"])(this,Object(i["a"])(e).apply(this,arguments)),t.gridData={rows:3,cols:3},t.players=["X","O"],t.turn=0,t}return Object(s["a"])(e,t),Object(d["a"])(e,[{key:"placeToken",value:function(t){""==t.target.innerHTML&&(t.target.innerHTML=this.players[this.turn],this.turn>0?this.turn=0:this.turn=1)}},{key:"resetGame",value:function(){}}]),e}(f["c"]);l["a"]([Object(f["b"])()],v.prototype,"msg",void 0),v=l["a"]([f["a"]],v);var h=v,y=h,O=(n("972f"),n("2877")),j=Object(O["a"])(y,p,b,!1,null,"77f9ef76",null),g=j.exports,m=function(t){function e(){return Object(u["a"])(this,e),Object(c["a"])(this,Object(i["a"])(e).apply(this,arguments))}return Object(s["a"])(e,t),e}(f["c"]);m=l["a"]([Object(f["a"])({components:{Home:g}})],m);var _=m,w=_,k=Object(O["a"])(w,o,a,!1,null,null,null),x=k.exports;r["default"].config.productionTip=!0;new r["default"]({render:function(t){return t(x)}}).$mount("#app")},ed73:function(t,e,n){}});
//# sourceMappingURL=app.ad05da1c.js.map