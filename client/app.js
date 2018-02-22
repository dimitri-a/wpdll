import angular from 'angular';
import uiRouter from 'angular-ui-router';

import hero from './hero.scss';
var app = angular.module("myApp", [uiRouter]);

let babelTest=1;

app.controller("myCtrl", function($scope) {
    $scope.firstName = "222";
    $scope.lastName = "ddddddd";
    console.log(babelTest);
});