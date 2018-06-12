$(document).ready(function () {
        $('.cancel').click(function () {
            $('.fabu_form').hide();

        });
        $('.pop-up').click(function () {
        	var index=$(this).index()-1;
            $('.fabu_form').eq(index).show();
            $('.fabu_anjiu').find('.confirm').click(function () {
            	index++;
            $('.fabu_form').eq(index).show();
        });
        });
  });
  
  
   $('.finish').click(function () {
            $('.details').hide();

        });
  $('.xiangqing').click(function(){
  	var index=$('this').index()-1;
  	$('.details').eq(index).show();
  	$('.particulars').click(function(){
  		$('.details').show();
  	});
  });