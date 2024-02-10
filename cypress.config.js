const { defineConfig } = require('cypress');

module.exports = defineConfig({
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
			firstName: "UsuarioTest",
			middleName: "Hrm",
			lastName: "Orange",
		},
		 dataUser: {
			username: "UsarioTestOrageZZZA",
			employeeName: "UsuarioTest Hrm Orange"
		}

 

	},
});
