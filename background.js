/*
	Author: Hassan
	Email : hassan.chiang@gmail.com
*/
function clear_search_result_ad(){
	if (window.location.href.indexOf('baidu.com')>0) {
		$("#content_left>div").each(function (){
			var $this = $(this);
			if($this.text().indexOf("商业推广") >= 0){
				$this.remove();
				console.log("删除了节点：" + $this.text());
			}
		});
		console.log("触发一次清理...");
	};	
}

var data = [];//保持api获取到的需要清除的广告选择器列表

function do_clear(){
	for (var i = 0; i < data.length ; i++) {
		var selector = data[i];
		var tmp = $(selector);
		if(tmp.length){
			console.log("选择器(" + selector + ")--->清除了"+tmp.length+"个广告");
			$(selector).remove();
		}
	};
}

function clear_float_ad(){
	if(data.length == 0){
		//其实这个data缓存在网速慢的情况下（超过1.5秒），会失效的。
		$.getJSON("https://raw.githubusercontent.com/HassanChiang/AD-BLOCKER/master/api/selector.json",function (result){
			data = result.data;
			console.log("从API获取到选择器列表：")
			console.log(data);
			do_clear();
		});
	} else {
		do_clear();
	}
}

//用最笨的方法来实现...
setInterval(function (){
	clear_search_result_ad();
}, 1000);

setTimeout(function (){
	clear_float_ad();
}, 1500);// 1.5秒来一次

setTimeout(function (){
	clear_float_ad();
}, 3000);// 3秒来一次，因为有些广告异步加载很慢，所以再补上一发

setTimeout(function (){
	clear_float_ad();
}, 5000);// 5秒来一次，如果还清除不掉，这网速确实很渣了。。。。

$("#kw").keyup(function (){
	clear_search_result_ad();
});

$(document).ready(function (){
	clear_search_result_ad();
	clear_float_ad();
});


$("#container").change(function (){
	clear_search_result_ad();
});

$("body").change(function (){
	clear_search_result_ad();
});