$("#triple_line_circle").hover(function(){
	$(this).css("background","black");
	$(this).css("border","1px solid white");
	$("#tl1").css("border-bottom","3px solid black");
	$("#tl2").css("border-bottom","3px solid black");
	$("#tl3").css("border-bottom","3px solid black");},
	function(){
	$(this).css("background","#DCEEFC");
	$(this).css("border","none");
	$("#tl1").css("border-bottom","3px solid #DCEEFC");
	$("#tl2").css("border-bottom","3px solid #DCEEFC");
	$("#tl3").css("border-bottom","3px solid #DCEEFC");});

$("#fun1").hover(function(){
	$(this).css("background","#DCEEFC");},
	function(){
	$(this).css("background","White");});
	
$("#fun2").hover(function(){
	$(this).css("background","#DCEEFC");},
	function(){
	$(this).css("background","White");});
	
$("#fun3").hover(function(){
	$(this).css("background","#DCEEFC");},
	function(){
	$(this).css("background","White");});
	
$("#fun4").hover(function(){
	$(this).css("background","#DCEEFC");},
	function(){
	$(this).css("background","White");});
	
$("#fun5").hover(function(){
	$(this).css("background","#DCEEFC");},
	function(){
	$(this).css("background","White");});
	
$("#fun1").click(function(){
    $("#fun1_open").slideToggle();
	})
$("#fun2").click(function(){
    $("#fun2_open").slideToggle();
	})
$("#fun3").click(function(){
    $("#fun3_open").slideToggle();
	})
$("#fun4").click(function(){
    $("#fun4_open").slideToggle();
	})
$("#fun5").click(function(){
    $("#fun5_open").slideToggle();
	})
	
var num=0;
if(num==0)
$("#triple_line_circle").click(function(){
	$("#table").animate({width:"toggle"});num++;});
	if(num==1)
$("#triple_line_circle").click(function(){
	$("#table").css("display","none");num--;});