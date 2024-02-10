
const dataNewEmployee = {
firstName: Cypress.env('dataEmployee').firstName,
middleName:  Cypress.env('dataEmployee').middleName,
lastName:  Cypress.env('dataEmployee').lastName,

}

const dataNewUser = {
    username: Cypress.env('dataUser').username,
    employeeName: Cypress.env('dataUser').employeeName
}
module.exports ={

dataNewEmployee,
dataNewUser
} 