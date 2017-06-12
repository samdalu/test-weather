var myApp = angular.module('SalApp', []);
myApp.controller('MyCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.area = "";

  $scope.ken = function(){
  $http.get("https://api.apixu.com/v1/current.json?key=5643fddbf82c4e0591a65846171106&q="+$scope.area).then(doneCallbacks, failCallbacks);
      function doneCallbacks(res) {
        console.log("Data received");
        console.log(res.data);
        $scope.CountryData = res.data;
      }
      function failCallbacks(err) {
    console.log(err.message);
      }
    };
	$scope.dshow=false;


}]);
