(function(){
  var module = angular.module("main");
  module.factory('github', function($http, $log) {
    var getUser = function(username){
     return $http.get("https://api.github.com/users/" + username)
          .then(function(response){
            return response.data;
          });
    };
    var getRepos = function(user){
      return $http.get(user)
        .then(function(response){
            return response.data;
        });
    };
    var getRepoDetails = function(user, repo){
      var url = "https://api.github.com/repos/" + user + "/" + repo;
       return $http.get(url)
          .then(function(response){
            repo = response.data;
            return  $http.get(url + "/contributors")
          })
          .then(function(response){
            repo.collaborators = response.data;
            return repo;
          });
    }
    return {
      "getUser": getUser,
      "getRepos": getRepos,
      "getRepoDetails": getRepoDetails
    };
  });
}());