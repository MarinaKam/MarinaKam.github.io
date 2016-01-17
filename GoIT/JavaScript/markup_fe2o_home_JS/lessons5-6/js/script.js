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
		var even = ['myStartTimer()', 'myStopTimer()', 'myResetTimer()'];
		for (var i = 0; i < buttons; i++) {
			this.createElement({
				tagName: 'button',
				buttonType: 'button',
				className: 'but' + (i + 1),
				value: '',
				buttonOnclick: even[i],
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
	content: '<span id="h">00</span>:<span id="min">00</span>:<span id="sec">00</span><span id="ms">0</span>',
	parentElement: div
});

var form = app.createElement({	
	tagName: 'form',
	parentElement: div
});

app.createButtons(3, 3);

var timer;
var h = 0;
var min = 0;
var sec = 0;
var ms = 0;


function myStartTimer() {
	if (typeof timer != 'undefined')
        clearInterval(timer);

	timer = setInterval(function() {
		ms += 1;

            if (ms === 100) {
                sec++;
                ms = 0;
            }

            if (sec === 60) {
                min++;
                sec = 0;
            }

            if (min === 60) {
                h++;
                min = 0;
            }           

           if (h === 24) {
                h = 0;
            }

            millisecond();

    },10);

}

function millisecond() {

    document.getElementById('ms').innerHTML = ms < 10 ? "0" + ms : ms;
    document.getElementById('sec').innerHTML = sec < 10 ? "0" + sec : sec;
    document.getElementById('min').innerHTML = min < 10 ? "0" + min : min;
    document.getElementById('h').innerHTML = h < 10 ? "0" + h : h;

}


function myStopTimer() {
	clearInterval(timer);
}

function myResetTimer() {
  clearInterval(timer);
  ms = sec = min = h = 0;
  myStopTimer();
  millisecond();
  timer = 0;
}



