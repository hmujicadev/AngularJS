app.config( function($routeProvider){

    $routeProvider
    .when('/',{
        templateUrl : 'parciales/home.html'
    })
    .when('/alumnos',{
        templateUrl : 'parciales/alumnos.html',
        controller: 'alumnosCtrl.js'
    })
    .when('/profesores',{
        templateUrl : 'parciales/profesores.html',
        controller: 'profesoresCtrl.js'
    })
    .otherwise({

        redirectTo: '/'
    });

})