define('vue:widget/components/home.vue', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  //
  
  exports["default"] = {
    name: 'v-home',
    components: {},
    data: function data() {
      return {};
    },
  
    watch: {
      '$route': function $route(to, from) {
        // const toDepth = to.path.split('/').length
        // const fromDepth = from.path.split('/').length
        // this.fade = toDepth < fromDepth ? 'slide-right' : 'slide-left'
      }
    }
  };
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"home"},[_vm._v("\n  home 页面\n  "),_c('br'),_vm._v(" "),_c('router-link',{attrs:{"to":"/"}},[_vm._v("Go to Home")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('router-link',{attrs:{"to":"/about"}},[_vm._v("Go to About")]),_vm._v(" "),_c('br'),_vm._v(" "),_c('hr'),_vm._v(" "),_c('transition',[_c('keep-alive',[_c('router-view')],1)],1)],1)}
  __vue__options__.staticRenderFns =[]
  __vue__options__._scopeId = "_v-fe7a1ae0"
  

});
