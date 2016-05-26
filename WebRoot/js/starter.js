//每次调用异步加载页面时判断是否有videojs的视频，如果有就卸载
$(document).ajaxStart(function(event,request,settings) {
	if(document.getElementById('example_video_1')!=null)
		videojs(document.getElementById('example_video_1')).dispose();
});

//---------------------ajaxComplete事件start--------------------------------------
$(document).ajaxComplete(function(event,request,settings) {
	//在提交的ajax路径为"/getDetail"的回调函数
	if (settings.url.indexOf("/getDetail")>=0) {
		//给id=interactive的赋值livechart
		interactive_plot = $.plot("#interactive", [getRandomData()], {
			  grid: {
			    borderColor: "#f3f3f3",
			    borderWidth: 1,
			    tickColor: "#f3f3f3"
			  },
			  series: {
			    shadowSize: 0, // Drawing is faster without shadows
			    color: "#3c8dbc"
			  },
			  lines: {
			    fill: true, //Converts the line chart to area chart
			    color: "#3c8dbc"
			  },
			  yaxis: {
			    min: 0,
			    max: 100,
			    show: true
			  },
			  xaxis: {
			    show: true
			  }
			});
		//激活livechart
		update();
		//REALTIME TOGGLE
		$("#realtime .btn").click(function () {
			//活动标签切换
		  if(!($(this).hasClass("active"))){
			  $(this).siblings(".active").removeClass("active");
			  $(this).toggleClass("active");
			 
		  }
		  if ($(this).data("toggle") === "on") {
		    realtime = "on";
		  }
		  else {
		    realtime = "off";
		  }
		  update();
		});
		//动态初始化videojs
		videojs("example_video_1", {}, function(){
			  // Player (this) is initialized and ready.
			});
	  };
	//在提交的ajax路径为"/survey"的回调函数
	//加载地图
	  if (settings.url.indexOf("/survey")>=0) {
		  //sparkbar 设置
		    $('.sparkbar').sparkline([ 90,70,90,70,75,80,70 ], { type: 'bar' });
			//加载地图
			$("#china-map-markers").vectorMap({
				map: 'world_mill_en',
			    normalizeFunction: 'polynomial',
			    hoverOpacity: 0.7,
			    hoverColor: false,
			    backgroundColor: 'transparent',
			    regionStyle: {
			      initial: {
			        fill: 'rgba(210, 214, 222, 1)',
			        "fill-opacity": 1,
			        stroke: 'none',
			        "stroke-width": 0,
			        "stroke-opacity": 1
			      },
			      hover: {
			        "fill-opacity": 0.7,
			        cursor: 'pointer'
			      },
			      selected: {
			        fill: 'yellow'
			      },
			      selectedHover: {}
			    },
			    markerStyle: {
			      initial: {
			        fill: '#00a65a',
			        stroke: '#111'
			      }
			    },
			    markers: [
			      {latLng: [41.90, 12.45], name: 'Vatican City'},
			      {latLng: [43.73, 7.41], name: 'Monaco'},
			      {latLng: [-0.52, 166.93], name: 'Nauru'},
			      {latLng: [-8.51, 179.21], name: 'Tuvalu'},
			      {latLng: [43.93, 12.46], name: 'San Marino'},
			      {latLng: [47.14, 9.52], name: 'Liechtenstein'},
			      {latLng: [7.11, 171.06], name: 'Marshall Islands'},
			      {latLng: [17.3, -62.73], name: 'Saint Kitts and Nevis'},
			      {latLng: [3.2, 73.22], name: 'Maldives'},
			      {latLng: [35.88, 14.5], name: 'Malta'},
			      {latLng: [12.05, -61.75], name: 'Grenada'},
			      {latLng: [13.16, -61.23], name: 'Saint Vincent and the Grenadines'},
			      {latLng: [13.16, -59.55], name: 'Barbados'},
			      {latLng: [17.11, -61.85], name: 'Antigua and Barbuda'},
			      {latLng: [-4.61, 55.45], name: 'Seychelles'},
			      {latLng: [7.35, 134.46], name: 'Palau'},
			      {latLng: [42.5, 1.51], name: 'Andorra'},
			      {latLng: [14.01, -60.98], name: 'Saint Lucia'},
			      {latLng: [6.91, 158.18], name: 'Federated States of Micronesia'},
			      {latLng: [1.3, 103.8], name: 'Singapore'},
			      {latLng: [1.46, 173.03], name: 'Kiribati'},
			      {latLng: [-21.13, -175.2], name: 'Tonga'},
			      {latLng: [15.3, -61.38], name: 'Dominica'},
			      {latLng: [-20.2, 57.5], name: 'Mauritius'},
			      {latLng: [26.02, 50.55], name: 'Bahrain'},
			      {latLng: [0.33, 6.73], name: 'São Tomé and Príncipe'}
			    ],
			    onMarkerClick:function(event,code){
			    	var url = "/OpenCVInWeb/getDetail.action?" + code;
			    	var data = {
			    		
			    	};

			    	$.ajax({
			    		type : "get",
			    		async : true, // 
			    		url : url,
			    		data : data,
			    		timeout : 1000,
			    		success : function(datas) {
			    			// alert(datas);
			    			$("#information").html(datas);// 要刷新的div
			    			
			    		},
			    		error : function() {
			    			// alert("失败，请稍后再试！");
			    		}
			    	});
			    
			    }
					});

		  } 
	  //路径为"/getCamera"
	  if(settings.url.indexOf("/getCamera")>=0){
		//动态初始化videojs
			videojs("example_video_1", {}, function(){
				  // Player (this) is initialized and ready.
				});
	  }
	  //路径为"/setCamera"
	  if (settings.url.indexOf("/setCamera")>=0) {
		//设置摄像头验证提交
			$("#setCameraForm").validate({
				debug : false,
				onfocusout : function(element) {
					$(element).valid();
				},
				// 设置错误标签类型
				errorElement : "div",
				errorPlacement : function(error, element) {
					// 自定义错误显示格式
					error.addClass("alert alert-danger");
					error.appendTo(element.parent());
				},

				// 接管提交方法
				submitHandler : function(form) {
					$(form).ajaxSubmit({
						// target : '#mainContent', // 用服务器返回的数据 更新 id为output1的内容.
						beforeSubmit : validate, // 提交前，验证
						clearForm : true,
						success : function() {
							// alert('Thanks for your comment!');
							$('#myModal').modal('show') // 打开modal弹出窗
						}
					});
				},
				// 认证规则
				rules : {
					name : {
						required : true
					},

					rtmpPath : {
						required : true,
						RTMP : true
					}
				}
			});
	  }
 });
