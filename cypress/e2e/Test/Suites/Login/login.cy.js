const { login } = require("../../../../support/POM/Login.Page");
const { authLogin, dashboardIndex,orange } = Cypress.env("endpoint");
const { username, password, usernameEmpty, passwordEmpty,invalidUsername, invalidPassword, invalidCredentials} =
  Cypress.env("AdminUser");

describe("orangeHRM | Account | log in", () => {
  beforeEach(() => {
    cy.visit("/");
    cy.url().should("contain", orange);
    cy.url().should("contain", authLogin);
  });

  it("US-XX-XX TC1: Validate successful login with valid credentials ", () => {
    cy.LoginOrange(username, password);
    cy.url().should(
      "contain",
      dashboardIndex,
      "Failed to navigate to the dashboard"
    );
    cy.contains("Dashboard").should("be.visible");
  });

  it("US-XX-XX TC2: Verify login is not permitted when the password input is empty.", () => {
    cy.LoginOrange(username, passwordEmpty);

    login.get
      .emptyInputPassword()
      .assertElementExistsVisibleWithText("Required");
      cy.url().should("contain", orange);
      cy.url().should("contain", authLogin);   
  });

  it("US-XX-XX TC3: Verify login is not permitted when the username input is empty.", () => {
    cy.LoginOrange(usernameEmpty, password);
    login.get
      .emptyInputUsername()
      .assertElementExistsVisibleWithText("Required");
      cy.url().should("contain", orange);
      cy.url().should("contain", authLogin);   
  });

  it("US-XX-XX TC4: Validate that login is not allowed when both the USERNAME and PASSWORD fields are left empty.", () => {
    cy.LoginOrange(usernameEmpty, passwordEmpty);
    login.get
      .emptyInputUsername()
      .assertElementExistsVisibleWithText("Required");
    login.get
      .emptyInputPassword()
      .assertElementExistsVisibleWithText("Required");
      cy.url().should("contain", orange);
      cy.url().should("contain", authLogin);   
  });
  it("US-XX--XX TC5: Verify login failure with valid username and invalid password",()=>{
   cy.LoginOrange(username,invalidPassword)
   login.get.invalidCredentials().should('exist').should('have.text','Invalid credentials')
   cy.url().should("contain", orange);
   cy.url().should("contain", authLogin);   
  });
  it("US-XX--XX TC6: Verify login failure with invalid username and valid password",()=>{
    cy.LoginOrange(invalidUsername, password)
    login.get.invalidCredentials().should('exist').should('have.text','Invalid credentials')
    cy.url().should("contain", orange);
    cy.url().should("contain", authLogin);   
  });
  it("US-XX--XX TC7: Verify login failure with invalid credentials",()=>{
    cy.LoginOrange(invalidUsername,invalidPassword)
    login.get.invalidCredentials().should('exist').should('have.text','Invalid credentials')
    cy.url().should("contain", orange);
    cy.url().should("contain", authLogin);   
  });
});