
//= ../lib/tmpl.js
//= ../lib/owl.carousel.min.js
//= ../lib/imagesloaded.pkgd.min.js
//= ../lib/masonry.pkgd.min.js

function getWord(min, max){
    var rand = min + Math.floor(Math.random() * (max + 1 - min));
}

$(function () {

    $.support.cors = true;

    $(".owl-carousel").owlCarousel({

        navigation : true, // Show next and prev buttons
        slideSpeed : 300,
        singleItem:true,
        margin: 10

    });

    var $link = $('a[href="#"]');

    $link.click(function(e) {
        $(this).addClass('active').parents().siblings(this).find('a').removeClass('active');
        e.preventDefault();

    });

    $('a[href^="#"]').click(function(){
        var el = $(this).attr('href');
        $('body').animate({
            scrollTop: $(el).offset().top}, 3000);
        return false;
    });

    var touch = 'ontouchstart' in window;

    $('html').addClass(
        touch ? 'touch-yes' : 'touch-no'
    );



    $('.owl-prev').html(' ');
    $('.owl-next').html(' ');

    var pic = '';

    var queryWord = getWord(0,12);

    function renderList(pic) {

        $.ajax({
            type: 'GET',
            dataType: 'json',
            cache: false,
            url: 'http://api.pixplorer.co.uk/image?word=' + pic + '&amount=7&size=m',
            success: function(data) {

                var piclist = tmpl($('#template').html(), data);

                $('.grid').remove();

                $('.content_gallery').append(piclist);

                $('.grid').imagesLoaded( function() {
                    $('.grid').masonry({
                        itemSelector: '.grid_item',
                        columnWidth: '.grid_item',
                        gutter: 20
                    });
                });


            }
        });
    }

    $('.form').submit(function(e) {

        e.preventDefault();
        var query = encodeURIComponent($('.form_edit').val());
        renderList(query);

    });

    renderList(queryWord);

});
