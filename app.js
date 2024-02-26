var eventApp = angular.module('eventApp', ['ngRoute']);

eventApp.config(function ($routeProvider) {
    $routeProvider.when("/home", {
        templateUrl: 'views/home.htm',
        controller: 'homeCtrl'
    })
        .when("/registration", {
            templateUrl: 'views/registration.htm',
            controller: 'registrationCtrl'
        })
        .when("/events", {
            templateUrl: 'views/events.htm',
            controller: 'eventCtrl'
        })
        .when("/gallery", {
            templateUrl: 'views/gallery.htm',
            controller: 'galleryCtrl'
        })
        .when("/logout", {
            templateUrl: 'views/logout.html',
        })
        .otherwise({ redirectTo: "/home" })
});
