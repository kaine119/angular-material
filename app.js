var app = angular.module("myApp", ["ngMaterial"]);

app.controller("MainController", ["$scope", function($scope){
    $scope.list = [
    	{done: false, name: "some name", description: "some flavour text"},
    	{done: true, name: "something else", description: "bleh"}
    ]
    $scope.itemToAdd = {};
    $scope.addItem = function() {
    	$scope.list.push( $scope.itemToAdd )
    }
}]);

