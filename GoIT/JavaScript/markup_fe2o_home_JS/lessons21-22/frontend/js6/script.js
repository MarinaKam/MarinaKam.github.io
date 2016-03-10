/*jshint globalstrict: true*/

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

let local = localStorage.getItem('questions');
local = JSON.parse(local);

let content = tmpl(html, {
    local: questions
});

$('[type=submit]').before(content);

$('.check').on('click', function() {
    $(this).parent().siblings().children().filter(':checked').removeAttr('checked');
});

let submit = $('input[type="submit"]');
submit.on('click', checkAnswer);



function checkAnswer(e) {

    let testBlock = $('.testBlock');
    var inputs = $('input:checkbox');

    var rightAnswers = [];
    for (let i in local) {
        rightAnswers.push(questions[i].correctAnswer);
    }

    var choice = [];
    inputs.each(function() {
        if ($(this).prop('checked')) {
            choice.push(+$(this).val());
        } else {
            choice.push(0);
        }
    });

    let firstAnswer = choice.slice(0, 3);
    let secondAnswer = choice.slice(3, 6);
    let thirdAnswer = choice.slice(6, 9);

    var choiceResult = [];

    function getSumResult(arr) {
        var sum = 0;
        for (let i in arr) {
            sum = sum + parseInt(arr[i]);
        }
        return sum;

    }

    let first = getSumResult(firstAnswer);
    let second = getSumResult(secondAnswer);
    let third = getSumResult(thirdAnswer);

    var getChoiceResult = (q) => choiceResult.push(q);

    getChoiceResult(first);
    getChoiceResult(second);
    getChoiceResult(third);

    var result = []; //результат теста для пользователя
    for (let z = 0; z < rightAnswers.length; ++z) {
        if (rightAnswers[z] == choiceResult[z]) {
            result[z] = '<span style="color:#335673">Correct answer!</span>';
        } else {
            result[z] = '<span style="color:red">Incorrect answer!</span>';
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

    function resetTest() {

        $('input:checkbox').prop('checked', false); //очищаем форму
        modal.remove();
        return false;

    }

    reset.on('click', resetTest);

    e.preventDefault();

}