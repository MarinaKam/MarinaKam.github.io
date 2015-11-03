/**
 http://learn.javascript.ru/call-apply#примените-функцию-к-аргументам */
function  applyAll(f){

    var args = [].slice.call(arguments, 1);

    return f.apply(null, args);
}
function sum() {
    return [].reduce.call(arguments, function(a, b) {
        return a + b;
    });
}

function mul() {
    return [].reduce.call(arguments, function(a, b) {
        return a * b;
    });
}

console.log( applyAll(sum, 1, 2, 3) );
console.log( applyAll(mul, 2, 3, 4) );
