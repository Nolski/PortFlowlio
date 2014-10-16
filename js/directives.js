var portfolioListDirectives = angular.module('portfolioListDirectives', []);

portfolioListDirectives

    .directive('process', ['$http', '$templateCache', function ($http, $templateCache) {
        return {
            restrict: 'E',
            link: function (scope, el, attr) {
                $http.get('templates/process/' + scope.portfolioId + '.html',
                          { cache: $templateCache })
                    .success(function (html) {
                        el.replaceWith(html);
                    });
            }
        };
    }]);
