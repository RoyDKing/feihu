/*
 * 最上的选项卡选择
 */
$(function(){
	var $chioce_left = $("#chioce_left"),
		$chioce_right = $("#chioce_right"),
		$first_box = $("#first_box"),
		$second_box = $("#second_box");
	
	$chioce_left.click(function(){
		$second_box.hide();
		$first_box.show();
		$chioce_left.css("background-image","url(img/shoppingcar/all_pro_curr.png)").css("color","#fff");
		$chioce_right.css("background-image","url(img/shoppingcar/all_pinpai.png)").css("color","#333");
	});
	
	$chioce_right.click(function(){
		$first_box.hide();
		$second_box.show();
		$chioce_left.css("background-image","url(img/shoppingcar/all_pinpai.png)").css("color","#333");
		$chioce_right.css("background-image","url(img/shoppingcar/all_pro_curr.png)").css("color","#fff");
	});

});

	
/*
 * 字母中的选项卡选择
 */
$(function(){
	var $bs = $("#letter").children();
	var $brands = $(".brands_name");
	var index=0;
	var lastIndex = 0;
	
	$bs.click(function(){
		$bs.eq(lastIndex).css("background-image","url(img/goodsKinds/search.png)");
		$(this).css("background-image","url(img/goodsKinds/search_curr.png)");
		index = $(this).index();
		$brands.eq(lastIndex).css("display","none");
		$brands.eq(index).css("display","block");
		lastIndex = index;
	});

});


/*
 * 二三级菜单
 */
$(function(){
	var $all_goods = $(".all_goods"),
		$menu = $(".menu"),
		$boxs = $menu.children(),
		timer,
		$li;
	$boxs.hover(
		function(){
			$li = $(this).find("li")
			$li.css({"background":"url() #fff","border":"2px solid #c7022d","padding": "0 0 0 18px","line-height":"50px","width":"210px","border-right":"0"});
			$li.next().show();
			$li.parent().prev().find("li").css("background-image","url()");
		},
		function(){
			$li.removeAttr("style");
			$li.next().hide();
			$li.parent().prev().find("li").removeAttr("style");
		}
	)
	
	$all_goods.hover(
		function(){
			$menu.show();
		},
		function(){
			$menu.hide();
		}
	);
});
