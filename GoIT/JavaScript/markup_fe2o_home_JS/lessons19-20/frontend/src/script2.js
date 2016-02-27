$(function() {

    var $link = $('a[href="#"]');
    // 'a[href="#home"]', 'a[href="#features"]', 'a[href="#services"]', 'a[href="#news"]', 'a[href="#shop"]'
    $link.click(function(e) {
        $(this).addClass('active').parents().siblings(this).find('a').removeClass('active');
        e.preventDefault();

    });
    $('.menu__link').click(function(e) {
        $(this).addClass('active').parents().siblings(this).find('a').removeClass('active');
        //отменяем стандартную обработку нажатия по ссылке
        event.preventDefault();

        //забираем идентификатор бока с атрибута href
        var id = $(this).attr('href'),
            //узнаем высоту от начала страницы до блока на который ссылается якорь
            top = $(id).offset().top;

        //анимируем переход на расстояние - top за 1500 мс
        $('body,html').animate({ scrollTop: top }, 1000);
    });

    $('.sub > a').click(function() {

        $('.sub ul').slideUp();
        if ($(this).next().is(":visible")) {
            $(this).next().slideUp();

        } else {
            $(this).next().slideToggle();
        }
        return false;
    });
    $('.accordeon > ul > li > a').click(function() {
        $('.accordeon > ul > li > a, .sub a').removeClass('active');
        $(this).addClass('active');
    });
    $('.sub ul li a').click(function() {
        $('.sub ul li a').removeClass('active');
        $(this).addClass('active');
    });

    $(window).scroll(function() {
        if (document.body.scrollTop > 200)
            $('.link__for__menu').fadeIn("slow", function() {});
        else
            $('.link__for__menu').fadeOut("slow", function() {});
    });
    $('.link__for__menu').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 500);

        return false;
    });


});