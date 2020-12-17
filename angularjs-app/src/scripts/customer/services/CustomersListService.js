function CustomersListService ($q, CustomersRest) {
  
  var svc = {};
  
  svc.resolveCustomersListController = function () {
    var promises = {
      customers: CustomersRest.getAll()
    };
    return $q.all(promises).then(function (data) {
      return {
        customers: data.customers
      };
    });
  };
  
  svc.createCustomer = function (customerId) {
    return {
      id: customerId,
      firstname: 'John',
      lastname: 'Doe'
    };
  };
  
  return svc;
}

module.exports = CustomersListService;