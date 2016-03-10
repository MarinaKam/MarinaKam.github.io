requirejs.config({
    paths: {
        'jquery': "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery"
    },
    shim: {
        'jquery': {
            exports: 'jQuery'
        }
    }
});

require(
    [
        'tmpl',
        'model',
        'view',
        'controller',
        'jquery'
    ],
    function(tmpl, Model, View, Controller, $) {
        console.log('$:', $);

        $(function () {
            var firstToDoList = ['num1', 'num2', 'num3', 'num4', 'num5'];
            var newModel = new Model(firstToDoList);
            console.log('newModel: ', newModel);
            var newView = new View(newModel);
            console.log('newView: ', newView);
            var newController = new Controller(newModel, newView);
            console.log('newController: ', newController);
        });

    }
);