$('.tabs').find('li').click(function() {       $('.content').eq($(this).index()).addClass('show').siblings().removeClass('show');
    });