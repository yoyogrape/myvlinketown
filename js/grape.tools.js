//=====================================//
//依赖JQ和mui
//=====================================//
//-------------请求天气json-------需要在mui.plusReady(function()调用-----
function getCityWeather(cityId) {
	//console.log("-------------调用请求天气接口-------------");
	var weaterMsg = '';
	mui.ajax({
		type: "get",
		url: "http://wthrcdn.etouch.cn/weather_mini?jsoncallback=?",
		async: false,
		data: {
			citykey: cityId
		},
		dataType: "jsonp",
		jsonp: "jsoncallback",
		timeout: 1000,
		success: function(data) {
			//console.log('请求天气接口数据：'+data);
			data = JSON.parse(data); //将数据转换成json对象
			weaterMsg = data.data;
		},
		error: function(xhr, type, errorThrown) {
			console.log('请求天气接口失败！');
			weaterMsg = {};
			plus.nativeUI.toast(errorThrown);
		}
	});
	return weaterMsg;
}
//-------------处理cityIds数据-------------
function processCityIds(cityId) {
	var flag = false;
	var cityIds = localStorage.getItem("cityIds");
	if(cityIds.indexOf(cityId) == -1) {
		flag = true;
		cityIds = cityIds + "," + cityId;
	}
	localStorage.setItem("cityIds", cityIds);
	return flag;
}

function removeCityIds(cityId) {
	var cityIds = localStorage.getItem("cityIds");

	var cityIdArr = cityIds.split(',');

	cityIdArr.splice($.inArray(cityId, cityIdArr), 1); //删除指定cityId
	cityIds = cityIdArr.toString();
	localStorage.setItem('cityIds', cityIds);
}
//------------请求新闻列表------路径依赖URLS.js-----
//传入什么类型的新闻（铁岭新闻、今日热点、健康导读。。。）
function getNewsList(dataType) {
	var newsListData = {};
	var jsonObj = JSON.stringify({
		condition: {
			deleteFlag: 0,
			id: 0,
			imgSrc: "",
			interviewNum: 0,
			isStick: 0,
			newsColumnId: 0,
			newsColumnName: "",
			newsType: "IMAGE_NEWS",
			pushTime: "",
			searchText: "",
			source: "",
			title: ""
		},
		order: "string",
		rowCount: 0,
		sort: "pushTime",
		startRow: 0,
	});

	mui.ajax({
		type: "post",
		url: URLS.getNewsList + "?jsoncallback=?",
		async: true,
		data: jsonObj,
		dataType: "jsonp",
		contentType: "application/json;charset=utf-8",
		jsonp: "jsoncallback",
		headers: {
			"Accept": "*/*"
		},
		timeout: 1000,
		success: function(data) {
			console.log("请求新闻列表:" + data);
			newsListData = JSON.parse(data); //将数据转换成json对象
		},
		error: function(xhr, type, errorThrown) {
			console.log('请求新闻列表失败');
			newsListData = {
				code: 9,
				data: '请求新闻列表失败'
			}
		}

	});
	return newsListData;

}

//=====================================//
//新闻列表的上拉刷新
//=====================================//

function myPulluploading($list, $pullrefresh, startRowMark) {
	var startRowMark = startRowMark; //记录从第几条开始

}