class AdminUser {
	systemUsers = {
		bodyPath: () => cy.get('.body'),
		usernameInput: () => cy.get(':nth-child(2) > .oxd-input'),
		userRoleInput: () =>
			cy.get(
				':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input',
			),
		optionUserRoleAdmin: () => cy.get('.oxd-select-dropdown > :nth-child(2)'),
		employeeName: () => cy.get('input[placeholder="Type for hints..."]'),
		employeeNameInvalid: () => cy.get('.oxd-input-group > .oxd-text'),
		status: () =>
			cy.get(
				':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text > .oxd-select-text-input',
			),
		optionStatusEnable: () => cy.get('.oxd-select-dropdown > :nth-child(2) > span'),
		buttonSearch: () => cy.get('.oxd-form-actions > .oxd-button--secondary'),
		buttonReset: () => cy.get('.oxd-button--ghost'),
        tableLoader: () => cy.get('.oxd-table-loader'),
		tableCard: () => cy.get('.oxd-table-card > .oxd-table-row'),
		toast: () => cy.get('.oxd-toast--success'),
		toastContent: () => cy.get('.oxd-toast-content')
	};

	recordsFounds = {
		resultsRecordsFounds: () =>
			cy.get('.orangehrm-horizontal-padding > .oxd-text').invoke('text'),
		noRecordsFound: () =>
			cy.get('oxd-text.oxd-text--p.oxd-text--toast-title.oxd-toast-content-text').invoke('text'),	
		usernameFieldContainer: () =>
			cy.get('.oxd-table-card > .oxd-table-row > :nth-child(2) > div'),
		userRoleFieldCOntainer: () =>
			cy.get('.oxd-table-card > .oxd-table-row > :nth-child(3) > div'),
		employeeNameFieldContainer: () =>
			cy.get('.oxd-table-card > .oxd-table-row > :nth-child(4) > div'),
		statusFieldContainer: () =>
			cy.get('.oxd-table-card > .oxd-table-row > :nth-child(5) > div'),
	};
	
	addEmployee = {
		addMoreUser: () => cy.get('.orangehrm-header-container > .oxd-button'),
		firstNameInput: () =>
			cy.get('.--name-grouped-field > :nth-child(1) > :nth-child(2) > .oxd-input'),
		middleNameInput: () => cy.get(':nth-child(2) > :nth-child(2) > .oxd-input'),
		lastNameInput: () => cy.get(':nth-child(3) > :nth-child(2) > .oxd-input'),
		saveButton: () => cy.get('.oxd-button--secondary'),
		alertSuccess: () => cy.get('.oxd-toast'),
		alertSuccessfullySaved: () => cy.get('.oxd-text--toast-message'),
	};
	addUser = {
		usernameInput: () =>
			cy.get(':nth-child(4) > .oxd-input-group > :nth-child(2) > .oxd-input'),

		userRoleSelect: () => cy.get('.oxd-select-text.oxd-select-text--active, oxd-select-text--after'),
		
		userRoleOptionAdmin: () => cy.get('.oxd-select-dropdown > :nth-child(2) > span'),
		userStatusSelect: () =>
			cy.get(
				':nth-child(3) > .oxd-input-group > :nth-child(2) > .oxd-select-wrapper > .oxd-select-text',
			),
		employeeNameInput: () => cy.get('.oxd-autocomplete-text-input > input'),
		employeeNameDropDownResults: () => cy.get('.oxd-autocomplete-dropdown > :nth-child(1)'),
		userStatusOptionEnabled: () => cy.get('.oxd-select-dropdown > :nth-child(2)'),
		passwordUserInput: () =>
			cy.get('.user-password-cell > .oxd-input-group > :nth-child(2) > .oxd-input'),
		confirmPasswordUserInput: () =>
			cy.get(':nth-child(2) > .oxd-input-group > :nth-child(2) > .oxd-input'),
		saveButton: () => cy.get('.oxd-button--secondary'),
		alertSuccess: () => cy.get('.oxd-toast'),

		errorUsernameAlreadyExist: () => cy.get('.oxd-input-group > .oxd-text'),
		errorUsernameLeastFiveCharacters: () => cy.get('.oxd-input-group > .oxd-text'),
		errorUsernameFortyCharacters: () => cy.get(':nth-child(4) > .oxd-input-group > .oxd-text'),
		errorEmployeeNameRequired: () =>
			cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > .oxd-text'),
		errorRoleSelectRequired: () =>
			cy.get(':nth-child(1) > .oxd-grid-2 > :nth-child(1) > .oxd-input-group > .oxd-text'),
		errorStatusRequired: () => cy.get(':nth-child(3) > .oxd-input-group > .oxd-text'),
		errorPasswordRequired: () => cy.get('.user-password-cell > .oxd-input-group > .oxd-text'),
		errorPasswordConfirm: () =>
			cy.get(
				'.user-password-row > .oxd-grid-2 > :nth-child(2) > .oxd-input-group > .oxd-text',
			),
	};




   goTo(){
	cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/admin/viewSystemUsers');
   }




}

export const adminUser = new AdminUser();
