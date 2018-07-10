<template>
  <div id="app">
     <router-view></router-view>
    <!-- <router-view name='Lun'></router-view>
    <router-view name='MainTop'></router-view>
    <router-view name='MainBody'></router-view> -->
    <router-view name='aloneShops'></router-view>
    <router-view name='FooterBar'></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  /* margin-top: 60px; */
}
</style>
