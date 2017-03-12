App.factory('SalaryFactory', ['$http', function($http) {

var employees = { list: [] };
// var newWorker = {};

getApps();
function getApps() {
  $http({
    method: 'GET',
    url: '/employee/employee',
  }).then(function(response) {
    console.log('factory.js/response.data: ', response.data);
    employees.list = response.data;

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

function deleteApp(appId) {
  $http({
    method: 'DELETE',
    url: 'deleteapp/' + appId
  }).then(function(response) {
    console.log('delete req', response);
    getApps();
  });
}

return {

  employees: employees,
  // updateApps: getApps(),
  addEmployee: addEmployee
  // deleteApp: deleteApp

};
}]);


//
// function getMonthlyExpenditure(payroll) {
//   var monthlyExpenditure = 0;
//   for (i = 0; i < payroll.list.length; i++) {
//     monthlyExpenditure += parseFloat(payroll.list[i].annual_salary / 12);
//   };
//   return monthlyExpenditure;
// }
//
// function addPerson(newPerson) {
//   $http({
//     method: 'POST',
//     url: '/payroll',
//     data: newPerson
//   }).then(function(response){
//     console.log(response);
//     getPayroll();
//     self.newPerson = {};
//
//   });
// }
//
// function deletePerson(personId) {
//   $http({
//     method: 'DELETE',
//     url: '/payroll/' + personId
//   }).then(function(response) {
//     getPayroll();
//   });
// }
//
// return {
//   payroll: payroll,
//   addPerson: addPerson,
//   deletePerson: deletePerson,
//   getPayroll: getPayroll
// };
