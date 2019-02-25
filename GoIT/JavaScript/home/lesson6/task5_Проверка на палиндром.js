/**
 Палиндром - это строка которая читается с обоих сторон одинаково.
 Например: Анна, оно, А роза упала на лапу Азора.
 Необходимо написать функцию isPal(string) которая возвращает true или false в зависимости от того является ли
 строка палиндромом или нет. */
function isPal(str) {
    str = str.split(" ").join("").toLowerCase();
    let strReverse = str.split("").reverse().join("").toLowerCase();
    return strReverse === str;
}

console.log(isPal('Anna')); // true
console.log(isPal('А роза упала на лапу Азора')); //true
console.log(isPal('Вася')); //false
console.log(isPal('12321')); //true
console.log(isPal('123212')); //false
