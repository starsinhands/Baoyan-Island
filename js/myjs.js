function reg(){
	var username=document.getElementById("username").value;
	var pwd=document.getElementById("password").value;
	var repwd=document.getElementById("repassword").value;
	if(username==""){
		alert("用户名不能为空哦~");
		return false;
	}
	if(pwd==""||repwd==""){
		alert("密码不能为空哦~");
		return false;
	}
	if(pwd!=repwd){
		alert("两次密码不一致哦~");
		return false;
	}
	localStorage.setItem("uname",username);
	localStorage.setItem("pwd",pwd);
	alert("注册成功啦~");
	window.location.href="log.html";
}
function log(){
	var username=document.getElementById("username").value;
	var pwd=document.getElementById("password").value;
	if(username==""||pwd==""){
		alert("输入不能为空哦~");
		return false;
	}
	if(localStorage.getItem("uname")){
		var uname=localStorage.getItem("uname").toString();
		var pass=localStorage.getItem("pwd").toString();
		if(username==uname){
			if(pwd==pass){
				sessionStorage.setItem("username",uname);
				alert("登录成功啦~");
				window.location.href="index.html";
			}else{
				alert("输入的密码不正确哦~");
			}
		}else{
			alert("输入的用户名有误哦~")
		}
	}else{
		alert("请先注册哦~");
	}
}
function chk(){
	if(sessionStorage.getItem("username")){
		alert("亲爱的"+sessionStorage.getItem("username").toString()+"用户，保研岸欢迎您！");
	}else{
		alert("请先登录，再访问哦~");
		window.location.href="log.html";
	}
}