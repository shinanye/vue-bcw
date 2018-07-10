<template>
<div class="wrap">

    <!-- //导航条部分 -->
    <div class="slide-container">
        <div class="navTitle">
            <router-link to='/seacherShops'><img src="../../static/img/icon_search_2.png"/></router-link>
        </div>
        <div class="barContainer">
            <swiper :options="swiperOption1" ref="mySwiper">
                <!-- slides -->
                <swiper-slide v-for='(item,index) in data' v-if='index!=1' :key=index><p @click="navGo(index)">{{item.title}}</p></swiper-slide>
                <swiper-slide v-else><span @click="navGo(index)">买一赠一</span></swiper-slide>
            </swiper>
        </div>
    </div>

    <!-- 轮播图区域 -->
    <div class="swiper-container">
         <swiper :options="swiperOption2" ref="mySwiper">
            <swiper-slide v-for='(item,index) in imgArr' :key=index><img :src="'<%=path %>'+item.src"></swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
          </swiper>
    </div>

    <!-- <router-view name='AllShops'></router-view> -->
    <router-view name="AllShops" v-if='id!=0'></router-view>
    <router-view v-for=" (routers,index) in setRouterName" :key=index :name=routers.name v-else></router-view>
    
</div>
    
</template>

<script>
  // swiper options example:
import nav from '../../static/js/nav';
import lun from '../../static/js/lun';
import top from '../../static/js/sm';
import shop from '../../static/js/shop/shoplist';

 import classTxt from '../../static/js/shopsClass';//shops中的请求数据
import shops from '../../static/js/shop/shops';
  export default {
    name: 'Nav',
    data() {
      return {
        swiperOption1:{//导航部分
            slidesPerView:5,
            spaceBetween: 0,
            freeMode: true,
            breakpoints: {
	        1024: {
	          slidesPerView: 4,
	        },
	        768: {
	          slidesPerView: 4,
	        },
	        640: {
	          slidesPerView: 3,
	        },
	        320: {
	          slidesPerView: 3,
	        //   spaceBetween: 10,
	        }
	      }  
        },
        swiperOption2: {//轮播区域
          effect: 'coverflow',
          autoplay:true,
          loop:true,
          coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows : true,
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true
          },
        },
        imgArr:[],//轮播图的图片数组
        data:nav['data'],//导航部分数据
        id:0,
        setRouterName:[{name:"MainTop"},{name:"MainBody"}]
    }
  },
  created:function(){
    var _id = this.$route.params['id'];
    var arr = lun.getFrontData(0);//获得轮播图片的数组
    this.imgArr = arr;
    shop.getData(this);//获取商品的函数

  },
  watch:{
      '$route':function(){  
        shop.getData(this);
      }
  },
  methods:{
      getDataScorce:function(){
          shop.getData(this);
      },
       navGo:function(_id){
            this.id = _id;
            this.imgArr = [{src:"../../static/img/loading.png"}];
            var arr=[];
            if(_id==0){
                arr = lun.getFrontData(0);//获得轮播图片的数组
                shop.getData(this);//获取商品的函数
            }else{
                arr=lun.getFrontData(_id);
            }
            this.imgArr = arr;
            shops.getData(this,_id);

        console.log("获取id的值并且修改商品参数"+_id);
    }
  }
    
}
</script>

<style scoped>
.wrap{
    width: 100%;
    margin-bottom:65px;
}
/* 导航栏部分*/
.slide-container {
    width: 100%;
    position: fixed;
    left: 0;
    top: 0;
    z-index:5;
    /* max-height: 90px; */
    background-color: #fff;
}  
.slide-container .navTitle{
    background: url('../../static/img/icon_logo.png') no-repeat;
    background-position: center;
    background-size: contain;
    height: 45px;
    line-height: 45px;
}
.slide-container .navTitle a{
    display: block;
    float: right;
    padding-right:10px; 
    max-width:45px;
    max-height: 45px;
    overflow: hidden;
}
.slide-container .navTitle img{
    width: 100%;
    height: 100%;
}
.slide-container .swiper-slide{
    /* line-height: 100px; */
     max-height:40px;
     overflow: hidden;
     font:18px/40px "微软雅黑";
     border-top: 2px solid #aaa;
}
.slide-container .swiper-slide:hover{
    border-top:1px solid orange;
    color: orange; 
}
.slide-container .swiper-slide span{
   display: inline-block;
   background: url('../../static/img/bar/a.jpg') no-repeat;
   background-position: center;
   width: 100%;
   height: 60px;
}

/* 轮播图显示区域 */
.swiper-container {
    width: 100%;
    /* margin-top: 42px; */
    max-height: 600px;
}  
.swiper-container  .swiper-pagination-bullet-active {
    opacity: 1;
    background: #c0c0c0;
    }
    
.swiper-container  img{
        width:100%;
        height:100%;
    }


</style>
