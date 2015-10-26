/**
 * Created by MarinaK on 26.10.15.
 */

var make_lazy = function () {
    var arr = [], fn;

    for(var i = 0; i < arguments.length; i++) {
        if(typeof arguments[i] === 'function') {
            fn = arguments[i];
        }
        if(typeof arguments[i] === 'number') {
            arr.push(arguments[i]);
        }
    }

    return function(){
        return fn.apply(null, arr);
    }
};