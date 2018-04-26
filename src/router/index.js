import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index.vue'
import Detail from '../views/detail.vue'
import Analysis from '../views/analysis.vue'
Vue.use(Router);

const IndexPath = {
              path: '/',
              name: 'Index',
              component: Index,
  beforeRouteEnter (to, from, next) {
    console.log(to+"----"+from);
    next();

    // 在渲染该组件的对应路由被 confirm 前调用
    // 不！能！获取组件实例 `this`
    // 因为当守卫执行前，组件实例还没被创建
  },
  beforeRouteUpdate (to, from, next) {
    console.log(to+"----"+from);
    next();

    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
  },
  beforeRouteLeave (to, from, next) {
    console.log(to+"----"+from);
    next();

    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
  }
};


const DetailPath = {
    path: '/details',
    name: 'details',
    component: Detail,
    children: [
      {
        path: 'analysis',
        name:'analysis',
        component: Analysis
      },
      {
        path: 'count',
        name:'count',
        component: { template: '<h1>count</h1>' }
      },
      {
        path: 'forecast',
        name:'forecast',
        component: { template: '<h1>forecast</h1>' }
      },
      {
        path: 'publish',
        name:'publish',
        component: { template: '<h1>publish</h1>' }
      },
    ]
  };


const   router =  new Router({
  // model:history,
  mode:"history",
  routes: [
    IndexPath,
    DetailPath
  ],

});
export default  router;

router.beforeEach((to, from, next) => {
  console.log(to.fullPath);
  // console.log(from.fullPath);
  next();
})

router.afterEach((to, from) => {

})
