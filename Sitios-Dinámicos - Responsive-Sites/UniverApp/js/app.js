var app = angular.module('universidadApp',['ngRoute']);

app.controller('mainCtrl', ['$scope','$http', function($scope,$http){
  
    $scope.menuSuperior= 'parciales/menu.html';

    $scope.prueba= function(){
        console.log('prueba');
    }

    $scope.setActive= function(Opcion){

        $scope.mHome      = "";
        $scope.mProfesores  = "";
        $scope.mAlumnos     = "";

        $scope[Opcion] = "active";
    };

}]);