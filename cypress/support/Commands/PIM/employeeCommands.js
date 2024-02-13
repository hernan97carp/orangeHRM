Cypress.Commands.add('checkAndDeleteEmployee', (employeeName,firstName,middleName,randomNumber) => {
    // Visit the employee list page
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/pim/viewEmployeeList');

    // Search for the employee
    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input')
        .click()
        .type(employeeName);
        cy.get(':nth-child(2) > .oxd-input').click().type(randomNumber)
    // Click the search button

    cy.get('.oxd-form-actions > .oxd-button--secondary').click()


    

    // Iterate through each trash icon to delete the employee
  
    cy.get('.orangehrm-container').should('contain',`${firstName} ${middleName}`)
    cy.get('.oxd-table-cell-actions > :nth-child(1) > .oxd-icon').click()
    cy.get('.oxd-button--label-danger').click()
    cy.get('.oxd-text--toast-message').should('exist');
    cy.get('.oxd-toast').should('exist');

    cy.get('.oxd-table-loader').should('not.exist');

//second part

    cy.get(':nth-child(1) > .oxd-input-group > :nth-child(2) > .oxd-autocomplete-wrapper > .oxd-autocomplete-text-input > input')
    .click()
    .type(employeeName);
    cy.get(':nth-child(2) > .oxd-input').click().type(randomNumber)
    cy.get('.oxd-form-actions > .oxd-button--secondary').click()

    cy.get('.oxd-toast--info > .oxd-toast-start > .oxd-toast-content > .oxd-text--toast-message').should('exist').should('contain','No Records Found')

});
