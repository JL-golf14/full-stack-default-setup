
App.controller('TableEmployeesController', ['SalaryFactory', function(SalaryFactory){
  console.log('The TableEmployeesController was loaded');
  var self = this;

      self.$parseInt = parseInt;
    self.employees = SalaryFactory.employees;




    self.nextMonth = function() {
  SalaryFactory.nextMonth(self.monthlyCoster);
    };

}]);
