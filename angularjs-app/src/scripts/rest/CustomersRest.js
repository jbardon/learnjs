function CustomersRest ($resource, $q) {
  // https://docs.angularjs.org/api/ngResource/service/$resource
  var resource = $resource(
    // Replace ":id" in url with given id in params
    'http://localhost:2092/customers/:id', {},
    {
      getAll: {
        method: 'GET',
        isArray: true // Set to false by default
      },
      getById: {
        method: 'GET',
        params: {
          id: '@id' // Refers to ":id" in rul
        }
      },
      save: {
        method: 'PUT',
        params: {
          id: '@id'
        }
      }
    }
    );
    
    var svc = {};
    
    var success = function (data) {
      return data;
    };
    
    var failed = function (data) {
      if(data.status === 404){
        return null;
      }
      return $q.reject(data);
    };
    
    svc.getAll = function () {
      return resource.getAll()
      .$promise.then(success, failed);
    };
    
    svc.getById = function (customerId) {
      return resource.getById({
        id: customerId // Will be use as "id" parameter and replace ":id" in url
      }).$promise.then(success, failed);
    };
    
    svc.save = function (customer) {
      return resource.save({
        id: customer.id
      }, customer).$promise.then(success, failed);
    };
    
    return svc;
  }
  
  module.exports = CustomersRest;