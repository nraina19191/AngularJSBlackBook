var ang = angular.module("compApp", ["ui.router"]);
ang.config(['$urlRouterProvider', '$stateProvider', function ($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider.state('home', {
        url: "/",
        templateUrl: "angular/templates/home.html",
        controller: "MainController"
    }).state('about', {
        url: "/about",
        templateUrl: "angular/templates/about.html",
        controller: ["$scope", function ($scope) {
            $scope.title = "About";
        }]
    });
}]);

ang.controller('MainController', ['$scope', function ($scope) {
    $scope.title = "Home";
    $scope.db = []; //[{ name: 'Test', address: 'TEST ADD' }];
    $scope.updateMainData = function (personalDetail) {
        if (!personalDetail)
            return;
        $scope.db.push(personalDetail);
    }
}]);