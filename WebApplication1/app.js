'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', ['myApp.controllers', 'myApp.services', 'ngRoute']);

angular.module('myApp.controllers', []);
angular.module('myApp.services', []);

myApp.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.otherwise({ redirectTo: '/view1' });
    $routeProvider.when('/view2', {
        templateUrl: 'views/result.html',
        controller: 'View2Ctrl'
    });
    $routeProvider.when('/view1', {
        templateUrl: 'views/search.html',
        controller: 'View1Ctrl'
    });
}]);
