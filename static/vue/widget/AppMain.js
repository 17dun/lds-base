define('vue:widget/AppMain.vue', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _home = require('vue:widget/components/home.vue');
  
  var _home2 = _interopRequireDefault(_home);
  
  var _vueRouter = require('vue:node_modules/vue-router/dist/vue-router');
  
  var _vueRouter2 = _interopRequireDefault(_vueRouter);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
  
  //
  //
  //
  //
  //
  //
  //
  
  exports["default"] = {
      components: { Home: _home2["default"] },
      init: function init() {
          // console.log(123)
          // let router = new Router()
          // console.log(router)
          // router.push('/home')// 跳转到home组件
      },
      data: function data() {
          return {
              title: '这是一个 vue 的启动页面'
          };
      },
  
      watch: {
          '$route': function $route(to, from) {
              // const toDepth = to.path.split('/').length
              // const fromDepth = from.path.split('/').length
              // console.log(toDepth)
          }
      }
  };
  // 导入路由
  var __vue__options__;
  if(exports && exports.__esModule && exports.default){
    __vue__options__ = exports.default;
  }else{
    __vue__options__ = module.exports;
  }
  __vue__options__.render =function render () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"main"},[_c('h2',{staticClass:"title"},[_vm._v(_vm._s(_vm.title))]),_vm._v(" "),_c('Home')],1)}
  __vue__options__.staticRenderFns =[]
  

});
