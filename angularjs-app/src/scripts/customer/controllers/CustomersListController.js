function CustomersListController (
  CustomersListService, 
  initData) { // initData is dependency injection manange with router
    
  var ctrl = this;
  var svc = CustomersListService;

  ctrl.createCustomer = function () {
    ctrl.customers.push(svc.createCustomer(99));
  };
  
  ctrl.clearCustomers = function () {
    ctrl.customers = [];
  };
  
  ctrl.selectCustomer = function (customerId) {
    ctrl.selectedCustomerId = customerId;
  };

  ctrl.init = function () {
    ctrl.customers = initData.customers;
    ctrl.selectedCustomerId = ctrl.customers[0].id;
  };
  
  ctrl.init();
}

module.exports = CustomersListController;