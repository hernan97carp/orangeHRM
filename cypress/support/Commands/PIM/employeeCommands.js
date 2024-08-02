const { adminUser } = require("../../POM/Admin.Users.Page");

Cypress.Commands.add('checkAndDeleteEmployee', (firstName, middleName, randomNumber) => {
	// Visit the employee list page
	cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');

	// Search for the employee
	cy.get(
		':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input',
	)
		.click()
		.type(`${firstName} ${middleName}`);
	cy.get(':nth-child(2) > .oxd-input').click().type(randomNumber);
	// Click the search button

	cy.get('.oxd-form-actions > .oxd-button--secondary').click();

	// Iterate through each trash icon to delete the employee

	cy.get('.orangehrm-container').should('contain', `${firstName} ${middleName}`).within(()=>{
		cy.get('.oxd-icon.bi-trash').click()
	
	});
	cy.contains('button', 'Yes, Delete') 
	.should('be.visible')
	.trigger('mouseover') 
	.click().then(()=>{
		cy.get(adminUser.addEmployee.alertSuccess).invoke('text').should('contain','Successfully Deleted');
	})


});

