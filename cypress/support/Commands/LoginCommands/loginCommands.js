import 'cypress-file-upload';
import '@4tw/cypress-drag-drop';
import 'cypress-downloadfile/lib/downloadFileCommand';

const { login } = require('../../POM/Login.Page');

const { orange, authLogin } = Cypress.env('endpoint');

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


Cypress.on('uncaught:exception', (err, runnable) => {
	console.error('Unhandled error:', err.message);
	return false;
});
