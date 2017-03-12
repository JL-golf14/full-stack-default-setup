
App.controller('TableEmployeesController', ['SalaryFactory', function(SalaryFactory){
  console.log('The tbaleemployees Controller was loaded');
  var self = this;


    self.employees = SalaryFactory.employees;


    self.addTask = function() {
  SalaryFactory.addTask(self.newTask);
    };


}]);
