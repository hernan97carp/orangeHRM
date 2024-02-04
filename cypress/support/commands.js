import 'cypress-file-upload';
import '@4tw/cypress-drag-drop';
import 'cypress-downloadfile/lib/downloadFileCommand';

const { login } = require('../support/POM/Login.Page');
const { orange, authLogin } = Cypress.env('endpoint');
Cypress.Commands.add('LoginOrange', (user, pass) => {
	login.enterUsername(user);
	login.enterPassword(pass);
	login.submitLogin();
});

Cypress.Commands.add(
	'assertElementExistsVisibleWithText',
	{ prevSubject: true },
	(subject, text) => {
		cy.wrap(subject).should('exist').should('be.visible').and('have.text', text);
	},
);

Cypress.Commands.add('OrangeAndAuthLoginPath', () => {
	cy.url().should('contain', orange);
	cy.url().should('contain', authLogin);
});

Cypress.Commands.add("errorInvalidCredentials",()=>{
  login.errorMessageInvalidCredentials()

})