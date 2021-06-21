$("#triple_line_circle").hover(function(){
	$(this).css("background","black");
	$(this).css("border","1px solid white");
	$("#tl1").css("border-bottom","3px solid black");
	$("#tl2").css("border-bottom","3px solid black");
	$("#tl3").css("border-bottom","3px solid black");},
	function(){
	$(this).css("background","#DD1338");
	$(this).css("border","none");
	$("#tl1").css("border-bottom","3px solid #DD1338");
	$("#tl2").css("border-bottom","3px solid #DD1338");
	$("#tl3").css("border-bottom","3px solid #DD1338");});

$("#fun1").hover(function(){
	$(this).css("background","#DD1338");},
	function(){
	$(this).css("background","#F1103A");});
	
$("#fun2").hover(function(){
	$(this).css("background","#DD1338");},
	function(){
	$(this).css("background","#F1103A");});
	
$("#fun3").hover(function(){
	$(this).css("background","#DD1338");},
	function(){
	$(this).css("background","#F1103A");});
	
$("#fun4").hover(function(){
	$(this).css("background","#DD1338");},
	function(){
	$(this).css("background","#F1103A");});
	
$("#fun5").hover(function(){
	$(this).css("background","#DD1338");},
	function(){
	$(this).css("background","#F1103A");});
	
	
	
var num=0;
if(num==0)
$("#triple_line_circle").click(function(){
	$("#table").animate({width:"toggle"});num++;});
	if(num==1)
$("#triple_line_circle").click(function(){
	$("#table").css("display","none");num--;});
	
var num1=0;
if(num1==0)
$("#fun1").click(function(){
	$("#empid_filter").animate({width:"toggle"});num1++;});
	if(num==1)
$("#fun1").click(function(){
	$("#empid_filter").css("display","none");num1--;});
