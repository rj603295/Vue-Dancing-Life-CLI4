(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a77a768e"],{"057f":function(t,e,r){var i=r("fc6a"),n=r("241c").f,a={}.toString,s="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return n(t)}catch(e){return s.slice()}};t.exports.f=function(t){return s&&"[object Window]"==a.call(t)?o(t):n(i(t))}},"159b":function(t,e,r){var i=r("da84"),n=r("fdbc"),a=r("17c2"),s=r("9112");for(var o in n){var c=i[o],u=c&&c.prototype;if(u&&u.forEach!==a)try{s(u,"forEach",a)}catch(l){u.forEach=a}}},"17c2":function(t,e,r){"use strict";var i=r("b727").forEach,n=r("a640"),a=r("ae40"),s=n("forEach"),o=a("forEach");t.exports=s&&o?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,e,r){"use strict";var i=r("23e7"),n=r("17c2");i({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},5530:function(t,e,r){"use strict";r.d(e,"a",(function(){return a}));r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b");function i(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,i)}return r}function a(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){i(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},"746f":function(t,e,r){var i=r("428f"),n=r("5135"),a=r("e538"),s=r("9bf2").f;t.exports=function(t){var e=i.Symbol||(i.Symbol={});n(e,t)||s(e,t,{value:a.f(t)})}},7863:function(t,e,r){"use strict";var i=r("8334"),n=r.n(i);n.a},8334:function(t,e,r){},"8a31":function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},n=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"loadingbg"},[i("div",{staticClass:"loading"},[i("img",{attrs:{src:r("fe2b"),alt:""}})])])])}],a=(r("7863"),r("2877")),s={},o=Object(a["a"])(s,i,n,!1,null,"191dcc0b",null);e["a"]=o.exports},"9bd8":function(t,e,r){"use strict";var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),r("div",{staticClass:"dropdown ml-auto fixed"},[r("button",{staticClass:"btn btn-sm btn-cart",attrs:{type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[r("div",{staticClass:"rounded-circle shadow-lg bg-white"},[r("i",{staticClass:"fa fa-shopping-cart fa-2x p-3 position-relative"},[r("div",{staticClass:"position-absolute badge-position"},[r("h6",[t.myCart.carts.length>0?r("span",{staticClass:"badge badge-pill badge-danger"},[t._v(t._s(t.myCart.carts.length))]):t._e()])])])])]),r("div",{staticClass:"dropdown-menu dropdown-menu-right drop-menu-width"},[r("div",{staticClass:"px-3 py-3"},[r("h6",{staticClass:"mb-2 text-center font-weight-bold"},[t._v("已選擇商品")]),r("div",{staticClass:"d-flex align-items-center justify-content-center"},[0===t.myCart.carts.length?r("p",{staticClass:"m-0"},[t._v("還沒有商品！")]):t._e()]),r("div",{staticClass:"table-responsive"},[r("table",{staticClass:"table table-sm"},t._l(t.myCart.carts,(function(e){return r("tbody",{key:e.product.product_id},[r("tr",[r("td",{staticClass:"align-middle",attrs:{width:"5%"}},[r("a",{staticClass:"text-secondary",attrs:{href:"#"},on:{click:function(r){return t.removeCartItem(e.id)}}},[r("i",{staticClass:"fas fa-trash"})])]),r("td",{attrs:{width:"80%"}},[t._v(t._s(e.product.title))])]),r("tr",[r("td"),r("td",{staticClass:"text-right"},[t._v(t._s(e.qty)+t._s(e.product.unit)+" "+t._s(e.total)+"元")])])])})),0)]),0!==t.myCart.carts.length?r("router-link",{staticClass:"btn btn-border btn-block",attrs:{to:"/set/check"}},[t._v("結帳去")]):t._e(),0==t.myCart.carts.length?r("router-link",{staticClass:"btn btn-border btn-block",attrs:{to:"/set/shopping"}},[t._v("購物去")]):t._e()],1)])])],1)},n=[],a={name:"Cart",props:["myCart"],data:function(){return{isLoading:!1}},methods:{removeCartItem:function(t){var e=this;e.$emit("delCart",t)}}},s=a,o=r("2877"),c=Object(o["a"])(s,i,n,!1,null,null,null);e["a"]=c.exports},a4d3:function(t,e,r){"use strict";var i=r("23e7"),n=r("da84"),a=r("d066"),s=r("c430"),o=r("83ab"),c=r("4930"),u=r("fdbf"),l=r("d039"),d=r("5135"),f=r("e8b5"),p=r("861d"),b=r("825a"),g=r("7b0b"),v=r("fc6a"),m=r("c04e"),h=r("5c6c"),y=r("7c73"),C=r("df75"),_=r("241c"),w=r("057f"),O=r("7418"),S=r("06cf"),P=r("9bf2"),L=r("d1e7"),j=r("9112"),k=r("6eeb"),x=r("5692"),E=r("f772"),$=r("d012"),T=r("90e3"),D=r("b622"),I=r("e538"),M=r("746f"),N=r("d44e"),q=r("69f3"),R=r("b727").forEach,W=E("hidden"),V="Symbol",G="prototype",A=D("toPrimitive"),F=q.set,H=q.getterFor(V),J=Object[G],U=n.Symbol,Q=a("JSON","stringify"),B=S.f,z=P.f,X=w.f,K=L.f,Y=x("symbols"),Z=x("op-symbols"),tt=x("string-to-symbol-registry"),et=x("symbol-to-string-registry"),rt=x("wks"),it=n.QObject,nt=!it||!it[G]||!it[G].findChild,at=o&&l((function(){return 7!=y(z({},"a",{get:function(){return z(this,"a",{value:7}).a}})).a}))?function(t,e,r){var i=B(J,e);i&&delete J[e],z(t,e,r),i&&t!==J&&z(J,e,i)}:z,st=function(t,e){var r=Y[t]=y(U[G]);return F(r,{type:V,tag:t,description:e}),o||(r.description=e),r},ot=u?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof U},ct=function(t,e,r){t===J&&ct(Z,e,r),b(t);var i=m(e,!0);return b(r),d(Y,i)?(r.enumerable?(d(t,W)&&t[W][i]&&(t[W][i]=!1),r=y(r,{enumerable:h(0,!1)})):(d(t,W)||z(t,W,h(1,{})),t[W][i]=!0),at(t,i,r)):z(t,i,r)},ut=function(t,e){b(t);var r=v(e),i=C(r).concat(bt(r));return R(i,(function(e){o&&!dt.call(r,e)||ct(t,e,r[e])})),t},lt=function(t,e){return void 0===e?y(t):ut(y(t),e)},dt=function(t){var e=m(t,!0),r=K.call(this,e);return!(this===J&&d(Y,e)&&!d(Z,e))&&(!(r||!d(this,e)||!d(Y,e)||d(this,W)&&this[W][e])||r)},ft=function(t,e){var r=v(t),i=m(e,!0);if(r!==J||!d(Y,i)||d(Z,i)){var n=B(r,i);return!n||!d(Y,i)||d(r,W)&&r[W][i]||(n.enumerable=!0),n}},pt=function(t){var e=X(v(t)),r=[];return R(e,(function(t){d(Y,t)||d($,t)||r.push(t)})),r},bt=function(t){var e=t===J,r=X(e?Z:v(t)),i=[];return R(r,(function(t){!d(Y,t)||e&&!d(J,t)||i.push(Y[t])})),i};if(c||(U=function(){if(this instanceof U)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=T(t),r=function(t){this===J&&r.call(Z,t),d(this,W)&&d(this[W],e)&&(this[W][e]=!1),at(this,e,h(1,t))};return o&&nt&&at(J,e,{configurable:!0,set:r}),st(e,t)},k(U[G],"toString",(function(){return H(this).tag})),k(U,"withoutSetter",(function(t){return st(T(t),t)})),L.f=dt,P.f=ct,S.f=ft,_.f=w.f=pt,O.f=bt,I.f=function(t){return st(D(t),t)},o&&(z(U[G],"description",{configurable:!0,get:function(){return H(this).description}}),s||k(J,"propertyIsEnumerable",dt,{unsafe:!0}))),i({global:!0,wrap:!0,forced:!c,sham:!c},{Symbol:U}),R(C(rt),(function(t){M(t)})),i({target:V,stat:!0,forced:!c},{for:function(t){var e=String(t);if(d(tt,e))return tt[e];var r=U(e);return tt[e]=r,et[r]=e,r},keyFor:function(t){if(!ot(t))throw TypeError(t+" is not a symbol");if(d(et,t))return et[t]},useSetter:function(){nt=!0},useSimple:function(){nt=!1}}),i({target:"Object",stat:!0,forced:!c,sham:!o},{create:lt,defineProperty:ct,defineProperties:ut,getOwnPropertyDescriptor:ft}),i({target:"Object",stat:!0,forced:!c},{getOwnPropertyNames:pt,getOwnPropertySymbols:bt}),i({target:"Object",stat:!0,forced:l((function(){O.f(1)}))},{getOwnPropertySymbols:function(t){return O.f(g(t))}}),Q){var gt=!c||l((function(){var t=U();return"[null]"!=Q([t])||"{}"!=Q({a:t})||"{}"!=Q(Object(t))}));i({target:"JSON",stat:!0,forced:gt},{stringify:function(t,e,r){var i,n=[t],a=1;while(arguments.length>a)n.push(arguments[a++]);if(i=e,(p(e)||void 0!==t)&&!ot(t))return f(e)||(e=function(t,e){if("function"==typeof i&&(e=i.call(this,t,e)),!ot(e))return e}),n[1]=e,Q.apply(null,n)}})}U[G][A]||j(U[G],A,U[G].valueOf),N(U,V),$[W]=!0},a640:function(t,e,r){"use strict";var i=r("d039");t.exports=function(t,e){var r=[][t];return!!r&&i((function(){r.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,r){var i=r("23e7"),n=r("7b0b"),a=r("df75"),s=r("d039"),o=s((function(){a(1)}));i({target:"Object",stat:!0,forced:o},{keys:function(t){return a(n(t))}})},c7be:function(t,e,r){"use strict";var i=r("feea"),n=r.n(i);n.a},dbb4:function(t,e,r){var i=r("23e7"),n=r("83ab"),a=r("56ef"),s=r("fc6a"),o=r("06cf"),c=r("8418");i({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,r,i=s(t),n=o.f,u=a(i),l={},d=0;while(u.length>d)r=n(i,e=u[d++]),void 0!==r&&c(l,e,r);return l}})},e439:function(t,e,r){var i=r("23e7"),n=r("d039"),a=r("fc6a"),s=r("06cf").f,o=r("83ab"),c=n((function(){s(1)})),u=!o||c;i({target:"Object",stat:!0,forced:u,sham:!o},{getOwnPropertyDescriptor:function(t,e){return s(a(t),e)}})},e538:function(t,e,r){var i=r("b622");e.f=i},f06a:function(t,e,r){"use strict";r.r(e);var i=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.isLoading?r("loading"):t._e(),r("div",{staticClass:"container"},[r("div",{staticClass:"row my-5"},[r("div",{staticClass:"col-md-7 bg-cover d-flex justify-content-center align-items-center"},[this.screenWidth>414?r("div",[r("img",{staticClass:"img-fluid",attrs:{src:t.product.imageUrl,alt:"Responsive image"}}),r("img",{staticClass:"img-fluid",attrs:{src:t.product.image,alt:"Responsive image"}})]):t._e(),this.screenWidth<=414?r("div",{staticClass:"carousel slide",attrs:{id:"carouselExampleControls","data-ride":"carousel"}},[r("div",{staticClass:"carousel-inner"},[r("div",{staticClass:"carousel-item active"},[r("img",{staticClass:"d-block w-100",attrs:{src:t.product.imageUrl,alt:"Responsive image"}})]),r("div",{staticClass:"carousel-item"},[r("img",{staticClass:"d-block w-100",attrs:{src:t.product.image,alt:"Responsive image"}})])]),t._m(0),t._m(1)]):t._e()]),r("div",{staticClass:"col-md-5 mt-5"},[r("div",{staticClass:"sticky"},[r("h2",{staticClass:"p"},[t._v(t._s(t.product.title))]),r("p",[t._v(t._s(t.product.description))]),r("del",[t._v("原價 "+t._s(t.product.origin_price))]),t.product.price?r("div",{staticClass:"h4 font-weight-bold mb-4"},[r("span",{staticClass:"mark-yellow "},[t._v("sale "+t._s(t.product.price)+" 元")])]):t._e(),t._m(2),r("div",{staticClass:"mt-5"},[r("select",{directives:[{name:"model",rawName:"v-model",value:t.qty,expression:"qty"}],staticClass:"custom-select",on:{change:function(e){var r=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.qty=e.target.multiple?r:r[0]}}},t._l(10,(function(e){return r("option",{key:e,domProps:{value:e}},[t._v(t._s(e)+t._s(t.product.unit))])})),0),r("button",{staticClass:"mt-4 btn btn-color btn-lg btn-block",attrs:{type:"button"},on:{click:function(e){return e.preventDefault(),t.addtoCart(t.product.id,t.qty)}}},[t._v("加入購物車")])])])])]),r("div",[r("h2",[t._v("猜你也會喜歡...")]),r("hr"),this.screenWidth>414?r("div",{staticClass:"row mb-5"},t._l(t.filterProducts.slice(0,4),(function(e,i){return r("div",{key:i,staticClass:"col-sm-3 col-6 pointer"},[r("div",{staticClass:"big",on:{click:function(r){return t.getProduct(e.id)}}},[r("router-link",{attrs:{to:""+t.product.id}},[r("img",{staticClass:"img-fluid",attrs:{src:e.imageUrl,alt:""}})])],1)])})),0):t._e(),this.screenWidth<=414?r("div",{staticClass:"row mb-5"},t._l(t.filterProducts.slice(0,3),(function(e,i){return r("div",{key:i,staticClass:"col-sm-3 col-4 pointer"},[r("div",{staticClass:"big",on:{click:function(r){return t.getProduct(e.id)}}},[r("router-link",{attrs:{to:""+t.product.id}},[r("img",{staticClass:"img-fluid",attrs:{src:e.imageUrl,alt:""}})])],1)])})),0):t._e()])]),t.cart.carts?r("Cart",{attrs:{"my-cart":t.cart},on:{delCart:t.removeCartItem}}):t._e()],1)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"carousel-control-prev",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"prev"}},[r("span",[r("i",{staticClass:"fas fa-chevron-left text-dark"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("a",{staticClass:"carousel-control-next",attrs:{href:"#carouselExampleControls",role:"button","data-slide":"next"}},[r("span",[r("i",{staticClass:"fas fa-chevron-right text-dark"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"btn-group btn-group-toggle btn-group-sm",attrs:{"data-toggle":"buttons"}},[r("label",{staticClass:"btn btn-outline-secondary active"},[r("input",{attrs:{type:"radio",name:"options",id:"option1",checked:""}}),t._v(" S ")]),r("label",{staticClass:"btn btn-outline-secondary"},[r("input",{attrs:{type:"radio",name:"options",id:"option2"}}),t._v(" M ")]),r("label",{staticClass:"btn btn-outline-secondary"},[r("input",{attrs:{type:"radio",name:"options",id:"option3"}}),t._v(" L ")]),r("label",{staticClass:"btn btn-outline-secondary"},[r("input",{attrs:{type:"radio",name:"options",id:"option4"}}),t._v(" XL ")])])}],a=(r("99af"),r("4de4"),r("4160"),r("159b"),r("5530")),s=r("9bd8"),o=r("8a31"),c=r("2f62"),u={components:{Cart:s["a"],Loading:o["a"]},data:function(){return{product:{},qty:1,status:{loadingItem:""},pagination:[],screenWidth:""}},methods:{getProducts:function(){this.$store.dispatch("getProducts")},getProduct:function(t){var e=this,r="".concat("https://vue-course-api.hexschool.io","/api/").concat("jess","/product/").concat(t);e.status.loadingItem=t,e.$http.get(r).then((function(t){e.product=t.data.product,e.status.loadingItem=""}))},addtoCart:function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,r=this,i=r.cart.carts.filter((function(e){return e.product_id===t}));if(i.length>0){var n=i[0],a=n.qty,s=n.id,o=n.product.id,c=a+e;r.$store.dispatch("updateProductQty",{originCartId:s,originProductId:o,newQty:c})}else r.$store.dispatch("addtoCart",{id:t,qty:e});r.$bus.$emit("message:push","成功加入購物車","warning")},getCart:function(){this.$store.dispatch("getCart")},removeCartItem:function(t){this.$store.dispatch("removeCartItem",t)}},created:function(){this.getProduct(this.$route.params.id),this.getCart(),this.getProducts()},mounted:function(){var t=this;t.screenWidth=window.screen.width,window.onresize=function(){t.screenWidth=window.screen.width}},computed:Object(a["a"])({filterProducts:function(){var t=this,e=[];return t.products.forEach((function(r){1===r.is_enalbed&&r.category===t.product.category&&r.title!==t.product.title&&e.push(r)})),e},isLoading:function(){return this.$store.state.isLoading}},Object(c["c"])(["products","cart"]))},l=u,d=(r("c7be"),r("2877")),f=Object(d["a"])(l,i,n,!1,null,"04597ed7",null);e["default"]=f.exports},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},fe2b:function(t,e,r){t.exports=r.p+"img/loader.5f459c33.gif"},feea:function(t,e,r){}}]);
//# sourceMappingURL=chunk-a77a768e.841f538d.js.map