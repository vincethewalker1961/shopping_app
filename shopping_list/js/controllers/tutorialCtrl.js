/* Created by vincethewalker on 12/01/2018.. */

angular.module("tutorialCtrlModule", [])

.controller("TutorialCtrl", ["$scope", function($scope) {
    
    $scope.tutorialObject = {};
    $scope.tutorialObject.title = "Main Page";
    $scope.tutorialObject.subtitle = "Section 1";
    $scope.tutorialObject.firstname = "Vincent";
    $scope.tutorialObject.lastname = "Walker";
    
    $scope.tutorialObject.bindOutput = 2;
    
    $scope.timesTwo = function() {
        $scope.tutorialObject.bindOutput  *= 2;
        
    }
}])

.controller("TutorialCtrl2", ["$scope", function($scope) {
    $scope.secondTutorial = "This is our second tutorial";
}]);












