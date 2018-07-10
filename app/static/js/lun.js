var data=[];
export default{
    data:data,
    getFrontData:function(id){
        var imgArr=[]
        if(id==0){
                imgArr=[
                    {src:"../../static/img/bar/1.jpg"},
                    {src:"../../static/img/bar/2.jpg"},
                    {src:"../../static/img/bar/3.jpg"}
                ];
        }else if(id==1){
            imgArr=[{src:"http://img2.vipbcw.com/2017/11/67ae9e6067c14a7276cad48dd8d7334b"}];
        }else if(id==2){
            imgArr=[{src:"http://img2.vipbcw.com/2017/12/269f7557a3484b25e9fa2436f1410451"}];
        }else if(id==3){
            imgArr=[{src:"http://img2.vipbcw.com/2017/07/72020e397ffe5b1e8df05120c8bab415"}];
        }else if(id==4){
            imgArr=[{src:"http://img2.vipbcw.com/2017/06/0d97c87a0a9cf8641dae27642c654149"}];
        }else if(id==5){
            imgArr=[{src:"http://img2.vipbcw.com/2017/06/60dc3c163ca9c258f21a73fe26f7ad75"}];
        }else if(id==6){
            imgArr=[{src:"http://img2.vipbcw.com/2017/06/6cf14c9f9adfdabff356f13aa158d605"}];
        }else{
            imgArr=[{src:"http://img2.vipbcw.com/2017/06/2ec00289ad88fb8c0654105d6287f635"}];
         }

         return imgArr;
    }
}
