var app = angular.module('paginationTest', []);
app.controller('paginationCtrl', function($scope, $http){
    $http.get('data.json').then(function(response){
        $scope.myData = response.data.records;
        var myDataCount = $scope.myData.length;
        var paginationIndex = Math.ceil(myDataCount / 10);
        //console.log(paginationIndex);
    });
    $scope.paginationRange = function(pageNumber) {
        return 20;
        //1*10-10
        //2*10-10
        //this.pageNumber * 10 -10;
    };
    
    
});
