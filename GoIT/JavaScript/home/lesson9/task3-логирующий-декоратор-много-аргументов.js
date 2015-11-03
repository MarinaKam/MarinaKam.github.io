/**
 http://learn.javascript.ru/decorators#логирующий-декоратор-много-аргументов */
function work(a, b) {
    console.log( a + b ); // work - произвольная функция
}

function makeLogging(f, log) {

    function wrapper() {
        log.push([].slice.call(arguments));
        return f.apply(this, arguments);
    }

    return wrapper;
}

var log = [];
work = makeLogging(work, log);

work(1, 2); // 3
work(4, 5); // 9

for (var i = 0; i < log.length; i++) {
    var args = log[i];
    console.log( 'Лог:' + args.join() ); // "Лог:1,2", "Лог:4,5"
}
