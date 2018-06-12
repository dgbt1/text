$(document).ready(function () {
        $('.cancel').click(function () {
            $('.fabu_form').hide();

        });
        $('.pop-up').click(function () {
        	var index=$(this).index();
            $('.fabu_form').eq(index).show();
            $('.fabu_anjiu').find('.confirm').click(function () {
            	index++;
            $('.fabu_form').eq(index).show();
        });
        });
  });
  
  $('.xiangqing').click(function(){
  	$('.details').show();
  	$('.finish').click(function(){
  		$('.details').hide();
  	});
  });
