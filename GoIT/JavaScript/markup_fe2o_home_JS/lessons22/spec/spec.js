var app = require('../js/script.js');

describe("App", function() {
    it("Pow x to n", function() {
        //prepare
        var result;

        //act
        result = app.pow(4, 4);

        //assert
        expect(result).toEqual(256);
    });

    it("User name to log in", function() {
        //prepare
        var result, arr, arrName;

        //act
        result = app.log(arr);

        beforeEach(function() {
            arrName = 'Andrew';
        });

        //assert
        expect(result).toEqual(arrName);
    });

    it("Data type value", function() {
        //prepare
        var result, a;

        //act
        result = app.dataTypeValue(a);

        //assert
        expect(result).toEqual(true);
    });
});