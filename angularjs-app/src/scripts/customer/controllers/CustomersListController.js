function CustomersListController (
	CustomersListService, 
	initData) {

	var ctrl = this;
	var svc = CustomersListService;

	ctrl.createCustomer = function () {
		console.log('createCustomer');
	};

	ctrl.clearCustomers = function () {
		console.log('clearCustomers');
	};

	ctrl.init = function () {
		// initData est injecté par le router
		ctrl.customers = initData.customers;
	};

	ctrl.init();
}

module.exports = CustomersListController;