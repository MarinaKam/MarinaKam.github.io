function factorial(n){
    var product = 1;
    while(n>1){
        product *=n;
        n--;
    }
    return product;
}
factorial(4);
console.log(factorial(4));

function factorial2(n){
    var i= 2, product = 1;
    for (; i <= n; i++) {
        product *= i;
    }
    return product;
}

console.log(factorial2(4));

function factorial3(n) {
    return n ? n * factorial(n - 1) : 1;
}

function factorial4(n) {
    return (n != 1) ? n * factorial(n - 1) : 1;
}

console.log(factorial3(4));
console.log(factorial4(4));