<template>
  <div class="detail-wrap w clearfix">
    <div class="detail-left float-left">
      <div class="container">
        <img src="../assets/indexImgs/1.png" alt="">
        <ul class="menus">
          <li v-for="(item,index) in products">
            <router-link class="left-index" active-class="active" :to ="{name:item.toPath}"> {{item.name}}</router-link>
          </li>
        </ul>

      </div>
    </div>
    <div class="detail-right float-right">
      <div class="container">
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </div>
  </div>
</template>

<script>

  export  default  {
    name:"detail",

    data(){
      return {
        products: [
          {
            name: '数据统计',
            toPath: 'count',
//            icon: require('../assets/images/1.png'),
            active: false
          },
          {
            name: '数据预测',
            toPath: 'forecast',
            active: false
          },
          {
            name: '流量分析',
            toPath: 'analysis',
            active: false
          },
          {
            name: '广告发布',
            toPath: 'publish',
            active: false
          }
        ],
      }
    },
    beforeRouteEnter (to, from, next) {
      // 在渲染该组件的对应路由被 confirm 前调用
      // 不！能！获取组件实例 `this`
      // 因为当守卫执行前，组件实例还没被创建
//      alert("将要进入detail");
      next();
    },
    beforeRouteUpdate (to, from, next) {
      // 在当前路由改变，但是该组件被复用时调用
      // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
      // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
      // 可以访问组件实例 `this`
      next();

    },
    beforeRouteLeave (to, from, next) {
      // 导航离开该组件的对应路由时调用
      // 可以访问组件实例 `this
//      alert("将要离开当前页面");
      next();
    }

  }
</script>

<style scoped lang="scss">
  @import "../public/stylesheet/common";

  .detail-wrap {
    .detail-left {
      width: 15%;
      padding-right: 10px;
      .container {
        background-color: white;
        position: relative;
        img {
          position: absolute;
          width: 80px;
          height: 80px;
          left: 50%;
          top: 20px;
          margin-left: -40px;
        }
        .menus {
          padding-top: 120px;
          padding-bottom: 10px;
          font-size: 15px;
          color: #333;
          .left-index{
            display: block;
            height:  30px;
            line-height: 30px;
            padding-left: 10px;
          }
          .active {
            background-color:$theme-color;
          }
        }
      }
    }
    .detail-right {
      width: 85%;
      .container {
        background-color: white;

      }
    }
  }


</style>
