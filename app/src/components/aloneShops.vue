<template>
    <div class="aloneShops">
        <div class="top">
            <div class="swiper-container">
                <div class="tigs">
                    <div class="tag">
                        <span @click="backClick"><</span>
                        <div class="directorIMG"> 
                            <img src="http://img2.vipbcw.com/wap/integral-mall/down.gif" alt="">
                        </div>
                    </div>
                </div>
                <swiper :options="swiperOption1" ref="mySwiper">
                    <swiper-slide v-for ='(item,index) in this.$store.state.onlyShops.onlyShopsList.imgSrc' :key=index><img :src="'<%=path %>'+item.src"></swiper-slide>
                    <div class="swiper-pagination"  slot="pagination"></div>
                </swiper>
            </div>
            <div class="txtContainer">
                <div class="price">
                    <span>￥{{this.$store.state.onlyShops.onlyShopsList["price"]}}</span>
                    <i>今日推荐</i>
                </div>
                <h3>{{this.$store.state.onlyShops.onlyShopsList["content"]}}</h3>
                <p>{{this.$store.state.onlyShops.onlyShopsList["txt"]}}</p>
            </div>
        </div>

        <div class="shopContainer">
            <div class="logo"  v-for='(shop,index) in ($store.state.shop.list)' :key=index v-if='index==0'>
                <swiper :options="swiperOption2" ref="mySwiper" class="shops">
                    <swiper-slide v-for='(shops,secIndex) in shop.shopContainer' :key=secIndex>
                        <div class="onlyShops" @click="searchShop(shops.id)">
                            <img :src="'<%=path %>'+shops.src"><p><strong class="price">￥{{shops.price}}</strong><del>￥{{shops.delPrice}}</del><i>+</i></p>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
        <div class="showContainer">
            <ul>
                <li v-for ='(item,index) in this.$store.state.onlyShops.onlyShopsList.imgSrc' :key=index><img :src="'<%=path %>'+item.src"></li>
            </ul>
        </div>

        <div class="footer">
            <ul>
                <li>客服</li>
                <li>收藏</li>
                <li>购物车</li>
                <li class="addCart">加入购物车</li>
            </ul>
        </div>
    </div>
</template>

<script>
  // swiper options example:
    import onlyShops from '../../static/js/shop/onlyShops'
    import shop from '../../static/js/shop/shoplist'
  export default {
    name: 'aloneShops',
    data() {
      return {
       swiperOption1: {
          pagination: {
                el: '.swiper-pagination',
                type: 'fraction',
            }
        },
        swiperOption2:{
            slidesPerView:4,
            spaceBetween: 0,
            freeMode: true,
         },
        imgArr:[]
    }
  },
  created:function(){
      onlyShops.getDataOnlyShops(this);
      shop.getData(this);
    },
    methods:{
        backClick:function(){
            this.$router.push({path:"/classType/shops"});
        },
        searchShop:function(_id){
            this.$router.push({path:"/home/AllShops/aloneshops"});
        }
    }
}
</script>

<style scoped>
ul li{
    list-style-type: none;
}
.swiper-container{
    max-height: 1150px;
    position: relative;
}  
.swiper-container img{
        width:100%;
        height:100%;
    }
.swiper-container .tag span{
    display: inline-block;
    width: 60px;
    height: 60px;
    border-radius: 50%;
    font: 50px/50px "微软雅黑";
    color: crimson;
    text-align: center;
    background-color:#eee;
    position: absolute;
    z-index: 2;
    top: 1%;
    left: 1%;
     cursor: pointer;
}
.directorIMG{
    width: 25%;
    max-height: 80px;
    background: url("http://img2.vipbcw.com/wap/integral-mall/Group 11.png");
    position: absolute;
    bottom:0;
    right: 0;
    z-index: 2;
}
.directorIMG img{
    margin-right: 60%;
    width:25%;
    z-index:3 ;
    height: 100%;
}

.txtContainer{
    text-align: left;
    background-color: #fff;
    font: 16px "微软雅黑";
    color:#666 ;
}
.txtContainer h3{
    font:blod 18px "微软雅黑";
     text-indent:1em;
     margin: 10px 0;
}

.txtContainer span{
    color: red;
    float: left;
    font:bold 25px/40px "微软雅黑";
}
.txtContainer i{
    max-width: 40px;
    max-height: 40px;
    font:18px/40px "微软雅黑";
    text-align: center;
    background-color: aqua;
    color:white;
    border-radius:5px;
}
.txtContainer p{
      text-indent:1em;
}
.showContainer{
    max-height: 1000px;
    width: 100%;
    margin-top: 1%;
}
.showContainer img{
   width: 100%;
   height: 20%;
}
.shopContainer{
    max-height: 350px;
    background-color: #fff;
}
.aloneShops{
    width: 100%;
    background-color: #eee;
}
.footer{
    width: 100%;
    max-height:60px;
    font: 16px/60px "微软雅黑";
    position: fixed;
    left: 0;
    bottom:-5px;
    z-index: 3;
    background-color: #fff;
}
.footer ul li{
    width: 25%;
    float: left;
}
.footer .addCart{
    background-color:orangered;
    color: white;
}
.shopContainer{
    font: 16px/25px "微软雅黑";
}
.price{
    color: crimson;
}
del{
    color: #aaa;
}
.onlyShops{
    text-align: left;
}
.onlyShops i{
    width: 30px;
    height: 30px;
    background-color: red;
    color: white;
    font: 30px/30px '黑体';
    border-radius: 50%;
    text-align: center;
    float: right;
    margin-right:10%;
}
</style>
