function CustomersRest () {
	var svc = {};

	svc.getCustomers = function () {
		return [
			{
				"id": 1,
				"firstname": "Nollie",
				"lastname": "Klicher",
				"gender": "Female",

				"address": {
					"street": "264 Colorado Pass",
					"zipcode": "152219",
					"city": "Toutosa"
				},
				"contact": {
					"email": "nklicher0@princeton.edu",
					"phone": "4067261063"
				}
			},
			{
				"id": 2,
				"firstname": "Eustace",
				"lastname": "Badrick",
				"gender": "Male",

				"address": {
					"street": "588 Montana Avenue",
					"zipcode": "28205",
					"city": "Soukkouma"
				},
				"contact": {
					"email": "ebadrick8@jimdo.com",
					"phone": "6926802156"
				}
			}
		];
	};

	return svc;
}

module.exports = CustomersRest;