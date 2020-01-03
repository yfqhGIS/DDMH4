/**
 * @Description TODO
 * @Date 2019/9/26 9:23
 * @Created by qrb_PC
 */

if(!DYCHY){
    var  DYCHY={};
}
DYCHY.NEWS_BASE_URL="http://192.168.3.197:8081/";
DYCHY.HttpURL={
    URL_NEWS_ALL_CONTENT:DYCHY.NEWS_BASE_URL+"newscontent/findAllNewsContent.do",/**获取所有的新闻信息*/
    URL_NEWS_FIND_CATALOG:DYCHY.NEWS_BASE_URL+"newscontent/findNewsContent.do",/**获取新闻信息*/
    URL_NEWS_FIND_BY_ID:DYCHY.NEWS_BASE_URL+"newscontent/findNewsContentByID.do",/**通过id来查询新闻记录*/
    URL_NEWS_FIND_MAX_COUNT:DYCHY.NEWS_BASE_URL+"newscontent/findMaxCount.do",/**返回最大的记录数*/
    URL_NEWS_GET_NEWS_AND_PICS:DYCHY.NEWS_BASE_URL+"newscontent/GetNewsAndPics.do",/**得到新闻和照片*/
    URL_NEWS_GET_ZJDD_AND_PICS:DYCHY.NEWS_BASE_URL+"newscontent/GetZjddResults.do",/**获取走进董地记录含照片*/
    URL_NEWS_GET_ZJDDFL_AND_PICS:DYCHY.NEWS_BASE_URL+"newscontent/GetZjddResultsFL.do",/**获取走进董地记录含照片*/
    URL_NEWS_FIND_ZJDD_BY_ID:DYCHY.NEWS_BASE_URL+"newscontent/findZJDDByID.do",/**通过id走进董地来获取信息*/

};

DYCHY.Constant={
    NEWS_DONGDI:"NEWS_DONGDI",/**董地新闻*/
    NEWS_ZSYZ:"NEWS_ZSYZ",/**招商引资*/
    NEWS_XXTZ:"NEWS_XXTZ",/**消息通知*/
    NEWS_TSCY:"NEWS_TSCY",/**特色产业*/
    NEWS_JZFP:"NEWS_JZFP",/**消息通知*/
    NEWS_ZJDD:"NEWS_ZJDD",/**走进董地*/
    NEWS_CATALOG:"catalog",/**分类*/
    NEWS_UUID:"NEWS_UUID",
    NEWS_DONGDI_CHN:"董地新闻",
    NEWS_ZSYZ_CHN:"招商引资",
    NEWS_XXTZ_CHN:"消息通知",
    NEWS_TSCY_CHN:"特色产业",
    NEWS_JZFP_CHN:"精准扶贫",
    NEWS_ZJDD_CHN:"走进董地",
    NEWS_CONTENT_SPLIT:"&&&",/**内容分割*/
    NEWS_COUNT:20,
    NEWS_PAGE_INDEX:1

}