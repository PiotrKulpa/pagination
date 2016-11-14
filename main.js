var app = angular.module('paginationTest', []);
app.controller('paginationCtrl', function($scope, $http){
    $http.get('data.json').then(function(response){
        $scope.myData = response.data.records;
        var myDataCount = $scope.myData.length;
        var paginationIndex = Math.ceil(myDataCount / 10);

        $scope.paginationData = [];
        for(i=0; i<paginationIndex; i++){
          $scope.paginationData.push(i);
        };

    });
    $scope.n = 0;
    $scope.paginationRange = function(pageNumber) {
    $scope.n = pageNumber * 10;
    };
});
