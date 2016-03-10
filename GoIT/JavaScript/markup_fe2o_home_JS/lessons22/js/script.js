var app = {
    pow: function (x, n) {
        var result = 1;

        for (var i = 0; i < n; i ++) {
            result *= x;
        }
        return result;
        console.log(pow (4, 4) );
    },
    log: function () {
        var arr = ['Andrew', 'Oleg', 'Ihor', 'Roman', 'Pavlo'];

        for (var i = 0; i < 5; i++) {

            for (j =  arr.length - 1; j >= 0; --j) {
                if (arrName == arr[j])
                    break;
            }
        }
    },
    dataTypeValue: function () {
        var a = [false, undefined, null, '', 0, NaN];

        for (var i = 0; i < a.length; i++) {

            for (var j = 0; j<a.length; j++) {
                if (a[i] == a[j]){
                    return true;
                } else{
                    return false;
                }
            }
        }
    }

}

try {
    module.exports = app;
} catch (e) {}