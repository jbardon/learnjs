// https://github.com/angular-ui/ui-router/wiki
function Routes($stateProvider, $urlRouterProvider) {
  $stateProvider.state({
    name: 'home',
    url: '/',
    templateUrl: 'dashboard/dashboard.tpl.html'
  });
  
  $stateProvider.state({
    name: 'customers-list',
    url: '/customers',
    controller: 'CustomersListController',
    controllerAs: 'ctrl', // Alias pour le controller dans le template
    templateUrl: 'customer/customers-list.tpl.html',
    resolve: {
      // Inject param "initData" to the controller
      initData: ['CustomersListService', function (CustomersListService) {
        return CustomersListService.resolveCustomersListController();
      }]
    }
  });
  
  $stateProvider.state({
    name: 'customer-sheet',
    url: '/customers/:id',
    controller: 'CustomerSheetController',
    controllerAs: 'ctrl',
    templateUrl: 'customer/customer-sheet.tpl.html',
    resolve: {
      initData: ['$stateParams', 'CustomerSheetService', function ($stateParams, CustomerSheetService) {
        return CustomerSheetService.resolveCustomerSheetController($stateParams.id);
      }]
    }
  });
  
  $stateProvider.state({
    name: 'customer-sheet-edit',
    url: '/customers/:id/edit',
    controller: 'CustomerSheetController',
    controllerAs: 'ctrl',
    templateUrl: 'customer/customer-sheet-edit.tpl.html',
    resolve: {
      initData: ['$stateParams', 'CustomerSheetService', function ($stateParams, CustomerSheetService) {
        return CustomerSheetService.resolveCustomerSheetController($stateParams.id);
      }]
    }
  });
  
  // Default route
  $urlRouterProvider.otherwise('/');
}

module.exports = Routes;
