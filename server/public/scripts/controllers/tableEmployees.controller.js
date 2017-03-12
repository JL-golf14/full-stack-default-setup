
App.controller('TableEmployeesController', ['SalaryFactory', function(SalaryFactory){
  console.log('The TableEmployeesController was loaded');
  var self = this;


    self.employees = SalaryFactory.employees;


    self.addTask = function() {
  SalaryFactory.addTask(self.newTask);
    };
    self.deleteEmployee = function(tableId) {
      SalaryFactory.deleteEmployee(tableId);
    };

}]);
