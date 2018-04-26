<template>
  <div id="layout">
    <div class="app-header">
      <div class="w">
        <router-link :to="{path:'/'}">
          <img src="./assets/logo.png" class="logo" alt="">
        </router-link>
        <ul class="app-nav">
          <li>关于</li>
          <li v-if="username ===''">注册<span class="sepr">|</span></li>
          <li v-if="username !==''">退出<span class="sepr">|</span></li>
          <li v-if="username ===''">登录<span class="sepr">|</span></li>
          <li v-if="username !==''"> {{ username }}<span class="sepr">|</span></li>
        </ul>
      </div>
    </div>
    <div class="app-container w">
      <router-view>
        app-container
      </router-view>
    </div>
    <div class="app-footer">
      <div class="w">
        <p>© 2017 fishenal MIT</p>
      </div>
    </div>
  </div>
</template>

<script>
  export  default  {
    name:'layout',
    data() {
      return{
        username:'zhd_djjj'
      }
    }
  }
</script>

<!--样式-->
<style scoped lang="scss">

  @import "public/stylesheet/common";
  #layout {
    background-color: #f0f0f0;
  }
  .app-header {
    background-color: #363636;
    height: $nav-height;
    position: relative;
    .app-nav {
      float: right;
    }
    .app-nav li {
      height: 90px;
      line-height: 90px;
      color: white;
      font-size: 13px;
      float: right;
      .sepr {
        padding: 5px 5px;
      }
    }
    .w {
      position: relative;
    }

    .logo {

      display: block;
      position: absolute;
      left: 10px;
      top: 25px;
      width: 40px;
      height: 40px;
    }
  }
  .app-container {
    margin-top:10px;
    margin-bottom: 10px;
    /*background-color: red;*/

  }
  .app-footer {
    background-color: #999;
    height: $nav-height;
    text-align: center;
    line-height: 90px;
  }


</style>

