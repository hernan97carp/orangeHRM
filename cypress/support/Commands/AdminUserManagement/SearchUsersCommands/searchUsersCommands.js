const { adminUser } = require('../../../POM/Admin.Users.Page');
const searchItems = adminUser.systemUsers;
const resultsSearch = adminUser.recordsFounds;
Cypress.Commands.add('searchNewUser', (username, firstName, lastName) => {

	cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');

	
	cy.reload().then(()=>{
	//Search
	searchItems.usernameInput().click().type(username);
	searchItems.userRoleInput().click();
	searchItems.optionUserRoleAdmin().click();


	});

    //cy.employee(employeeName)

	//cy.get('.oxd-autocomplete-option').should('not.contain', 'Searching....').eq(0).click();
	searchItems.status().click();
	searchItems.optionStatusEnable().click();
	searchItems.buttonSearch().click();

	searchItems.employeeNameInvalid().should('not.exist');

	//Results
	resultsSearch.resultsRecordsFounds().should('exist')
	//should('match', /\(1\) Record Found/); 
	resultsSearch.usernameFieldContainer().eq(0).should('have.text', username);
	//resultsSearch.userRoleFieldCOntainer().eq(0).should('have.text', 'Admin');
	resultsSearch
		.employeeNameFieldContainer()
		.eq(0)
		.should('have.text', `${firstName} ${lastName}`);
	//resultsSearch.statusFieldContainer().eq(0).should('have.text', 'Enabled');
});







