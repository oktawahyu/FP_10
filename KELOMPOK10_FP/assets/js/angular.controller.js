gmapApp = angular.module('gmapApp', ['uiGmapgoogle-maps'])
          .config(function (uiGmapGoogleMapApiProvider) {
              uiGmapGoogleMapApiProvider.configure({
                  key: 'AIzaSyBUgqPCoas7QjZjN-2jcGN3unjomtdBd40',
                  v: '3.17',
                  libraries: 'weather,geometry,visualization'
              });
          })
 .controller('mainCtrl', function ($scope, $log, $http) {
 
     $scope.map = {
         center: { latitude: 0.538659, longitude: 116.419389 },
         zoom: 5
     };
     $scope.markers = [{
         id: 0,
         coords: {
             latitude: 0.538659,
             longitude: 116.419389
         },
       
     }, {
         id: 1,
         coords: {
             latitude: -6.208763,
             longitude: 106.845599
         },        
    
     }];
 
 }); 