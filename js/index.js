/*
 Created by zhusy on 2019/9/11.
 */
// JavaScript Document



var newsInit=null;

$(function () {

    newsInit = new DYCHY.NewsInit(Common);
    //导航栏下拉
    function dropMenu(obj){
        $(obj).each(function(){
            var theSpan = $(this);
            var theMenu = theSpan.find(".submenu");
            var tarHeight = theMenu.height();
            theMenu.css({height:0,opacity:0});

            var t1;

            function expand() {
                clearTimeout(t1);
                theSpan.find('a').addClass("selected");
                theMenu.stop().show().animate({height:tarHeight,opacity:1},200);
            }

            function collapse() {
                clearTimeout(t1);
                t1 = setTimeout(function(){
                    theSpan.find('a').removeClass("selected");
                    theMenu.stop().animate({height:0,opacity:0},200,function(){
                        $(this).css({display:"none"});
                    });
                }, 250);
            }
            theSpan.hover(expand, collapse);
            theMenu.hover(expand, collapse);
        });
    }

    //新闻文字tab
    function xinwentab(){
        $("#yc_intab1").tab({
            tabId: "#yc_intag1",
            tabTag: "li",
            conId: "#yc_incont1",
            conTag: ".yc_incont1",
            curClass: "cur",
            act: "mouseover",
            dft: 0
        });
    }

    xinwentab();




    newsInit.InitNewDongDI();
    newsInit.InitNewsXXTZ();
    newsInit.InitNewsZSYZ();
    newsInit.InitNewsMore();

    newsInit.InitNewsTSCY();
    newsInit.InitNewsJZFP();
    newsInit.InitNewsZJDD();
    /**初始化轮播图*/
    newsInit.InitSlidBoxPic();

    $('#lunbotu').slideBox({
        duration : 0.3,//滚动持续时间，单位：秒
        easing : 'swing',//swing,linear//滚动特效
        delay : 5,//滚动延迟时间，单位：秒
        hideClickBar : false,//不自动隐藏点选按键
        clickBarRadius : 10
    });

})


