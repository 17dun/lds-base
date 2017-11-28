define('vue:widget/routers.js', function(require, exports, module) {

  'use strict';
  
  Object.defineProperty(exports, "__esModule", {
      value: true
  });
  
  var _vue = require('vue:node_modules/vue/dist/vue');
  
  var _vue2 = _interopRequireDefault(_vue);
  
  var _vueRouter = require('vue:node_modules/vue-router/dist/vue-router');
  
  var _vueRouter2 = _interopRequireDefault(_vueRouter);
  
  function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
  
  /**
   * 使用vue-router
   */
  _vue2.default.use(_vueRouter2.default);
  
  var NotFound = { template: '<p>Page not found</p>' };
  var Home = { template: '<p>home page</p>' };
  var About = { template: '<p>about page</p>' };
  
  var routes = [{ path: '/', component: Home }, { path: '/about', component: About }];
  
  var router = new _vueRouter2.default({
      routes: routes,
      scrollBehavior: function scrollBehavior(to, from, savedPosition) {
          if (savedPosition) {
              return savedPosition;
          } else {
              return { x: 0, y: 0 };
          }
      }
  });
  
  router.beforeEach(function (to, from, next) {
      //to and from are Route Object,next() must be called to resolve the hook
      next();
  });
  
  router.afterEach(function (route) {
      //these hooks do not get a next function and cannot affect the navigation
  
  });
  
  exports.default = router;

});
