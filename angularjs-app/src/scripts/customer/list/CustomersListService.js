function CustomersListService (CustomersRest) {
	var svc = {};

	svc.resolveCustomersListController = function () {
		return CustomersRest.getCustomers();
	};

	return svc;
}

module.exports = CustomersListService;