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

    $('.tabs li a').on('click', function () {
        $(this).addClass('active').parents().siblings(this).find('a').removeClass('active');   
    });


    var $form = $('.l-form');
    $form.on('click', '.b-button-link a', function(e) {
        e.preventDefault();
        $('.hint1').fadeIn();
        $('.hint2').fadeIn('slow');
        $('.hint3').fadeIn(1000);
    });

    // var $hint = $('.hint input');


    // function hoverIn() {
    //     var $arr = ['.first-name', '.last-name', '.address'];
    //     for (var i = 0; i < $arr; i++) {
    //         $arr[i].fadeIn('fast');
    //     };
    // }

    // function hoverOut() {
    //     var $arr = ['.first-name', '.last-name', '.address'];
    //     for (var i = 0; i < $arr; i++) {
    //         $arr[i].fadeOut('fast');
    //     };
    // }

    // $('#hint-first-name').hover(hoverIn(), hoverOut());
    // $('#hint-last-name').hover(hoverIn(),hoverOut());
    // $('#hint-address').hover(hoverIn(),hoverOut());


     // function hoverIn() {
     //    $(this).find("em").stop(true,true)
     //                      .animate({opacity: "show", top: "-75"}, "slow");
     //                      console.log('em');
     // }

     // function hoverOut() {
     //    $(this).find("em").stop(true,true)
     //                      .animate({opacity: "hide", top: "-85"}, "fast");
     // }

     // var $hint = $('.hint input');
     // console.log($hint);

     // $hint.hover(hoverIn(), hoverOut());

    //  var $em = $('.hint em');
    //  console.log($em);

    // $('.hint input').hover(function() {
    //     $('.hint em').fadeIn('fast');
    //     }, function() {
    //     $('.hint em').fadeOut('fast');
    // });

    // var $hoverIn = function () {
    //     for (var i = 0; i < arguments.length; i++) {
    //     $('.hint').fadeIn('fast');
    //     };
    //     console.log('.hint' + (i+1));
    // }

    // var $hoverOut = function() {
    //     for (var i = 0; i < arguments.length; i++) {
    //     $('.hint').fadeOut('fast');
    //     };
    // }

    // $('#hint-first-name').hover($hoverIn, $hoverOut);
    // $('#hint-last-name').hover($hoverIn, $hoverOut);
    // $('#hint-address').hover($hoverIn, $hoverOut);



    $('#hint-first-name').hover(function() {
        $('.hint1').fadeIn('fast');
    }, function() {
        $('.hint1').fadeOut('fast');
      });

    $('#hint-last-name').hover(function() {
        $('.hint2').fadeIn('fast');
    }, function() {
        $('.hint2').fadeOut('fast');

    });

    $('#hint-address').hover(function() {
        $('.hint3').fadeIn('fast');
    }, function() {
        $('.hint3').fadeOut('fast');

    });

   

});
