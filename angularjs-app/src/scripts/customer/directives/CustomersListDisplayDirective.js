// https://docs.angularjs.org/guide/directive
var CustomersListDisplayDirective = function() {
  return {
    restrict: 'E', // Call directive with tag name only
    replace: true, // Replace element (if defined with class name or other forms)
    required: 'ngModel',
    templateUrl: 'customer/customers-list-display.tpl.html',
    scope: {
      customers: '=?ngModel', // Optional double-binding to ng-model attribute (directive call)
      customerSelected: '&'
    },
    link: function (scope) {
      // Implicit dependency with CustomerListController (through ngModel binding) which updates display if no customers
      scope.deleteCustomer = function (index) {
        scope.customers.splice(index, 1);
      };

      scope.customerClicked = function (customer) {
        // Provide object of available variable in template binding
        scope.customerSelected({ customer });
      };
    }
  };
};

module.exports = CustomersListDisplayDirective;