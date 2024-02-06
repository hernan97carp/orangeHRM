const { login } = require('../../../../support/POM/Login.Page');
const { dashboardIndex, adminUserData } = require('../../../../support/DATA/loginData');

const { username, password, usernameEmpty, passwordEmpty, invalidPassword, invalidUsername } =
	adminUserData;

describe('orangeHRM | Account | log in', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.OrangeAndAuthLoginPath();
	});

	it('US-XX-XX TC1: Validate successful login with valid credentials ', () => {
		cy.LoginOrange(username, password);
		cy.url().should('contain', dashboardIndex, 'Failed to navigate to the dashboard');
		cy.contains('Dashboard').should('be.visible');
	});

	it('US-XX-XX TC2: Verify login is not permitted when the password input is empty.', () => {
		cy.LoginOrange(username, passwordEmpty);
		login.emptyInputPasswordRequired();
		cy.OrangeAndAuthLoginPath();
	});

	it('US-XX-XX TC3: Verify login is not permitted when the username input is empty.', () => {
		cy.LoginOrange(usernameEmpty, password);
		login.emptyInputUsernameRequired();
		cy.OrangeAndAuthLoginPath();
	});

	it('US-XX-XX TC4: Validate that login is not allowed when both the USERNAME and PASSWORD fields are left empty.', () => {
		cy.LoginOrange(usernameEmpty, passwordEmpty);
		login.emptyInputUsernameRequired();
		login.emptyInputPasswordRequired();

		cy.OrangeAndAuthLoginPath();
	});

	it('US-XX--XX TC5: Verify login failure with valid username and invalid password', () => {
		cy.LoginOrange(username, invalidPassword);
		cy.ErrorInvalidCredentials();
		cy.OrangeAndAuthLoginPath();
	});

	it('US-XX--XX TC6: Verify login failure with invalid username and valid password', () => {
		cy.LoginOrange(invalidUsername, password);
		cy.ErrorInvalidCredentials();
		cy.OrangeAndAuthLoginPath();
	});
	it('US-XX--XX TC7: Verify login failure with invalid credentials', () => {
		cy.LoginOrange(invalidUsername, invalidPassword);
		cy.ErrorInvalidCredentials();
		cy.OrangeAndAuthLoginPath();
	});
    it('US-XX-XX TC8: Verify login In and login Out Successfully',()=>{
		cy.LoginOrange(username, password);
		login.dropdownLogOut()
		cy.OrangeAndAuthLoginPath();
	})

});
