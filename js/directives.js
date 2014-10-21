var portfolioListDirectives = angular.module('portfolioListDirectives', []);

portfolioListDirectives

    .directive('process', ['$http', '$templateCache', '$compile',
               function ($http, $templateCache, $compile) {
        return {
            restrict: 'E',
            link: function (scope, el, attr) {
                $http.get('templates/process/' + scope.portfolioId + '.html',
                          { cache: $templateCache })
                    .success(function (html) {
                        console.log($compile(html)(scope));
                        el.replaceWith(html);
                    });
            }
        };
    }])

    .directive('about', [function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/about.html',
        };
    }]);
