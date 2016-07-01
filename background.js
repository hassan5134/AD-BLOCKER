
function clear_ad(){
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

function clear_float_ad(){
	$("div[id^='BAIDU_SSP']").remove();
	$("div[id^='BAIDU_DUP']").remove();
	$("div[id^='BAIDU_DSPUI']").remove();
}

setInterval(function (){
	clear_ad();
}, 1000);

setTimeout(function (){
	clear_float_ad();
}, 1500);


$("#kw").keyup(function (){
	clear_ad();
});

$(document).ready(function (){
	clear_ad();
	clear_float_ad();
});


$("#container").change(function (){
	clear_ad();
});

$("body").change(function (){
	clear_ad();
});