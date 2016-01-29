$(function () {

    var $tabButtons = $('.tab');
    var $tabContent = $('.tab-content');

    $tabButtons.on('click', switchTab);

    function switchTab(e) {
        var index = $(this).index();
        $tabContent.hide();
        $tabContent.eq(index).show();
    }

    $tabContent.first().show();

    $('.tabs a').on('click', function () {
        $(this).addClass('active').parents().siblings(this).find('a').removeClass('active');   
    });


    var $fixedToolTip = $('.fixedToolTip');

    function hintIn() {
        var left = $(this).position().left + $(this).width() + 50;
        var top = $(this).position().top - 4;
        $(this).next().css('left',left);
        $(this).next().css('top',top);
        $('.tooltip:last').css('left', left + 10);
        $(this).next('.tooltip').animate({ opacity: "show", marginLeft: "10"}, "slow");

    };

    function hintOut() {
        $(this).next('.tooltip').animate({opacity: "hide", marginLeft: "40"}, "fast");
    };

    $fixedToolTip.mouseover(hintIn).mouseout(hintOut);

    $('.b-button').click(function(event) {
        $('.fixedToolTip').next('.tooltip').animate({opacity: "show", marginLeft: "20"}, "slow");
        event.preventDefault();
    }); 

});
