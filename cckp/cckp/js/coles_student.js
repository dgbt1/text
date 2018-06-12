 $('.coles_nav').on('click','li',function(e){
            var target = e.target;
            var id = $(target).data("to");
            $('html,body').animate({scrollTop:$('#'+id).offset().top}, 800);
        });
        
$(document).ready(function () {
        $('.cancel,.fulfill').click(function () {
            $('.orders').hide();

        });
        $('.buy').click(function () {
        	index=$(this).index('.orders')-2;
            $('.orders').eq(index).show();
            $('.confirm').click(function () {
            	index++;
            $('.orders').eq(index-1).hide();
            $('.orders').eq(index).show();
        });
        });
  });