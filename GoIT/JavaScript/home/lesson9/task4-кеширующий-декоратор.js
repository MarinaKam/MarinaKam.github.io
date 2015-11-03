/**
 http://learn.javascript.ru/decorators#кеширующий-декоратор
 */
function f(x) {
    return Math.random() * x;
}

function makeCaching(f) {
    var obj= {};
    return function(x) {
        if(!(x in obj)){
            obj[x] = f.apply(this, arguments);
        }
        return obj[x];
    }

    return wrapper;
}

f = makeCaching(f);

var a, b;

a = f(1);
b = f(1);
console.log( a == b );

b = f(2);
console.log( a == b );
