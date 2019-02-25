function getMissingElement(arr){
    for(let i = 1; i < arr.length; i++){
        if(arr.indexOf(i) < 0){
            return i;
        }
    }
}

console.log(getMissingElement( [9,2,4,5,0,8,7,6,1]));
console.log(getMissingElement( [5, 1, 4, 2]));
console.log(getMissingElement( [2, 3, 4]));
console.log(getMissingElement( []));