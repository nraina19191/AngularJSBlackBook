function ProfessionalDetailController($scope, $element, $attrs) {
    this.work = "";
    this.exp = "";
}

var ang = angular.module("compApp");
ang.component('profDetail', {
    controller: ProfessionalDetailController,
    templateUrl: '/angular/templates/profDetail.html',
    bindings: {
        work: '@',
        exp: '@'
    }
});
