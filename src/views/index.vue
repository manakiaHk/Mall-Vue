<template>
  <div class="index-wrap clearfix">
    <div class="index-left float-left">
      <div class="index-left-top pro">
        <h2>全部产品</h2>
        <template v-for="prdt in productList">
            <h3>{{prdt.title}}</h3>
            <ul class="product-lists" v-for="item in prdt.list">
              <li>
                <a :href="item.url">{{item.name}}</a>
                <span v-if="item.hot" class="hot-icon">HOT</span>
              </li>
            </ul>
          <div class="sep" v-if="!prdt.last"></div>
        </template>
      </div>
      <div class="index-left-bottom news">
        <h2>最新消息</h2>
        <ul>
          <li v-for="item in newsList">
            <a :href="item.url" class="new-item">{{ item.title }}</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="index-right float-right">
      <div class="banner">
        <banner ref="indexBanner" :slides="slides" :interval="bannerInterval" @selectedIndex="bannerSelIndex"></banner>
      </div>
      <div class="index-boar-list clearfix">
          <div ref="items" class="item float-left" v-for="(item, index) in boardList">
            <div class="container clearfix"
                 :class="{'item-aniaml-active':isBoradItemActive==index}"
                 @mouseover="isBoradItemActive=index" @mouseleave="isBoradItemActive=-1">
              <img :src="item.imgsrc" alt="">
              <div class="content">
                <p class="title">{{item.title}}</p>
                <p class="subtitle">{{item.description}}</p>
                <router-link class="btn" :to = "{ name:item.toRouter}">点击购买</router-link>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>
<script>

  import banner from  '../components/banner';
  export  default {
    name:'index-view',
    components:{
      banner,
    },

    mounted(){
//      this.$http.get('api/getNewsList')
//        .then(function (ret) {
//          console.log(ret);
//        },function (err) {
//          console.log(err);
//        });
//      console.log(this.$refs.items);

    },

    data() {
      return {
        isBoradItemActive:{
          type:Number,
          default:-1
        },
        bannerInterval: 3000,
        slides: [
          {
            src: require('../assets/slideShow/pic1.jpg'),
            title: 'xxx1',
            toPath: 'publish'
          },
          {
            src: require('../assets/slideShow/pic2.jpg'),
            title: 'xxx2',
            toPath: 'count'
          },
          {
            src: require('../assets/slideShow/pic3.jpg'),
            title: 'xxx3',
            toPath: 'analysis'
          },
          {
            src: require('../assets/slideShow/pic4.jpg'),
            title: 'xxx4',
            toPath: 'forecast'
          }
        ],
        boardList: [
          {
            title: '开放产品',
            description: '开放产品是一款开放产品',
            imgsrc:require('../assets/indexImgs/1.png'),
            id: 'car',
            toRouter: 'analysis',
            saleout: false
          },
          {
            title: '品牌营销',
            description: '品牌营销帮助你的产品更好地找到定位',
            imgsrc:require('../assets/indexImgs/2.png'),
            id: 'earth',
            toRouter: 'count',
            saleout: false
          },
          {
            title: '使命必达',
            description: '使命必达快速迭代永远保持最前端的速度',
            imgsrc:require('../assets/indexImgs/3.png'),
            id: 'loud',
            toRouter: 'forecast',
            saleout: true
          },
          {
            title: '勇攀高峰',
            description: '帮你勇闯高峰，到达事业的顶峰',
            imgsrc:require('../assets/indexImgs/4.png'),
            id: 'hill',
            toRouter: 'publish',
            saleout: false
          }
        ],

        productList: [
          {
            title:'PC产品',
            list:[
              {
                name: '数据统计',
                url: 'http://starcraft.com'
              },
              {
                name: '数据预测',
                url: 'http://warcraft.com'
              },
              {
                name: '流量分析',
                url: 'http://overwatch.com',
                hot: true
              },
              {
                name: '广告发布',
                url: 'http://hearstone.com'
              }
            ]
          },
          {
            title: '手机应用类',
            last: true,
            list: [
              {
                name: '91助手',
                url: 'http://weixin.com'
              },
              {
                name: '产品助手',
                url: 'http://twitter.com',
                hot: true
              },
              {
                name: '智能地图',
                url: 'http://maps.com'
              },
              {
                name: '团队语音',
                url: 'http://phone.com'
              }
            ]
          }
        ],
        newsList: [
          {
            title: '智能地图',
            url: 'http://maps.com'
          },
          {
            title: '团队语音',
            url: 'http://phone.com'
          },
          {
            title: '智能地图',
            url: 'http://maps.com'
          },
          {
            title: '智能地图',
            url: 'http://maps.com'
          },
          {
            title: '智能地图',
            url: 'http://maps.com'
          },
        ],
      }

      },
      methods :{
        bannerSelIndex(index){
          let routerPath =  this.slides[index].toPath;
          this.$router.push({name:routerPath});
        }

      }
    }
