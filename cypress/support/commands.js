import 'cypress-file-upload';
import '@4tw/cypress-drag-drop';
import 'cypress-downloadfile/lib/downloadFileCommand';

const { login } = require('../support/POM/Login.Page');
const { dropDown } = require('../support/POM/Drop.Down');
const { orange, authLogin } = Cypress.env('endpoint');
const { adminUser } = require('../support/POM/Admin.Users');
const searchItems = adminUser.systemUsers;
const resultsSearch = adminUser.recordsFounds;
const createNewEmployee = adminUser.addEmployee;
const createNewUser = adminUser.addUser;

// Custom function to perform a login in OrangeHRM with the option to keep the session active
//Only use these commands to test the software
Cypress.Commands.add('LoginOrange', (user, pass) => {
	cy.session('Login', () => {
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
		cy.url().should('contain', 'orangehrm');
		login.enterUsername(user);
		login.enterPassword(pass);
		login.submitLogin();
	});
	cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
});

// Custom function to perform a basic login in OrangeHRM without keeping the session active
//only use these commands to test the login
Cypress.Commands.add('testLogin', (user, pass) => {
	cy.visit('https://opensource-demo.orangehrmlive.com/');
	cy.url().should('contain', 'orangehrm');
	login.enterUsername(user);
	login.enterPassword(pass);
	login.submitLogin();
});

Cypress.Commands.add('OrangeAndAuthLoginPath', () => {
	cy.url().should('contain', orange);
	cy.url().should('contain', authLogin);
	login.get.formLogin().should('exist').should('be.visible');
});

Cypress.Commands.add('ErrorInvalidCredentials', () => {
	login.errorMessageInvalidCredentials();
});

// CAUTION THIS IS NOT A GOOD PRACTICE !

// Configuration to handle uncaught exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
	// Print the error message to the console
	console.error('Unhandled error:', err.message);

	// Return false to prevent Cypress from automatically failing the test
	return false;
});

// PERFORM SEARCH
Cypress.Commands.add('performSearch', (searchTerm) => {
	dropDown.dropdownHeaderHamburger.itemSearch().click().clear().type(searchTerm);
});

// COMMANDS TO ADMIN USER
Cypress.Commands.add('elementNotExist', () => {
	cy.get('.oxd-input-group > .oxd-text').should('not.exist');
});

Cypress.Commands.add('enterUsername', (username) => {
	const input = createNewUser.usernameInput();

	if (username !== '') {
		input.click().clear().type(username);
	} else {
		input.click().clear();
	}
});

Cypress.Commands.add('employeeName', (employeeName) => {
	const input = createNewUser.employeeNameInput();
	if (employeeName !== '') {
		input.click().clear().type(employeeName);
		createNewUser.employeeNameDropDownResults().should('not.contain', 'Searching').click();
	} else {
		input.click().clear();
	}
});

Cypress.Commands.add('enterPassword', (password) => {
	const input = createNewUser.passwordUserInput();

	if (password !== '') {
		input.click().clear().type(password);
	} else {
		input.click().clear();
	}
});

Cypress.Commands.add('confirmPassword', (password) => {
	const input = createNewUser.confirmPasswordUserInput();

	if (password !== '') {
		input.click().clear().type(password);
	} else {
		input.click().clear();
	}
});

Cypress.Commands.add('addNewEmployee', (fistName, middleName, LastName) => {
	cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
	createNewEmployee.addMoreUser().click();
	createNewEmployee.firstNameInput().click().type(fistName);
	createNewEmployee.middleNameInput().click().type(middleName);
	createNewEmployee.lastNameInput().click().type(LastName);
	createNewEmployee.saveButton().click();
	createNewEmployee.alertSuccess().should('be.exist').should('be.exist');
	createNewEmployee.alertSuccessfullySaved().should('contain', 'Successfully Saved');
});

Cypress.Commands.add('optionDefaultStatusDefault', () => {
	cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');
	createNewUser.userRoleSelect();
	createNewUser.userStatusSelect();
});

Cypress.Commands.add('optionAdminStatusEnabled', () => {
	cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');
	createNewUser.userRoleSelect().eq(0).click();
	createNewUser.userRoleOptionAdmin().click();
	createNewUser.userStatusSelect().click();
	createNewUser.userStatusOptionEnabled().click();
});

Cypress.Commands.add('addNewUserAdmin', (username, employeeName, password, confirmPassword) => {
	cy.url().should('contain', 'saveSystemUser');
	cy.enterUsername(username);
	cy.employeeName(employeeName);
	cy.enterPassword(password);
	cy.confirmPassword(confirmPassword);
	createNewUser.saveButton().click();
});
Cypress.Commands.add('validateAllRequiredFieldsCompleted', () => {
	createNewUser.errorUsernameAlreadyExist().should('exist');
	createNewUser.errorEmployeeNameRequired().should('exist');
	createNewUser.errorRoleSelectRequired().should('exist');
	createNewUser.errorStatusRequired().should('exist');
	createNewUser.errorPasswordRequired().should('exist');
	createNewUser.errorPasswordConfirm().should('exist');
});

Cypress.Commands.add('validateUserCreationForm', () => {
	createNewUser.errorUsernameAlreadyExist().should('not.exist');
	createNewUser.errorEmployeeNameRequired().should('not.exist');
	createNewUser.errorRoleSelectRequired().should('not.exist');
	createNewUser.errorStatusRequired().should('not.exist');
	createNewUser.errorPasswordRequired().should('not.exist');
	createNewUser.errorPasswordConfirm().should('not.exist');
	createNewUser.alertSuccess().should('be.exist').should('contain', 'Success');
});

Cypress.Commands.add('searchNewUser', (username, employeeName, firstName, lastName) => {
	cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
	//Search
	searchItems.usernameInput().click().type(username);
	searchItems.userRoleInput().click();
	searchItems.optionUserRoleAdmin().click();
	searchItems.employeeName().click().type(employeeName);
	cy.get('.oxd-autocomplete-option').should('not.contain', 'Searching....').eq(0).click();
	searchItems.status().click();
	searchItems.optionStatusEnable().click();
	searchItems.buttonSearch().click();

	searchItems.employeeNameInvalid().should('not.exist');

	//Results
	resultsSearch.resultsRecordsFounds().should('match', /\(1\) Record Found/);
	resultsSearch.usernameFieldContainer().eq(0).should('have.text', username);
	resultsSearch.userRoleFieldCOntainer().eq(0).should('have.text', 'Admin');
	resultsSearch
		.employeeNameFieldContainer()
		.eq(0)
		.should('have.text', `${firstName} ${lastName}`);
	resultsSearch.statusFieldContainer().eq(0).should('have.text', 'Enabled');
});
