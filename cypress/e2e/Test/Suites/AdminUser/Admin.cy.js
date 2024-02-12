//LOGIN
const { LoginUserData } = require('../../../../support/DATA/loginData');
const { usernameLogin, passwordLogin } = LoginUserData;
//DATA EMPLOYEE AND DATA USER
const { dataNewEmployee, dataNewUser } = require('../../../../support/DATA/adminData');
const { adminUser } = require('../../../../support/POM/Admin.Users');
const {
	username,
	emptyUsername,
	leastFiveCharacters,
	fortyCharacters,
	employeeName,
	employeeNameEmpty,
	passwordNewUser,
	passwordEmpty,
} = dataNewUser;
const { firstName, middleName, lastName } = dataNewEmployee;
const createNewUser = adminUser.addUser;
//SEARCH ITEMS
const searchItems = adminUser.systemUsers;

describe.skip('US-04 orange | Admin User | User Management | Add Users', () => {
	beforeEach(() => {
		cy.LoginOrange(usernameLogin, passwordLogin);
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
	});
	it('US-04 TC1: Verify if the user can create additional user and verify their existence through search', () => {
		// First, you need to create an employee.
		cy.addNewEmployee(firstName, middleName, lastName);
		// Second, create a new user.
		cy.optionAdminStatusEnabled().then(() => {
			cy.addNewUserAdmin(username, employeeName, passwordNewUser, passwordNewUser);
		});
		cy.validateUserCreationForm();

		// Finally, validate the existence of the created user.
		cy.searchNewUser(username, employeeName, firstName, lastName);
	});

	it('US-04 TC2: Verify if the user can not create additional user when the input "username" is empty', () => {
		cy.optionAdminStatusEnabled().then(() => {
			cy.addNewUserAdmin(emptyUsername, employeeName, passwordNewUser, passwordNewUser);
		});
		createNewUser.errorUsernameAlreadyExist().should('exist');
		cy.url().should('contain', 'saveSystemUser');
	});

	it('US-04 TC3: Verify if the user can not create additional user when the input "password" is empty', () => {
		cy.optionAdminStatusEnabled().then(() => {
			cy.addNewUserAdmin(username, employeeName, passwordEmpty, passwordNewUser);
		});

		createNewUser.errorPasswordRequired().should('exist');
		cy.url().should('contain', 'saveSystemUser');
	});

	it('US-05 TC4: Verify if the user can not create additional user when the input "confirm Password" is empty', () => {
		cy.optionAdminStatusEnabled().then(() => {
			cy.addNewUserAdmin(username, employeeName, passwordNewUser, passwordEmpty);
		});
		createNewUser.errorPasswordConfirm().should('exist');
		cy.url().should('contain', 'saveSystemUser');
	});
	it('US-05 TC5: Verify if the user can not create additional user when the input "employee Name" is empty', () => {
		cy.optionAdminStatusEnabled().then(() => {
			cy.addNewUserAdmin(username, employeeNameEmpty, passwordNewUser, passwordNewUser);
		});

		createNewUser.errorEmployeeNameRequired().should('exist');
		cy.url().should('contain', 'saveSystemUser');
	});

	it('US-05 TC6:Verify inability to create additional user when all input fields are empty', () => {
		cy.optionDefaultStatusDefault().then(() => {
			cy.addNewUserAdmin(emptyUsername, employeeNameEmpty, passwordEmpty, passwordEmpty);
		});
		cy.validateAllRequiredFieldsCompleted();
		cy.url().should('contain', 'saveSystemUser');
	});
	it('US-06 TC7: "Verify inability to create a user when the "username" input contains fewer than five characters.', () => {
		cy.optionAdminStatusEnabled().then(() => {
			cy.addNewUserAdmin(leastFiveCharacters, employeeName, passwordNewUser, passwordNewUser);
		});
		createNewUser
			.errorUsernameLeastFiveCharacters()
			.should('exist')
			.should('contain', 'Should be at least 5 characters');
		cy.url().should('contain', 'saveSystemUser');
	});

	it('US-06 TC8: "Verify inability to create a user when the "username" exceed 40 characters.', () => {
		cy.optionAdminStatusEnabled().then(() => {
			cy.addNewUserAdmin(fortyCharacters, employeeName, passwordNewUser, passwordNewUser);
		});
		createNewUser
			.errorUsernameFortyCharacters()
			.should('exist')
			.should('contain', 'Should not exceed 40 characters');
		cy.url().should('contain', 'saveSystemUser');
	});
});

describe('US-04 orange | Admin User | User Management | Add Users | Search Users', () => {
	beforeEach(() => {
		cy.LoginOrange(usernameLogin, passwordLogin);
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
	});
	it('US-04 TC1:Verify that the "Reset" button functions correctly when all fields are completed.', () => {
		searchItems.usernameInput().click().type('aksjvbkasjwertxz');
		searchItems.userRoleInput().click();
		searchItems.optionUserRoleAdmin().click();
		searchItems.employeeName().click().type('TESTING HRM');
		searchItems.status().click();
		searchItems.optionStatusEnable().click();
		searchItems.buttonReset().click();

		// verify inputs empty
		searchItems.usernameInput().should('have.text', '');
		searchItems.userRoleInput().should('have.text', '-- Select --');
		searchItems.employeeName().should('have.text', '');
		searchItems.status().should('have.text', '-- Select --');
	});

	it('US-04 TC2:Verify the existence of a newly created use ', () => {
		cy.searchNewUser(username, employeeName, firstName, lastName);
	});
	it.only('US-05 TC2: Verify that searching for a user displays an error message if the user is not found', () => {
		searchItems.usernameInput().click().type('sdx{}');
		searchItems.buttonSearch().click();
		cy.get('.oxd-text--toast-message').should('exist').should('contain', 'No Records Found');
	});
});
