var eventApp = angular.module('eventApp', ['ngRoute']);

eventApp.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: 'home.htm',
        controller: 'homeCtrl'
    })
        .when("/registration", {
            templateUrl: 'registration.htm',
            controller: 'registrationCtrl'
        })
        .when("/events", {
            templateUrl: 'events.htm',
            controller: 'eventCtrl'
        })
        .when("/gallery", {
            templateUrl: 'gallery.htm',
            controller: 'galleryCtrl'
        })
        .when("/logout", {
            templateUrl: 'logout.html',
        })
        .otherwise({ redirectTo: "/home" })
});
