$(function() {

    'use strict';

    var html = $('#test').html();

    var questions=[ 
    { 
    	'id': 1,
        'text': 'What is HTML?', 
        'answers': [
                'How To Make Landingpage',
                'Hypertext Markup Language',
                'Objective Programming Language'
                ], 
        'correctAnswer': 1 
    }, 
    { 
    	'id': 2,
        'text': 'What is CSS?', 
        'answers': [
                'Censor Sold Solar System',
                'Central Sugar Station',
                'Cascading Style Sheets'
            ],
        'correctAnswer': 2 
    }, 
    { 
    	'id': 3,
        'text': 'What is JavaScript?', 
        'answers': [
                'Analog of Java with more functions',
                'High-level interpreted programming language',
                'Language of Javas in Star Wars'
            ], 
        'correctAnswer': 1 
    } 
    ]; 

    localStorage.setItem('questions', JSON.stringify(questions));

    var local = localStorage.getItem('questions');
    local = JSON.parse(local);

    var content = tmpl(html, {
            local: questions
            });
    
    $('[type=submit]').before(content); 

    $('.check').on('click', function () {
        $(this).parent().siblings().children().filter(':checked').removeAttr('checked');
    });  

    var submit = $('input[type="submit"]');
        submit.on('click', checkAnswer);

    function checkAnswer() {

        var choice = [];
        var testBlock = $('.testBlock');

        $('.testBlock input:checkbox:checked').each(function() {

            choice.push(+$(this).val());
            
        });
        var result = []; //результат теста для пользователя
        for(var i=0; i<local.length; i++){

            if (choice[i]) {
                var correctAnswer = questions[i].correctAnswer;
                if (choice[i] === correctAnswer) { //сравниваем с правильным ответом
                    result[i] = '<span style="color:#335673">Correct answer!</span>';
                
                } else {
                    result[i] = '<span style="color:red">Incorrect answer!</span>';
                };

            } else {
                result[i]='<span style="color:red">Incorrect answer!</span>';
            };
        };
      
        var modal = $('<div class="modal"><h1>Result Test</h1></div>');
        var wrap = $('.wrap');
        wrap.append(modal); // формируем модальное окно с результатами
          
        for (var j=0; j<testBlock.length; j++){

            var questDiv = $('<div class="questDiv">'+(j+1)+'.'+local[j].text+'</div>');
            modal.append(questDiv);
            var ansDiv = $('<div class="ansDiv">'+result[j]+'</div>');
            modal.append(ansDiv);

        }

        var reset = $('<a href="" id="reset">Exit</a>');
        modal.append(reset);
        var exit = $('#reset');

        function resetTest() {

            $('input:checkbox').prop('checked', false);//очищаем форму
            modal.remove();
            return false;

        };

        exit.on('click', resetTest);

        event.preventDefault();

    };

});


