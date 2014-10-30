angular.module('portfolioFilters', [])

    .filter('urlformat', function () {
        return function (value) {
            value = value.replace(/ /g, '-');
            return value.toLowerCase();
        };
    });
