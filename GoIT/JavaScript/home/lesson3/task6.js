var pow = function(x, n) {
    for (var i = 2; i <= n; i++) {
        x *= x;
    }
    return x;
};
console.log(pow(3,2));
console.log(pow(1,100));