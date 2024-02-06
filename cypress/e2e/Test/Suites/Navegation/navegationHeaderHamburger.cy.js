const { login } = require('../../../../support/POM/Login.Page');
const { dashboardIndex, adminUserData } = require('../../../../support/DATA/loginData');
const { username, password} = adminUserData;

describe('orange | navigation | header hamburger ',()=>{

beforeEach(()=>{
    cy.visit('/');
    cy.OrangeAndAuthLoginPath();
    cy.LoginOrange(username, password);
 
})
it('US-XX-XX TC1: Verify opening and closing of the dashboard dropdown menu',()=>{
    cy.get(':nth-child(8) > .oxd-main-menu-item').should('be.visible').should('have.text','Dashboard')
 cy.get('.oxd-main-menu-search > .oxd-icon-button').click().should('be.visible')
 cy.get(':nth-child(8) > .oxd-main-menu-item').should('not.have.text')
 cy.get('.oxd-main-menu-search > .oxd-icon-button').click().should('be.visible')
 cy.get(':nth-child(8) > .oxd-main-menu-item').should('have.text','Dashboard')

})

it('US-XX-XX TC2:Should display and navigate correctly to the "Admin" element',()=>{
    cy.get('a[href="/web/index.php/admin/viewAdminModule"]').click()
    cy.get('.oxd-topbar-header-breadcrumb-level').contains('User Management').should('exist')
    cy.url().should('contain','viewSystemUser')  
})
})