//---------------------ajaxComplete事件end--------------------------------------

//--------------------------页面加载时------------------------
$(document).ready(function() {
	setInterval("ShowTime()", 1000);
	jump('/page/survey.jsp');
	
	// ------------websocket监听------------------------
	var s = new SockJS('/OpenCVInWeb/socket');
	var stompClient = Stomp.over(s);
	stompClient.connect({}, function() {
		console.log('notice socket connected!');
		//订阅服务器推送
		stompClient.subscribe('/topic/notice', function(data) {
			//$("#socket").html(data.body);
			//alert(data.body);
			//$('#boxFormName').html(data.body);
			$('#gridModalBody').html('<video id="example_video_1" class="video-js vjs-default-skin" controls preload="none" width="480" height="320"><source src="" type="rtmp/flv"/></video>');
			$('#gridSystemModal').modal('show');	
			videojs("example_video_1", {}, function(){
				  // Player (this) is initialized and ready.
				});
		});
	});

});
//--------------------------页面加载时end------------------------





//数据验证
function validate(formData, jqForm, options) {
	// formdata是数组对象,每个对象拥有名称和值.
	// 数据如下面的格式：
	// [
	// { name: username , value: usernameValue },
	// { name: password , value: passwordValue }
	// ]
	for (var i = 0; i < formData.length; i++) {
		if (!formData[i].value) {
			alert('用户名,地址和自我介绍都不能为空!');
			return false;
		}
	}
	var queryString = $.param(formData); // 组装数据
	// alert(queryString); //类似 ： name=1&add=2
	return true;
};
//------------------ajax异步刷新-------------------------
function jump(path,obj) {
	var url = "/OpenCVInWeb/" + path;
	var data = {
		type : 1
	};
	//改变active状态
	if(obj!=null){
		$(".sidebar-menu li.active").removeClass();
		$(obj).parent().addClass("active");
	}
	$.ajax({
		type : "get",
		async : true, // 同步请求
		url : url,
		data : data,
		timeout : 1000,
		success : function(datas) {
			// alert(datas);
			$("#mainContent").html(datas);// 要刷新的div
		},
		error : function() {
			// alert("失败，请稍后再试！");
		}
	});
};
//------------------ajax异步刷新-------------------------
function jumpVideo(path,obj) {
	var url = "/OpenCVInWeb/" + path;
	var data = {
		type : 1
	};
	//改变active状态
	$(".sidebar-menu li.active").removeClass();
	$(obj).parent().addClass("active");
	$.ajax({
		type : "get",
		async : true, // 同步请求
		url : url,
		data : data,
		timeout : 1000,
		success : function(datas) {
			// alert(datas);
			$("#mainContent").html(datas);// 要刷新的div
			//动态初始化videojs
			videojs("example_video_1", {}, function(){
				  // Player (this) is initialized and ready.
				});
		},
		error : function() {
			// alert("失败，请稍后再试！");
		}
	});
};

/*
 * Flot Interactive Chart
 * -----------------------
 */
// We use an inline data source in the example, usually data would
// be fetched from a server
var data = [], totalPoints = 100;

