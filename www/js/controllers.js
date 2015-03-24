angular.module('quotationsApp')
  .controller('MainCtrl', ['$scope', '$filter', 'localStorageService', 'Quotations', function ($scope, $filter, localStorageService, Quotations) {
    // $scope.rowCollection = [
    //   {firstName: 'Laurent', lastName: 'Renard', birthDate: new Date('1987-05-21'), balance: 102, email: 'whatever@gmail.com'},
    //   {firstName: 'Blandine', lastName: 'Faivre', birthDate: new Date('1987-04-25'), balance: -2323.22, email: 'oufblandou@gmail.com'},
    //   {firstName: 'Francoise', lastName: 'Frere', birthDate: new Date('1955-08-27'), balance: 42343, email: 'raymondef@gmail.com'}
    // ];

    Quotations.success(function(data, status, header, config){
      $scope.commonQuotations = $.csv.toArrays(data);
      console.log($scope.commonQuotations[0][1]);
    });

    // $scope.predicates = ['firstName', 'lastName', 'birthDate', 'balance', 'email'];
    // $scope.selectedPredicate = $scope.predicates[1];

    $scope.addWord = function() {
      // var word = $scope.word.toLowerCase().trim();
      // if(word){
      //   var dictionary = localStorageService.get('en_dict');
      //   dictionary = dictionary || '';
      //   dictionary = dictionary + ',' + word;
      //   dictionary = normalizeWords(dictionary.split(','));
      //   localStorageService.set('en_dict', dictionary);
      //   $scope.word = '';
      //   $scope.dictionary = dictionary.join(',');
      // }
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