const dashboardIndex = Cypress.env('endpoint').dashboardIndex;

const adminUserData = {
  username: Cypress.env('AdminUser').username,
  password: Cypress.env('AdminUser').password,
  usernameEmpty: Cypress.env('AdminUser').usernameEmpty,
  passwordEmpty: Cypress.env('AdminUser').passwordEmpty,
  invalidUsername: Cypress.env('AdminUser').invalidUsername,
  invalidPassword: Cypress.env('AdminUser').invalidPassword,
};

module.exports = {
  dashboardIndex,
  adminUserData,
};