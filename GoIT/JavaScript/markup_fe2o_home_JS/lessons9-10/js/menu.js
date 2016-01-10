$(function () {

 var $link = $('.page-menu li   a');
    $link.on('click', '.page-menu li a', function(e) {
        e.preventDefault();
    });
$('.page-menu ul li').hover(
        function() {
            $(this).find('ul:first').stop(true, true);
            $(this).find('ul:first').slideDown(1000, 'easeOutExpo');
        },
        function() {
            $(this).removeClass("active");
            $(this).find('ul').slideUp('easeInBack');
        }
    );
$('.page-menu li:has(ul)').find('a:first').append(' &raquo;');

});
