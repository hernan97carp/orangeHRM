//LOGIN
const { LoginUserData} = require('../../../../support/DATA/loginData');
const { usernameLogin, passwordLogin } = LoginUserData;
//DATA EMPLOYEE AND DATA USER
const { dataNewEmployee, dataNewUser } = require('../../../../support/DATA/adminData');
const { adminUser } = require('../../../../support/POM/Admin.Users')
const  {username, emptyUsername,  leastFiveCharacters,fortyCharacters, employeeName,employeeNameEmpty, passwordNewUser, passwordEmpty } = dataNewUser
const { firstName, middleName,lastName } = dataNewEmployee;
const createNewUser = adminUser.addUser
//SEARCH ITEMS
const searchItems = adminUser.systemUsers



describe('US-04 orange | Admin User | User Management | Add Users',()=>{
	beforeEach(()=>{
		cy.LoginOrange(usernameLogin, passwordLogin);
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
	
	})
	it.skip('US-04 TC1: Verify if the user can create additional user and verify their existence through search', () => {
		// First, you need to create an employee.
		cy.addNewEmployee(firstName, middleName, lastName);
	// Second, create a new user.
		
		cy.optionAdminStatusEnabled().then(()=>{
     	cy.addNewUserAdmin(username, employeeName, passwordNewUser,passwordNewUser);
		})

		cy.validationFormUserAdd()
		// Finally, validate the existence of the created user.
		cy.searchNewUser(username, employeeName, firstName, lastName);
	});
	
   it('US-04 TC2: Verify if the user can not create additional user when the input "username" is empty',()=>{
	cy.optionAdminStatusEnabled().then(()=>{
		cy.addNewUserAdmin(emptyUsername, employeeName, passwordNewUser,passwordNewUser);
	   })
	createNewUser.errorUsernameAlreadyExist().should('not.exist')
    cy.url().should('contain','saveSystemUser')

   })
   
 
   it('US-04 TC3: Verify if the user can not create additional user when the input "password" is empty',()=>{
	cy.optionAdminStatusEnabled().then(()=>{
		cy.addNewUserAdmin(username, employeeName, passwordEmpty,passwordNewUser);
	   })
    cy.url().should('contain','saveSystemUser')

   })

   it('US-05 TC4: Verify if the user can not create additional user when the input "confirm Password" is empty',()=>{
	cy.optionAdminStatusEnabled().then(()=>{
		cy.addNewUserAdmin(username, employeeName, passwordNewUser,passwordEmpty);
	   })
    cy.url().should('contain','saveSystemUser')

   })
   it('US-05 TC5: Verify if the user can not create additional user when the input "employee Name" is empty',()=>{
	cy.optionAdminStatusEnabled().then(()=>{
		cy.addNewUserAdmin(username, employeeNameEmpty, passwordNewUser,passwordNewUser);
	   })
    cy.url().should('contain','saveSystemUser')

   })


   it.only('US-05 TC6:Verify inability to create additional user when all input fields are empty',()=>{
	cy.optionDefaultStatusDefault().then(()=>{
		cy.addNewUserAdmin(emptyUsername, employeeNameEmpty, passwordEmpty, passwordEmpty);
	})
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

	it('US-04 TC2:Verify the existence of a newly created use ',()=>{
		cy.searchNewUser(username, employeeName, firstName, lastName);
	})
	
	
	


})









	
















