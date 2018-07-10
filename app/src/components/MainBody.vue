<template>
    <div class="indexShop-container">
        <div class="redbag"><img src="../../static/img/barre/jx.png" alt=""></div>
        <div class="shopContainer">
            <div class="logo"  v-for='(shop,index) in ($store.state.shop.list)' :key=index><img :src="'<%=path %>'+shop.logoSrc">
                <swiper :options="swiperOption" ref="mySwiper" class="shops">
                    <swiper-slide v-for='(shops,index) in shop.shopContainer' :key=index>
                        <div class="onlyShops" @click="searchShop(shops.id)">
                            <img :src="'<%=path %>'+shops.src"><p class="title">{{shops.title}}</p><p><strong class="price">￥{{shops.price}}</strong><del>￥{{shops.delPrice}}</del></p>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
import shop from '../../static/js/shop/shoplist'

export default {
  name:'MainBody',
  data(){
      return {
        // data:MainTop['data']
         swiperOption:{
            slidesPerView:3,
            slidesPerColumn: 2,
            spaceBetween: 0,
            freeMode: true,
            pagination: {
            el: '.swiper-pagination',
            clickable: true,
            },
         }
      }
  },
  created:function(){
      shop.getData(this);
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
      searchShop:function(_id){
        this.$router.push({path:"/home/AllShops/aloneshops"});
      }
  }
}
</script>

<style scoped>
.indexShop-container{
    margin-bottom:10%;
    background-color: #fff;
}

.redbag{
     max-height: 200px;
}
.logo{
    width: 100%;
}
.logo img{
    width: 100%;
    max-height: 400px;
}
.shopContainer{
    font: 16px/25px "微软雅黑";
    border:2px solid blue;
}
.price{
    color: crimson;
}
del{
    color: #aaa;
}
</style>
