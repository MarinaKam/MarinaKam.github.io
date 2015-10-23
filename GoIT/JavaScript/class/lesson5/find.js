//Создайте функ кот ищет в массиве arr значение value и возвращает его позицию, если найдено, или
//-1 , если не найдено
function find(arr, value){
    for(var i = 0; i < arr.length; i++){
        if (arr[i] === value){
            return i;
        }
    }
    return -1;
}

var array = [1,2,3,4];
console.log(find(array, 3));