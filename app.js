(function(){
  var git = angular.module("main", ["ngRoute"]);
  git.config(function($routeProvider){
    $routeProvider
      .when("/main", {
        templateUrl: "main.html",
        controller: "MainCtrl"
      })
      .when("/user/:username", {
        templateUrl: "user.html",
        controller: "userController"
      })
      .when("/repo/:username/:reponame", {
        templateUrl: "repo.html",
        controller: "repoController"
      })
      .otherwise({redirectTo: "/main"});
  });
}());

git.config(['$locationProvider','$routeProvider', function($locationProvider,$routeProvider) {
  $locationProvider.hashPrefix('/');
}]);
