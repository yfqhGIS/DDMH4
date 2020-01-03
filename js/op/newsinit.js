/**
 * @Description TODO
 * @Date 2019/9/26 9:25
 * @Created by qrb_PC
 */

if(!DYCHY){
    var  DYCHY={};
}

DYCHY.NewsInit=function(common){
    var newsinit={};

    /**
     * 初始化ul标签数据
     * @param ULID
     * @param response
     * @constructor
     */
    function InitUL(ULID,response) {
        if(response.flag){
            var result = response.data;
            var length=result.length;

            for(var i = 0;i<length;i++){
                var newsTitle=result[i].title;
                var uuid=result[i].uuid;
                var date=result[i].opTime;
                date=common.DateTimeOp.GetYMDFromStamp(date);
                var msg ="<li id="+uuid+"><span>"+date+"</span><a href='#'>"+newsTitle+"</a></li>";
                $(ULID).append(msg);
            }

        }else{
            var msg = response.msg;
            alert(msg);
        }
    }


    /**
     * 初始化董地新闻
     */
    var InitNewDongDI=function() {

        var CallBackOp={};
        CallBackOp.success=function(response) {

            InitUL("#listNewsDongDI",response);

        }
        CallBackOp.error=function(textStatus,errorThrown) {
            alert("获取董地新闻数据发生错误");
        };

        var strData="type="+DYCHY.Constant.NEWS_DONGDI+"&PageCount="+DYCHY.Constant.NEWS_COUNT+"&NowPage="+DYCHY.Constant.NEWS_PAGE_INDEX;;
        var requestParams={"type":DYCHY.Constant.NEWS_DONGDI}
        var url= DYCHY.HttpURL.URL_NEWS_FIND_CATALOG+"?"+strData;

        common.AjaxOp.ComOp(url,requestParams,CallBackOp);

        $("#listNewsDongDI").find("li").on('click',function () {

            var id=$(this).attr("id");
            window.location.href="newsdetail.html?"+DYCHY.Constant.NEWS_UUID+"="+id;
            return;
        })
    }


    /**
     * 初始化消息通知
     * @constructor
     */
    var InitNewsXXTZ=function () {
        var CallBackOp={};
        CallBackOp.success=function(response) {

            InitUL("#listNewsXXTZ",response);

        }
        CallBackOp.error=function(textStatus,errorThrown) {
            alert("获取消息通知数据发生错误");
        }

        var strData="type="+DYCHY.Constant.NEWS_XXTZ+"&PageCount="+DYCHY.Constant.NEWS_COUNT+"&NowPage="+DYCHY.Constant.NEWS_PAGE_INDEX;;
        var requestParams={"type":DYCHY.Constant.NEWS_XXTZ}
        var url= DYCHY.HttpURL.URL_NEWS_FIND_CATALOG+"?"+strData;
        common.AjaxOp.ComOp(url,requestParams,CallBackOp);

        $("#listNewsXXTZ").find("li").on('click',function () {

            var id=$(this).attr("id");
            window.location.href="newsdetail.html?"+DYCHY.Constant.NEWS_UUID+"="+id;
            return;
        })
    }

    /**
     * 招商引资
     * @constructor
     */
    var InitNewsZSYZ=function () {
        var CallBackOp={};
        CallBackOp.success=function(response) {

            InitUL("#listNewsZSYZ",response);

        }
        CallBackOp.error=function(textStatus,errorThrown) {
            alert("获取招商引资数据发生错误");
        }

        var strData="type="+DYCHY.Constant.NEWS_ZSYZ+"&PageCount="+DYCHY.Constant.NEWS_COUNT+"&NowPage="+DYCHY.Constant.NEWS_PAGE_INDEX;
        var requestParams={"type":DYCHY.Constant.NEWS_ZSYZ}
        var url= DYCHY.HttpURL.URL_NEWS_FIND_CATALOG+"?"+strData;
        common.AjaxOp.ComOp(url,requestParams,CallBackOp);

        $("#listNewsZSYZ").find("li").on('click',function () {

            var id=$(this).attr("id");
            window.location.href="newsdetail.html?"+DYCHY.Constant.NEWS_UUID+"="+id;
            return;
        })

    };


    /**
     * 特色产业月精准扶贫的初始化数据
     * @param url
     * @param requestParams
     * @param IDDivContent
     * @constructor
     */
    function InitTSCYAndJZFP(url,requestParams,IDDivContent) {
        var CallBackOp={};
        CallBackOp.success=function(response) {
            if(response.flag){

                var result = response.data;
                var length=result.length;
                var divContent="";

                for(var i=0;i<length;i++){
                    var newsTitle=result[i].title;
                    var uuid=result[i].uuid;
                    var pic=result[i].pic;

                    divContent+="<div class='tscyimgtk tscymargin' id='"+uuid+"'>";
                    divContent+="<a target='_blank' title='竹荪'>";
                    divContent+="<div><img src='"+pic+"' ></div>"
                    divContent+="<p style='text-align:center'>"+newsTitle+"</p>"
                    divContent+=" </a>";
                    divContent+=" </div>";
                }

                var divshow = $(IDDivContent);
                divshow.text("");
                divshow.append(divContent);

                $(IDDivContent).on('click',function () {

                    var id=$(this).find("div").attr("id");
                    window.location.href="newsdetail.html?"+DYCHY.Constant.NEWS_UUID+"="+id;
                    return;
                })
            }else{
                alert("初始化特色产业数据发生错误");
            }
        };
        CallBackOp.error=function(textStatus,errorThrown) {
            alert("初始化特色产业数据发生错误");
        };

        Common.AjaxOp.ComOp(url,requestParams,CallBackOp);
    }

    /**
     * 初始化特色产业
     * @constructor
     */
    var InitNewsTSCY=function () {

        var strData="type="+DYCHY.Constant.NEWS_TSCY+"&PageCount="+3+"&NowPage="+1;
        var requestParams={"type":DYCHY.Constant.NEWS_TSCY}
        var url= DYCHY.HttpURL.URL_NEWS_FIND_CATALOG+"?"+strData;

        InitTSCYAndJZFP(url,requestParams,"#divContentTSCY");

    };
    /**
     * 初始化精准扶贫
     * @constructor
     */
    var InitNewsJZFP=function () {

        /**这里取了6条作为最大的记录数*/
        var strData="type="+DYCHY.Constant.NEWS_JZFP+"&PageCount="+6+"&NowPage="+1;
        var requestParams={"type":DYCHY.Constant.NEWS_JZFP};
        var url= DYCHY.HttpURL.URL_NEWS_FIND_CATALOG+"?"+strData;

        var CallBackOp={};
        CallBackOp.success=function(response) {
            if(response.flag){
                InitUL("#listNewsJZFP",response);
            }
        };
        CallBackOp.error=function(textStatus,errorThrown) {
            alert("初始化精准扶贫数据发生错误");
        };
        Common.AjaxOp.ComOp(url,requestParams,CallBackOp);

        $("#listNewsJZFP").find("li").on('click',function () {

            var id=$(this).attr("id");
            window.location.href="newsdetail.html?"+DYCHY.Constant.NEWS_UUID+"="+id;
            return;
        })

    };
    /**
     * 初始化轮播图数据
     * @constructor
     */
    var InitSlidBoxPic=function() {

        var strData="num="+3;
        var requestParams={"type":DYCHY.Constant.NEWS_DONGDI};
        var url= DYCHY.HttpURL.URL_NEWS_GET_NEWS_AND_PICS+"?"+strData;

        var CallBackOp={};
        CallBackOp.success=function (response) {
            if(response.flag){
                var result = response.data;
                var length=result.length;
                var divContent="";
                for(var i=0;i<length;i++){
                    var newsTitle=result[i].title;
                    var uuid=result[i].uuid;
                    var pic=result[i].firstPic;
                    divContent+="<li id='"+uuid+"'>";
                    divContent+="<a title='"+newsTitle+"'><img src='"+pic+"' width='660px' height='420px'>"+"</a>";
                    divContent+= "</li>"
                }

                var lunboshow = $("#ul_list_lunbotu");
                //lunboshow.remove();
                lunboshow.text("");
                lunboshow.append(divContent);

            }else{
                alert("获取轮播图数据发生错误");
            }
        };
        CallBackOp.error=function (textStatus,errorThrown) {
            alert("初始化轮播图数据发生错误");
        };
        Common.AjaxOp.ComOp(url,requestParams,CallBackOp);

        /**跳转事件*/
        $("#ul_list_lunbotu").find("li").on('click',function () {

            var id=$(this).attr("id");
            window.location.href="newsdetail.html?"+DYCHY.Constant.NEWS_UUID+"="+id;
            return;
        })
    };

    var InitNewsZJDD=function () {

        var divshow = $("#zjddjj");
        divshow.text("");

        var url= DYCHY.HttpURL.URL_NEWS_GET_ZJDDFL_AND_PICS;
        $.ajax({
                url:url,
                type: "post",
                contentType:'application/json',
                async:false,
                success:function (response){
                    if(response.flag){
                        var x=0;
                        var data=response.data;
                        var length=data.length;
                        for(var i=0;i<length;i++){
                            var tmpData=data[i];
                            if(tmpData.level==1){
                                var obj=GetContentDetail(tmpData.content);
                                if(obj.content!=undefined){
                                    var res=obj.content;
                                    $("#idPZjdd").html("");
                                    res=res.replace(/<[^>]+>/g,"");
                                    $("#idPZjdd").html(res);


                                    var  divContent="<a target='_blank' id='"+tmpData.uuid+"'>乡情概况 >></a>";

                                    var divxq = $("#divxq");
                                    divxq.append(divContent);
                                }
                            }if(tmpData.level==2){

                                InitZJDD(tmpData,divshow);

                            }if(tmpData.level==3){
                                InitZJDD(tmpData,divshow);
                            }
                        }
                    }else{
                        var x=0;
                    }
                },
                error:function(XMLHttpRequest,textStatus,errorThrown){
                    var x=0;
                }
            }
        )

        /**右边部分的两个数据信息*/
        $(".zjddlywh").bind('click',function () {
            var id=$(this).attr("id");
            window.location.href="zjdddetail.html?"+DYCHY.Constant.NEWS_UUID+"="+id;
        })

        $("#divxq").bind('click',function () {
            var id=$("#divxq").find("a").attr("id");
            window.location.href="zjdddetail.html?"+DYCHY.Constant.NEWS_UUID+"="+id;
        })
    };

    /**
     * 初始化走进董地
     * @param tmpData
     * @constructor
     */
    var InitZJDD=function (tmpData,divshow) {

        var obj=GetContentDetail(tmpData.content);
        var res=obj.content;
        res=res.replace(/<[^>]+>/g,"");
        var msg="<div class='zjddlywh' id='"+tmpData.uuid+"'>";
          msg=msg+"<img src='"+obj.img+"'>";
          msg=msg+"<div class='zjddt'>";
            msg=msg+"<div class='zjddtitle'>"+tmpData.title+"</div>";
            msg=msg+"<p class='zjddtext'>"+res+"</p>";
          msg=msg+"<div class='zjddgd'>"+tmpData.title+">></div>";
          msg=msg+"</div>";
        msg=msg+"</div>";
        divshow.append(msg);
    };

    var GetContentDetail=function (orgstr) {
        var res={};
        if(orgstr.indexOf(DYCHY.Constant.NEWS_CONTENT_SPLIT)!=-1){
           var strTmp=orgstr.split(DYCHY.Constant.NEWS_CONTENT_SPLIT);
            res.content=strTmp[0];
            res.img=strTmp[1];
        }else{
            res.content=orgstr;
        }

        return res;
    };


    /**
     * 初始化更多消息
     * @constructor
     */
    var InitNewsMore=function () {

        $("#news_li_more_dongdi").click(function () {
            window.location.href="newslist.html?"+DYCHY.Constant.NEWS_CATALOG+"="+DYCHY.Constant.NEWS_DONGDI;
        })

        $("#news_li_more_zsyz").click(function () {
            window.location.href="newslist.html?"+DYCHY.Constant.NEWS_CATALOG+"="+DYCHY.Constant.NEWS_ZSYZ;
        })

        $("#news_li_more_xxtz").click(function () {
            window.location.href="newslist.html?"+DYCHY.Constant.NEWS_CATALOG+"="+DYCHY.Constant.NEWS_XXTZ;
        })

        $("#news_li_more_jzfp").click(function () {
            window.location.href="newslist.html?"+DYCHY.Constant.NEWS_CATALOG+"="+DYCHY.Constant.NEWS_JZFP;
        })

        $("#news_li_more_tscy").click(function () {
            window.location.href="newslist.html?"+DYCHY.Constant.NEWS_CATALOG+"="+DYCHY.Constant.NEWS_TSCY;
        })

        $("#news_li_more_zjdd").click(function () {
            window.location.href="zjddlist.html?"+DYCHY.Constant.NEWS_CATALOG+"="+DYCHY.Constant.NEWS_ZJDD;
        })
    };



    newsinit.InitNewDongDI=InitNewDongDI;
    newsinit.InitNewsXXTZ=InitNewsXXTZ;
    newsinit.InitNewsZSYZ=InitNewsZSYZ;
    newsinit.InitNewsMore=InitNewsMore;
    newsinit.InitNewsTSCY=InitNewsTSCY;
    newsinit.InitNewsJZFP=InitNewsJZFP;
    newsinit.InitNewsZJDD=InitNewsZJDD;
    newsinit.InitSlidBoxPic=InitSlidBoxPic;
    return newsinit;
}