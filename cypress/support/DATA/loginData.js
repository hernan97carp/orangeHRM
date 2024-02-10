const dashboardIndex = Cypress.env('endpoint').dashboardIndex;

const LoginUserData = {
	usernameLogin: Cypress.env('LoginUser').usernameLogin,
	passwordLogin: Cypress.env('LoginUser').passwordLogin,
	usernameEmpty: Cypress.env('LoginUser').usernameEmpty,
	passwordEmpty: Cypress.env('LoginUser').passwordEmpty,
	invalidUsername: Cypress.env('LoginUser').invalidUsername,
	invalidPassword: Cypress.env('LoginUser').invalidPassword,
};

module.exports = {
	dashboardIndex,
	LoginUserData,
};
