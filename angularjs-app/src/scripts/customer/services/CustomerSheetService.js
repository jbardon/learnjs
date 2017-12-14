function CustomerSheetService (CustomersRest) {
	var svc = {};

	svc.resolveCustomerSheetController = function (customerId) {
		return {
			customer: CustomersRest.getCustomer(customerId)
		};
	};

	return svc;
}

module.exports = CustomerSheetService;