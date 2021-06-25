var n1 = angular.module('service1', []);
n1.factory('nrSvc', ['$http', function ($http) {
    var datum = {}
    var refresh = function () {
        $http.get('https://jsonplaceholder.typicode.com/todos/1').then(function (response) {
            datum = response.data;
        });
    };

    refresh();
    return { datum: datum };
}]);
