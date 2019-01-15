(function(){

var app = angular.module('universidadApp',[ ]);

app.controller('listadoCtrl', ['$scope', function($scope){
	
		
    $scope.listado=["Hector Mujica","Melissa Flores","Oscar Rodriguez","Mario Moreno","Chupa Melano"];

    $scope.listadoProfesores={
        profesores:[{
            nombre:"Fernando Herrera",
            edad:29,
            clase:"PEE"
        },{
            nombre:"Melissa Flores",
            edad:24,
            clase:"ICE"
        },{
            nombre:"Juan Carlos",
            edad:42,
            clase:"M110"
        }]
    };
}]);

})();
