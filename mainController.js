(function() {
  var git = angular.module("main");
  git.controller("MainCtrl", ["$scope", "$interval", "$location", MainCtrl]);

  function MainCtrl($scope, $interval, $location) {
    $scope.searchValue = "angular";
    $scope.countDown = 10;

    $scope.search = function(username) {
      if(countDownInterval){
        $interval.cancel(countDownInterval);
        $scope.countDown = null;
      }
      $location.path("/user/"+username);
    };
    
    var automaticSearch = function(){
      $scope.countDown -= 1;
      if ($scope.countDown < 1){
        $scope.search($scope.searchValue);
      }
    };
    
    var countDownInterval = null;
    var startCountDown = function(){
     countDownInterval = $interval(automaticSearch, 1000, $scope.countDown);
    };
    startCountDown();
  }
}());