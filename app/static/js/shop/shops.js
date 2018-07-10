export default{
    getData:function(_this,_id){
        
        _this.$http.get('http://localhost/PHP/shops/indexSec/index.php?id='+_id).then(function(res){
           
        // console.log("res.body------------------"+res.body)
            // _this.$store.state.shop.list=res.body;
            // _this.$router.push({path:'/List/SecList'});
            
            _this.$store.commit('setlist',res.body);
            },function(){
                alert('请求失败处理');   //失败处理
            });
        }
}