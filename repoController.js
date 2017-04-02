(function(){
  var git = angular.module("main");
  git.controller("repoController", ["$scope", "github", "$routeParams", repoController]);
  
  function repoController($scope, github, $routeParams){
    var repo = $routeParams.reponame;
    var user = $routeParams.username;
    
    github.getRepoDetails(user, repo)
      .then(function(data){
        $scope.repo = data;
      }, function(reason){
        $scope.error = reason;
      });
  }
}())