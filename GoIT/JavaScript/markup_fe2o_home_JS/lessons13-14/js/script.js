
'use strict';

var html = $('#test').html();
console.log(html);

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

var local = {};
for (var key in questions){

	localStorage.setItem('answersAndQuestion[key]', JSON.stringify(questions[key]));      
	local[key] = localStorage.getItem('answersAndQuestion[key]');                        
	local[key] = JSON.parse(local[key]);

}

var content = tmpl(html, local);  
$('[type=submit]').before(content); 

$('.check').on('click', function () {
    $(this).parent().siblings().children().filter(':checked').removeAttr('checked');
});  

var submit = $('input[type="submit"]');
    submit.one('click', checkAnswer);





var pos = 0, test, test_status, question, choice, choices, chA, chB, chC, correct = 0;
	choices = document.getElementsByName("choices");

	console.log(choices);

function checkAnswer() {
	var $testBlock = $('.testBlock');
	var choiceAnswer = [];  // для выбранных ответов

	$('')


	
console.log(choiceAnswer);
}



