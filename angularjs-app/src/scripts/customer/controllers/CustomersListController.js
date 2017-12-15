function CustomersListController (
	CustomersListService, 
	initData) {

	var ctrl = this;
	var svc = CustomersListService;

	ctrl.createCustomer = function () {
		ctrl.customers.push(svc.createCustomer(99));
	};

	ctrl.clearCustomers = function () {
		ctrl.customers = [];
	};

	ctrl.init = function () {
		// initData est injecté par le router
		ctrl.customers = initData.customers;
	};

	ctrl.init();
}

module.exports = CustomersListController;