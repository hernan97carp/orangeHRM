import "cypress-file-upload";
import "@4tw/cypress-drag-drop";
import "cypress-downloadfile/lib/downloadFileCommand";

const { login } = require("../support/POM/Login.Page");

Cypress.Commands.add("LoginOrange", (user, pass) => {
  cy.visit("https://opensource-demo.orangehrmlive.com/");
  cy.url().should("contain", "orangehrm");

  login.enterUsername(user);
  login.enterPassword(pass);
  login.submitLogin();
});


Cypress.Commands.add("LoginOrange", (user, pass) => {

    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.url().should("contain", "orangehrm");

    login.enterUsername(user);
    login.enterPassword(pass);
    login.submitLogin();

});

Cypress.Commands.add("assertElementExistsVisibleWithText", { prevSubject: true }, (subject, text) => {
  cy.wrap(subject)
    .should("exist")
    .should("be.visible")
    .and("have.text", text);
});