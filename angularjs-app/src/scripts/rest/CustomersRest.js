function CustomersRest ($resource, $q) {

	var resource = $resource(
		'http://localhost:3000/customers/:id', {},
		{
			getAll: {
				method: 'GET',
				isArray: true
			},
			getById: {
				method: 'GET',
				params: {
					id: '@id'
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
			id: customerId
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