function getRandomData() {

  if (data.length > 0)
    data = data.slice(1);

  // Do a random walk
  while (data.length < totalPoints) {

    var prev = data.length > 0 ? data[data.length - 1] : 50,
        y = prev + Math.random() * 10 - 5;

    if (y < 0) {
      y = 0;
    } else if (y > 100) {
      y = 100;
    }

    data.push(y);
  }

  // Zip the generated y values with the x values
  var res = [];
  for (var i = 0; i < data.length; ++i) {
    res.push([i, data[i]]);
  }

  return res;
}

var interactive_plot

var updateInterval = 500; //Fetch data ever x milliseconds
var realtime = "on"; //If == to on then fetch data every x seconds. else stop fetching
function update() {

  interactive_plot.setData([getRandomData()]);

  // Since the axes don't change, we don't need to call plot.setupGrid()
  interactive_plot.draw();
  if (realtime === "on")
    setTimeout(update, updateInterval);
};

//INITIALIZE REALTIME DATA FETCHING
//if (realtime === "on") {
//  update();
//}

/*
 * END INTERACTIVE CHART
 */
function send(path) {
	var url = "/OpenCVInWeb/" + path;
	var data = {
	};
	$.ajax({
		type : "get",
		async : false, // 同步请求
		url : url,
		data : data,
		timeout : 1000,
		success : function(datas) {

		},
		error : function() {
			// alert("失败，请稍后再试！");
		}
	});
};
function ShowTime(){
	var mon, day, now, hour, min, ampm, time, str, tz, end, beg, sec;  
    /*  
    mon = new Array("Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug",  
            "Sep", "Oct", "Nov", "Dec");  
    */  
    mon = new Array("一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月",  
            "九月", "十月", "十一月", "十二月");  
    /*  
    day = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");  
    */  
    day = new Array("周日", "周一", "周二", "周三", "周四", "周五", "周六");  
    now = new Date();  
    hour = now.getHours();  
    min = now.getMinutes();  
    sec = now.getSeconds();  
    if (hour < 10) {  
        hour = "0" + hour;  
    }  
    if (min < 10) {  
        min = "0" + min;  
    }  
    if (sec < 10) {  
        sec = "0" + sec;  
    }  
    $("#time").html(  
            "<nobr>" + now.getFullYear() + "." + now.getMonth() + "." +  now.getDate() + " " + hour  
                    + ":" + min + ":" + sec + "</nobr>");  

};
//---------------getCamera页面切换不同摄像头------------------------
function changeVideo(obj){
	var name = $(obj).parent().siblings(":eq(1)").html();
	var rtmpPath = $(obj).parent().siblings(":eq(2)").html();
	$("#boxHeaderName").html(name);
	$("#boxFormName").html(rtmpPath);
	$("#example_video_1 source").attr({src:rtmpPath});
	videojs("example_video_1", {}, function(){
		  // Player (this) is initialized and ready.
		});
	//alert($("#example_video_1 source").attr("src"));
};
//---------------setCamera页面设置不同摄像头类型------------------------
function changeCameraType(num){
	if(num == 1){
		$("#type").html('Normal <span class="fa fa-caret-down"></span>');
		if($("#RTMP2") != null)
			$("#RTMP2").remove();
		if($("#position") != null)
			$("#position").remove();
		$("#RTMP").after('<div class="row" id="position"><div class="col-xs-6"><label for="longitude" class="control-label">经度</label><input type="text" class="form-control" placeholder="longitude"></div><div class="col-xs-6"><label for="latitude" class="control-label">纬度</label><input type="text" class="form-control" placeholder="latitude"></div></div>');
	}
	if(num == 2){
		$("#type").html('Binocular <span class="fa fa-caret-down"></span>');
		if($("#RTMP2") != null)
			$("#RTMP2").remove();
		if($("#position") != null)
			$("#position").remove();
		$("#RTMP").after('<div class="form-group" id="RTMP2"><label for="rtmpPath">RTMP视频流路径2</label> <input type="text"class="form-control" id="rtmpPath2" name="rtmpPath2"placeholder="RTMP Path"></div>');
		$("#RTMP2").after('<div class="row" id="position"><div class="col-xs-6"><label for="longitude" class="control-label">经度</label><input type="text" class="form-control" placeholder="longitude"></div><div class="col-xs-6"><label for="latitude" class="control-label">纬度</label><input type="text" class="form-control" placeholder="latitude"></div></div>');
	}
	if(num == 3){
		$("#type").html('GPS <span class="fa fa-caret-down"></span>');
		if($("#RTMP2") != null)
			$("#RTMP2").remove();
		if($("#position") != null)
			$("#position").remove();
	}
	if(num == 4){
		$("#type").html('GPS Binocular <span class="fa fa-caret-down"></span>');
		if($("#RTMP2") != null)
			$("#RTMP2").remove();
		if($("#position") != null)
			$("#position").remove();
		$("#RTMP").after('<div class="form-group" id="RTMP2"><label for="rtmpPath">RTMP视频流路径2</label> <input type="text"class="form-control" id="rtmpPath2" name="rtmpPath2"placeholder="RTMP Path"></div>');	
	}
};