<template>
    <div class="container-fluid">
        <div class="mainbody">

        <caption class="col-xs-6 anyone" v-for='item in this.$store.state.shoplist.list' @click="searchShop(item.id)">
            <figure>
                <img :src="'<%=path %>'+item.src">
            </figure>
            <div class="article">
                <h3>{{item.title}}</h3>
                <p>{{item.secTitle}}</p>
                <div class="block">
                    <span>￥{{item.price}}</span>
                    <i>+</i>
                </div>
            </div>
        </caption>
        </div>
    </div>
</template>

<script>
  // swiper options example:
import classTxt from '../../static/js/shopsClass'
import shops from '../../static/js/shop/shops'
  export default {
    name: 'AllShops',
    data() {
      return {
        data:{
          id:1,
          txt:"热卖爆款"
        },
        barTxt:classTxt.data
    }
  },
  created:function(){
    var item = this.$route.params['id'];
    if(!item){
      item=this.data;
    }
    this.data = item;
    shops.getData(this,this.data.id);

  },
   watch:{
      '$route':function(){  
            // shops.getData(this,1);
            console.log("route-----")
      }
  },
  methods:{
    searchShop:function(_id){//每件商品的id
        this.$router.push({path:"/home/AllShops/aloneshops"});
    }
  }
}
</script>

<style scoped>
.container-fluid{
     background-color: #fff;
    height: 1000px;
    height: 300px;
    margin-bottom:15%;
}
.col-xs-6{
  margin: 0;
}
.col-xs-6{
  max-width: 450px;
}
.col-xs-6 img{
  width: 100%;
}
.article{
  font: 16px "微软雅黑";
  color: #000;
}
.article h3{
  font:blod 18px/25px "微软雅黑";
}
.article p{
  text-indent: 2em;
}
.article span{
  color: red;
  float: left;
  font:bold 18px "微软雅黑";
}
.article i{
  width: 40px;
  height: 40px;
  font:30px "微软雅黑";
  text-align: center;
  border-radius: 50%;
  background-color:red;
  color: white;
  float: right;
}
</style>
