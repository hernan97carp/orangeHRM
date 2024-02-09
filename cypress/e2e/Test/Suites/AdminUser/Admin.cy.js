const { adminUserData } = require('../../../../support/DATA/loginData');
const { username, password } = adminUserData;
const { adminUser } = require('../../../../support/POM/Admin.Users');
const searchItems = adminUser.systemUsers;
const resultsSearch = adminUser.recordsFounds
const addNewUsers = adminUser.addUsers


describe('orange | Admin User | User Management', () => {
	beforeEach(() => {
		cy.LoginOrange(username, password);
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
	});

	it('US-XX-XX TC1:Successful User Search with Correct Data Entry', () => {

// CAUTION! This search feature often fails to work correctly and does not find the user.
// It may be considered a bug as the user exists but does not appear in the search when requested.
// Occasionally, however, the user is found, albeit rarely.


		searchItems.usernameInput().click().type('Admin');
		searchItems.userRoleInput().click();
		searchItems.optionUserRoleAdmin().click();
   // VERIFY THAT THE NAME OF THE EMPLOYEE EXISTS BEFORE THE TEST
		searchItems.employeeName().click().type('John William');
		searchItems.status().click();
		searchItems.optionStatusEnable().click();
		searchItems.buttonSearch().click();

        searchItems.employeeNameInvalid().should('not.exist')


  //Results
    resultsSearch.resultsRecordsFounds();
		resultsSearch.usernameFieldContainer()
			.eq(0)
			.should('have.text', 'Admin');
		resultsSearch.userRoleFieldCOntainer()
			.eq(0)
			.should('have.text', 'Admin');
		resultsSearch.employeeNameFieldContainer()
			.eq(0)
		  .should('have.text', 'John William');
		resultsSearch.statusFieldContainer()
			.eq(0)
			.should('have.text', 'Enabled');


	});

  it('US-XX-XX TC2:Verify that the "Reset" button functions correctly when all fields are completed.',()=>{

		searchItems.usernameInput().click().type('Admin');
		searchItems.userRoleInput().click();
		searchItems.optionUserRoleAdmin().click();
		searchItems.employeeName().click().type('John William');
		searchItems.status().click();
		searchItems.optionStatusEnable().click();

		searchItems.buttonReset().click();

    // verify inputs empty
    searchItems.usernameInput().should('have.text','')
  	searchItems.userRoleInput().should('have.text','-- Select --')
    searchItems.employeeName().should('have.text','')
    searchItems.status().should('have.text','-- Select --')
})
});


describe('US-XX-XX orange | Admin User | User Management | add more Users',()=>{
  beforeEach(() => {
		cy.LoginOrange(username, password);
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
	});
it.only('TC1: Verify that the "Add" button redirects correctly to the user addition path.',()=>{
  addNewUsers.addMoreUsers().click()
  cy.url().should('contain','saveSystemUser')
})


})
