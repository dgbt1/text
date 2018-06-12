    $('.tabs').find('li').click(function() {
        $(this).addClass('active').removeClass('writess').siblings().removeClass('active').addClass('writess') ;
        $('.content').eq($(this).index()).addClass('show').siblings().removeClass('show');
    });