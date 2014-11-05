angular.module('portfolioListDirectives', [])

    .directive('process', ['$http', '$templateCache', '$compile',
               function ($http, $templateCache, $compile) {
        return {
            restrict: 'E',
            transclude: true,
            link: function (scope, el, attr) {
                console.log("pre");
                $http.get('templates/process/' + scope.portfolioId + '.html',
                      { cache: $templateCache })
                .success(function (html) {
                    var compiled = $compile(html)(scope);
                    el.append(compiled);
                });

            }
        };
    }])

    .directive('about', [function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/about.html',
        };
    }])

    .directive('surroundingProjects', [function () {
        return {
            restrict: 'E',
            templateUrl: 'templates/surroundingProjects.html'
        };
    }]);
