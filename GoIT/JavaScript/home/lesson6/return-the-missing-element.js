function getMissingElement(superImportantArray){
    for(var i = 0; i < 10; i++){
        if(superImportantArray.indexOf(i) < 0){
            return i;}
    }
}

console.log(getMissingElement( [9,2,4,5,7,0,8,6,1]));