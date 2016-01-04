var app = {
	createElement: function(params) {
		var element = document.createElement(params.tagName);

		if (params.inputType){
			element.setAttribute('type', params.inputType);
		}

		if (params.className){
			element.className = params.className;
		}

		if (params.content){
			element.innerHTML = params.content;
		}

		if (params.parentElement) {
			params.parentElement.appendChild(element);
		}
		if (params.value) {
			element.value = params.value;
		}

		return element;
	},
	createQuestions: function (questionsAmount, answersAmount) {

		for (var i = 0; i < questionsAmount; i++) {
			this.createElement({
				tagName: 'h2',
				content: (i + 1) + '. Вопрос №' + (i + 1),
				parentElement: form
			});
			for (var j = 0; j < answersAmount; j++) {
				var label = this.createElement({
					tagName: 'label',
					//content: '<input type="checkbox" /> Вариант ответа №' + (j + 1),
					content: ' Вариант ответа №' + (j + 1),
					parentElement: form
				});
				var checkbox = this.createElement({
					tagName: 'input',
					inputType: 'checkbox'
				});

				label.insertAdjacentElement('afterBegin', checkbox)	
			};
		};
	}
}

var body = document.querySelector('body');

app.createElement({
	tagName: 'h1',
	content: 'Тест по программированию',
	parentElement: body
});
var form = app.createElement({
	tagName: 'form',
	parentElement: body
});

app.createQuestions(3, 3);

app.createElement({
	tagName: 'input',
	className: 'b-button',
	inputType: 'submit',
	value: 'Проверить мои результаты',
	parentElement: form
});

