 
$(document).ready(function () {
        $('.cancel').click(function () {
            $('.recharge').hide();

        });
        $('.pay').click(function () {
        	var index=$(this).parents().index();
            $('.recharge').eq(index).show();
            $('.recharge .anniu').find('.confirm').click(function () {
            	index++;
            $('.recharge').eq(index).show();
        });
        });
  });
  
$(document).ready(function () {
        $('.cancel').click(function () {
            $('.withdraw').hide();

        });
        $('.tixian').click(function () {
        	var index=$(this).parents().index();
            $('.withdraw').eq(index).show();
            $('.withdraw .anniu').find('.confirm').click(function () {
            	index++;
            $('.withdraw').eq(index).show();
            $('.withdraw_right').find('input').click(function(){
            	$(this).addClass('withdraw_bj').siblings().removeClass('withdraw_bj');
            })
        });
        });
  });
  
$(document).ready(function(){
	$('.cancel').click(function(){
		$('.change').hide();
	});
	$('.more').click(function(){
		$('.change').show();
	});
});


$(".manage_anniu").click(function(){
$(".manage").toggle();
});