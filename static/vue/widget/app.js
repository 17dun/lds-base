define('vue:widget/app.js', function(require, exports, module) {

  'use strict';
  
  var _vue = require('vue:node_modules/vue/dist/vue');
  
  var _vue2 = _interopRequireDefault(_vue);
  
  var _AppMain = require('vue:widget/AppMain.vue');
  
  var _AppMain2 = _interopRequireDefault(_AppMain);
  
  var _stores = require('vue:widget/vuex/stores.js');
  
  var _stores2 = _interopRequireDefault(_stores);
  
  var _routers = require('vue:widget/routers.js');
  
  var _routers2 = _interopRequireDefault(_routers);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * [template 实例化Vue]
   * @type {String}
   */
  new _vue2.default({
      store: _stores2.default,
      router: _routers2.default,
      template: '<AppMain/>',
      components: { AppMain: _AppMain2.default }
  }).$mount('#app');

});
