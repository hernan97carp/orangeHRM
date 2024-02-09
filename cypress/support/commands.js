import 'cypress-file-upload';
import '@4tw/cypress-drag-drop';
import 'cypress-downloadfile/lib/downloadFileCommand';

const { login } = require('../support/POM/Login.Page');
const { dropDown} = require('../support/POM/Drop.Down') 
const { orange, authLogin } = Cypress.env('endpoint');

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
