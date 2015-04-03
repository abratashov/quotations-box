'use strict';
angular.module('components', []).directive('tagCloud', function ($timeout){
  $.fn.tagcloud.defaults = {
    size: {start: 10, end: 28, unit: 'pt'},
    color: {start: '#333333', end: '#333333'}
  };

  return {
    restrict: 'A',
    scope: {
      after: '@'
    },
    link: function(scope, element, attrs) {
      scope.after = scope.after || 1000;
      $timeout(function(){
        $(element).find('span').find('a').tagcloud();
      }, parseInt(scope.after));
    }
  };
});