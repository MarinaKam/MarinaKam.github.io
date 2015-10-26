/**
 * Created by MarinaK on 26.10.15.
 */
function createFunctions(n) {
    var callbacks = [];

    for (var i=0; i<n; i++) {
        callbacks[i]=function(j) {
            return function(){
                return j
            };
        }(i);
    }

    return callbacks;
}

var callback = createFunctions(5);

console.log(callback[3]());

