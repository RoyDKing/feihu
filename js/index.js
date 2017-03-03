/*
 * 底部jump消失与显示
 */
var scrollTop,
	targetTop = $("#second_kill").offset().top;
window.onscroll = function(){
	scrollTop = $(document).scrollTop();
	if(scrollTop>=targetTop){
		$("#jump").show();
	}else{
		$("#jump").hide();
	}
}


/*
 * 主页banner大图轮播
 */
var index=0,
	timer,
	$left_btn = $("#left_btn"),
	$right_btn = $("#right_btn"),
	$banner = $("#big_banner"),
	$lis = $banner.children("li"),
	$ols = $(".banner_ol").children("li");
	
clearInterval(timer);
timer = setInterval(lunbo,2000)

function lunbo(){
	index++;
	index=index%11;
	$lis.hide();
	$lis.eq(index).fadeIn("slow");
	$ols.css("background","#000");
	$ols.eq(index).css("background","red");
}

//$banner.mousemove(function(){
//	clearInterval(timer);
//});
//
//$banner.mouseout(function(){
//	timer = setInterval(lunbo,2000);
//});

$banner.hover(
	function(){
		clearInterval(timer);
		$left_btn.show();
		$right_btn.show();
	},
	function(){
		timer = setInterval(lunbo,2000);
		$left_btn.hide();
		$right_btn.hide();
	}
);



$ols.click(function(){
	index++;
	index = $(this).index();
	$lis.hide();
	$lis.eq(index).fadeIn("slow");
	$ols.css("background","#000");
	$ols.eq(index).css("background","red");

});

$left_btn.click(function(){
	index--;
	if(index==-1){
		index=10;
	}
	$lis.hide();
	$lis.eq(index).fadeIn("slow");
	$ols.css("background","#000");
	$ols.eq(index).css("background","red");
});

$right_btn.click(function(){
	index++;
	if(index==11){
		index=0;
	}
	$lis.hide();
	$lis.eq(index).fadeIn("slow");
	$ols.css("background","#000");
	$ols.eq(index).css("background","red");
});



/*
 *小图轮播 
 */
var i = 1,
	timer2,
	$sBanner = $("#small_banner"),
	$sLis = $sBanner.children("li"),
	width = $sLis.eq(0).width(),
	$sOls = $sBanner.nextAll("ol").children("li");
	
clearInterval(timer2);	
timer2 = setInterval(start,3000);

function start(){
	i = i%2;
	$sBanner.animate({left: -i*width})
	$sOls.css("background","#1aa4ca");
	$sOls.eq(i).css("background","#fff");
	i++;
}

$sBanner.hover(
	function(){
		clearInterval(timer2);
	},
	function(){
		timer2 = setInterval(start,3000)
	}
);

$sOls.click(function(){
	var index = $(this).index();
	$sBanner.animate({left: -index*width});
	$sOls.css("background","#1aa4ca");
	$sOls.eq(index).css("background","#fff");
});

var day = 5,
	hours = 20,
	mins = 0,
	seconds = 20,
	timer3,
	$day = $("#day"),
	$hours = $("#hours"),
	$mins = $("#mins"),
	$seconds = $("#seconds");

timer3 = setInterval(function(){
	seconds--;
	if(seconds==-1){
		seconds=59;
		mins--;
		if(mins == -1){
			mins=59;
			hours--;
			if(hours==-1){
				hours=23;
				day--;
			}
		}
	}
	if(seconds<10){
		$seconds.text("0"+seconds);
	}else{
		$seconds.text(seconds);
	}
	if(mins<10){
		$mins.text("0"+mins);
	}else{
		$mins.text(mins)
	}
	if(hours<10){
		$hours.text("0"+hours);
	}else{
		$hours.text(hours);
	}
	if(day==0&&hours==0&&mins==0&seconds==0){
		clearInterval(timer3);
	}
},1000);
