angular.module('quotationsApp')
  .controller('MainCtrl', ['$scope', '$filter', 'localStorageService', 'Quotations', function ($scope, $filter, localStorageService, Quotations) {

    Quotations.success(function(data, status, header, config){
      $scope.commonQuotations = [];
      $.csv.toArrays(data).forEach(function(quote){
        $scope.commonQuotations.push({
          authorRu: quote[1],
          textRu: quote[2]
        });
        // console.log($scope.commonQuotations);
      });
      console.log($scope.commonQuotations);
      console.log($scope.rowCollection);

      $scope.myData = $scope.commonQuotations;
    });

    $scope.filterOptions = {
      filterText: '',
      columnDefs: [
        // { name: 'field1', displayName: 'pretty display name' },
        { name: '$$hashKey', visible: false }
      ]
    };

    $scope.gridOptions = {
      data: 'myData',
      filterOptions: $scope.filterOptions
    };

    $scope.filterNephi = function() {
      var filterText = 'name:Nephi';
      if ($scope.filterOptions.filterText === '') {
        $scope.filterOptions.filterText = filterText;
      }
      else if ($scope.filterOptions.filterText === filterText) {
        $scope.filterOptions.filterText = '';
      }
    };

    // $scope.dictionary = localStorageService.get('en_dict')
  }]);

//table
//http://lorenzofox3.github.io/smart-table-website/
//http://ui-grid.info/

//csv
//https://github.com/asafdav/ng-csv
//https://asafdav.github.io/ng-csv/example/
//http://www.directiv.es/ng-csv
//http://jquery-csv.googlecode.com/git/examples/basic-usage.html

//http://www.newacropolis.ru/Alexandria/aphorism/
//http://www.newacropol.ru/study/intro/