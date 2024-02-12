const { login } = require('../../../../support/POM/Login.Page');
const { dropDown } = require('../../../../support/POM/Drop.Down');
const { dashboardIndex, LoginUserData } = require('../../../../support/DATA/loginData');
const {
	usernameLogin,
	passwordLogin,
	usernameEmpty,
	passwordEmpty,
	invalidPassword,
	invalidUsername,
} = LoginUserData;

describe('orangeHRM | Account | log in', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.OrangeAndAuthLoginPath();
	});

	it('US-01 TC1: Validate successful login with valid credentials ', () => {
		cy.testLogin(usernameLogin, passwordLogin);
		cy.url().should('contain', dashboardIndex, 'Failed to navigate to the dashboard');
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
		cy.contains('Dashboard').should('be.visible');
	});

	it('US-01 TC2: Verify login is not permitted when the password input is empty.', () => {
		cy.testLogin(usernameLogin, passwordEmpty);
		login.emptyInputPasswordRequired();
		cy.OrangeAndAuthLoginPath();
	});

	it('US-01 TC3: Verify login is not permitted when the username input is empty.', () => {
		cy.testLogin(usernameEmpty, passwordLogin);
		login.emptyInputUsernameRequired();
		cy.OrangeAndAuthLoginPath();
	});

	it('US-01 TC4: Validate that login is not allowed when both the USERNAME and PASSWORD fields are left empty.', () => {
		cy.testLogin(usernameEmpty, passwordEmpty);
		login.emptyInputUsernameRequired();
		login.emptyInputPasswordRequired();

		cy.OrangeAndAuthLoginPath();
	});

	it('US-01 TC5: Verify login failure with valid username and invalid password', () => {
		cy.testLogin(usernameLogin, invalidPassword);
		cy.ErrorInvalidCredentials();
		cy.OrangeAndAuthLoginPath();
	});

	it('US-01 TC6: Verify login failure with invalid username and valid password', () => {
		cy.testLogin(invalidUsername, passwordLogin);
		cy.ErrorInvalidCredentials();
		cy.OrangeAndAuthLoginPath();
	});
	it('US-01 TC7: Verify login failure with invalid credentials', () => {
		cy.testLogin(invalidUsername, invalidPassword);
		cy.ErrorInvalidCredentials();
		cy.OrangeAndAuthLoginPath();
	});
	it('US-01 TC8: Verify login In and login Out Successfully', () => {
		cy.testLogin(usernameLogin, passwordLogin);
		dropDown.dropdownLogOut();
		cy.OrangeAndAuthLoginPath();
	});
});
