class Login {
	get = {
		usernameInput: () => cy.get('[name="username"]'),
		passwordInput: () => cy.get('[name="password"]'),
		submitButton: () => cy.get('[type="submit"]'),
		forgotLink: () => cy.get('[class*="login-forgot"] p'),
		emptyInputUsername: () => cy.get(':nth-child(2) > .oxd-input-group > .oxd-text'),
		emptyInputPassword: () => cy.get(':nth-child(3) > .oxd-input-group > .oxd-text'),
		invalidCredentials: () => cy.get('p.oxd-text.oxd-text--p.oxd-alert-content-text'),
		
	};
	dropdown ={
		userOptionsDropdown:() =>cy.get('.oxd-userdropdown-tab'),
		userOptionDropdownLogOut: ()=> cy.get(':nth-child(4) > .oxd-userdropdown-link')
	}

  dropdownHeaderHamburger = {
	menuDropdown: ()=>  cy.get('.oxd-main-menu-search > .oxd-icon-button'),
	itemAdmin: () =>  cy.get('a[href="/web/index.php/admin/viewAdminModule"]'),
	itemDashboard: () => cy.get(':nth-child(8) > .oxd-main-menu-item')
  }

	enterUsername(type) {
		if (type) {
			this.get.usernameInput().type(type);
		}
	}

	enterPassword(type) {
		if (type) {
			this.get.passwordInput().type(type);
		}
	}

	submitLogin() {
		this.get.submitButton().click();
	}

	errorMessageInvalidCredentials() {
		this.get.invalidCredentials().should('exist').should('have.text', 'Invalid credentials');
	}

	emptyInputUsernameRequired() {
		this.get
			.emptyInputUsername()
			.should('exist')
			.should('be.visible')
			.and('have.text', 'Required');
	}
	emptyInputPasswordRequired() {
		this.get
			.emptyInputPassword()
			.should('exist')
			.should('be.visible')
			.and('have.text', 'Required');
	}
	dropdownLogOut() {
	this.dropdown.userOptionsDropdown().should('be.visible').click()
		  
   this.dropdown.userOptionDropdownLogOut().click();
		
	  }
}

export const login = new Login();
