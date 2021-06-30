var ang = angular.module("app1", ['serviceCollection']);
ang.directive("nr", function () {
    return {
        scope: {
            nhtml: '@'
        },
        template: "<span>{{nhtml}}</span>"
    };
});

ang.directive("validatePie", function () {
    return {
        require: 'ngModel',
        link: function (scope, element, attr, ctrl) {
            function myVal(value, a, b) {
                if (value == '3.14') {
                    ctrl.$setValidity('pieV', true);
                }
                else {
                    ctrl.$setValidity('pieV', false);
                }

                return value;
            }

            ctrl.$parsers.push(myVal);
        }
    };
});

ang.filter("upr", function () {
    return function (x) {
        return x.toUpperCase();
    }
});

/*
Use custom directives to manipulate DOM

Custom directives - The legal restrict values are:

app.directive("directive_name", function(){
    return {
        restrict:'E',
        transclude:true,
        scope: {
         title: '@'
        },
        template:'<div class="title"><h2>{{title}}</h2></div>',
        replace:true
    }; 
})

E for Element name
A for Attribute
C for Class
M for Comment
*/
ang.controller("TodoController", ['$location', '$http', 'WeatherService', '$scope', '$window', function ($location, $http, weatherService, $scope, win) {
    $scope.todos = [{ text: 'Learn Angular', done: false }, { text: 'Build an App', done: false }];
    $scope.totalTodos = $scope.todos.length;
    $scope.addTodo = function () {
        if ($scope.addNewTodoInput.trim() == '')
            return;
        $scope.todos.push({ text: $scope.addNewTodoInput, done: false });
        $scope.addNewTodoInput = '';
    }

    $scope.clearCompletedTodos = function () {
        $scope.todos = $scope.todos.filter(function (o) { return !o.done; });
    }

    $scope.currentLocation = $location.absUrl();
    $scope.apidata = 'loading API data ....';

    weatherService.GetResult(function (data) {
        $scope.apidata = data;
    });

    var t = weatherService.GetResultWithPromise;
    t.then(function (data) {
        $scope.apidatapr = data;
    }, function (data) {
        $scope.apidatapr = 'reject';
    });

    $scope.cars = [
        {
            Model: '-Select-',
            Type: ''
        }, {
            Model: 'Ford',
            Type: 'SUV'
        }, {
            Model: 'Honda',
            Type: 'Sedan'
        }];

    $scope.currentCar = '';
    $scope.allowTermAction = function ($event) {
        win.alert('bloop');
    }

    $scope.countevent = 0;
    $scope.$on('Events', function () {
        $scope.countevent++;
    });

    /*
    Here is the explanation of how the Hello world example achieves the data-binding effect when the user enters text into the text field.

    During the compilation phase:
    the ng-model and input directive set up a keydown listener on the <input> control.
    the interpolation sets up a $watch to be notified of name changes.
    During the runtime phase:
    Pressing an 'X' key causes the browser to emit a keydown event on the input control.
    The input directive captures the change to the input's value and calls $apply("name = 'X';") to update the application model inside the AngularJS execution context.
    AngularJS applies the name = 'X'; to the model.
    The $digest loop begins
    The $watch list detects a change on the name property and notifies the interpolation, which in turn updates the DOM.
    AngularJS exits the execution context, which in turn exits the keydown event and with it the JavaScript execution context.
    The browser re-renders the view with the updated text.
    */

}]);
