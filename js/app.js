var portfolioApp = angular.module('portfolioApp', ['ui.router', 'sticky', 'portfolioListControllers', 'portfolioListDirectives']);

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
                    'controller': 'portfolioListController',
                },
                'footer': {
                    'templateUrl': 'templates/footer1.html',
                }
            }
        })

        .state('work', {
            url: '/work/:portfolioId',
            views: {
                'header': {
                    'templateUrl': 'templates/header1.html',
                },
                'content': {
                    'controller': 'processController',
                    'templateUrl': 'templates/process.html',
                },
                'footer': {
                    'templateUrl': 'templates/footer1.html',
                }
            }
        });
});


portfolioApp.filter('urlformat', function () {
    return function (value) {
        value = value.replace(/ /g, '-');
        return value.toLowerCase();
    };
});
