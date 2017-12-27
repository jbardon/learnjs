function CustomerSheetController ($scope, CustomerSheetService, initData) {
		
	var ctrl = this;
	var svc = CustomerSheetService;

	ctrl.save = function () {
		svc.save(ctrl.customer).then(function (data) {
			ctrl.customer = data;
			ctrl.modelChanged = false;
		});
	};

	ctrl.init = function () {
		ctrl.customer = initData.customer;

		ctrl.customerInitialState = {};
		angular.copy(ctrl.customer, ctrl.customerInitialState);

		ctrl.modelChanged = false;

		$scope.$watch('ctrl.customer', function() {
			ctrl.modelChanged = !angular.equals(ctrl.customer, ctrl.customerInitialState);
		}, true); // Tous les niveaux de l'objet
	};

	ctrl.init();
}

module.exports = CustomerSheetController;