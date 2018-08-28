var IPPort = "http://121.69.196.93:8001";
//var IPPort = "http://app.ebda.cn:8001";
var URLS={
	getHomeBanner:IPPort+"/app/api/banner/getBannerList?type=BANNER_HOME",
	getNewsList:IPPort+"/app/api/news/getNewsList",
	getNewsInfo:IPPort+"/app/api/news/getNewsInfo",
	getRobotBanner:IPPort+"/app/api/banner/getBannerList?type=BANNER_ROBOT",
	getNotes:IPPort+"/app/api/anno/getAnnoList",
	getLoginUser:IPPort+"/app/login/getLoginAccount",
	getSmsCode:IPPort+"/app/login/sendSmsCode",
	getTroubleList:IPPort+"/app/api/news/getServiceList",
	getMeetingTime:IPPort+"/app/robot/getMeetingAll",
	getExhibitor:IPPort+"/app/robot/exhibitor/getExhibitorPageList.do",
	getProduct:IPPort+"/app/robot/product/getProductPageList",
	getHeatMap:IPPort+"/app/robot/getAppThirdUrl",
	register:IPPort+"/system/user/insert.do",
	login:IPPort+"/app/login/pswLogin",
	logOut:IPPort+"/app/login/logOut",
	quickLogin:IPPort+"/app/login/codeLogin",
	nextAccount:IPPort+"/app/login/nextAccount",
	isNameExists:IPPort+"/app/login/isExsitUsers",
	updateUser:IPPort+"/app/login/updateByAccount",
	commitTrouble:IPPort+"/app/api/news/insertNews",
	exhibitorUrl:IPPort+"/app/robot/product/getExhibitorPageList",
	
	airQuality:"http://api.help.bj.cn/apis/aqi3/",
	lifeIndex:"http://api.help.bj.cn/apis/life27/",
	express:"http://www.kuaidi100.com/query",
	weather:"http://wthrcdn.etouch.cn/weather_mini",
	getNewsColumnList:IPPort+"/app/newsInfoColumn/getNewsColumnList.do",
	getGreeList:IPPort+"/app/robot/gree/getGreeList",
	insertGreeBack:IPPort+"/app/robot/gree/insertGreeBack",
	
	getHelpPhone:IPPort+"/app/robot/getHelpPhone",
	getimgUrl:IPPort+"/app/robot/getimgUrl",
	
	getShareUrl:IPPort+"/app/robot/getShareUrl"
	
}

