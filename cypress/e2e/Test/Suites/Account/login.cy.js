const { login } = require('../../../../support/POM/Login.Page');
const {dropDown} = require('../../../../support/POM/Drop.Down');
const { dashboardIndex, adminUserData } = require('../../../../support/DATA/loginData');
const { username, password, usernameEmpty, passwordEmpty, invalidPassword, invalidUsername } =
	adminUserData;

describe('orangeHRM | Account | log in', () => {
	beforeEach(() => {
		cy.visit('/');
		cy.OrangeAndAuthLoginPath();
	});

	it('US-01 TC1: Validate successful login with valid credentials ', () => {
		cy.testLogin(username, password);
		cy.url().should('contain', dashboardIndex, 'Failed to navigate to the dashboard');
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
		cy.contains('Dashboard').should('be.visible');
		
	});

	it('US-01 TC2: Verify login is not permitted when the password input is empty.', () => {
		cy.testLogin(username, passwordEmpty);
		login.emptyInputPasswordRequired();
		cy.OrangeAndAuthLoginPath();
	});

	it('US-01 TC3: Verify login is not permitted when the username input is empty.', () => {
		cy.testLogin(usernameEmpty, password);
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
		cy.testLogin(username, invalidPassword);
		cy.ErrorInvalidCredentials();
		cy.OrangeAndAuthLoginPath();
	});

	it('US-01 TC6: Verify login failure with invalid username and valid password', () => {
		cy.testLogin(invalidUsername, password);
		cy.ErrorInvalidCredentials();
		cy.OrangeAndAuthLoginPath();
	});
	it('US-01 TC7: Verify login failure with invalid credentials', () => {
		cy.testLogin(invalidUsername, invalidPassword);
		cy.ErrorInvalidCredentials();
		cy.OrangeAndAuthLoginPath();
	});
    it('US-01 TC8: Verify login In and login Out Successfully',()=>{
		cy.testLogin(username, password);
		dropDown.dropdownLogOut()
		cy.OrangeAndAuthLoginPath();
	})

});
