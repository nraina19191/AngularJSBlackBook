function ProfessionalDetailController($scope, $element, $attrs) {
    this.work = "";
    this.exp = "";
    this.updateDetail = function () {
        this.onUpdateDetail({ personalDetail: { work: this.work, exp: this.exp } });
    }
}

var ang = angular.module("compApp");
ang.component('profDetail', {
    controller: ProfessionalDetailController,
    templateUrl: '/angular/templates/profDetail.html',
    bindings: {
        work: '@',
        exp: '@',
        onUpdateDetail: "&"
    }
});
