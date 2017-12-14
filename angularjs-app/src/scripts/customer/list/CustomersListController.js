function CustomersListController (CustomersListService) {

	var ctrl = this;
	var svc = CustomersListService;

	ctrl.init = function () {
		ctrl.customers = svc.resolveCustomersListController();
	};

	ctrl.init();
}

module.exports = CustomersListController;