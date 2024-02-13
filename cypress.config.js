const { defineConfig } = require('cypress');

module.exports = defineConfig({

	projectId: "cq5fvd",
	e2e: {
		setupNodeEvents(on, config) {
			// implement node event listeners here
		},

		baseUrl: 'https://opensource-demo.orangehrmlive.com/web/index.php',
	},
	env: {
		LoginUser: {
			usernameLogin: 'Admin',
			usernameEmpty: '',
			invalidUsername: 'Admin4',
			passwordLogin: 'admin123',
			passwordEmpty: '',
			invalidPassword: 'admin1234',
		},
		endpoint: {
			authLogin: '/auth/login',
			dashboardIndex: '/dashboard/index',
			orange: 'orangehrm',
		},

		dataEmployee: {
			firstName: 'UAAA',
			middleName: 'HGG',
			lastName: 'Orange',
		},
		dataUser: {
			username: 'darioASD',
			emptyUsername: '',
			leastFiveCharacters: 'asdr',
			fortyCharacters: 'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaacxxxcccc',
			passwordNewUser: 'password123',
			passwordEmpty: '',
			invalidPassword: '%/%/(ZZ>{z}x<z&$',
			employeeName: 'UAAA HGG Orange',
			employeeNameEmpty: '',
			invalidEmployeeName: '%/%/(ZZ>{z}x<z&$',
		},
	},
});

