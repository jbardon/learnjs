function Routes($stateProvider, $urlRouterProvider) {
	"use strict";

	$stateProvider.state({
		name: 'home',
		url: '/',
		controller: 'DashboardController',
		controllerAs: 'ctrl',
		templateUrl: 'dashboard/dashboard.tpl.html',
		params: {
			screenState: {},
			origin: null
		},
		resolve: {
			initData: ['$transition$', 'DashboardService', function ($transition$, DashboardService) {
				return DashboardService.resolveDashboardController($transition$.params().screenState, $transition$.params().origin);
			}]
		}
	});

	$urlRouterProvider.otherwise('login');
}

module.exports = Routes;
