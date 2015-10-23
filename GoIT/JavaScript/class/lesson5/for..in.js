function isEmpty(obj) {
    for (var key in obj){
        return false
    } return true;
}

var todolist = {};

console.log( isEmpty(todolist) );

todolist['homework'] = 'lesson5';

console.log( isEmpty(todolist) );