const { dropDown } = require('../../../../support/POM/Drop.Down');
const { LoginUserData } = require('../../../../support/DATA/loginData');
const { usernameLogin, passwordLogin} = LoginUserData;
const dropdownMenuItems = dropDown.userOptions
describe('orange | dropdown | userProfileDropDown',()=>{

    beforeEach(()=>{
        cy.LoginOrange(usernameLogin,passwordLogin)

    })
    it('US-XX-XX TC1: Verify the presence and visibility of the profile image', () => {
        dropdownMenuItems.imgProfile().should('exist').should('be.visible').should(($img) => {
            expect($img.attr('src').trim()).to.not.be.empty; })
    
    });
    it('US-XX-XX TC2: Verify the presence and visibility of the profile name', () => {
    dropdownMenuItems.profileName().should('exist').should('be.visible').should(($p) => {
      expect($p.text().trim()).to.not.be.empty;
    });
    })
    it('US-XX-XX TC3:Verify that the user dropdown menu opens when the user clicks on the user profile button.',()=>{

       dropdownMenuItems.userOptionsDropdown().click()
       dropdownMenuItems.menu().should('exist')
       dropDown.verifyItemsUserDropDown()

    })
    it('US-XX-XX TC4: Verify that the dropdown menu can be opened and closed', () => {
       
        dropdownMenuItems.menu().should('not.exist');
    
        dropdownMenuItems.userOptionsDropdown().click();
    
        dropdownMenuItems.menu().should('exist');
      
       cy.get('body').click();
       dropdownMenuItems.menu().should('not.exist')

    });
 
   it('US-XX-XX TC5: Verify that all expected items ("About", "Support", "Change Password", "Logout") exist in the dropdown menu.',()=>{
    dropdownMenuItems.userOptionsDropdown().click();
    dropdownMenuItems.menu().should('exist');
    dropDown.verifyItemsUserDropDown()

   })

   it('US-XX-XX TC6: Verify that clicking on the "About" item in the dropdown menu redirects the user to the correct page', () => {
    // Click on the user profile button to open the dropdown menu
    dropdownMenuItems.userOptionsDropdown().click();

    // Click on the "About" item and verify redirection
    dropdownMenuItems.itemAbout().click();
    cy.url().should('include', '/index#');
    cy.get('div[role="document"]').should('exist').should('be.visible')
});

it('US-XX-XX TC7: Verify that clicking on the "Support" item in the dropdown menu redirects the user to the correct page', () => {
    dropdownMenuItems.userOptionsDropdown().click();
    dropdownMenuItems.itemSupport().click();
    cy.url().should('include', '/help/support');
    cy.get('div.orangehrm-card-container').should('exist').should('be.visible')
});

it('US-XX-XX TC8: Verify that clicking on the "Change Password" item in the dropdown menu redirects the user to the correct page', () => {
    // Click on the user profile button to open the dropdown menu
    dropdownMenuItems.userOptionsDropdown().click();

    // Click on the "Change Password" item and verify redirection
    dropdownMenuItems.itemChangePassword().click();
    cy.url().should('include', '/updatePassword');
    cy.get('h6.oxd-text.oxd-text--h6.orangehrm-main-title').should('have.text','Update Password')
});

it('US-XX-XX TC9: Verify that clicking on the "Logout" item in the dropdown menu redirects the user to the correct page', () => {
    // Click on the user profile button to open the dropdown menu
    dropdownMenuItems.userOptionsDropdown().click();

    // Click on the "Logout" item and verify redirection
    dropdownMenuItems.itemLogOut().click();
    cy.OrangeAndAuthLoginPath()
});

})