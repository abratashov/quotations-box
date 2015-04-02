'use strict';
angular.module('components', []).directive('tagCloud', function (){
  $.fn.tagcloud.defaults = {
    size: {start: 14, end: 18, unit: 'pt'},
    color: {start: '#cde', end: '#f52'}
  };

  // return function(scope, elem) {
  //   elem.tagcloud();
  // }

  return {
    restrict: 'A',
    link: function(scope, element, attrs) {
        $(element).tagcloud();
    }
  };
});