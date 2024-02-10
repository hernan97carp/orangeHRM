import 'cypress-file-upload';
import '@4tw/cypress-drag-drop';
import 'cypress-downloadfile/lib/downloadFileCommand';


const { login } = require('../support/POM/Login.Page');
const { dropDown} = require('../support/POM/Drop.Down') 
const { orange, authLogin } = Cypress.env('endpoint');
const { adminUser } = require('../support/POM/Admin.Users');
const searchItems = adminUser.systemUsers;
const resultsSearch = adminUser.recordsFounds
// Custom function to perform a login in OrangeHRM with the option to keep the session active
//Only use these commands to test the software
Cypress.Commands.add('LoginOrange', (user, pass) => {
	cy.session('Login',()=>{
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
		cy.url().should("contain", "orangehrm")
		login.enterUsername(user);
		login.enterPassword(pass);
		login.submitLogin();
		
	})
	cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
});

// Custom function to perform a basic login in OrangeHRM without keeping the session active
//only use these commands to test the login
Cypress.Commands.add('testLogin', (user, pass) => {

		cy.visit("https://opensource-demo.orangehrmlive.com/")
		cy.url().should("contain", "orangehrm")
		login.enterUsername(user);
		login.enterPassword(pass);
		login.submitLogin();		
});

Cypress.Commands.add('OrangeAndAuthLoginPath', () => {
	cy.url().should('contain', orange);
	cy.url().should('contain', authLogin);
	login.get.formLogin().should('exist').should('be.visible')
});

Cypress.Commands.add('ErrorInvalidCredentials', () => {
	login.errorMessageInvalidCredentials();
});

// Configuration to handle uncaught exceptions
Cypress.on('uncaught:exception', (err, runnable) => {
	// Print the error message to the console
	console.error('Unhandled error:', err.message);
	
	// Return false to prevent Cypress from automatically failing the test
	return false;
  });
  
Cypress.Commands.add("performSearch",(searchTerm)=>{
 dropDown.dropdownHeaderHamburger.itemSearch().click().clear().type(searchTerm)

})



// Commands to the Admin.Users.js
Cypress.Commands.add('elementNotExist', () => {
	cy.get('.oxd-input-group > .oxd-text').should('not.exist');
  });
  
  Cypress.Commands.add('enterUsername', (username) => {
	cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input')
	  .click()
	  .clear()
	  .type(username);
  });
  



  Cypress.Commands.add('addNewEmployee',(fistName,middleName,LastName)=>{

cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList')
cy.get('.oxd-button.oxd-button--medium.oxd-button--secondary').eq(1).click()

//employee name
cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input').click().type(fistName)

cy.get(':nth-child(2) > :nth-child(2) > .oxd-input').click().type(middleName)


cy.get(':nth-child(3) > :nth-child(2) > .oxd-input').click().type(LastName)

cy.get('.oxd-button--secondary').click()

cy.get('.oxd-toast').should('be.exist').should('be.exist')

  })
  



Cypress.Commands.add('addNewUser',(username,employeeName)=>{

cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser')
		cy.url().should('contain','saveSystemUser')
		cy.get('.oxd-select-text--after').eq(0).click()
		cy.get('.oxd-select-dropdown > :nth-child(2)').click()
	
		cy.get(':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
		cy.get('.oxd-select-dropdown > :nth-child(2)').click()
	
		//employee name
		cy.get('.oxd-autocomplete-text-input > input').click().type(employeeName)
	
		cy.get('.oxd-autocomplete-dropdown > :nth-child(1)').should('not.contain','Searching').click()
	
		//username
       cy.enterUsername(username)

		cy.get('.oxd-input-group > .oxd-text').should('not.exist').then(() => {
				cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input').type('password123')
				//confirm password
				cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input').type('password123')
		
				cy.get('[data-layer="Content"]').should('not.exist')
				cy.get('.oxd-button--secondary').click()
				cy.get('.oxd-toast').should('be.exist').should('contain','Success')

		})
})







Cypress.Commands.add('searchNewUser',(username, employeeName,firstName,lastName)=>{
cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers')

		searchItems.usernameInput().click().type(username);
		searchItems.userRoleInput().click();
		searchItems.optionUserRoleAdmin().click();
		searchItems.employeeName().click().type(employeeName);
		cy.get('.oxd-autocomplete-option').should('not.contain','Searching....').eq(0).click()
		searchItems.status().click();
		searchItems.optionStatusEnable().click();
		searchItems.buttonSearch().click();

        searchItems.employeeNameInvalid().should('not.exist')


  //Results
    resultsSearch.resultsRecordsFounds().should('match', /\(1\) Record Found/);
		resultsSearch.usernameFieldContainer()
			.eq(0)
			.should('have.text', username);
		resultsSearch.userRoleFieldCOntainer()
			.eq(0)
			.should('have.text', 'Admin');
		resultsSearch.employeeNameFieldContainer()
			.eq(0)
		  .should('have.text', `${firstName} ${lastName}`);
		resultsSearch.statusFieldContainer()
			.eq(0)
			.should('have.text', 'Enabled');



})

















