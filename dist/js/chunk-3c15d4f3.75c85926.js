(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c15d4f3"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],s=function(t){try{return i(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?s(t):i(n(t))}},"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),a=r("17c2"),o=r("9112");for(var s in i){var c=n[s],u=c&&c.prototype;if(u&&u.forEach!==a)try{o(u,"forEach",a)}catch(f){u.forEach=a}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("a640"),a=r("ae40"),o=i("forEach"),s=a("forEach");t.exports=o&&s?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,r){"use strict";var n=r("23e7"),i=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),a=r("e538"),o=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||o(e,t,{value:a.f(t)})}},7863:function(t,e,r){"use strict";var n=r("8334"),i=r.n(n);i.a},8334:function(t,e,r){},"8a31":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"loadingbg"},[n("div",{staticClass:"loading"},[n("img",{attrs:{src:r("fe2b"),alt:""}})])])])}],a=(r("7863"),r("2877")),o={},s=Object(a["a"])(o,n,i,!1,null,"191dcc0b",null);e["a"]=s.exports},"9bd8":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),r("div",{staticClass:"dropdown ml-auto fixed"},[r("button",{staticClass:"btn btn-sm btn-cart",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[r("div",{staticClass:"rounded-circle shadow-lg bg-white"},[r("i",{staticClass:"fa fa-shopping-cart fa-2x p-3 position-relative"},[r("div",{staticClass:"position-absolute badge-position"},[r("h6",[r("span",{staticClass:"badge badge-pill badge-danger "},[t._v(t._s(t.myCart.carts.length))])])])])])]),r("div",{staticClass:"dropdown-menu dropdown-menu-right drop-menu-width"},[r("div",{staticClass:"px-3 py-3"},[r("h6",{staticClass:"mb-2 text-center font-weight-bold"},[t._v("已選擇商品")]),r("div",{staticClass:"d-flex align-items-center justify-content-center"},[0===t.myCart.carts.length?r("p",{staticClass:"m-0"},[t._v("還沒有商品！")]):t._e()]),r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-sm"},t._l(t.myCart.carts,(function(e){return r("tbody",{key:e.product.product_id},[r("tr",[r("td",{staticClass:"align-middle",attrs:{width:"5%"}},[r("a",{staticClass:"text-secondary",attrs:{href:"#"},on:{click:function(r){return t.removeCartItem(e.id)}}},[r("i",{staticClass:"fas fa-trash"})])]),r("td",{attrs:{width:"80%"}},[t._v(t._s(e.product.title))])]),r("tr",[r("td"),r("td",{staticClass:"text-right"},[t._v(t._s(e.qty)+t._s(e.product.unit)+" "+t._s(e.total)+"元")])])])})),0)]),0!==t.myCart.carts.length?r("router-link",{staticClass:"btn btn-border btn-block",attrs:{to:"/set/check"}},[t._v("結帳去")]):t._e(),0==t.myCart.carts.length?r("router-link",{staticClass:"btn btn-border btn-block",attrs:{to:"/set/shopping"}},[t._v("購物去")]):t._e()],1)])])],1)},i=[],a={name:"Cart",props:["myCart"],data:function(){return{isLoading:!1}},methods:{removeCartItem:function(t){var e=this;e.$emit("delCart",t)}}},o=a,s=r("2877"),c=Object(s["a"])(o,n,i,!1,null,null,null);e["a"]=c.exports},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),a=r("d066"),o=r("c430"),s=r("83ab"),c=r("4930"),u=r("fdbf"),f=r("d039"),d=r("5135"),l=r("e8b5"),p=r("861d"),h=r("825a"),b=r("7b0b"),g=r("fc6a"),v=r("c04e"),y=r("5c6c"),m=r("7c73"),C=r("df75"),O=r("241c"),w=r("057f"),S=r("7418"),_=r("06cf"),E=r("9bf2"),L=r("d1e7"),P=r("9112"),j=r("6eeb"),x=r("5692"),T=r("f772"),$=r("d012"),k=r("90e3"),A=r("b622"),I=r("e538"),q=r("746f"),D=r("d44e"),H=r("69f3"),N=r("b727").forEach,M=T("hidden"),R="Symbol",V="prototype",G=A("toPrimitive"),J=H.set,F=H.getterFor(R),Q=Object[V],B=i.Symbol,K=a("JSON","stringify"),U=_.f,W=E.f,z=w.f,X=L.f,Y=x("symbols"),Z=x("op-symbols"),tt=x("string-to-symbol-registry"),et=x("symbol-to-string-registry"),rt=x("wks"),nt=i.QObject,it=!nt||!nt[V]||!nt[V].findChild,at=s&&f((function(){return 7!=m(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=U(Q,e);n&&delete Q[e],W(t,e,r),n&&t!==Q&&W(Q,e,n)}:W,ot=function(t,e){var r=Y[t]=m(B[V]);return J(r,{type:R,tag:t,description:e}),s||(r.description=e),r},st=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof B},ct=function(t,e,r){t===Q&&ct(Z,e,r),h(t);var n=v(e,!0);return h(r),d(Y,n)?(r.enumerable?(d(t,M)&&t[M][n]&&(t[M][n]=!1),r=m(r,{enumerable:y(0,!1)})):(d(t,M)||W(t,M,y(1,{})),t[M][n]=!0),at(t,n,r)):W(t,n,r)},ut=function(t,e){h(t);var r=g(e),n=C(r).concat(ht(r));return N(n,(function(e){s&&!dt.call(r,e)||ct(t,e,r[e])})),t},ft=function(t,e){return void 0===e?m(t):ut(m(t),e)},dt=function(t){var e=v(t,!0),r=X.call(this,e);return!(this===Q&&d(Y,e)&&!d(Z,e))&&(!(r||!d(this,e)||!d(Y,e)||d(this,M)&&this[M][e])||r)},lt=function(t,e){var r=g(t),n=v(e,!0);if(r!==Q||!d(Y,n)||d(Z,n)){var i=U(r,n);return!i||!d(Y,n)||d(r,M)&&r[M][n]||(i.enumerable=!0),i}},pt=function(t){var e=z(g(t)),r=[];return N(e,(function(t){d(Y,t)||d($,t)||r.push(t)})),r},ht=function(t){var e=t===Q,r=z(e?Z:g(t)),n=[];return N(r,(function(t){!d(Y,t)||e&&!d(Q,t)||n.push(Y[t])})),n};if(c||(B=function(){if(this instanceof B)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=k(t),r=function(t){this===Q&&r.call(Z,t),d(this,M)&&d(this[M],e)&&(this[M][e]=!1),at(this,e,y(1,t))};return s&&it&&at(Q,e,{configurable:!0,set:r}),ot(e,t)},j(B[V],"toString",(function(){return F(this).tag})),j(B,"withoutSetter",(function(t){return ot(k(t),t)})),L.f=dt,E.f=ct,_.f=lt,O.f=w.f=pt,S.f=ht,I.f=function(t){return ot(A(t),t)},s&&(W(B[V],"description",{configurable:!0,get:function(){return F(this).description}}),o||j(Q,"propertyIsEnumerable",dt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:B}),N(C(rt),(function(t){q(t)})),n({target:R,stat:!0,forced:!c},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var r=B(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!st(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!c,sham:!s},{create:ft,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:lt}),n({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:ht}),n({target:"Object",stat:!0,forced:f((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(b(t))}}),K){var bt=!c||f((function(){var t=B();return"[null]"!=K([t])||"{}"!=K({a:t})||"{}"!=K(Object(t))}));n({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,r){var n,i=[t],a=1;while(arguments.length>a)i.push(arguments[a++]);if(n=e,(p(e)||void 0!==t)&&!st(t))return l(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!st(e))return e}),i[1]=e,K.apply(null,i)}})}B[V][G]||P(B[V],G,B[V].valueOf),D(B,R),$[M]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,r){var n=r("23e7"),i=r("7b0b"),a=r("df75"),o=r("d039"),s=o((function(){a(1)}));n({target:"Object",stat:!0,forced:s},{keys:function(t){return a(i(t))}})},b71f:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isLoading?r("Loading"):t._e(),r("div",{staticClass:"container-fluid content"},[r("div",{staticClass:"row mt-4"},t._l(t.filterProducts,(function(e){return r("div",{key:e.id,staticClass:"col-md-3 mb-4"},[r("div",{staticClass:"card border-0 card-wrap",on:{click:function(r){return t.getProduct(e.id,r)}}},[r("div",{staticClass:"mx-3 d-flex justify-content-center align-items-center"},[r("img",{staticClass:"img-fluid height-width-350px",attrs:{src:e.imageUrl,alt:""}})]),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title text-center"},[r("a",{staticClass:"text-dark",attrs:{href:"#"}},[t._v(t._s(e.title))])]),r("div",{staticClass:"price"},[r("del",{staticClass:"h6"},[t._v(t._s(e.orgin_price))]),r("p",{staticClass:"h5 text-center"},[t._v(t._s("$"+e.price))])])]),r("div",{staticClass:"price-wrap animate__animated animate__fadeIn"},[r("div",{staticClass:"price-overlay p-3 bg-light rounded shadow-lg"},[r("p",{staticClass:"h5 text-center"},[t._v(t._s("$"+e.price))]),r("a",{staticClass:"btn btn-button",attrs:{href:"#",role:"button"},on:{click:function(r){return r.preventDefault(),t.addtoCart(e.id)}}},[t._v("加入購物車")])])])])])})),0)]),t.cart.carts?r("Cart",{attrs:{"my-cart":t.cart},on:{delCart:t.removeCartItem}}):t._e()],1)},i=[],a=(r("99af"),r("4de4"),r("4160"),r("159b"),r("5530")),o=r("9bd8"),s=r("8a31"),c=r("2f62"),u={components:{Cart:o["a"],Loading:s["a"]},data:function(){return{product:{},status:{loadingItem:""}}},methods:Object(a["a"])({getProducts:function(){this.$store.dispatch("getProducts")},getProduct:function(t,e){var r=this,n="".concat("https://vue-course-api.hexschool.io","/api/").concat("jess","/product/").concat(t);r.status.loadingItem=t,this.$http.get(n).then((function(t){r.product=t.data.product,r.status.loadingItem="","A"===e.target.tagName||r.$router.push("shopping/".concat(t.data.product.id))}))},getCart:function(){this.$store.dispatch("getCart")},removeCartItem:function(t){this.$store.dispatch("removeCartItem",t)},addtoCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=this,n=this.cart.carts.filter((function(e){return e.product_id===t}));if(n.length>0){var i=n[0],a=i.qty,o=i.id,s=i.product.id,c=a+e;this.$store.dispatch("updateProductQty",{originCartId:o,originProductId:s,newQty:c})}else this.$store.dispatch("addtoCart",{id:t,qty:e});r.$bus.$emit("message:push","成功加入購物車","warning")}},Object(c["b"])(["getProducts"])),created:function(){this.getProducts(),this.getCart()},computed:Object(a["a"])({filterProducts:function(){var t=[];if(this.products.forEach((function(e){1===e.is_enalbed&&t.push(e)})),"ALL"===this.$route.query.type||void 0===this.$route.query.type)return t;if("TEE"===this.$route.query.type){var e=[];return t.forEach((function(t){"TEE"===t.category&&e.push(t)})),e}if("PANTS"===this.$route.query.type){var r=[];return t.forEach((function(t){"PANTS"===t.category&&r.push(t)})),r}if("SHOES"===this.$route.query.type){var n=[];return t.forEach((function(t){"SHOES"===t.category&&n.push(t)})),n}if("HAT"===this.$route.query.type){var i=[];return t.forEach((function(t){"HAT"===t.category&&i.push(t)})),i}if("OTHERS"===this.$route.query.type){var a=[];return t.forEach((function(t){"OTHERS"===t.category&&a.push(t)})),a}if("ACCESSORIES"===this.$route.query.type){var o=[];return t.forEach((function(t){"HAT"!==t.category&&"OTHERS"!==t.category||o.push(t)})),o}if("JACKET"===this.$route.query.type){var s=[];return t.forEach((function(t){"JACKET"===t.category&&s.push(t)})),s}return[]},isLoading:function(){return this.$store.state.isLoading}},Object(c["c"])(["products","cart"]))},f=u,d=r("2877"),l=Object(d["a"])(f,n,i,!1,null,null,null);e["default"]=l.exports},dbb4:function(t,e,r){var n=r("23e7"),i=r("83ab"),a=r("56ef"),o=r("fc6a"),s=r("06cf"),c=r("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,r,n=o(t),i=s.f,u=a(n),f={},d=0;while(u.length>d)r=i(n,e=u[d++]),void 0!==r&&c(f,e,r);return f}})},e439:function(t,e,r){var n=r("23e7"),i=r("d039"),a=r("fc6a"),o=r("06cf").f,s=r("83ab"),c=i((function(){o(1)})),u=!s||c;n({target:"Object",stat:!0,forced:u,sham:!s},{getOwnPropertyDescriptor:function(t,e){return o(a(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fe2b:function(t,e,r){t.exports=r.p+"img/loader.5f459c33.gif"}}]);
//# sourceMappingURL=chunk-3c15d4f3.75c85926.js.map