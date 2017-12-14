function CustomerSheetController (
	CustomerSheetService, 
	initData) {
		
	var ctrl = this;
	var svc = CustomerSheetService;

	ctrl.init = function () {
		ctrl.customer = initData.customer;
	};

	ctrl.init();
}

module.exports = CustomerSheetController;