'use strict';
angular.module('myApp.controllers').controller('View2Ctrl', ['$scope', '$log', '$http', 'mainService', function ($scope, $log, $http, mainService) {

    $scope.capoList = mainService.userList;
    $scope.fretValue = mainService.userFret;
    $scope.jsonCapo = mainService.jsonResponce;
    $scope.finalKeys = "";
    $scope.capoJsonMap = {};

    $scope.getFinalConvertedKeys = function () {
        $log.info($scope.capoJsonMap[arrayCapoKeys[0]]);
        $log.info($scope.capoJsonMap);
    };

    $scope.initializeJsonMap = function () {
        var repeat = true;
        angular.forEach($scope.jsonCapo, function (item) {
            var fretJson = item.FRET;
            $log.info("ITEM---foreach===" + item)
            if (repeat) {
                if (fretJson === $scope.fretValue) {
                    var eachKeys = item.KEYS;
                    for (var key in eachKeys) {
                        $scope.capoJsonMap[key] = eachKeys[key];
                    }
                    repeat = false;
                }
            }
        })
    };

    $scope.convertedKeys = function () {
        $scope.initializeJsonMap();
        $scope.finalKeys = $scope.processFinalKeys().trim();
    };

    $scope.processFinalKeys = function () {
        var arrayCapoKeys = $scope.capoList.trim().split(" ");
        var newCapoKeys = "";

        for (var index in arrayCapoKeys) {

            var befoKey = arrayCapoKeys[index];
            var convKey = "";

            if (befoKey.length === 2) {
                convKey = $scope.capoJsonMap[befoKey.substring(0, 1)];
            } else {
                convKey = $scope.capoJsonMap[befoKey];
            }

            if (befoKey.length === 2 && convKey.length === 1) {
                convKey = convKey + "" + befoKey.substring(1);
            }

            newCapoKeys = newCapoKeys + " " + convKey;
        }
        return newCapoKeys;
    };

}]);