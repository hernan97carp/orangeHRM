const { dataNewEmployee, dataNewUser } = require('../../../../support/DATA/adminData');
const { adminUser } = require('../../../../support/POM/Admin.Users')
const searchItems = adminUser.systemUsers
const  {username, emptyUsername,  leastFiveCharacters,fortyCharacters, employeeName, passwordNewUser } = dataNewUser
const { firstName, middleName,lastName } = dataNewEmployee;
const createNewEmployee = adminUser.addEmployee
const createNewUser = adminUser.addUser

//LOGIN
const { LoginUserData} = require('../../../../support/DATA/loginData');
const { usernameLogin, passwordLogin } = LoginUserData;


describe('US-04 orange | Admin User | User Management | Add Users',()=>{
	beforeEach(()=>{
		cy.LoginOrange(usernameLogin, passwordLogin);
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
	
	})
	it('US-04 TC1: Verify if the user can create additional user and verify their existence through search', () => {
		// First, you need to create an employee.
		//cy.addNewEmployee(firstName, middleName, lastName);
		// Second, create a new user.
		cy.addNewUser(username, employeeName, passwordNewUser);
		cy.validationFormUserAdd()
		// Finally, validate the existence of the created user.
		//cy.searchNewUser(username, employeeName, firstName, lastName);
	});
  
   it.only('US-04 TC1: Verify if the user can not create additional user when the input username is empty',()=>{
	
	cy.addNewUser(emptyUsername, employeeName, passwordNewUser);
	createNewUser.errorUsernameAlreadyExist().should('not.exist')
    cy.url().should('contain','saveSystemUser')

   })



})

describe.skip('US-04 orange | Admin User | User Management | Add Users | Search Users',()=>{
	beforeEach(()=>{
		cy.LoginOrange(usernameLogin, passwordLogin);
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
	
	})
	it('US-04 TC1:Verify that the "Reset" button functions correctly when all fields are completed.',()=>{

		searchItems.usernameInput().click().type('aksjvbkasjwertxz');
		searchItems.userRoleInput().click();
		searchItems.optionUserRoleAdmin().click();
		searchItems.employeeName().click().type('TESTING HRM');
		searchItems.status().click();
		searchItems.optionStatusEnable().click();
		searchItems.buttonReset().click();
	
		// verify inputs empty
	    searchItems.usernameInput().should('have.text','')
	    searchItems.userRoleInput().should('have.text','-- Select --')
	    searchItems.employeeName().should('have.text','')
	    searchItems.status().should('have.text','-- Select --')
	})
	
	
	


})









	















