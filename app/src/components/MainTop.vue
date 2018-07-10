<template>
    <div class="mainTop">
       <div class="row img">
           <img src="../../static/img/redbag.png">
       </div>
       <div class="row article">
           <ul>
               <li v-for="item in data">
                    <img :src="'<%=path %>'+item.src">
                    <p>{{item.title}}</p>
               </li>
           </ul>
       </div>
    </div>
</template>

<script>
  // swiper options example:
  import top from '../../static/js/sm';
  export default {
    name: 'MainTop',
    data() {
      return {
          data:top['data']
    }
  }
    
}
</script>

<style scoped>
.row{
    margin: 0;
}
.mainTop{
    width: 100%;
}
.img img{
    width: 95%;
}
.article ul li{
    float: left;
    list-style: none;
    width: 25%;
    font: 17px "微软雅黑";
}
.article img{
    width: 35%;
}
</style>
