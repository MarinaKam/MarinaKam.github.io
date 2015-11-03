/**
 http://www.codewars.com/kata/unpacking-arguments  */
function spread(func, args) {
    return func.apply(this, args);
}
