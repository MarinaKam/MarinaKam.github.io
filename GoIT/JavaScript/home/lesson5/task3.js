var numbers = [];
do {
    var number = prompt('Пожалуйста введите число больше',0);
    if (number === null || number === "" || isNaN(number)){
        break;
    }
    numbers.push(+number);
} while(number);
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}

alert( sum );