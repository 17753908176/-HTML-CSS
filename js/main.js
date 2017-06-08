//JavaScript Document
/**
 * 如何在一个网站或者一个页面，去书写Js代码
 */
//1.js的分层(功能) jquery(tools)  组件(ui)  应用(app), mvc(backboneJs)
//2.js的规划(管理) : 避免全局变量和方法(命名空间，闭包，面向对象) , 模块化(seaJs,requireJs)
window.onload=function(){
	mv.app.toTip();
}
//分层规划
var mv={};//命名空间
mv.tools={};
mv.ui={};
mv.ui.textChange=function(obj,str){
	obj.onfocus=function(){
		if(this.value == str){
			this.value='';
		}
		obj.onblur=function(){
			if(this.value == ''){
				this.value=str;
			}
		}
	}
}
mv.app={};//具体应用
//文本框的提示
mv.app.toTip=function(){
	var oText1=document.getElementById('text1');
	var oText2=document.getElementById('text2');
	mv.ui.textChange(oText1,'Search website');
	mv.ui.textChange(oText2,'Search website');
}
