/**
 * @Description TODO
 * @Date 2019/9/26 9:22
 * @Created by qrb_PC
 */
if(!Common){
    var  Common={};
}

(function () {

    /****************************时间日期时间部分的封装****************************/
    var DateTimeOp={};

    /**
     * 从时间戳中获得年月日，度分秒
     * @param date
     * @returns {string}
     * @constructor
     */
    var GetYMDHMSFromStamp=function(date) {
        var date = new Date(date);//如果date为13位不需要乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
        var h = (date.getHours() < 10 ? '0' + date.getHours() : date.getHours()) + ':';
        var m = (date.getMinutes() <10 ? '0' + date.getMinutes() : date.getMinutes()) + ':';
        var s = (date.getSeconds() <10 ? '0' + date.getSeconds() : date.getSeconds());
        return Y+M+D+h+m+s;
    }

    /**
     * 从时间戳中获得年月日
     * @param date
     * @returns {string}
     * @constructor
     */
    var GetYMDFromStamp=function(date) {
        var date = new Date(date);//如果date为13位不需要乘1000
        var Y = date.getFullYear() + '-';
        var M = (date.getMonth()+1 < 10 ? '0'+(date.getMonth()+1) : date.getMonth()+1) + '-';
        var D = (date.getDate() < 10 ? '0' + (date.getDate()) : date.getDate()) + ' ';
        return Y+M+D;
    }


    DateTimeOp.GetYMDFromStamp=GetYMDFromStamp;
    DateTimeOp.GetYMDHMSFromStamp=GetYMDHMSFromStamp;
    Common.DateTimeOp=DateTimeOp;

    /*****************************ajax请求的封装***************************************/
    /**ajax请求的封装*/
    var  AjaxOp={};
    /**
     *
     * @param httpURL
     * @param callback
     * @param param
     * @constructor
     */
    var ComOp=function (httpURL,param,callback) {
        $.ajax({
                url:httpURL,
                type: "post",
                data:param,
                contentType:'application/json',
                async:false,
                success:function (response){
                    callback.success(response);
                },
                error:function(XMLHttpRequest,textStatus,errorThrown){
                    callback.error(textStatus,errorThrown)
                }
            }
        )
    }

    AjaxOp.ComOp=ComOp;
    Common.AjaxOp=AjaxOp;

   /*************************当前项目封装****************************************/
   var CurrentProject={};
    /**
     * 为ul动态添加li
     * @param ULID
     * @param response
     * @constructor
     */
   var InitUL= function(ULID,response) {
        if(response.flag){
            var result = response.data;
            var length=result.length;
            /**先清空一下li数据*/
            $(ULID).find("li").remove();
            for(var i = 0;i<length;i++){
                var newsTitle=result[i].title;
                var uuid=result[i].uuid;
                var date=result[i].opTime;
                date=Common.DateTimeOp.GetYMDFromStamp(date);

                var msg ="<li id="+uuid+"><span>"+date+"</span><a href='#' title='"+newsTitle+"'>"+newsTitle+"</a></li>";

                $(ULID).append(msg);
            }

        }else{
            var msg = response.msg;
            alert(msg);
        }
    }

    CurrentProject.InitUL=InitUL;
    Common.CurrentProject=CurrentProject;

})()