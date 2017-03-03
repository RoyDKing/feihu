var $user = $("[name='user']"),
	$password = $("[name='password']"),
	$password2 = $("[name='password2']"),
	$email = $("[name='email']"),
	$referee = $("[name='referee']"),
	$activity_code = $("[name='activity_code']"),
	$id_code = $("[name='id_code']"),
	res = 0;					//用来判断所输入的是否全符合格式


$(".td2 input").focus(function(){
	$(this).parent().next().css("visibility","visible")
});

//用户名
$user.blur(function(){
	if($user.val().length<4||$user.val().length>20){
		if($user.val().length==0){
			$(this).parent().next().text("用户名不能为空");
		}else{
			$(this).parent().next().text("请输入4-20位有效字符");
		}
		res = 0;
	}else{
		if(/^\w{4,20}$/.test($user.val())){
			$(this).parent().next().text("");
			res = 1
		}else{
			$(this).parent().next().text("格式错误");
			res = 0;
		}
	}
});


//密码
$password.keyup(function(){
	if($password.val().length<6||$password.val().length>16){
		if($password.val().length==0){
			$(this).parent().next().text("密码不能为空");
		}else{
			$(this).parent().next().text("请输入6-16位有效字符");
		}
		res = 0;
	}else{
		if(/^[0-9]+$/.test($password.val()) || /^[a-z]+$/.test($password.val()) || /^[A-Z]+$/.test($password.val())){
			$(this).parent().next().text(""); 
			$("<img src='img/register/low.png' />").appendTo($(this).parent().next());
		}
		if(/\d+/.test(this.value) && (/[a-z]+/.test(this.value) || /[A-Z]+/.test(this.value)) ){
			$(this).parent().next().text("");
			$("<img src='img/register/normal.png' />").appendTo($(this).parent().next());
		}
		if(/\d+/.test(this.value)  && /[a-zA-Z]+/.test(this.value) && /[^\w]+/.test(this.value)){
			$(this).parent().next().text("");
			$("<img src='img/register/normal.png' />").appendTo($(this).parent().next());
		}
		res = 1;
	}
	if(this.value != $password2.val()&&$password2.val().length!=0){
		$password2.parent().next().text("两次输入的密码不一致");
		res = 0;
	}
	if(this.value == $password2.val()){
		$password2.parent().next().text("");
		res = 1;
	}
	
});


//确认密码
$password2.blur(function(){
	if(this.value != $password.val()&&$password2.val().length!=0){
		$password2.parent().next().text("两次输入的密码不一致");
		res = 0;
	}
	if($password2.val().length==0){
		$password2.parent().next().text("请再次输入密码");
		res=0;
	}
	if(this.value == $password.val()&&$password2.val().length!=0){
		$password2.parent().next().text("");
		res = 1;
	}
});

//邮箱
$email.blur(function(){
	if(this.value.length==0){
		$email.parent().next().text("请输入常用邮箱，用来找回密码、接受订单通知等")
		res = 0;
	}else{
		if(!/^\w+@[a-zA-Z0-9]+(\.[a-z]{2,}){1,}$/.test(this.value)){
			$email.parent().next().text("邮箱格式不正确");
			res = 0;
		}else{
			$email.parent().next().text("");
			res = 1;
		}
	}
});

//推荐人
$referee.blur(function(){
	$(this).parent().next().css("visibility","hidden");
});

//活动代码
$activity_code.blur(function(){
	$(this).parent().next().css("visibility","hidden");
});


//验证码
$id_code.keyup(function(){
	if(this.value.length==0){
		$id_code.parent().next().text("请输入下面中的数字");
		res = 0;
	}else{
		if(this.value == $("#id_code").text()){
			$id_code.parent().next().text("");
			res = 1;
		}else{
			$id_code.parent().next().text("验证码输入不正确");
			res=0;
		}
	}
});

//随机验证码
var $codeBtn = $("#randomCode");
$("#id_code").css("font-size","20px").addClass("fl").text(randomCode());
$codeBtn.css("cursor","pointer").css("float","right").css("margin-top","7px").css("margin-right","20px");	

$codeBtn.click(function(){
	$("#id_code").text(randomCode());
});

function randomCode(){
	return Math.random().toString(36).substr(2,5);
}


//最后提交
$("#register_btn").css("cursor","pointer");
function check(){
	$(".td3").css("visibility","visible");
	$referee.parent().next().css("visibility","hidden");
	$activity_code.parent().next().css("visibility","hidden");
	res = 0;
	if($(":checked").prop("checked")){
		res = 1;
	}else{
		res = 0;
		return false;
	}
	$user.blur();
	$password.keyup();
	$password2.blur();
	$email.blur();
	$id_code.keyup();
	
	if(res == 1){
		alert("注册成功");
		location = "login.html";
		return false;
	}else{
		return false;
	}
}
