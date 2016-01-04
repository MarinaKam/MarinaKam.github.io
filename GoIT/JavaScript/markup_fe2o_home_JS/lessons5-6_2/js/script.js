var app = {
	createElement: function(params) {
		var element = document.createElement(params.tagName);

		if (params.tagName){
			element.tagName = params.tagName;
		}

		if (params.id) {
			element.id = params.id;
		};

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
		if (params.buttonType){
			element.setAttribute('type', params.buttonType);
		}
		if (params.buttonOnclick) {
			element.setAttribute('onclick', params.buttonOnclick);
		};

		return element;
	},
	createButtons: function(buttons){
		var arr = ['Start', 'Pause', 'Reset'];
		for (var i = 0; i < buttons; i++) {
			this.createElement({
				tagName: 'button',
				buttonType: 'button',
				className: 'but' + (i + 1),
				value: '',
				buttonOnclick: 'onClickEven()',
				content: arr[i],
				parentElement: form
			});
		}
	}
};


var body = document.querySelector('body');

var div = app.createElement({
	tagName: 'div',
	className: 'wrap',
	parentElement: body
});

app.createElement({
	tagName: 'h1',
	content: 'My first TIMER',
	parentElement: div
});

app.createElement({
	tagName: 'div',
	id: 'timerDemo',
	content: '00:00:00<span>00</span>',
	parentElement: div
});

var form = app.createElement({
	tagName: 'form',
	parentElement: div
});

app.createButtons(3, 3);

var t;
var init = 0;
var h = 0;
var m = 0;
var s = 0;
var ms = 0;

function myStopTimer() {
  init = 1;
}

function myStartTimer() {
  init++;
  if (init == 1) {
    setInterval(function(){
      if (init == 0) ms++;
      if (ms>=100){
        s++;
        ms%=100;
      }
      if (s>=60) {
        m++;
        s%=60;
      }
      if (m>=60) {
        h++;
        m%=60;
      }
      if (init == 0) 
        t = document.getElementById('timerDemo'); 
        t.innerHTML = (h-h%10)/10 + '' + h%10 + ':' + (m-m%10)/10 + '' + m%10 + ':' + (s-s%10)/10 + s%10  + '<span>' + (ms-ms%10)/10 + ms%10 + '</span>';},10); 
      }     
    init = 0; 
} 

function myResetTimer() {
  ms = s = m = h = 0;
  clearInterval(myStartTimer());
  document.getElementById('timerDemo').innerHTML = '00:00:00<span>00</span>';
  myStopTimer();
}

function onClickEven() {
	document.querySelector('.but1').onclick = function() {myStartTimer()};
	document.querySelector('.but2').onclick = function() {myStopTimer()};
	document.querySelector('.but3').onclick = function() {myResetTimer()};
}




