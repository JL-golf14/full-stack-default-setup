
App.controller('NewEmployeeController', ['SalaryFactory', function(SalaryFactory){
  console.log('The new employee controller was loaded');
  var self = this;
    self.employee = SalaryFactory.employees;
    self.newWorker = {};





    self.addEmployee = function() {
SalaryFactory.addEmployee(self.newWorker);
    };












}]);
