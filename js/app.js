var portfolioApp = angular.module('portfolioApp', ['ui.router']);

portfolioApp.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
        .state('home', {
            url: '/',
            views: {
                'header': {
                    'templateUrl': 'templates/header1.html',
                },
                'content': {
                    'templateUrl': 'templates/content1.html',
                },
                'footer': {
                    'templateUrl': 'templates/footer1.html'
                }
            }
        })

        .state('work', {
            url: '/work',
            // add template
        })
});
