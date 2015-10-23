var tasksCompleted = {
    'Anna': 29,
    'Serg': 50,
    'Elena': 11,
    'Anton': 99
};
var max=0;
for (var key in tasksCompleted){

    if (tasksCompleted[key]>max){
        max=tasksCompleted[key];
    }
}
console.log(max);