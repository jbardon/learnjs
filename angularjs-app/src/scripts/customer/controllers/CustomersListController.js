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

	ctrl.init = function () {
		ctrl.customers = initData.customers;
	};

	ctrl.init();
}

module.exports = CustomersListController;