$(function(){
		$('.dl').find('li').click(function(){
			$(this).addClass('dl_ul_show').siblings().removeClass('dl_ul_show');
			var index=$(this).index();
			$(this).parents().find('.zm').eq(index).addClass('zm_show').siblings().removeClass('zm_show');
		});
	});