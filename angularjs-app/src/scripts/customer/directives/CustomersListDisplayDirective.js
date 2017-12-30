var CustomersListDisplayDirective = function() {
	return {
		restrict : 'E',
		replace : true,
		required : 'ngModel',
		templateUrl : 'customer/customers-list-display.tpl.html',
		scope : {
			customers : '=?ngModel'
		},
		link : function (scope) {
			// Lien avec CustomerListController qui gère l'affichage si pas de clients
			scope.deleteCustomer = function (index) {
				scope.customers.splice(index, 1);
			};
		}
	};
};

module.exports = CustomersListDisplayDirective;