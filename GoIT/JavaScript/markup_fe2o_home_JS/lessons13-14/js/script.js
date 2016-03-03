$(function() {

    'use strict';

    var html = $('#test').html();

    var questions = [{
        'id': 1,
        'text': 'What is HTML?',
        'answers': [
            'How To Make Landingpage',
            'Hypertext Markup Language',
            'Objective Programming Language'
        ],
        'correctAnswer': 1
    }, {
        'id': 2,
        'text': 'What is CSS?',
        'answers': [
            'Censor Sold Solar System',
            'Central Sugar Station',
            'Cascading Style Sheets'
        ],
        'correctAnswer': 2
    }, {
        'id': 3,
        'text': 'What is JavaScript?',
        'answers': [
            'Analog of Java with more functions',
            'High-level interpreted programming language',
            'Language of Javas in Star Wars'
        ],
        'correctAnswer': 1
    }];

    localStorage.setItem('questions', JSON.stringify(questions));

    var local = localStorage.getItem('questions');
    local = JSON.parse(local);

    var content = tmpl(html, {
        local: questions
    });

    $('[type=submit]').before(content);

    $('.check').on('click', function() {
        $(this).parent().siblings().children().filter(':checked').removeAttr('checked');
    });

    var submit = $('input[type="submit"]');
    submit.on('click', checkAnswer);



    function checkAnswer(e) {

        var testBlock = $('.testBlock');

        var result = []; //результат теста для пользователя
        var $inputs = $('input:checkbox');

        var rightAnswers = [];

        for (var z = 0; z < local.length; z++) {

            rightAnswers.push(questions[z].correctAnswer);
        }

        var choice = [];
        $inputs.each(function() {
            if ($(this).prop('checked')) {
                choice.push(+$(this).val());
            } else {
                choice.push(0);
            }
        });

        var $firstAnswer = choice.slice(0, 3);
        var $secondAnswer = choice.slice(3, 6);
        var $thirdAnswer = choice.slice(6, 9);

        var choiceResult = [];

        function getSumResult(arr) {
            var sum = 0;
            for (var i = 0; i < arr.length; i++) {
                sum = sum + parseInt(arr[i]);
            }
            return sum;

        }

        var first = getSumResult($firstAnswer);
        var second = getSumResult($secondAnswer);
        var third = getSumResult($thirdAnswer);

        function getChoiceResult(q) {
            choiceResult.push(q);
        }
        getChoiceResult(first);
        getChoiceResult(second);
        getChoiceResult(third);

        for (var i = 0; i < rightAnswers.length; ++i) {
            if (rightAnswers[i] == choiceResult[i]) {
                result[i] = '<span style="color:#335673">Correct answer!</span>';
            } else {
                result[i] = '<span style="color:red">Incorrect answer!</span>';
            }
        }

        var modal = $('<div class="modal"><h1>Result Test</h1></div>');
        var wrap = $('.wrap');
        wrap.append(modal); // формируем модальное окно с результатами

        for (var j = 0; j < testBlock.length; j++) {

            var questDiv = $('<div class="questDiv">' + (j + 1) + '.' + local[j].text + '</div>');
            modal.append(questDiv);
            var ansDiv = $('<div class="ansDiv">' + result[j] + '</div>');
            modal.append(ansDiv);

        }

        var reset = $('<a href="" id="reset">Exit</a>');
        modal.append(reset);
        var exit = $('#reset');

        function resetTest() {

            $('input:checkbox').prop('checked', false); //очищаем форму
            modal.remove();
            return false;

        }

        exit.on('click', resetTest);

        e.preventDefault();

    }

});