var ang = angular.module("compApp", []);
ang.controller('MainController', ['$scope', function ($scope) {
    this.db = []; //[{ name: 'Test', address: 'TEST ADD' }];
    this.updateMainData = function (personalDetail) {
        if (!personalDetail)
            return;
        this.db.push(personalDetail);
    }
}]);