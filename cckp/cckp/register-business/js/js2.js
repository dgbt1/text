'use strict';

$('.student p').click(function(){
//	$(this).find('div').addClass('show').removeClass('hide');
//	$(this).find('>p').addClass('content-btm-top-active').find('span').addClass('content-btm-top-span-act')
//	$(this).siblings('li').find('div').addClass('hide')
//
//	$(this).siblings('li').find('p').removeClass('content-btm-top-active').find('span').removeClass('content-btm-top-span-act')
//	
//	$(this).parents('.content-box').find('.content:nth-child(1)').addClass('hide').removeClass('show').parents('.content-box').find('.content:nth-child(2)').addClass('show')

	$(location).attr('href','register-student.html')
})

$('.business p').click(function(){
//	$(this).find('div').addClass('show').removeClass('hide');
//	
//	
//	$(this).find('>p').addClass('content-btm-top-active').find('span').addClass('content-btm-top-span-act');
//	
//	$(this).siblings('li').find('div').addClass('hide')
//	
//	$(this).siblings('li').find('p').removeClass('content-btm-top-active').find('span').removeClass('content-btm-top-span-act')
//	
//	$(this).parents('.content-box').find('.content:nth-child(2)').addClass('hide').removeClass('show').parents('.content-box').find('.content:nth-child(1)').addClass('show')
	$(location).attr('href','register-business.html')
	
});

$('.business-box .next-step').click(function(){
	$(location).attr('href','register-business-identity.html')
})



	
	
