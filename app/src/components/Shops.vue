<template>
    <div class="container-fluid">
        <div class="row foods">
          <div class="header clearFix">
            <p class="headerSpan"><router-link to='/classType'><</router-link></p>
            <p class="headerTxt">{{data.txt}}</p>
          </div>
          <div class="class clearFix">
            <!-- 每一个上面都有超链接 -->
            <div class="col-xs-4" v-for='item in barTxt' @click="go(item.id)">
              {{item.title}}
            </div>
            
          </div>
          <div class="mainbody">
            <caption class="col-xs-6 anyone" v-for='item in this.$store.state.shoplist.list' @click="searchShop(item.id)" >
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
    </div>
</template>

<script>
  // swiper options example:
import classTxt from '../../static/js/shopsClass'
import shops from '../../static/js/shop/shops'
  export default {
    name: 'Shops',
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
      }
  },
  methods:{
    go:function(_id){
      shops.getData(this,_id);
    },
    searchShop:function(_id){
        this.$router.push({path:"/home/AllShops/aloneshops"});
    }
  }
}
</script>

<style scoped>
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
.clearFix::after{
  content: "";
  clear: both;
  display:block;
}
.container-fluid{
     background-color: #fff;
    height: 1000px;
    height: 300px;
    margin-bottom: 10%;
}
.header{
  width:100%;
  font: 20px/50px "微软雅黑";
  color:#aaa;
  border-bottom: 1px solid #aaa;
}
.headerSpan{
  display: inline-block;
  width:5%;
  font-size: 40px;
  float: left;
}
.header a{
  text-decoration: none;
  color:#aaa;
}
.header a:hover{
  color: deepskyblue;
}
.headerTxt{
  width: 90%;
  float: right;
}
.class{
  font: 16px/35px "微软雅黑";
  margin-bottom: 2px;
  max-height: 35px;
}
.col-xs-4:hover{
  border-bottom: 2px solid red;
}
.col-xs-6,.col-xs-4{
  margin: 0;
}
.col-xs-6{
  max-width: 450px;
}
.col-xs-6 img{
  width: 100%;
}
</style>
