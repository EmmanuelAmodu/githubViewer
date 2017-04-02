(function() {
  var main = angular.module("main");
  main.controller("userController", ["$scope", "github", "$routeParams", userController]);

  function userController($scope, github, $routeParams) {
    $scope.searchValue = $routeParams.username;
    $scope.repoSortOrder = "-stargazers_count";
    github.getUser($scope.searchValue).then(onSuccess, onError);

    function onSuccess(data) {
      delete $scope.err;
      $scope.user = data;
      github.getRepos($scope.user.repos_url).then(onRepos, onError);
    }

    function onRepos(response) {
      $scope.repos = response;
    }

    function onError(err) {
      delete $scope.user;
      $scope.err = "could not fetch data.";
    }
  }
}());