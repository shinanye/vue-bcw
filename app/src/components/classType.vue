<template>
    <div class="container-fluid">
        <div class="row searchBar">
            <input type="text" @click="searchClick" placeholder="礼盒">
        </div>
        <div class="row foods">
            <div class="col-xs-4" v-for='item in data'><router-link :to="{name:'shops',params:{id:item}}"><img :src="'<%=path %>'+item.src"></router-link></div>
        </div>
    </div>
</template>

<script>
  // swiper options example:
  import classType from '../../static/js/classType'
  export default {
    name: 'FooterBar',
    data() {
      return {
          data:classType['data']
    }
  },
  methods:{
      searchClick:function(){
          this.$router.push({path:'/seacherShops'});
      }
  }
}
</script>

<style scoped>
.container-fluid{
    background-color: #c6ffff;
    height: 1000px;
    margin-bottom: 10%;
}
.searchBar{
    background-color: orangered;
    max-height:100px;
    font: 16px/35px "微软雅黑";
}
.searchBar input[type='text']{
    width: 90%;
    outline: none;
    border-radius: 30px;
    padding-left: 10px;
    border: 1px solid  #eee;
     margin: 10px auto;
     color:red;
}
.searchBar input[type='text']:hover{
    cursor: pointer;
}
.col-xs-4{
    max-height:200px;
    overflow: hidden;
    margin: 2% 0;
}
.foods img{
    width: 80%;
    height:60%;
    border-radius: 50%;
}
</style>
