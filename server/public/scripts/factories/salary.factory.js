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

function deleteEmployee(tableId){
  $http({
    method: 'DELETE',
    url: '/employee/' + tableId
  }).then(function(response) {
    getApps();
  });
}
return {

  employees: employees,
  // updateApps: getApps(),
  addEmployee: addEmployee,
  deleteEmployee: deleteEmployee

};
}]);
