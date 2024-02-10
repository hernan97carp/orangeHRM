class AdminUser {


  systemUsers = {
      bodyPath: ()=> cy.get('.body'),
      usernameInput: ()=>  cy.get(':nth-child(2) > .oxd-input'),
      userRoleInput: ()=> cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input'),
      optionUserRoleAdmin:()=>   cy.get('.oxd-select-dropdown > :nth-child(2)'),
      employeeName:()=>  cy.get('input[placeholder="Type for hints..."]'),
      employeeNameInvalid: ()=> cy.get('.oxd-input-group > .oxd-text'),
      status: ()=>  cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input'),
      optionStatusEnable: ()=> cy.get('.oxd-select-dropdown > :nth-child(2) > span'),
      buttonSearch: () =>  cy.get('.oxd-form-actions > .oxd-button--secondary'),
      buttonReset: ()=> cy.get('.oxd-button--ghost')
    }

    recordsFounds = {
        resultsRecordsFounds: ()=>  cy.get('.orangehrm-horizontal-padding > .oxd-text').invoke('text'),
        usernameFieldContainer:()=> cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div'),
       userRoleFieldCOntainer: ()=> cy.get('.oxd-table-card > .oxd-table-row > :nth-child(3) > div'),
       employeeNameFieldContainer: ()=> cy.get('.oxd-table-card > .oxd-table-row > :nth-child(4) > div'),
       statusFieldContainer:()=> cy.get('.oxd-table-card > .oxd-table-row > :nth-child(5) > div')
       
      }

      addUsers = {
        addMoreUsers: ()=> cy.get('.orangehrm-header-container > .oxd-button'),
      }
    

  }
  
  export const adminUser = new AdminUser();