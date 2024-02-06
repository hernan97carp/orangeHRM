const dashboardIndex = Cypress.env('endpoint').dashboardIndex;

const adminUserData = {
<<<<<<< HEAD
	username: Cypress.env('AdminUser').username,
	password: Cypress.env('AdminUser').password,
	usernameEmpty: Cypress.env('AdminUser').usernameEmpty,
	passwordEmpty: Cypress.env('AdminUser').passwordEmpty,
	invalidUsername: Cypress.env('AdminUser').invalidUsername,
	invalidPassword: Cypress.env('AdminUser').invalidPassword,
};

module.exports = {
	dashboardIndex,
	adminUserData,
};
=======
  username: Cypress.env('AdminUser').username,
  password: Cypress.env('AdminUser').password,
  usernameEmpty: Cypress.env('AdminUser').usernameEmpty,
  passwordEmpty: Cypress.env('AdminUser').passwordEmpty,
  invalidUsername: Cypress.env('AdminUser').invalidUsername,
  invalidPassword: Cypress.env('AdminUser').invalidPassword,
};

module.exports = {
  dashboardIndex,
  adminUserData,
};
>>>>>>> 94edb56a786dd1055340aa41d910c0b9ba484a15
