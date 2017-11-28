define('trans:widget/routers.js', function(require, exports, module) {

  import Vue from 'vue/dist/vue.js';
  import VueRouter from 'vue-router/dist/vue-router.js';
  
  /**
   * 使用vue-router
   */
  Vue.use(VueRouter);
  
  const NotFound = { template: '<p>Page not found</p>' }
  const Home = { template: '<p>home page</p>' }
  const About = { template: '<p>about page</p>' }
  
  const routes = [
      { path: '/', component: Home },
      { path: '/about', component: About }
  ]
  
  const router = new VueRouter({
      routes,
      scrollBehavior (to, from, savedPosition) {
          if(savedPosition) {
              return savedPosition;
          } else {
              return { x: 0, y: 0 }
          }
      }
  });
  
  router.beforeEach((to, from, next) => {
      //to and from are Route Object,next() must be called to resolve the hook
      next();
  });
  
  router.afterEach(route => {
      //these hooks do not get a next function and cannot affect the navigation
      
  });
  
  export default router

});
