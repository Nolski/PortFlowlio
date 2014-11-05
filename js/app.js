angular.module('portfolioApp', ['ui.router', 'sticky', 'portfolioListControllers', 'portfolioListDirectives', 'portfolioFilters'])

    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        $urlRouterProvider.when('/work', '/');

        $stateProvider
            .state('home', {
                url: '/',
                views: {
                    'header': {
                        'templateUrl': 'templates/header1.html',
                        'controller': function ($scope) {
                            $scope.work = true;
                        }
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
