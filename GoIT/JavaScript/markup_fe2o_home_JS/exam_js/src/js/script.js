
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
    var dataForModal = {
        images: []
    };


    function renderList(pic) {

        var index = 7;
        for (var i = 0; i < index; i++) {

            var f = function(i) {

                $.ajax({
                    type: 'GET',
                    dataType: 'json',
                    cache: false,
                    url: 'http://api.pixplorer.co.uk/image?word=' + pic + '&amount=7&size=m',
                    success: function(data) {

                        dataForModal.images.push(data.images[0]);

                        if (dataForModal.images.length > index) {
                            dataForModal.images.splice(0, 1);
                        }
                        if (i == (index - 1)) {
                            setTimeout(function() {

                                var piclist = tmpl($('#template').html(), dataForModal);

                                $('.grid').remove();

                                $('.content_gallery').append(piclist);
                                $('.grid').isotope({
                                    itemSelector: '.grid__item',
                                    layoutMode: 'masonry',
                                    masonry: {
                                        gutter: 20
                                    }
                                });
                            }, 500);
                        }

                    }
                });

            }(i);
        }

    }

    renderList();

    $('.form').submit(function(e) {

        e.preventDefault();
        var query = encodeURIComponent($('.form__edit').val());
        renderList(query);

    });

    function showModal() {
        var index = $(this).index();
        var $modal = $('<div class="modal animated zoomIn"><div class="modal__wrap"><img class="modal__image" src="' + dataForModal.images[index].imageurl + '" alt=""> </div></div>');
        var $overlay = $('<div class="modal__overlay"></div>');

        $('body').append($modal);
        $('body').append($overlay);

        $modal.one('click', hideModal);

        function hideModal() {
            $modal.removeClass('zoomIn').addClass('zoomOut');
            setTimeout(function() {
                $modal.remove();
            }, 500);
            $overlay.remove();
        }
    }
    $('.content_gallery').on('click', '.grid__item', showModal);

});
