const dataNewEmployee = {
	firstName: Cypress.env('dataEmployee').firstName,
	middleName: Cypress.env('dataEmployee').middleName,
	lastName: Cypress.env('dataEmployee').lastName,
};

const dataNewUser = {
	//username
	username: Cypress.env('dataUser').username,
	emptyUsername: Cypress.env('dataUser').emptyUsername,
	leastFiveCharacters: Cypress.env('dataUser').leastFiveCharacters,
	fortyCharacters: Cypress.env('dataUser').fortyCharacters,
	//password
	passwordNewUser: Cypress.env('dataUser').passwordNewUser,
	passwordEmpty: Cypress.env('dataUser').passwordEmpty,
	invalidPassword: Cypress.env('dataUser').invalidPassword,

	//employeeName
	employeeName: Cypress.env('dataUser').employeeName,
	employeeNameEmpty: Cypress.env('dataUser').employeeNameEmpty,
	invalidEmployeeName: Cypress.env('dataUser').invalidEmployeeName,
};
module.exports = {
	dataNewEmployee,
	dataNewUser,
};
