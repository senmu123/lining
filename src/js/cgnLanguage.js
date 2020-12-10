$(function(){
	var exLanguage = navigator.language;
	if(!exLanguage){
		exLanguage = navigator.browserLanguage;
	}
	var selected = mycookie.get("ln_selected");
	if(selected == undefined || selected == '' ){
		var lang = exLanguage.substr(0, 2);
		if(lang.toLowerCase() != "zh"){
			showLanguageDiv();
		}
	}else if(selected!='zh'){
		window.location.href="http://en.lining.com/";
	}
	
	$('.back_fade').on('click',function(){
		hideLanguageDiv();
	})
	
	$('.model_hd1 a').on('click',function(){
		var languageType = $(this).attr('alt');
		if(languageType=='en'){
			mycookie.set('ln_selected','en', 1);
			window.location.href="http://en.lining.com/";
		}else{
			mycookie.set('ln_selected','zh', 1);
			hideLanguageDiv();
		}
	})
	
	$('.closed').on('click',function(){
		hideLanguageDiv();
	})
	
})

function showLanguageDiv(){
	$('.languageDiv').css('display','block');
	$('.back_fade').css('display','block');
}

function hideLanguageDiv(){
	$('body').css('opacity','1');
	$('.languageDiv').css('display','none');
	$('.back_fade').css('display','none');
}

	var mycookie = {
		 set:function(key,val,time){//设置cookie方法
			 var date=new Date(); //获取当前时间
			 var expiresDays=time;  //将date设置为n天以后的时间
			 date.setTime(date.getTime()+expiresDays*24*3600*1000); //格式化为cookie识别的时间
			 var val = key + "=" + val +";expires="+date.toGMTString()+";domain=lining.com;path=/";  //设置cookie
			 document.cookie = val;
		 },
		 get:function(key){//获取cookie方法
			 /*获取cookie参数*/
			 var getCookie = document.cookie.replace(/[ ]/g,"");  //获取cookie，并且将获得的cookie格式化，去掉空格字符
			 var arrCookie = getCookie.split(";")  //将获得的cookie以"分号"为标识 将cookie保存到arrCookie的数组中
			 var tips;  //声明变量tips
			 for(var i=0;i<arrCookie.length;i++){   //使用for循环查找cookie中的tips变量
				 var arr=arrCookie[i].split("=");   //将单条cookie用"等号"为标识，将单条cookie保存为arr数组
				 if(key==arr[0]){  //匹配变量名称，其中arr[0]是指的cookie名称，如果该条变量为tips则执行判断语句中的赋值操作
					 tips=arr[1];   //将cookie的值赋给变量tips
					 break;   //终止for循环遍历
				 }
			 }
			 return tips;
		 },
		 drop:function(key){ //删除cookie方法
			 var date = new Date(); //获取当前时间
			 date.setTime(date.getTime()-10000); //将date设置为过去的时间
			 document.cookie = key + "=v; expires =" +date.toGMTString()+";domain=lining.com;path=/";//设置cookie
		 }
   }


