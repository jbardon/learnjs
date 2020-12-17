function CustomerSheetController ($scope, $state, CustomerSheetService, initData) {
  
  // Add your variables and functions on controller instance
  // not on $scope where it's shadowed by directives scopes such as ng-if
  var ctrl = this;
  var svc = CustomerSheetService;
  
  ctrl.save = function () {
    svc.save(ctrl.customer).then(function (data) {
      ctrl.customer = data;
      ctrl.modelChanged = false;
      //$state.go('customers-list'); // Go to page with router
    });
  };
  
  ctrl.init = function () {
    ctrl.customer = initData.customer;
    
    ctrl.customerInitialState = {};
    angular.copy(ctrl.customer, ctrl.customerInitialState);
    
    ctrl.modelChanged = false;
    
    $scope.$watch('ctrl.customer', function() {
      ctrl.modelChanged = !angular.equals(ctrl.customer, ctrl.customerInitialState);
    }, true); // Deep watch
  };
  
  ctrl.init();
}

module.exports = CustomerSheetController;