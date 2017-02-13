'use strict'
angular.module('myApp.services').service('mainService',function($http,$log){
    var self = this;
    this.userList = "";
    this.userFret = 0;
    this.jsonResponce = {};

    this.getData = function() {
        $http.get('capo.json').then(function (responce) {
            $log.info('loaded capo.json file');
            self.jsonResponce = responce.data;
            $log.info(self.jsonResponce);
        });
    }

});

