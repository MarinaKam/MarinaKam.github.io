(function($) {

$.fn.karuselSlider = function(options) {
    /* Зададим следующие параметры */
    /* обертка слайдера */
    var slideWrap = $('.slide-wrap');

    console.log(slideWrap);
    /* кнопки вперед/назад и старт/пауза */
    var nextLink = $('.next-slide');
    var prevLink = $('.prev-slide');
    // var playLink = $('.auto');
    /* Проверка на анимацию */
    // var is_animate = false;
    /* ширина слайда с отступами */
    var slideWidth = $('.slide-item').outerWidth();
    /* смещение слайдера */
    var scrollSlider = slideWrap.position().left - slideWidth;
		
    /* Клик по ссылке на следующий слайд */
	function clickNextSlider(){
		  nextLink.click(function(){
		   if(!slideWrap.is(':animated')) {
		    slideWrap.animate({left: scrollSlider}, 500, function(){
		     slideWrap
		      .find('.slide-item:first')
		      .appendTo(slideWrap)
		      .parent()
		      .css({'left': 0});
		    });
		   }
		  });

		  /* Клик по ссылке на предыдующий слайд */
		  prevLink.click(function(){
		   if(!slideWrap.is(':animated')) {
		    slideWrap
		     .css({'left': scrollSlider})
		     .find('.slide-item:last')
		     .prependTo(slideWrap)
		     .parent()
		     .animate({left: 0}, 500);
		   }
		  });
				
		 //  /* Функция автоматической прокрутки слайдера */
		 //  function autoplaySlider(){
		 //   if(!is_animate){
		 //    is_animate = true;
		 //    slideWrap.animate({left: scrollSlider}, 500, function(){
		 //     slideWrap
		 //      .find('.slide-item:first')
		 //      .appendTo(slideWrap)
		 //      .parent()
		 //      .css({'left': 0});
		 //     is_animate = false;
		 //    });
		 //   }
		 //  }
				
		 //  /* Клики по ссылкам старт/пауза */
		 //  playLink.click(function(){
		 //   if(playLink.hasClass('play')){
		 //    /* Изменяем клас у кнопки на клас паузы */
			// playLink.removeClass('play').addClass('pause');
		 //    /* Добавляем кнопкам вперед/назад клас который их скрывает */
		 //    $('.navy').addClass('disable');
		 //    /* Инициализируем функцию autoplaySlider() через переменную
		 //       чтобы потом можно было ее отключить
			// */
		 //    timer = setInterval(autoplaySlider, 1000);
		 //   } else {
		 //    playLink.removeClass('pause').addClass('play');
			// /* показываем кнопки вперед/назад */
		 //    $('.navy').removeClass('disable');
		 //    /* Отключаем функцию autoplaySlider() */
		 //    clearInterval(timer);
		 //   }
		 //  });

	 }
	 
	 /* иницилизируем функцию слайдера */
	 clickNextSlider();
	};


})(jQuery);

