<template>
    <div class="container-fluid">
    <div class="row">
        <div class="form col-xs-12">
            <form @submit="seacherClick">
                <span><router-link to='/'><</router-link></span>
                <input type="text" v-model=data.searchIn name='search' placeholder="坚果" readonly>
                <input type="button" @click="seacherClick" value="搜索">
            </form>
        </div>
    </div>
   <div class="row">
        <div class="form1 col-xs-12">
            <form @submit="typeClick">
                <input class="red" v-for='(item,index) in txt' v-if="item.title!='新品' && item.title!='礼盒'" type="text" v-model=data.typeInp name='typeIn' :placeholder=item.title>
            </form>
        </div>
    </div>
  </div>
</template>

<script>
import shopTxt from '../../static/js/shopSearch';
export default {
  name:'seacherShops',
  data(){
      return {
           data:{
               searchIn:"坚果",
               typeInp:""
           },
            txt:shopTxt.data
      }
  },
  methods:{
      seacherClick:function(){
          var _type=this.data.searchIn
          console.log(_type)
      },
      typeClick:function(){
          var _type=this.data.typeInp
          console.log(_type)
      }
  }
}
</script>

<style scoped>
.col-xs-12,.row{border:0;padding: 0;margin: 0;}
.col-xs-12{
    margin: 0;
}
a{
    text-decoration: none;
}
.container-fluid{
    width:100%;
    padding:10px;
    height: 650px;
}
.form span{
    width:3%;
    display: inline-block;
   font:bold 20px/40px "黑体";
}

.form input[type='text']{
    width:85%;
    font:15px/40px "微软雅黑";
    border: 1px solid #aaa;
    outline: none;
    padding-left: 1%;
    border-radius: 30px;
}
.form input[type='button']{
    width: 10%;
    font: 15px/35px '微软雅黑';
    background-color:orangered;
    color: white;
    border-radius: 30px;
}
.form input[type='button']:hover{
    background-color: orange;
    
}
.form1{
    margin: 10px 0 0 10px; 
}

.form1 input[type='text']{
    float: left;
    text-align: center;
    width:9%;
    margin: 0 0.1%;
    font:16px/25px "微软雅黑";
    border: 1px solid #aaa;
    outline: none;
    border-radius: 30px;
}
.form1 input[type='text']:hover{
    background-color:#eee;
}

</style>
