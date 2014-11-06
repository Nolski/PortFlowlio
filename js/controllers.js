angular.module('portfolioListControllers', ['portfolioFilters'])

    .controller('portfolioListController', ['$scope', '$http', function ($scope, $http) {
        $scope.workPage = true;
        $http.get('data/projects.json')
            .success(function (data) {
                $scope.portfolios = data;
            })
            .error(function (data, status) {
                console.err("Something went wrong while getting projects.json");
            });
    }])

    .controller('processController', ['$scope', '$stateParams', '$http', 'urlformatFilter',
        function ($scope, $stateParams, $http, urlformat) {
            $scope.portfolioId = $stateParams.portfolioId;

            $http.get('data/projects.json')
                .success(function (data) {
                    for(var i = 0; i < data.length; i++) {
                        console.log(urlformat(data[i].title), $scope.portfolioId);
                        if(urlformat(data[i].title) == $scope.portfolioId) {
                            var surrounding = getNextPortfolios(data, i);
                            $scope.previousPortfolio = surrounding[0];
                            $scope.nextPortfolio = surrounding[1];
                            console.log($scope.previousPortfolio, $scope.nextPortfolio);
                            return;
                        }
                    }
                })
                .error(function (data, status) {
                    console.err(
                        "Something went wrong while getting projects.json");
                });
        }]
    );


function getNextPortfolios(portfolios, i) {
    console.log('i', i);
    if(i === 0) {
        return [ portfolios[portfolios.length - 1], portfolios[i + 1] ];
    } else if (i === portfolios.length - 1){
        return [ portfolios[i - 1], portfolios[0] ];
    } else {
        return [ portfolios[i - 1], portfolios[i + 1] ];
    }
}
