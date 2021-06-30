/*Service*/
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

n1.factory('currencyCodeClient', ['$http', function ($http) {
    return {
        GetAllCurrencyCodes: function(caller, callback) {
            return $http.get('https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies.json').then(function (response) {
                callback(response.data, caller);
            }, function () {
                callback('reject', caller);
            })
        }
    }
}]);
