/*
 * 点击消失
 */
$("#tips_btn").click(function(){
	$("#tips_btn").parents(".tips").hide();
});

/*
 * 增加数量
 */
$(".add").click(function(){
	var val = $(this).prev().val();
	val = parseInt(val)+1;
	$(this).prev().val(val)
});

/*
 * 减少数量
 */
$(".minus").click(function(){
	var val = $(this).siblings("input").val();
	val = parseInt(val)-1;
	if(val>=0){
		$(this).siblings("input").val(val);
	}
});


/*
 * 计算价格
 */
$(".td4").find("input").keyup(function(){
	var price1 = $(".td5").eq(1).text().substr(1),
		price2 = $(".td5").eq(2).text().substr(1),
		num1 = $(".td4").find("input").eq(0).val(),
		num2 = $(".td4").find("input").eq(1).val();	
	var all = price1*num1+price2*num2;
	$("#all_money").find("i").text(all)
	$(".td6").eq(1).text("￥"+price1*num1);
	$(".td6").eq(2).text("￥"+price2*num2);
});

$(".minus,.add").bind("click",function(){
	var price1 = $(".td5").eq(1).text().substr(1),
		price2 = $(".td5").eq(2).text().substr(1),
		num1 = $(".td4").find("input").eq(0).val(),
		num2 = $(".td4").find("input").eq(1).val();	
	var all = price1*num1+price2*num2;
	$("#all_money").find("i").text(all);
	$(".td6").eq(1).text("￥"+price1*num1);
	$(".td6").eq(2).text("￥"+price2*num2);
});


/*
 * 删除商品
 */
$(".del").click(function(){
	var flag = confirm("确定删除该商品吗？");
	if($(".my_goods tr").size() == 2){
		$("table,#all_money,.yes_or,#empty_box").toggle();
	}
	if(flag){
		$(this).parents("tr").remove();
		return false;
	}
});

/*
 * 清空购物车
 */
$("#clear_car").click(function(){
	var flag = confirm("确定清空购物车吗？");
	if(flag){
		$("table,#all_money,.yes_or,#empty_box").toggle();
	}
});


/*
 * 全选
 */
$("#all_btn").click(function(){
	if($(this).prop("checked")){
		$(".td1 :checkbox").not("#all_btn").prop("checked",true);
	}else{
		$(".td1 :checkbox").not("#all_btn").prop("checked",false);
	}
});

$(".td1 :checkbox").not("#all_btn").click(function(){
	var flag = true;
	$(".td1 :checkbox").not("#all_btn").each(function(){
		if(!$(this).prop("checked")){
			flag = false;
			return false;
		}
	});
	if(flag){
		$("#all_btn").prop("checked",true)
	}else{
		$("#all_btn").prop("checked",false)
	}
});
