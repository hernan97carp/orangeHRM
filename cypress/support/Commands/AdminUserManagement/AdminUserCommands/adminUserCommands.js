
const { adminUser } = require('../../../POM/Admin.Users');
const searchItems = adminUser.systemUsers;
const createNewEmployee = adminUser.addEmployee;
const createNewUser = adminUser.addUser;

// COMMANDS TO ADMIN USER
Cypress.Commands.add('elementNotExist', () => {
	cy.get('.oxd-input-group > .oxd-text').should('not.exist');
});

Cypress.Commands.add('enterUsername', (username) => {
	const input = createNewUser.usernameInput();

	if (username !== '') {
		input.click().clear().type(username);
	} else {
		input.click().clear();
	}
});

Cypress.Commands.add('employeeName', (employeeName) => {
	const input = createNewUser.employeeNameInput();
	if (employeeName !== '') {
		input.click().clear().type(employeeName);
		createNewUser.employeeNameDropDownResults().should('not.contain', 'Searching').click();
	} else {
		input.click().clear();
	}
});

Cypress.Commands.add('enterPassword', (password) => {
	const input = createNewUser.passwordUserInput();

	if (password !== '') {
		input.click().clear().type(password);
	} else {
		input.click().clear();
	}
});

Cypress.Commands.add('confirmPassword', (password) => {
	const input = createNewUser.confirmPasswordUserInput();

	if (password !== '') {
		input.click().clear().type(password);
	} else {
		input.click().clear();
	}
});

Cypress.Commands.add('addNewEmployee', (fistName, middleName, LastName,randomNumber) => {
	cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');
	createNewEmployee.addMoreUser().click();
	createNewEmployee.firstNameInput().click().type(fistName);
	createNewEmployee.middleNameInput().click().type(middleName);
	createNewEmployee.lastNameInput().click().type(LastName);
	cy.get('.oxd-grid-item > .oxd-input-group > :nth-child(2) > .oxd-input').click().clear().type(randomNumber)
	createNewEmployee.saveButton().click();
	createNewEmployee.alertSuccess().should('exist')
	createNewEmployee.alertSuccessfullySaved().should('contain', 'Successfully Saved');
	
});

Cypress.Commands.add('optionDefaultStatusDefault', () => {
	cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');
	createNewUser.userRoleSelect();
	createNewUser.userStatusSelect();
});

Cypress.Commands.add('optionAdminStatusEnabled', () => {
	cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/saveSystemUser');
	createNewUser.userRoleSelect().eq(0).click()
	createNewUser.userRoleOptionAdmin().click();
	createNewUser.userStatusSelect().click();
	createNewUser.userStatusOptionEnabled().click();
});

Cypress.Commands.add('addNewUserAdmin', (username, employeeName, password, confirmPassword) => {
	cy.url().should('contain', 'saveSystemUser');
	cy.enterUsername(username);
	cy.employeeName(employeeName);
	cy.enterPassword(password);
	cy.confirmPassword(confirmPassword);
	createNewUser.saveButton().click();
});
Cypress.Commands.add('validateAllRequiredFieldsCompleted', () => {
	createNewUser.errorUsernameAlreadyExist().should('exist');
	createNewUser.errorEmployeeNameRequired().should('exist');
	createNewUser.errorRoleSelectRequired().should('exist');
	createNewUser.errorStatusRequired().should('exist');
	createNewUser.errorPasswordRequired().should('exist');
	createNewUser.errorPasswordConfirm().should('exist');
});

Cypress.Commands.add('validateUserCreationForm', () => {
	createNewUser.errorUsernameAlreadyExist().should('not.exist');
	createNewUser.errorEmployeeNameRequired().should('not.exist');
	createNewUser.errorRoleSelectRequired().should('not.exist');
	createNewUser.errorStatusRequired().should('not.exist');
	createNewUser.errorPasswordRequired().should('not.exist');
	createNewUser.errorPasswordConfirm().should('not.exist');
	createNewUser.alertSuccess().should('be.exist').should('contain', 'Success');
});



Cypress.Commands.add('employee',(employeeName)=>{
	const input = searchItems.employeeName();
	if (employeeName !== '') {
		input.click().clear().type(employeeName);
	} else {
		input.click().clear();
	}
})

//USER DELETE

Cypress.Commands.add('checkAndDeleteUser', (username) => {
	cy.reload()
    // Hacer clic en el campo de entrada de username e ingresar el valor
    searchItems.usernameInput().click().type(username);
    // Hacer clic en el botón de búsqueda
    searchItems.buttonSearch().click();
	cy.get('.oxd-table-loader').should('not.exist')
    searchItems.buttonSearch().click();

    // Esperar a que se carguen los elementos de la tabla y buscar el usuario
    cy.get('.oxd-table-row').should('exist').then($rows => {
        if ($rows.find(`:contains("${username}")`).length > 0) {
            // Si el usuario está presente, hacer clic en el icono de basura para eliminarlo
            cy.get('i.oxd-icon.bi-trash').click();
            cy.get('.oxd-button--label-danger').click();
            cy.get('.oxd-text--toast-message').should('exist');
            cy.contains(username).should('not.exist');
        } else {
            // Si el usuario no está presente, verificar que el icono de basura no exista
            cy.get('i.oxd-icon.bi-trash').should('not.exist');
			cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
		
			cy.get('.orangehrm-container').should('be.visible')
			cy.get('.orangehrm-container').contains(username).should('not.exist')
			
            cy.log(`The user "${username}" was not found.`);
        }
    });
});
//USER EDIT

Cypress.Commands.add('userEdit', (username) => {

	cy.get('.oxd-table-row').then($rows => {
      
		searchItems.usernameInput().click().type(username);
		searchItems.buttonSearch().click();
	  if ($rows.find(`:contains("${username}")`).length > 0) {
		// If user is present, click on the trash icon to delete it
		cy.get('.oxd-table-cell-actions > :nth-child(2) > .oxd-icon').click()
	  } else {
		// If user is not present, verify that the trash icon does not exist
		console.log("asds")
	  }
	});
  });











/*

	cy.get('.oxd-table-row').then($rows => {
		searchItems.usernameInput().click().type(username);
		searchItems.buttonSearch().click();
	  if ($rows.find(`:contains("${username}")`).length > 0) {
		// If user is present, click on the trash icon to delete it
		cy.get('i.oxd-icon.bi-trash').click();
		cy.get('.oxd-button--label-danger').click();
		cy.get('.oxd-text--toast-message').should('exist')
		cy.contains(username).should('not.exist');
	
	  } else {
		// If user is not present, verify that the trash icon does not exist
		cy.get('i.oxd-icon.bi-trash').should('not.exist');
		cy.log(`The user "${username}" was not found.`);
	  }
	}); */








