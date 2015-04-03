'use strict';
angular.module('components', []).directive('tagCloud', function ($timeout){
  $.fn.tagcloud.defaults = {
    size: {start: 14, end: 18, unit: 'pt'},
    color: {start: '#333333', end: '#333333'}
  };

  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
      $timeout(function(){
        $(element).find('span').find('a').tagcloud();
      }, 1000);
    }
  };
});