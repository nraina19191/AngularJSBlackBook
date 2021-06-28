var n1 = angular.module('serviceCollection', []);
n1.factory('WeatherService', ['$http', function ($http) {
    return {
        GetResult: function (callback) {
            $http.get('https://jsonplaceholder.typicode.com/todos/1').then(function (response) {
                callback(response.data);
            }, function () {
                callback('reject');
            })
        },

        GetResultWithPromise: new Promise(function (resolve, reject) {
            $http.get('https://jsonplaceholder.typicode.com/todos/1').then(function (response) {
                resolve(response.data);
            }, function () {
                reject('reject');
            })
        })
    }
}]);
