function fib2(n) {
    var a = 1,
        b = 1;
    for (var i = 3; i <= n; i++) {
        var c = a + b;
        a = b;
        b = c;
    }
    return b;
}
console.log(fib2(3));
console.log(fib2(7));
console.log(fib2(77));