(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3c15d4f3"],{"057f":function(t,e,r){var n=r("fc6a"),i=r("241c").f,a={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],c=function(t){try{return i(t)}catch(e){return o.slice()}};t.exports.f=function(t){return o&&"[object Window]"==a.call(t)?c(t):i(n(t))}},"159b":function(t,e,r){var n=r("da84"),i=r("fdbc"),a=r("17c2"),o=r("9112");for(var c in i){var s=n[c],u=s&&s.prototype;if(u&&u.forEach!==a)try{o(u,"forEach",a)}catch(f){u.forEach=a}}},"17c2":function(t,e,r){"use strict";var n=r("b727").forEach,i=r("a640"),a=r("ae40"),o=i("forEach"),c=a("forEach");t.exports=o&&c?[].forEach:function(t){return n(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,r){"use strict";var n=r("23e7"),i=r("17c2");n({target:"Array",proto:!0,forced:[].forEach!=i},{forEach:i})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function i(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?i(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"746f":function(t,e,r){var n=r("428f"),i=r("5135"),a=r("e538"),o=r("9bf2").f;t.exports=function(t){var e=n.Symbol||(n.Symbol={});i(e,t)||o(e,t,{value:a.f(t)})}},7863:function(t,e,r){"use strict";var n=r("8334"),i=r.n(n);i.a},8334:function(t,e,r){},"8a31":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"loadingbg"},[n("div",{staticClass:"loading"},[n("img",{attrs:{src:r("fe2b"),alt:""}})])])])}],a=(r("7863"),r("2877")),o={},c=Object(a["a"])(o,n,i,!1,null,"191dcc0b",null);e["a"]=c.exports},"9bd8":function(t,e,r){"use strict";var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),r("div",{staticClass:"dropdown ml-auto fixed"},[r("button",{staticClass:"btn btn-sm btn-cart",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[r("div",{staticClass:"rounded-circle shadow-lg bg-white"},[r("i",{staticClass:"fa fa-shopping-cart fa-2x p-3 position-relative"},[r("div",{staticClass:"position-absolute badge-position"},[r("h6",[r("span",{staticClass:"badge badge-pill badge-danger "},[t._v(t._s(t.myCart.carts.length))])])])])])]),r("div",{staticClass:"dropdown-menu dropdown-menu-right drop-menu-width"},[r("div",{staticClass:"px-3 py-3"},[r("h6",{staticClass:"mb-2 text-center font-weight-bold"},[t._v("已選擇商品")]),r("div",{staticClass:"d-flex align-items-center justify-content-center"},[0===t.myCart.carts.length?r("p",{staticClass:"m-0"},[t._v("還沒有商品！")]):t._e()]),r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-sm"},t._l(t.myCart.carts,(function(e){return r("tbody",{key:e.product.product_id},[r("tr",[r("td",{staticClass:"align-middle",attrs:{width:"5%"}},[r("a",{staticClass:"text-secondary",attrs:{href:"#"},on:{click:function(r){return t.removeCartItem(e.id)}}},[r("i",{staticClass:"fas fa-trash"})])]),r("td",{attrs:{width:"80%"}},[t._v(t._s(e.product.title))])]),r("tr",[r("td"),r("td",{staticClass:"text-right"},[t._v(t._s(e.qty)+t._s(e.product.unit)+" "+t._s(e.total)+"元")])])])})),0)]),0!==t.myCart.carts.length?r("router-link",{staticClass:"btn btn-border btn-block",attrs:{to:"/set/check"}},[t._v("結帳去")]):t._e(),0==t.myCart.carts.length?r("router-link",{staticClass:"btn btn-border btn-block",attrs:{to:"/set/shopping"}},[t._v("購物去")]):t._e()],1)])])],1)},i=[],a={name:"Cart",props:["myCart"],data:function(){return{isLoading:!1}},methods:{removeCartItem:function(t){var e=this;e.$emit("delCart",t)}}},o=a,c=r("2877"),s=Object(c["a"])(o,n,i,!1,null,null,null);e["a"]=s.exports},a4d3:function(t,e,r){"use strict";var n=r("23e7"),i=r("da84"),a=r("d066"),o=r("c430"),c=r("83ab"),s=r("4930"),u=r("fdbf"),f=r("d039"),d=r("5135"),l=r("e8b5"),p=r("861d"),h=r("825a"),b=r("7b0b"),g=r("fc6a"),v=r("c04e"),y=r("5c6c"),m=r("7c73"),C=r("df75"),O=r("241c"),w=r("057f"),S=r("7418"),_=r("06cf"),E=r("9bf2"),P=r("d1e7"),L=r("9112"),j=r("6eeb"),T=r("5692"),x=r("f772"),$=r("d012"),k=r("90e3"),A=r("b622"),N=r("e538"),D=r("746f"),I=r("d44e"),H=r("69f3"),q=r("b727").forEach,M=x("hidden"),V="Symbol",R="prototype",G=A("toPrimitive"),J=H.set,U=H.getterFor(V),B=Object[R],F=i.Symbol,Q=a("JSON","stringify"),K=_.f,W=E.f,z=w.f,X=P.f,Y=T("symbols"),Z=T("op-symbols"),tt=T("string-to-symbol-registry"),et=T("symbol-to-string-registry"),rt=T("wks"),nt=i.QObject,it=!nt||!nt[R]||!nt[R].findChild,at=c&&f((function(){return 7!=m(W({},"a",{get:function(){return W(this,"a",{value:7}).a}})).a}))?function(t,e,r){var n=K(B,e);n&&delete B[e],W(t,e,r),n&&t!==B&&W(B,e,n)}:W,ot=function(t,e){var r=Y[t]=m(F[R]);return J(r,{type:V,tag:t,description:e}),c||(r.description=e),r},ct=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof F},st=function(t,e,r){t===B&&st(Z,e,r),h(t);var n=v(e,!0);return h(r),d(Y,n)?(r.enumerable?(d(t,M)&&t[M][n]&&(t[M][n]=!1),r=m(r,{enumerable:y(0,!1)})):(d(t,M)||W(t,M,y(1,{})),t[M][n]=!0),at(t,n,r)):W(t,n,r)},ut=function(t,e){h(t);var r=g(e),n=C(r).concat(ht(r));return q(n,(function(e){c&&!dt.call(r,e)||st(t,e,r[e])})),t},ft=function(t,e){return void 0===e?m(t):ut(m(t),e)},dt=function(t){var e=v(t,!0),r=X.call(this,e);return!(this===B&&d(Y,e)&&!d(Z,e))&&(!(r||!d(this,e)||!d(Y,e)||d(this,M)&&this[M][e])||r)},lt=function(t,e){var r=g(t),n=v(e,!0);if(r!==B||!d(Y,n)||d(Z,n)){var i=K(r,n);return!i||!d(Y,n)||d(r,M)&&r[M][n]||(i.enumerable=!0),i}},pt=function(t){var e=z(g(t)),r=[];return q(e,(function(t){d(Y,t)||d($,t)||r.push(t)})),r},ht=function(t){var e=t===B,r=z(e?Z:g(t)),n=[];return q(r,(function(t){!d(Y,t)||e&&!d(B,t)||n.push(Y[t])})),n};if(s||(F=function(){if(this instanceof F)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=k(t),r=function(t){this===B&&r.call(Z,t),d(this,M)&&d(this[M],e)&&(this[M][e]=!1),at(this,e,y(1,t))};return c&&it&&at(B,e,{configurable:!0,set:r}),ot(e,t)},j(F[R],"toString",(function(){return U(this).tag})),j(F,"withoutSetter",(function(t){return ot(k(t),t)})),P.f=dt,E.f=st,_.f=lt,O.f=w.f=pt,S.f=ht,N.f=function(t){return ot(A(t),t)},c&&(W(F[R],"description",{configurable:!0,get:function(){return U(this).description}}),o||j(B,"propertyIsEnumerable",dt,{unsafe:!0}))),n({global:!0,wrap:!0,forced:!s,sham:!s},{Symbol:F}),q(C(rt),(function(t){D(t)})),n({target:V,stat:!0,forced:!s},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var r=F(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ct(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){it=!0},useSimple:function(){it=!1}}),n({target:"Object",stat:!0,forced:!s,sham:!c},{create:ft,defineProperty:st,defineProperties:ut,getOwnPropertyDescriptor:lt}),n({target:"Object",stat:!0,forced:!s},{getOwnPropertyNames:pt,getOwnPropertySymbols:ht}),n({target:"Object",stat:!0,forced:f((function(){S.f(1)}))},{getOwnPropertySymbols:function(t){return S.f(b(t))}}),Q){var bt=!s||f((function(){var t=F();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));n({target:"JSON",stat:!0,forced:bt},{stringify:function(t,e,r){var n,i=[t],a=1;while(arguments.length>a)i.push(arguments[a++]);if(n=e,(p(e)||void 0!==t)&&!ct(t))return l(e)||(e=function(t,e){if("function"==typeof n&&(e=n.call(this,t,e)),!ct(e))return e}),i[1]=e,Q.apply(null,i)}})}F[R][G]||L(F[R],G,F[R].valueOf),I(F,V),$[M]=!0},a640:function(t,e,r){"use strict";var n=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&n((function(){r.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,r){var n=r("23e7"),i=r("7b0b"),a=r("df75"),o=r("d039"),c=o((function(){a(1)}));n({target:"Object",stat:!0,forced:c},{keys:function(t){return a(i(t))}})},b71f:function(t,e,r){"use strict";r.r(e);var n=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isLoading?r("Loading"):t._e(),r("div",{staticClass:"container-fluid content"},[r("div",{staticClass:"row mt-4"},t._l(t.filterProducts,(function(e){return r("div",{key:e.id,staticClass:"col-md-3 mb-4"},[r("div",{staticClass:"card border-0 card-wrap",on:{click:function(r){return t.getProduct(e.id,r)}}},[r("div",{staticClass:"mx-3 d-flex justify-content-center align-items-center"},[r("img",{staticClass:"img-fluid height-width-350px",attrs:{src:e.imageUrl,alt:""}})]),r("div",{staticClass:"card-body"},[r("h5",{staticClass:"card-title text-center"},[r("a",{staticClass:"text-dark",attrs:{href:"#"}},[t._v(t._s(e.title))])]),r("div",{staticClass:"price"},[r("del",{staticClass:"h6"},[t._v(t._s(e.orgin_price))]),r("p",{staticClass:"h5 text-center"},[t._v(t._s("$"+e.price))])])]),r("div",{staticClass:"price-wrap animate__animated animate__fadeIn"},[r("div",{staticClass:"price-overlay p-3 bg-light rounded shadow-lg"},[r("p",{staticClass:"h5 text-center"},[t._v(t._s("$"+e.price))]),r("a",{staticClass:"btn btn-button",attrs:{href:"#",role:"button"},on:{click:function(r){return r.preventDefault(),t.addtoCart(e.id)}}},[t._v("加入購物車")])])])])])})),0)]),t.cart.carts?r("Cart",{attrs:{"my-cart":t.cart},on:{delCart:t.removeCartItem}}):t._e()],1)},i=[],a=(r("99af"),r("4de4"),r("4160"),r("159b"),r("5530")),o=r("9bd8"),c=r("8a31"),s=r("2f62"),u={components:{Cart:o["a"],Loading:c["a"]},data:function(){return{product:{},status:{loadingItem:""}}},methods:Object(a["a"])({getProducts:function(){this.$store.dispatch("getProducts")},getProduct:function(t,e){var r=this,n="".concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_APIPATH,"/api/").concat(Object({NODE_ENV:"production",BASE_URL:"/"}).VUE_APP_CUSTOMPATH,"/product/").concat(t);r.status.loadingItem=t,this.$http.get(n).then((function(t){r.product=t.data.product,r.status.loadingItem="","A"===e.target.tagName||r.$router.push("shopping/".concat(t.data.product.id))}))},getCart:function(){this.$store.dispatch("getCart")},removeCartItem:function(t){this.$store.dispatch("removeCartItem",t)},addtoCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=this,n=this.cart.carts.filter((function(e){return e.product_id===t}));if(n.length>0){var i=n[0],a=i.qty,o=i.id,c=i.product.id,s=a+e;this.$store.dispatch("updateProductQty",{originCartId:o,originProductId:c,newQty:s})}else this.$store.dispatch("addtoCart",{id:t,qty:e});r.$bus.$emit("message:push","成功加入購物車","warning")}},Object(s["b"])(["getProducts"])),created:function(){this.getProducts(),this.getCart()},computed:Object(a["a"])({filterProducts:function(){var t=[];if(this.products.forEach((function(e){1===e.is_enalbed&&t.push(e)})),"ALL"===this.$route.query.type||void 0===this.$route.query.type)return t;if("TEE"===this.$route.query.type){var e=[];return t.forEach((function(t){"TEE"===t.category&&e.push(t)})),e}if("PANTS"===this.$route.query.type){var r=[];return t.forEach((function(t){"PANTS"===t.category&&r.push(t)})),r}if("SHOES"===this.$route.query.type){var n=[];return t.forEach((function(t){"SHOES"===t.category&&n.push(t)})),n}if("HAT"===this.$route.query.type){var i=[];return t.forEach((function(t){"HAT"===t.category&&i.push(t)})),i}if("OTHERS"===this.$route.query.type){var a=[];return t.forEach((function(t){"OTHERS"===t.category&&a.push(t)})),a}if("ACCESSORIES"===this.$route.query.type){var o=[];return t.forEach((function(t){"HAT"!==t.category&&"OTHERS"!==t.category||o.push(t)})),o}if("JACKET"===this.$route.query.type){var c=[];return t.forEach((function(t){"JACKET"===t.category&&c.push(t)})),c}return[]},isLoading:function(){return this.$store.state.isLoading}},Object(s["c"])(["products","cart"]))},f=u,d=r("2877"),l=Object(d["a"])(f,n,i,!1,null,null,null);e["default"]=l.exports},dbb4:function(t,e,r){var n=r("23e7"),i=r("83ab"),a=r("56ef"),o=r("fc6a"),c=r("06cf"),s=r("8418");n({target:"Object",stat:!0,sham:!i},{getOwnPropertyDescriptors:function(t){var e,r,n=o(t),i=c.f,u=a(n),f={},d=0;while(u.length>d)r=i(n,e=u[d++]),void 0!==r&&s(f,e,r);return f}})},e439:function(t,e,r){var n=r("23e7"),i=r("d039"),a=r("fc6a"),o=r("06cf").f,c=r("83ab"),s=i((function(){o(1)})),u=!c||s;n({target:"Object",stat:!0,forced:u,sham:!c},{getOwnPropertyDescriptor:function(t,e){return o(a(t),e)}})},e538:function(t,e,r){var n=r("b622");e.f=n},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fe2b:function(t,e,r){t.exports=r.p+"img/loader.5f459c33.gif"}}]);
//# sourceMappingURL=chunk-3c15d4f3.9411d7d7.js.map