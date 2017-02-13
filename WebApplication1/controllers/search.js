'use strict';
angular.module('myApp.controllers').controller('View1Ctrl', ['$scope', '$log', '$location', 'mainService', function ($scope, $log, $location, mainService) {
    $scope.name1 = mainService.name;

    $scope.capoKeysList = ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'];
    $scope.fretValues = ['1', '2', '3', '4', '5', '6', '7'];

    $scope.userEnteredCapoList = "";
    $scope.userEnteredFretValue = "";

    $scope.$watch('userEnteredCapoList', function () {
        mainService.userList = $scope.userEnteredCapoList;

    });

    $scope.$watch('userEnteredFretValue', function () {
        mainService.userFret = "FRET" + $scope.userEnteredFretValue;
    });

    $scope.processConversion = function () {

        if ($scope.validation()) {
            $location.url("/view2");
        } else {
            $location.url("/view1");
        }
    };

    $scope.addToCapoList = function (userCapo) {

        if ($scope.userEnteredCapoList === "")
            $scope.userEnteredCapoList = userCapo;
        else
            $scope.userEnteredCapoList = $scope.userEnteredCapoList + " " + userCapo;
    };

    $scope.setFretValue = function (fret) {
        $scope.userEnteredFretValue = fret;
    }

    $scope.getJson = function () {
        mainService.getData();
    }


    $scope.validation = function () {


        if ($scope.userEnteredCapoList === "") {
            window.alert("Capo Keys cannot be empty");
            return false;
        }

        if ($scope.userEnteredFretValue === "") {
            window.alert("Fret Value cannot be empty");
            return false;
        }

        if (!$scope.checkFret()) {
            window.alert("Fret Value must be in 1 - 7");
            return false;
        }

        if ($scope.modifyString()) {
            window.alert("Capo Keys not in given key range");
            return false;
        }

        return true;
    };


    $scope.checkFret = function () {
        if ($scope.fretValues.indexOf($scope.userEnteredFretValue) !== -1)
            return true;
        else
            return false;
    };

    $scope.checkCapo = function (givenString) {

        var splitGivenString = givenString.trim().split(" ");
        var notPresent = true;
        angular.forEach(splitGivenString, function (item) {
            if (notPresent) {
                if ($scope.capoKeysList.indexOf(item) === -1) {
                    notPresent = false;
                }
            }
        });
        return notPresent;

    };

    $scope.modifyString = function () {

        var givenString = $scope.userEnteredCapoList.replace(/,/g, ' ').replace(/ +/g, ' ');
        if (!$scope.checkCapo(givenString))
            return true;

        $scope.userEnteredCapoList = givenString;

    }

}]);
