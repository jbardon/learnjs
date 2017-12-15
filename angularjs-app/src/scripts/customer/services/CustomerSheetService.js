function CustomerSheetService ($q, CustomersRest) {
	var svc = {};

	svc.resolveCustomerSheetController = function (customerId) {
		var promises = {
			customer: CustomersRest.getById(customerId)
		};
		return $q.all(promises).then(function (data) {
			return {
				customer: data.customer
			};
		});
	};

	return svc;
}

module.exports = CustomerSheetService;