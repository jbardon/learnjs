
angular
	.module('customer', [])

	// Services
	.factory('CustomersListService', require('./services/CustomersListService'))
	.factory('CustomerSheetService', require('./services/CustomerSheetService'))

	// Controllers
	.controller('CustomersListController', require('./controllers/CustomersListController'))
	.controller('CustomerSheetController', require('./controllers/CustomerSheetController'))
;
