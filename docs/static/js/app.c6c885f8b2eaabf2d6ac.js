webpackJsonp([8],{"0PS+":function(t,e,n){"use strict";var o={MAIN:{label:"Main",version:23},TEST:{label:"Test",version:30}};e.a=o},"20Zl":function(t,e){},Am7l:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("top-header"),t._v(" "),n("router-view"),t._v(" "),n("confirm-network-switch-modal")],1)},a=[],i={render:o,staticRenderFns:a};e.a=i},C5kf:function(t,e,n){"use strict";var o={open:!1,address:null},a=o,i={wallet:function(t){return t}},c={openWallet:function(t,e){var n=t.commit;t.state;n("openWallet",e)},closeWallet:function(t){var e=t.commit;t.state;e("closeWallet")}},r={openWallet:function(t,e){t.open=!0,t.address=e},closeWallet:function(t){t.open=!1,t.address=null}};e.a={state:a,getters:i,mutations:r,actions:c}},CejL:function(t,e){},DX9E:function(t,e){},IcnI:function(t,e,n){"use strict";var o=n("7+uW"),a=n("NYxO"),i=n("cpjA"),c=n("C5kf");o.a.use(a.a),e.a=new a.a.Store({modules:{app:i.a,wallet:c.a}})},"KxT/":function(t,e,n){"use strict";e.a={name:"confirmNetworkSwitchModal",data:function(){return{action:null}},computed:{wallet:function(){return this.$store.getters.wallet}},methods:{confirm:function(){this.$modal.hide("confirmNetworkSwitchModal"),this.$store.dispatch("switchNetwork"),this.$router.push({name:"Main"})},cancel:function(){this.$modal.hide("confirmNetworkSwitchModal")},beforeOpen:function(t){},closed:function(t){}}}},M93x:function(t,e,n){"use strict";function o(t){n("DX9E")}var a=n("xJD8"),i=n("Am7l"),c=n("VU/8"),r=o,s=c(a.a,i.a,!1,r,null,null);e.a=s.exports},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),a=n("M93x"),i=n("IcnI"),c=n("YaEn"),r=n("Yk46"),s=n.n(r),u=n("rifk"),l=n.n(u);o.a.use(s.a),o.a.use(l.a),o.a.config.productionTip=!1,new o.a({el:"#app",router:c.a,store:i.a,template:"<App/>",components:{App:a.a}})},POI7:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"ui menu"},[n("router-link",{staticClass:"header item",attrs:{to:{name:"Main"}}},[t._v("\n      Ark Web Wallet\n    ")]),t._v(" "),n("div",{staticClass:"right menu"},[t.blockHeight?n("div",{staticClass:"item"},[n("i",{staticClass:"icon cube"}),t._v("\n        "+t._s(t.blockHeight.toLocaleString())+"\n      ")]):t._e(),t._v(" "),t.networkType?n("a",{staticClass:"item",on:{click:function(e){e.preventDefault(),t.switchNetwork()}}},[n("i",{staticClass:"icon disk outline"}),t._v("\n        "+t._s(t.networkType.label)+"\n      ")]):t._e()])],1)},a=[],i={render:o,staticRenderFns:a};e.a=i},SseV:function(t,e){},YaEn:function(t,e,n){"use strict";function o(t){return function(){return n("mUJ2")("./"+t+".vue")}}var a=n("7+uW"),i=n("/ocq");a.a.use(i.a),e.a=new i.a({hashbang:!1,routes:[{path:"/",name:"Main",component:o("Main")},{path:"/new-wallet",name:"NewWallet",component:o("NewWallet")},{path:"/open-wallet",name:"OpenWallet",component:o("OpenWallet")},{path:"/wallet",name:"Wallet",component:o("Wallet")}]})},aQpR:function(t,e,n){"use strict";e.a={name:"topHeader",data:function(){return{}},computed:{networkType:function(){return this.$store.getters.networkType},blockHeight:function(){return this.$store.getters.blockHeight}},methods:{switchNetwork:function(){this.$modal.show("confirmNetworkSwitchModal")}},mounted:function(){}}},cpjA:function(t,e,n){"use strict";var o=n("0PS+"),a={network:o.a.TEST,blockHeight:0,sendFormVisible:!1,loading:!1,transactionSending:!1},i={app:function(t){return t},networkType:function(t){return t.network},blockHeight:function(t){return t.blockHeight}},c={switchNetwork:function(t){var e=t.commit;t.state;e("switchNetwork"),e("closeWallet")},toggleSendForm:function(t){var e=t.commit;t.state;e("toggleSendForm")},setDBHeight:function(t,e){var n=t.commit;t.state;n("setDBHeight",e)},setLoadingState:function(t,e){var n=t.commit;t.state;n("setLoadingState",e)},setTransactionSending:function(t,e){var n=t.commit;t.state;n("setTransactionSending",e)}},r={switchNetwork:function(t){t.network===o.a.MAIN?t.network=o.a.TEST:t.network===o.a.TEST&&(t.network=o.a.MAIN)},toggleSendForm:function(t){t.sendFormVisible=!t.sendFormVisible},setDBHeight:function(t,e){t.blockHeight=e},setLoadingState:function(t,e){t.loading=e},setTransactionSending:function(t,e){t.transactionSending=e}};e.a={state:a,getters:i,mutations:r,actions:c}},gSLK:function(t,e,n){"use strict";function o(t){n("SseV")}Object.defineProperty(e,"__esModule",{value:!0});var a=n("KxT/"),i=n("xx0L"),c=n("VU/8"),r=o,s=c(a.a,i.a,!1,r,"data-v-e083ed4e",null);e.default=s.exports},gyMJ:function(t,e,n){"use strict";n.d(e,"a",function(){return r}),n.d(e,"b",function(){return s});var o=n("mtWM"),a=n.n(o),i=n("IcnI"),c=function(){return"Main"===i.a.getters.networkType.label?"https://node1.arknet.cloud":"Test"===i.a.getters.networkType.label?"http://167.114.29.52:4002":void 0},r=function(){return a.a.get(c()+"/api/blocks/getHeight").then(function(t){return t.data.height}).catch(function(t){t&&console.log(t)})},s=function(){return a.a.get(c()+"/api/blocks/getNetHash").then(function(t){return t.data.nethash}).catch(function(t){t&&console.log(t)})}},kVq8:function(t,e){},mUJ2:function(t,e,n){function o(t){var e=a[t];return e?Promise.all(e.slice(1).map(n.e)).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var a={"./Main.vue":["s6+2",6],"./NewWallet.vue":["3aU6",1],"./OpenWallet.vue":["7AwU",3],"./Send.vue":["RuoX",2],"./Transaction.vue":["P8ll",5],"./Wallet.vue":["uBEm",0],"./layouts/TopHeader.vue":["mbc/"],"./modals/ConfirmNetworkSwitchModal.vue":["gSLK"],"./modals/ConfirmSendModal.vue":["MTP8",4]};o.keys=function(){return Object.keys(a)},o.id="mUJ2",t.exports=o},"mbc/":function(t,e,n){"use strict";function o(t){n("CejL")}Object.defineProperty(e,"__esModule",{value:!0});var a=n("aQpR"),i=n("POI7"),c=n("VU/8"),r=o,s=c(a.a,i.a,!1,r,"data-v-3020e68c",null);e.default=s.exports},xJD8:function(t,e,n){"use strict";var o=n("gyMJ"),a=n("kVq8"),i=(n.n(a),n("20Zl")),c=(n.n(i),n("mbc/")),r=n("gSLK");e.a={name:"app",components:{TopHeader:c.default,ConfirmNetworkSwitchModal:r.default},watch:{networkType:function(t){this.getDBHeight()}},computed:{networkType:function(){return this.$store.getters.networkType}},methods:{getDBHeight:function(){var t=this;Object(o.a)().then(function(e){t.$store.dispatch("setDBHeight",e)})}},mounted:function(){var t=this;this.getDBHeight(),setInterval(function(){t.getDBHeight()},15e3)}}},xx0L:function(t,e,n){"use strict";var o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("modal",{attrs:{name:"confirmNetworkSwitchModal",height:"auto"},on:{"before-open":t.beforeOpen,closed:t.closed}},[n("div",{staticClass:"ui container center aligned network-switch-modal"},[n("div",{staticClass:"ui header"},[t._v("\n        Switch network ?\n        "),t.wallet.open?n("div",{staticClass:"sub header"},[t._v("\n          Your wallet will be closed\n        ")]):t._e()]),t._v(" "),n("div",{staticClass:"ui segment basic"},[n("button",{staticClass:"ui button green compact",on:{click:function(e){e.preventDefault(),t.confirm()}}},[n("i",{staticClass:"ui icon check"}),t._v("\n          Yes\n        ")]),t._v(" "),n("button",{staticClass:"ui button red compact basic",on:{click:function(e){e.preventDefault(),t.cancel()}}},[n("i",{staticClass:"ui icon cancel"}),t._v("\n          No\n      ")])])])])},a=[],i={render:o,staticRenderFns:a};e.a=i}},["NHnr"]);
//# sourceMappingURL=app.c6c885f8b2eaabf2d6ac.js.map