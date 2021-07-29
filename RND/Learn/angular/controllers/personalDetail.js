function PersonalDetailController($scope, $element, $attrs) {
    var ctrl = this;
    ctrl.name = "";
    ctrl.address = "";
    ctrl.updateDetail = function (personalDetail) {
        ctrl.onUpdateDetail({ personalDetail: { name: ctrl.name, address: ctrl.address, work: personalDetail.work, exp: personalDetail.exp } });
    }
}

var ang = angular.module("compApp");
ang.component('personalDetail', {
    controller: PersonalDetailController,
    templateUrl: '/angular/templates/personalDetail.html',
    bindings: {
        name: '@',
        address: '@',
        onUpdateDetail: '&'
    }
});
