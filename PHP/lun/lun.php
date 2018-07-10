<?php
    header("Content-Type:text/html; charset=UTF-8");
    header("Access-Control-Allow-Origin:*");
    $id = $_GET['id'];
    if($id==0){
        echo'[
            {"src":"../../static/img/bar/1.jpg"},
            {"src":"../../static/img/bar/2.jpg"},
            {"src":"../../static/img/bar/3.jpg"}
        ]';
    }else if($id==1){
        echo'[
            {"src":"http://img2.vipbcw.com/2017/11/67ae9e6067c14a7276cad48dd8d7334b"}
        ]';
    }else if($id==2){
        echo'[
            {"src":"http://img2.vipbcw.com/2017/12/269f7557a3484b25e9fa2436f1410451"}
        ]';
    }else if($id==3){
        echo'[
            {"src":"http://img2.vipbcw.com/2017/07/72020e397ffe5b1e8df05120c8bab415"}
        ]';
    }else if($id==4){
        echo'[
            {"src":"http://img2.vipbcw.com/2017/06/0d97c87a0a9cf8641dae27642c654149"}
        ]';
    }else if($id==5){
        echo'[
            {"src":"http://img2.vipbcw.com/2017/06/60dc3c163ca9c258f21a73fe26f7ad75"}
        ]';
    }else if($id==6){
        echo'[
            {"src":"http://img2.vipbcw.com/2017/06/6cf14c9f9adfdabff356f13aa158d605"}
        ]';
    }else{
        echo'[
            {"src":""http://img2.vipbcw.com/2017/06/2ec00289ad88fb8c0654105d6287f635"}
        ]';
    }
    
?>

