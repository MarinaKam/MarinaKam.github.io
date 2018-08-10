(function () {
    /* Preloader */
    $(window).on('load', function() {
        $(".preloader").delay(300).fadeOut('slow').remove();

    });

    $(window).scroll(function(){
        if ($(window).scrollTop() >= 500) {
            $('.header__nav-btn').addClass('fixed');
        }
        else {
            $('.header__nav-btn').removeClass('fixed');
        }
    });

    let $link = $('a[href="#"]');

    $link.click(function(e) {
        $(this).addClass('activeLink').parents().siblings(this).find('a').removeClass('activeLink');
        e.preventDefault();
    });

    $('body').append('<div class="go-top__block"><a href="#" class="go-top" title="Вверх"></a></div>');

    $.fn.scrollToTop = function() {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "250") $(this).fadeIn("slow");
        let scrollDiv = $(this);
        $(window).scroll(function() {
            if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow");
            else $(scrollDiv).fadeIn("slow");
        });
        $(this).click(function() {
            $("html, body").animate({scrollTop: 0}, "slow");
        })
    };

    $(".go-top__block").scrollToTop();

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
                &&
                location.hostname == this.hostname) {
                // Figure out element to scroll to
                let target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                // Does a scroll target exist?
                if (target.length) {
                    // Only prevent default if animation is actually gonna happen
                    event.preventDefault();
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000, function() {
                        // Callback after animation
                        // Must change focus!
                        let $target = $(target);
                        $target.focus();
                        if ($target.is(":focus")) { // Checking if the target was focused
                            return false;
                        } else {
                            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                            $target.focus(); // Set focus again
                        };
                    });
                }
            }
        });

    $('.hidden-accordion__item > a').click(function (e) {
        let $this = $(this);

        if ($this.next().hasClass('show')) {
            $this.next().removeClass('show');
            $this.next().slideUp(350);
        } else {
            $this.parent().parent().find('.hidden-accordion__item .hidden-item').removeClass('show');
            $this.parent().parent().find('.hidden-accordion__item .hidden-item').slideUp(350);
            $this.next().toggleClass('show');
            $this.next().slideToggle(350);
        }
    });


    let mySwiper = new Swiper('.swiper-container', {
        speed: 500,
        centeredSlides: true,
        slidesPerView: 1,
        simulateTouch: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        loop: true
    });

    let swiper = new Swiper('.logo-swiper', {
        slidesPerView: 4,
        spaceBetween: 20,
        breakpoints: {
            // when window width is <= 320px
            480: {
                slidesPerView: 1,
            },
            // when window width is <= 480px
            // when window width is <= 640px
            768: {
                slidesPerView: 2,
            },
            992: {
                slidesPerView: 3,
            }
        },
        speed: 500,
        simulateTouch: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        loop: true
    });

    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav',
        autoplay: true
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: false,
        centerMode: true,
        focusOnSelect: true,
        // arrows: false
    });

    // Google Map Start

    myMap();

    function myMap() {

        let myCenter = new google.maps.LatLng(46.840237, 35.381755);
        let mapCanvas = document.getElementById("googleMap");
        let mapOptions = {
            center: myCenter,
            zoom: 9,
            zoomControl: true
        };
        let map = new google.maps.Map(mapCanvas, mapOptions);
        let marker = new google.maps.Marker({position:myCenter});
        marker.setMap(map);

        let infowindow = new google.maps.InfoWindow({
            content:"Piano - Наружная реклама!"
        });

        infowindow.open(map,marker);

        // Zoom to 10 when clicking on marker
        google.maps.event.addListener(marker,'click',function() {
            let pos = map.getZoom();
            map.setZoom(15);
            map.setCenter(marker.getPosition());
            window.setTimeout(function() {map.setZoom(pos);},3000);
        });
    }


    // Google Map End

})();