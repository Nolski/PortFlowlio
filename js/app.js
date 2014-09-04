var portfolioApp = angular.module('portfolioApp', ['ui.router']);

portfolioApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            templateUrl: 'templates/landing-page.html'
        })

        .state('work', {
            url: '/work',
            // add template
        })
});
