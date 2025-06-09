$(document).ready(function () {
    $("#menu_wrap > li").mouseenter(function(){      
		$(this).children(".sub_menu").stop().slideDown();
	});
	$("#menu_wrap > li").mouseleave(function(){
		$(".sub_menu").stop().slideUp();
	});
});