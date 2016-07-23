/*
	Author: Hassan
	Email : hassan.chiang@gmail.com
*/

var data = [];//保持api获取到的需要清除的广告选择器列表

var seData = [];//保持api获取到的需要清除的搜索结果列表

function clear_search_result_ad(){
	for (var i = 0; i < seData.length; i++) {
		var se = seData[i];
		var domainSelectorMap = se.split("||");
		if(domainSelectorMap.length >= 2){
			if(window.location.href.indexOf(domainSelectorMap[0])>0)	{
				var a = $(domainSelectorMap[1]);
				if(a.length >0){
					a.remove();
					console.log("删除了节点：" + $this.text());
				}
				$(domainSelectorMap[1]).each(function (){
					var $this = $(this);
					if($this.text().indexOf("商业推广") >= 0){
						$this.remove();
						console.log("删除了节点：" + $this.text());
					}
				});
			}
		}
	}
}

function clear_float_ad(){
	for (var i = 0; i < data.length ; i++) {
		var selector = data[i];
		var tmp = $(selector);
		if(tmp.length){
			console.log("选择器(" + selector + ")--->清除了"+tmp.length+"个广告");
			$(selector).remove();
		}
	};
}

$(document).ready(function () {
	$.getJSON("https://raw.githubusercontent.com/HassanChiang/AD-BLOCKER/master/api/selector.json",function (result){
		data = result.data;
		console.log("从API获取到选择器列表：")
		console.log(data);
		$.getJSON("https://raw.githubusercontent.com/HassanChiang/AD-BLOCKER/master/api/se-selector.json",function (result2){
			seData = result2.data;
			console.log("从API获取需要清除的搜索结果列表：")
			console.log(seData);
			
			clear_search_result_ad();
			clear_float_ad();
			$(document).bind('DOMSubtreeModified', function () {
				clear_search_result_ad();
				clear_float_ad();
			});
		});
	});
});
