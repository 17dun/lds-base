define('vue:widget/vuex/stores.js', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  
  var _vue = require('vue:node_modules/vue/dist/vue');
  
  var _vue2 = _interopRequireDefault(_vue);
  
  var _vuex = require('vue:node_modules/vuex/dist/vuex.common');
  
  var _vuex2 = _interopRequireDefault(_vuex);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  // import * as actions from './actions'
  // import * as getters from './getters'
  
  // 使用 vuex
  // let Vue = require('vue');
  // let Vuex = require('vuex');
  _vue2.default.use(_vuex2.default);
  
  // 创建一个对象来保存应用启动时的初始状态
  var state = {
    // TODO 放置初始状态
    count: 0,
    notes: [],
    activeNote: {}
  
    // 创建一个对象存储一系列我们接下来要写的 mutation 函数
  };var mutations = {
    // TODO 放置我们的状态变更函数
    increment: function increment(state, amount) {
      state.count = state.count + amount;
    }
  };
  
  // 整合初始状态和变更函数，我们就得到了我们所需的 store
  // 至此，这个 store 就可以链接到我们的应用中
  exports.default = new _vuex2.default.Store({
    strict: 'development' !== 'production',
    // actions,
    // getters,
    state: state,
    mutations: mutations
  });

});
