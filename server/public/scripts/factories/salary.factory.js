App.factory('SalaryFactory', ['$http', function($http) {
var totalMonthlySalary = 0;
var everyEmployeeCost = 0;
var employees = { list: [] };
// var newWorker = {};

getApps();
function getApps() {
  $http({
    method: 'GET',
    url: '/employee/employee',
  }).then(function(response) {
    employees.list = response.data;
    employees.getMonthlyCosts = MonthlyCoster(employees);

  });
}

function addEmployee(newWorker) {
  $http({
    method: 'POST',
    url: '/employee/addWorker',
    data: newWorker
  }).then(function(response) {
    console.log('new req', response);
    getApps();
  });
}

function deleteEmployee(tableId){
  $http({
    method: 'DELETE',
    url: '/employee/' + tableId
  }).then(function(response) {
    getApps();
  });
}

function nextMonth(monthlyCostInput) {
  $http({
    method: 'POST',
    url: '/employee/addMonth',
    data: monthlyCostInput
  }).then(function(response) {
    console.log('new req', response);
    getApps();
  });
}



function MonthlyCoster(employees){
  for (var i = 0; i < employees.list.length; i++) {
    totalMonthlySalary += parseInt(employees.list[i].annual_salary/12);

  }
    return totalMonthlySalary;
  }
  console.log("totalMonthlySalary",totalMonthlySalary);





return {

  employees: employees,
  nextMonth: nextMonth,
  addEmployee: addEmployee,
  deleteEmployee: deleteEmployee,
  totalMonthlySalary: totalMonthlySalary
};
}]);
