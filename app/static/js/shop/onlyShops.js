export default{
    getDataOnlyShops:function(_this){
        _this.$http.get('http://localhost/PHP/shops/aloneShops.php').then(function(res){
            // _this.$store.state.onlyShops.onlyShopsList=res.body;
            // _this.$router.push({path:'/List/SecList'});

            console.log("--222222222222nihso----------单个商品区域的后端"+res.body)
            _this.$store.commit('setOnlyShopsList',res.body);
            // var item = _this.$store.state.lun.lunList;
            // for(var i=0;i<item.length;i++){
            //     console.log(i+"--nihso----------瞅瞅"+item[i]["src"])
            // }
            
            },function(){
                alert('请求失败处理');   //失败处理
            });
        }
}