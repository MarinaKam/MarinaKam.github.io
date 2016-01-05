$(function () {

    var $tabs = $('#tabs-wrap');
    $('.tabs-content > div', $tabs).each(function(i){
        if (i != 0) $(this).hide(0);
    });

    $tabs.on('click', '.tabs a', function(e) {
        e.preventDefault();
        var $tabId = $(this).attr('href');
        $('.tabs a', $tabs).removeClass();
        $(this).addClass('active');
        $('.tabs-content > div', $tabs).hide(0);
        $($tabId).show();
    });

    var $form = $('.l-form');
    $form.on('click', '.b-button-link a', function(e) {
        e.preventDefault();
    });

    $('#hint-first-name').hover(function() {
        $('.first-name').fadeIn(1000);
    }, function() {
        $('.first-name').fadeOut('slow');
    });

    $('#hint-last-name').hover(function() {
        $('.last-name').fadeIn(1000);
    }, function() {
        $('.last-name').fadeOut('slow');
    });

    $('#hint-address').hover(function() {
        $('.address').fadeIn(1000);
    }, function() {
        $('.address').fadeOut('slow');
    });

    $('.b-button-link a').click(function(){
        $('.first-name').fadeIn();
        $('.last-name').fadeIn('slow');
        $('.address').fadeIn(1000);
    })
});
