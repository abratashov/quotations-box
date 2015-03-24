'use strict';
// angular.module('polyglotReader', ['angular-websql'])
//   .config(function($webSql, $rootScope) {
//     $rootScope.db = $webSql.openDatabase('mydb', '1.0', 'Test DB', 2 * 1024 * 1024);
//     $rootScope.db.createTable('user', {
//       "id":{
//         "type": "INTEGER",
//         "null": "NOT NULL", // default is "NULL" (if not defined)
//         "primary": true, // primary
//         "auto_increment": true // auto increment
//       },
//       "created":{
//         "type": "TIMESTAMP",
//         "null": "NOT NULL",
//         "default": "CURRENT_TIMESTAMP" // default value
//       },
//       "username":{
//         "type": "TEXT",
//         "null": "NOT NULL"
//       },
//       "password": {
//         "type": "TEXT",
//         "null": "NOT NULL"
//       },
//       "age": {
//         "type": "INTEGER"
//       }
//     });
//   });