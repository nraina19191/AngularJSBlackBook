function PersonalDetailController($scope, $element, $attrs) {
    var ctrl = this;
    ctrl.name = "";
    ctrl.address = "";
    ctrl.updateDetail = function () {
        let personalDetail = { name: ctrl.name, address: ctrl.address };
        ctrl.onUpdateDetail({ personalDetail: { name: ctrl.name, address: ctrl.address } });
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
