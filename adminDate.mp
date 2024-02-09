John  William

Hernan
enabled
12345hsd




No es posible probar el search porque presenta multiples errores al buscar un admin o ess que ya existe 
por lo tanto es imposible realizar pruebas

       cy.get('.oxd-button--ghost').click()
       cy.get(':nth-child(2) > .oxd-input').click().type('Admin')
      
      
       cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
       cy.get('.oxd-select-dropdown > :nth-child(2)').click()
       cy.get('input[placeholder="Type for hints..."]').click().type('John William')
       cy.get('.oxd-autocomplete-option')
       cy.wait(2000)
       cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input').click()
       cy.get('.oxd-select-dropdown > :nth-child(2) > span').click()

       cy.get('.orangehrm-container').should('exist')
    
       
      // --SELECT-- cy.get('.oxd-select-dropdown > :nth-child(1)').click() 
       //ESS  cy.get('.oxd-select-dropdown > :nth-child(3)').click() 