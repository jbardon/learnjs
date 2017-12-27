var CustomersListItemsDirective = function() {
	return {
		restrict : 'E',
		replace : true,
		required : 'ngModel',
		templateUrl : 'customer/customers-list-items.tpl.html',
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

module.exports = CustomersListItemsDirective;