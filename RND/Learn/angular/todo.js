var ang = angular.module("app1", ['service1']);
ang.directive("nr", function () {
    return {
        scope: {
            nhtml: '@'
        },
        template: "<span>{{nhtml}}</span>"
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
ang.controller("TodoController", ['$location', '$http', 'nrSvc', '$scope', function ($location, $http, nrSvc, $scope) {
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

    $scope.apidata = nrSvc.datum;
}]);