</script>

<style scoped lang="scss">
  @import "../public/stylesheet/common";

  @keyframes index-board-animal
  {
    from {top: 0; left: 0;  }
    to {top: -3px; left: -3px;box-shadow: 5px 5px 10px #999;}
  }


  .index-wrap {
    width: 100%;
  }
  .index-left {
    width: 20%;
    padding-right: 10px;
    .index-left-top {
      margin-bottom: 10px;
      padding-bottom: 10px;
      background-color: white;
    }
    .index-left-bottom {
      background-color: white;
      padding-bottom: 10px;
    }
    h2 {
      padding-left: 10px;
      height: 35px;
      line-height: 35px;
      color: white;
      font-size: 17px;
      font-weight: 400;
      background-color: $theme-color;
    }
    h3 {
      height: 40px;
      line-height: 40px;
      color: #333;
      font-size: 15px;
      font-weight: 500;
      padding-left: 10px;
    }
    li {
      a{
        color: #666;
        padding-left: 10px;
        font-size: 14px;
      }
      .hot-icon {
        color: red;
        font-weight: 800;
        font-size: 14px;
      }
    }
    .sep {
      height: 10px;
      border-bottom: solid 1px #f0f0f0;
    }
  }
  .index-right {
    width: 80%;
    /*height: 600px;*/
    .index-boar-list {
      .item {
        position: relative;
        background-color:rgba(0,0,0,0);
        width:50%;
        padding-top: 10px;
        &:nth-of-type(2n){
           padding-left: 10px;
         }
        &:nth-of-type(2n+1){
          padding-left: 0;
        }
        .item-aniaml-active {
          animation: index-board-animal 0.3s;
          -webkit-animation: index-board-animal 0.3s; /* Safari 与 Chrome */
          top: -3px;
          left: -3px;
          box-shadow: 5px 5px 10px #999;
        }
        .container {
          cursor:pointer;
          height: 200px;
          width: 100%;
          position: relative;
          background-color: white;
          img {
            $imgw:100px;
            position: absolute;
            height: $imgw;
            width: $imgw;
            top: 50%;
            margin-top: -($imgw/2);
            left: (200px-$imgw)/2;
          }
          .content {
            height: 100%;
            padding-left: 200px;
            padding-right: 10px;
            padding-top: 40px;
            .title {
              font-size: 25px;
              /*margin-top: 20px;*/
              height: 25px;
              line-height: 25px;
            }
            .subtitle {
              font-size: 16px;
              color: #333;
              margin-top: 10px;
            }
            .btn {
              display: block;
              height: 30px;
              line-height: 30px;
              width: 80px;
              font-size: 14px;
              text-align: center;
              color: white;
              background-color: $theme-color;
              position: absolute;
              bottom: 30px;
              border-radius: 5px;
            }
          }
        }
      }
    }
  }

</style>
