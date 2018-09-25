//登录输入框蓝色边框
$(document).ready(function() {
	$(":text,:password").focus(function() {
		if (this.name!="search"&&this.name!="q") {
			$(this).css({
			"border-bottom":"1px solid #4D90FE",
			"boxShadow":"0px 0px 2px 1px #4D90FE"
		});
			}

	});
	$(":text,:password").mouseout(function() {
		if (this.name!="login"&&this.name!="q"){
			$(this).css({
			"border-color":"",
			"boxShadow":""
			})//.attr({
				//'placeholder':'请输入'
			//});
			}
	});

//登录弹窗
	$('#login-main').click(function(){
      	$('.theme-popover-mask').fadeIn(100);    
      	$('.container-1').slideDown(200);  })  
  	$('.container-1 .close').click(function(){   
       	$('.theme-popover-mask').fadeOut(100);   
        $(".container-1").slideUp(200); })
  	$('.container-2 .close').click(function(){   
       	$('.theme-popover-mask').fadeOut(100);   
        $(".container-2").slideUp(200); })

  	$(".regist_a").click(function() {
  		$(".container-1").css({
  			"display":"none"
  		});
  		$(".container-2").css({
  			"display":"block"
  		});
  
  	});
  	$(".login_a").click(function() {
  		$(".container-2").css({
  			"display":"none"
  		});
  		$(".container-1").css({
  			"display":"block"
  		});
  	});



});

//登录注册
function ifNull(txt){
	if(txt.length==0){
		return true;
	}
	var reg=/\s+/;
	return reg.test(txt);
}

//用户名验证

$(".r_user").focus(function() {
$(".r_user_tips").html("");
});
$(".r_pawd").focus(function() {
$(".r_pawd_tips").html("");
});
$(".C_pawd").focus(function() {
$(".C_pawd_tips").html("");
});
$(".user").focus(function() {
$(".user_tips").html("");
});
$(".pawd").focus(function() {
$(".pawd_tips").html("");
});


//登陆验证
$(".user").blur(function() {
	if(ifNull($(this).val())){
		$(".user_tips").html("请输入用户名");
	}
});

$(".pawd").blur(function() {
	if(ifNull($(this).val())){
		$(".pawd_tips").html("请输入密码");
	}
});




$(".r_user").blur(function() {
	if(ifNull($(this).val())){
		$(".r_user_tips").html("用户名不能为空");
	}
});
//密码验证
$(".r_pawd").blur(function() {
	if(ifNull($(this).val())){
		$(".r_pawd_tips").html("密码不能为空");
	}else {
		var reg=/^\w{6,}$/;
		if (!reg.test($(".r_pawd").val())) {
			$(".r_pawd_tips").html("密码至少要6位哦");
		}
	}
});
//
$(".C_pawd").blur(function() {
	if(ifNull($(this).val())){
		$(".C_pawd_tips").html("确认密码不能为空");
	}else {
		if ($(".r_pawd").val()!=$(".C_pawd").val()) {
			$(".C_pawd_tips").html("两次密码不一致");
		}
	}
});




$(".regist").click(function() {
	if(ifNull($(".r_user").val())){
		$(".r_user_tips").html("用户名不能为空");
		return false;
	}
	if(ifNull($(".r_pawd").val())){
		$(".r_pawd_tips").html("密码不能为空");
		return false;
	}else {
		var reg=/^\w{6,}$/;
		if (!reg.test($(".r_pawd").val())) {
			$(".r_pawd_tips").html("密码至少要6位哦");
			return false;
		}
	}
	if(ifNull($(".C_pawd").val())){
		$(".C_pawd_tips").html("确认密码不能为空");
		return false;
	}else {
		if ($(".r_pawd").val()!=$(".C_pawd").val()) {
			$(".C_pawd_tips").html("两次密码不一致");
			return false;
		}
	}
      var data={username:$("input[name=r_user]").val(),  //获取input中name为username的值
           		pwd:$("input[name=r_pawd]").val() //获取input中name为pwd的值
          	}   

    
      var xmlhttp= new XMLHttpRequest();
      xmlhttp.open("POST","php/reg.php",true);
      xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
      xmlhttp.send(data);
       xmlhttp.onreadystatechange=function()
  {
  if (xmlhttp.readyState==4 && xmlhttp.status==200)
    {
    alert(xmlhttp.responseText);
    }
  }  
         
        
});


var XMLHttp;
if(window.XMLHttpRequest){
	XMLHttp=new XMLHttpRequest();
}else {
	XMLHttp=new ActiveXObject("Microsoft.XMLHTTP");
}
XMLHttp.onreadystatechange=function(){
	if (xmlhttp.readyState==4 &&xmlhttp.status==200) {

	}
}