<template>
    <div class="footerBar clearFix">
        <ul>
          <li class=" active"><router-link to='/'><span class="glyphicon glyphicon-home active"></span><p>首页</p></router-link></li>
          <li><router-link to='/classType'><span class="glyphicon glyphicon-list"></span><p>分类</p></router-link></li>
          <li><span class="glyphicon glyphicon-headphones"></span><p>VIP俱乐部</p></li>
          <li><span class="glyphicon glyphicon-shopping-cart"></span><p>购物车</p></li>
          <li><span class="glyphicon glyphicon-user"></span><p>我的</p></li>
        </ul>
    </div>
</template>

<script>
  // swiper options example:
  export default {
    name: 'FooterBar',
    data() {
      return {
    }
  }
}
</script>

<style scoped>
.clearFix:after{
  content: "";
  display: block;
  clear: both;
}
.footerBar{
  width: 100%;
  position: fixed;
  bottom: 0;
  left:0;
  z-index: 5;
  background-color: #fff;
}
.footerBar ul li{
  list-style: none;
  float: left;
  width: 20%;
  font: 15px/20px "微软雅黑";
}
.glyphicon{
   font-size:30px;
  color:#aaa;
  }
.active,a{
  color:crimson;
}
.glyphicon:hover,a:hover{
  color:crimson;
}
</style>
