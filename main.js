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

    $scope.paginationRange = function(pageNumber) {

      console.log(pageNumber);
        //return 20;
        //alert('ok');
        //console.log('okok')
        //0*10
        //1*10
        //this.pageNumber * 10;
    };


});
