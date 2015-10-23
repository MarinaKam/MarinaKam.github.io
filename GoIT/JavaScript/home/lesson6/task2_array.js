/**
 *Есть массив строк arr. Создайте массив arrSorted — из тех же элементов, но отсортированный.
 */
var arr = ['HTML', 'JavaScript', 'CSS'];

var arrSorted = arr.concat ();

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
}

arrSorted.sort(compareNumeric);

console.log( arrSorted ); // CSS, HTML, JavaScript
console.log( arr ); // HTML, JavaScript, CSS (без изменений)
