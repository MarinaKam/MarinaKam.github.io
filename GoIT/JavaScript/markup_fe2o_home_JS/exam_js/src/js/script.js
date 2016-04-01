
//= ../lib/owl.carousel.min.js
//= ../lib/tmpl.js

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

                $('.grid').isotope({
                    itemSelector: '.grid_item',
                    layoutMode: 'masonry',
                    masonry: {
                        gutter: 20
                    }
                });

                $('.modal').hide();

                $('.grid_item').on('click', showModal);

                function showModal(e){
                    var targIndex = $(this).index();
                    var modalURL = data.images[targIndex].imageurl;

                    $('.modal-image').attr('src', modalURL);
                    $('.modal').show();
                }


            }
        });
    }



    $('.form').submit(function(e) {

        e.preventDefault();
        var query = encodeURIComponent($('.form_edit').val());
        renderList(query);

    });

    renderList();
    $('.modal-image').on('click', hideModal);

    function hideModal(){
        $('.modal').hide();
    }

});
