function CustomersListService (CustomersRest) {
	var svc = {};

	svc.resolveCustomersListController = function () {
		return {
			customers: CustomersRest.getCustomers()
		};
	};

	return svc;
}

module.exports = CustomersListService;