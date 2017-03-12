var App = angular.module('App', ['ngRoute']);
console.log("client JS started");
App.config(['$routeProvider', function($routeProvider) {

  $routeProvider
    .when('/newEmployees', {
      templateUrl: '/views/templates/newemployeeview.html',
      controller: 'NewEmployeeController',
      controllerAs: 'nec'
    })
    .when('/tableEmployees', {
      templateUrl: '/views/templates/tableemployeesview.html',
      controller: 'TableEmployeesController',
      controllerAs: 'tec'
    })
    .when('/expenses', {
      templateUrl: '/views/templates/expensesview.html',
      controller: 'ExpensesController',
      controllerAs: 'ec'
    })
    .otherwise({
      redirectTo: 'newEmployees'
    });

}]);
