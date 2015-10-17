function truncate(str, maxlength){

    return (str.length > maxlength) ?
    str.slice(0, maxlength - 3) + '...' : str;
}

console.log(truncate('Напишите функцию, которая принимает на вход строку и возвращает ее неизменной', 20));