<template>
    <div class="swiper-container">
     
         <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for='(item,index) in imgArr' :key=index><img :src="'<%=path %>'+item.src>"</swiper-slide>
           
            <!-- Optional controls -->
            <div class="swiper-pagination"  slot="pagination"></div>
            <div class="swiper-button-prev" slot="button-prev"></div>
            <div class="swiper-button-next" slot="button-next"></div>
            <div class="swiper-scrollbar"   slot="scrollbar"></div>
          </swiper>
    </div>
</template>

<script>
  import lun from '../../static/js/lun'
  export default {
    name: 'Lun',
    data() {
      return {
        swiperOption: {
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
        imgArr:[]
      }
    },
    created:function(){
      var id = this.$route.params["id"];
      var arr = lun.getFrontData(0);
      this.imgArr = arr;

    },
    watch:{
      '$route':function(){
        
      }
  },
  }
</script>

<style scoped>
.swiper-container {
    width: 100%;
    margin-top: 42px;
    max-height: 600px;
}  
.swiper-pagination-bullet-active {
    opacity: 1;
    background: #c0c0c0;
    }
    
.swiper-button-prev,
.swiper-button-next {
    position: absolute;
    top: 50%;
    width: 13px;
    height: 22px;
    margin-top: -11px;
    z-index: 10;
    cursor: pointer;
    background-size: 13px 22px;
    background-position: center;
    background-repeat: no-repeat;
    color: #c0c0c0;
    }

img{
        width:100%;
        height:100%;
    }
</style>
