<template>
  <div id="banner">
    <div class="banner-img" @mouseover="clearInterval" @mouseout="runInterval">
      <a href="javascript:">
        <transition name="fade">
          <img v-show="isShow" :src="slides[curIndex].src" alt="" @click="imgClicked">
        </transition>
      </a>
    </div>
    <ul class="index-control">
      <!--<li>《</li>-->
        <li v-for="(item, index) in slides" @click="goto(index)">
          <a :class="{cur: index==curIndex }"
             href="javascript:"
             @mouseover="clearInterval"
             @mouseout="runInterval">
            {{index+1}}
          </a>
        </li>
      <!--<li>》</li>-->
    </ul>
  </div>
</template>

<script>

  export default  {

//组件属性，不应该在子组件内部改变 prop
//   Prop 是单向绑定的：当父组件的属性变化时，将传导给子组件，
//  但是反过来不会。这是为了防止子组件无意间修改了父组件的状态，
//  来避免应用的数据流变得难以理解。
//另外，每次父组件更新时，子组件的所有 prop 都会更新为最新值
//  这意味着你不应该在子组件内部改变 prop。如果你这么做了，Vue 会在控制台给出警告。
    props:{
      slides:{
        type:Array,
        default:[]
      },
      interval:{
        type:Number,
        default:3000
      }
    },
    //组件局部变量
    data(){
      return{
        curIndex:0,
        isShow:true,
        name:'me is banner'
      }
    },
    //组件计算属性
    computed:{
      preIndex (){
        if (this.curIndex === 0){
          return this.slides.length-1;
        }else {
          return  this.curIndex - 1;
        }
      },
      nextIndex () {
        if (this.curIndex === this.slides.length - 1) {
          return 0
        }else {
          return this.curIndex + 1
        }
      }
    },

    methods:{
      imgClicked() {
        this.$emit('selectedIndex',this.curIndex);
      },

      goto (index) {
        this.isShow = false;
        let that = this;
        setTimeout(function () {
          that.curIndex = index;
          that.isShow = true;
        },300)

      },
      runInterval () {
        let that = this;
        this.timer = setInterval(function () {
          that.goto(that.nextIndex);
        },this.interval);
      },
      clearInterval () {
        clearInterval(this.timer);
      }
    },
//生命周期钩子
    created(){

      console.log("created");
    },
    mounted() {
      console.log("mounted");
      this.runInterval();
    },

    destroyed() {
      this.clearInterval();
    }
  }

</script>

<style scoped lang="scss">

  @import "../public/stylesheet/common";
  #banner {
    position: relative;
    img {
      width: 100%;
      height: 340px;
    }
    .index-control {
      position: absolute;
      right: 10px;
      bottom: 10px;
      li {
        float: left;
        margin-right: 10px;
        a {
          display: block;
          width: 20px;
          height: 20px;
          line-height: 20px;
          text-align: center;
          border-radius: 10px;
          background-color: darkolivegreen;
          color: white;
          font-size: 14px;
          &.cur {
            background-color: white;
            color: darkolivegreen;
          }
        }
      }
    }

  }


  ///动画
  .fade-enter-active, .fade-leave-active {
    transition: opacity .3s
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active in below version 2.1.8 */ {
    opacity: 0.5
  }
</style>
