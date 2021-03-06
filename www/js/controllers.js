angular.module('quotationsApp')
  .controller('MainCtrl', ['$scope', '$filter', 'localStorageService', 'Quotations', function ($scope, $filter, localStorageService, Quotations) {

    $scope.favorites = [];

    var languages = {
      ru: [1, 2],
      ua: [3, 4]
    };

    var lang = languages['ru'];

    Quotations.success(function(data, status, header, config){
      $scope.commonQuotations = [];
      $scope.authors = {};
      $.csv.toArrays(data).forEach(function(quote){
        $scope.commonQuotations.push({
          id: quote[0],
          author: quote[lang[0]],
          text: quote[lang[1]]
        });
        var count = $scope.authors[quote[lang[0]]];
        count = count ? count + 1 : 1;
        $scope.authors[quote[lang[0]]] = count;
      });

      $scope.author_list = Object.keys($scope.authors).sort();
      $scope.searchBy = $scope.author_list[0];

      $scope.myData = $scope.commonQuotations;
    });

    $scope.search = function(search){
      console.log(search);
      $scope.searchBy = search;
    };

    $scope.addFavorite = function(id){
      var index = $scope.favorites.indexOf(id);
      index == -1 ? $scope.favorites.push(id) : $scope.favorites.splice( index, 1 );
    };


    // $scope.dictionary = localStorageService.get('en_dict')
  }]);

//csv
//https://github.com/asafdav/ng-csv
//https://asafdav.github.io/ng-csv/example/
//http://www.directiv.es/ng-csv
//http://jquery-csv.googlecode.com/git/examples/basic-usage.html

//http://www.newacropolis.ru/Alexandria/aphorism/
//http://www.newacropol.ru/study/intro/