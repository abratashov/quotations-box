'use strict';

// angular.module('quotationsApp')
//   .factory('Quotations', function ($resource) {
//     return $resource('/translate/', {}, {'query':  {method:'GET', isArray: false}});
//   });

angular.module('quotationsApp')
  .factory('Quotations', function ($http) {
    return $http({method: 'GET', url:'/quotations.csv'});
  });


