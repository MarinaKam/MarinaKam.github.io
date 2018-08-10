'use strict';

(function () {
    /* Preloader */
    $(window).on('load', function () {
        $(".preloader").delay(300).fadeOut('slow').remove();
    });

    $(window).scroll(function () {
        if ($(window).scrollTop() >= 500) {
            $('.header__nav-btn').addClass('fixed');
        } else {
            $('.header__nav-btn').removeClass('fixed');
        }
    });

    var $link = $('a[href="#"]');

    $link.click(function (e) {
        $(this).addClass('activeLink').parents().siblings(this).find('a').removeClass('activeLink');
        e.preventDefault();
    });

    $('body').append('<div class="go-top__block"><a href="#" class="go-top" title="Вверх"></a></div>');

    $.fn.scrollToTop = function () {
        $(this).hide().removeAttr("href");
        if ($(window).scrollTop() >= "250") $(this).fadeIn("slow");
        var scrollDiv = $(this);
        $(window).scroll(function () {
            if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow");else $(scrollDiv).fadeIn("slow");
        });
        $(this).click(function () {
            $("html, body").animate({ scrollTop: 0 }, "slow");
        });
    };

    $(".go-top__block").scrollToTop();

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]').not('[href="#0"]').click(function (event) {
        // On-page links
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 1000, function () {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) {
                        // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });

    $('.hidden-accordion__item > a').click(function (e) {
        var $this = $(this);

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

    var mySwiper = new Swiper('.swiper-container', {
        speed: 500,
        centeredSlides: true,
        slidesPerView: 1,
        simulateTouch: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev'
        },
        loop: true
    });

    var swiper = new Swiper('.logo-swiper', {
        slidesPerView: 4,
        spaceBetween: 20,
        breakpoints: {
            // when window width is <= 320px
            480: {
                slidesPerView: 1
            },
            // when window width is <= 480px
            // when window width is <= 640px
            768: {
                slidesPerView: 2
            },
            992: {
                slidesPerView: 3
            }
        },
        speed: 500,
        simulateTouch: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
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
        focusOnSelect: true
        // arrows: false
    });

    // Google Map Start

    myMap();

    function myMap() {

        var myCenter = new google.maps.LatLng(46.840237, 35.381755);
        var mapCanvas = document.getElementById("googleMap");
        var mapOptions = {
            center: myCenter,
            zoom: 9,
            zoomControl: true
        };
        var map = new google.maps.Map(mapCanvas, mapOptions);
        var marker = new google.maps.Marker({ position: myCenter });
        marker.setMap(map);

        var infowindow = new google.maps.InfoWindow({
            content: "Piano - Наружная реклама!"
        });

        infowindow.open(map, marker);

        // Zoom to 10 when clicking on marker
        google.maps.event.addListener(marker, 'click', function () {
            var pos = map.getZoom();
            map.setZoom(15);
            map.setCenter(marker.getPosition());
            window.setTimeout(function () {
                map.setZoom(pos);
            }, 3000);
        });
    }

    // Google Map End
})();
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xuXG4oZnVuY3Rpb24gKCkge1xuICAgIC8qIFByZWxvYWRlciAqL1xuICAgICQod2luZG93KS5vbignbG9hZCcsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJChcIi5wcmVsb2FkZXJcIikuZGVsYXkoMzAwKS5mYWRlT3V0KCdzbG93JykucmVtb3ZlKCk7XG4gICAgfSk7XG5cbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCQod2luZG93KS5zY3JvbGxUb3AoKSA+PSA1MDApIHtcbiAgICAgICAgICAgICQoJy5oZWFkZXJfX25hdi1idG4nKS5hZGRDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICQoJy5oZWFkZXJfX25hdi1idG4nKS5yZW1vdmVDbGFzcygnZml4ZWQnKTtcbiAgICAgICAgfVxuICAgIH0pO1xuXG4gICAgdmFyICRsaW5rID0gJCgnYVtocmVmPVwiI1wiXScpO1xuXG4gICAgJGxpbmsuY2xpY2soZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgJCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlTGluaycpLnBhcmVudHMoKS5zaWJsaW5ncyh0aGlzKS5maW5kKCdhJykucmVtb3ZlQ2xhc3MoJ2FjdGl2ZUxpbmsnKTtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIH0pO1xuXG4gICAgJCgnYm9keScpLmFwcGVuZCgnPGRpdiBjbGFzcz1cImdvLXRvcF9fYmxvY2tcIj48YSBocmVmPVwiI1wiIGNsYXNzPVwiZ28tdG9wXCIgdGl0bGU9XCLQktCy0LXRgNGFXCI+PC9hPjwvZGl2PicpO1xuXG4gICAgJC5mbi5zY3JvbGxUb1RvcCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgJCh0aGlzKS5oaWRlKCkucmVtb3ZlQXR0cihcImhyZWZcIik7XG4gICAgICAgIGlmICgkKHdpbmRvdykuc2Nyb2xsVG9wKCkgPj0gXCIyNTBcIikgJCh0aGlzKS5mYWRlSW4oXCJzbG93XCIpO1xuICAgICAgICB2YXIgc2Nyb2xsRGl2ID0gJCh0aGlzKTtcbiAgICAgICAgJCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBpZiAoJCh3aW5kb3cpLnNjcm9sbFRvcCgpIDw9IFwiMjUwXCIpICQoc2Nyb2xsRGl2KS5mYWRlT3V0KFwic2xvd1wiKTtlbHNlICQoc2Nyb2xsRGl2KS5mYWRlSW4oXCJzbG93XCIpO1xuICAgICAgICB9KTtcbiAgICAgICAgJCh0aGlzKS5jbGljayhmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHsgc2Nyb2xsVG9wOiAwIH0sIFwic2xvd1wiKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgICQoXCIuZ28tdG9wX19ibG9ja1wiKS5zY3JvbGxUb1RvcCgpO1xuXG4gICAgLy8gU2VsZWN0IGFsbCBsaW5rcyB3aXRoIGhhc2hlc1xuICAgICQoJ2FbaHJlZio9XCIjXCJdJylcbiAgICAvLyBSZW1vdmUgbGlua3MgdGhhdCBkb24ndCBhY3R1YWxseSBsaW5rIHRvIGFueXRoaW5nXG4gICAgLm5vdCgnW2hyZWY9XCIjXCJdJykubm90KCdbaHJlZj1cIiMwXCJdJykuY2xpY2soZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgIC8vIE9uLXBhZ2UgbGlua3NcbiAgICAgICAgaWYgKGxvY2F0aW9uLnBhdGhuYW1lLnJlcGxhY2UoL15cXC8vLCAnJykgPT0gdGhpcy5wYXRobmFtZS5yZXBsYWNlKC9eXFwvLywgJycpICYmIGxvY2F0aW9uLmhvc3RuYW1lID09IHRoaXMuaG9zdG5hbWUpIHtcbiAgICAgICAgICAgIC8vIEZpZ3VyZSBvdXQgZWxlbWVudCB0byBzY3JvbGwgdG9cbiAgICAgICAgICAgIHZhciB0YXJnZXQgPSAkKHRoaXMuaGFzaCk7XG4gICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXQubGVuZ3RoID8gdGFyZ2V0IDogJCgnW25hbWU9JyArIHRoaXMuaGFzaC5zbGljZSgxKSArICddJyk7XG4gICAgICAgICAgICAvLyBEb2VzIGEgc2Nyb2xsIHRhcmdldCBleGlzdD9cbiAgICAgICAgICAgIGlmICh0YXJnZXQubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgLy8gT25seSBwcmV2ZW50IGRlZmF1bHQgaWYgYW5pbWF0aW9uIGlzIGFjdHVhbGx5IGdvbm5hIGhhcHBlblxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICAgICAgICBzY3JvbGxUb3A6IHRhcmdldC5vZmZzZXQoKS50b3BcbiAgICAgICAgICAgICAgICB9LCAxMDAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIENhbGxiYWNrIGFmdGVyIGFuaW1hdGlvblxuICAgICAgICAgICAgICAgICAgICAvLyBNdXN0IGNoYW5nZSBmb2N1cyFcbiAgICAgICAgICAgICAgICAgICAgdmFyICR0YXJnZXQgPSAkKHRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgICR0YXJnZXQuZm9jdXMoKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCR0YXJnZXQuaXMoXCI6Zm9jdXNcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIENoZWNraW5nIGlmIHRoZSB0YXJnZXQgd2FzIGZvY3VzZWRcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICR0YXJnZXQuYXR0cigndGFiaW5kZXgnLCAnLTEnKTsgLy8gQWRkaW5nIHRhYmluZGV4IGZvciBlbGVtZW50cyBub3QgZm9jdXNhYmxlXG4gICAgICAgICAgICAgICAgICAgICAgICAkdGFyZ2V0LmZvY3VzKCk7IC8vIFNldCBmb2N1cyBhZ2FpblxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKCcuaGlkZGVuLWFjY29yZGlvbl9faXRlbSA+IGEnKS5jbGljayhmdW5jdGlvbiAoZSkge1xuICAgICAgICB2YXIgJHRoaXMgPSAkKHRoaXMpO1xuXG4gICAgICAgIGlmICgkdGhpcy5uZXh0KCkuaGFzQ2xhc3MoJ3Nob3cnKSkge1xuICAgICAgICAgICAgJHRoaXMubmV4dCgpLnJlbW92ZUNsYXNzKCdzaG93Jyk7XG4gICAgICAgICAgICAkdGhpcy5uZXh0KCkuc2xpZGVVcCgzNTApO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgJHRoaXMucGFyZW50KCkucGFyZW50KCkuZmluZCgnLmhpZGRlbi1hY2NvcmRpb25fX2l0ZW0gLmhpZGRlbi1pdGVtJykucmVtb3ZlQ2xhc3MoJ3Nob3cnKTtcbiAgICAgICAgICAgICR0aGlzLnBhcmVudCgpLnBhcmVudCgpLmZpbmQoJy5oaWRkZW4tYWNjb3JkaW9uX19pdGVtIC5oaWRkZW4taXRlbScpLnNsaWRlVXAoMzUwKTtcbiAgICAgICAgICAgICR0aGlzLm5leHQoKS50b2dnbGVDbGFzcygnc2hvdycpO1xuICAgICAgICAgICAgJHRoaXMubmV4dCgpLnNsaWRlVG9nZ2xlKDM1MCk7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIHZhciBteVN3aXBlciA9IG5ldyBTd2lwZXIoJy5zd2lwZXItY29udGFpbmVyJywge1xuICAgICAgICBzcGVlZDogNTAwLFxuICAgICAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICAgICAgc2xpZGVzUGVyVmlldzogMSxcbiAgICAgICAgc2ltdWxhdGVUb3VjaDogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXk6IHtcbiAgICAgICAgICAgIGRlbGF5OiA1MDAwLFxuICAgICAgICAgICAgZGlzYWJsZU9uSW50ZXJhY3Rpb246IGZhbHNlXG4gICAgICAgIH0sXG4gICAgICAgIG5hdmlnYXRpb246IHtcbiAgICAgICAgICAgIG5leHRFbDogJy5zd2lwZXItYnV0dG9uLW5leHQnLFxuICAgICAgICAgICAgcHJldkVsOiAnLnN3aXBlci1idXR0b24tcHJldidcbiAgICAgICAgfSxcbiAgICAgICAgbG9vcDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgdmFyIHN3aXBlciA9IG5ldyBTd2lwZXIoJy5sb2dvLXN3aXBlcicsIHtcbiAgICAgICAgc2xpZGVzUGVyVmlldzogNCxcbiAgICAgICAgc3BhY2VCZXR3ZWVuOiAyMCxcbiAgICAgICAgYnJlYWtwb2ludHM6IHtcbiAgICAgICAgICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDMyMHB4XG4gICAgICAgICAgICA0ODA6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgLy8gd2hlbiB3aW5kb3cgd2lkdGggaXMgPD0gNDgwcHhcbiAgICAgICAgICAgIC8vIHdoZW4gd2luZG93IHdpZHRoIGlzIDw9IDY0MHB4XG4gICAgICAgICAgICA3Njg6IHtcbiAgICAgICAgICAgICAgICBzbGlkZXNQZXJWaWV3OiAyXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgOTkyOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzUGVyVmlldzogM1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBzcGVlZDogNTAwLFxuICAgICAgICBzaW11bGF0ZVRvdWNoOiB0cnVlLFxuICAgICAgICBhdXRvcGxheToge1xuICAgICAgICAgICAgZGVsYXk6IDUwMDAsXG4gICAgICAgICAgICBkaXNhYmxlT25JbnRlcmFjdGlvbjogZmFsc2VcbiAgICAgICAgfSxcbiAgICAgICAgbG9vcDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgJCgnLnNsaWRlci1mb3InKS5zbGljayh7XG4gICAgICAgIHNsaWRlc1RvU2hvdzogMSxcbiAgICAgICAgc2xpZGVzVG9TY3JvbGw6IDEsXG4gICAgICAgIGFycm93czogZmFsc2UsXG4gICAgICAgIGZhZGU6IHRydWUsXG4gICAgICAgIGFzTmF2Rm9yOiAnLnNsaWRlci1uYXYnLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZVxuICAgIH0pO1xuICAgICQoJy5zbGlkZXItbmF2Jykuc2xpY2soe1xuICAgICAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxLFxuICAgICAgICBhc05hdkZvcjogJy5zbGlkZXItZm9yJyxcbiAgICAgICAgZG90czogZmFsc2UsXG4gICAgICAgIGNlbnRlck1vZGU6IHRydWUsXG4gICAgICAgIGZvY3VzT25TZWxlY3Q6IHRydWVcbiAgICAgICAgLy8gYXJyb3dzOiBmYWxzZVxuICAgIH0pO1xuXG4gICAgLy8gR29vZ2xlIE1hcCBTdGFydFxuXG4gICAgbXlNYXAoKTtcblxuICAgIGZ1bmN0aW9uIG15TWFwKCkge1xuXG4gICAgICAgIHZhciBteUNlbnRlciA9IG5ldyBnb29nbGUubWFwcy5MYXRMbmcoNDYuODQwMjM3LCAzNS4zODE3NTUpO1xuICAgICAgICB2YXIgbWFwQ2FudmFzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnb29nbGVNYXBcIik7XG4gICAgICAgIHZhciBtYXBPcHRpb25zID0ge1xuICAgICAgICAgICAgY2VudGVyOiBteUNlbnRlcixcbiAgICAgICAgICAgIHpvb206IDksXG4gICAgICAgICAgICB6b29tQ29udHJvbDogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICB2YXIgbWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChtYXBDYW52YXMsIG1hcE9wdGlvbnMpO1xuICAgICAgICB2YXIgbWFya2VyID0gbmV3IGdvb2dsZS5tYXBzLk1hcmtlcih7IHBvc2l0aW9uOiBteUNlbnRlciB9KTtcbiAgICAgICAgbWFya2VyLnNldE1hcChtYXApO1xuXG4gICAgICAgIHZhciBpbmZvd2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xuICAgICAgICAgICAgY29udGVudDogXCJQaWFubyAtINCd0LDRgNGD0LbQvdCw0Y8g0YDQtdC60LvQsNC80LAhXCJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgaW5mb3dpbmRvdy5vcGVuKG1hcCwgbWFya2VyKTtcblxuICAgICAgICAvLyBab29tIHRvIDEwIHdoZW4gY2xpY2tpbmcgb24gbWFya2VyXG4gICAgICAgIGdvb2dsZS5tYXBzLmV2ZW50LmFkZExpc3RlbmVyKG1hcmtlciwgJ2NsaWNrJywgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHBvcyA9IG1hcC5nZXRab29tKCk7XG4gICAgICAgICAgICBtYXAuc2V0Wm9vbSgxNSk7XG4gICAgICAgICAgICBtYXAuc2V0Q2VudGVyKG1hcmtlci5nZXRQb3NpdGlvbigpKTtcbiAgICAgICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBtYXAuc2V0Wm9vbShwb3MpO1xuICAgICAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIEdvb2dsZSBNYXAgRW5kXG59KSgpOyJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
