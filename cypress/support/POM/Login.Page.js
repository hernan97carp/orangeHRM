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

	errorMessageInvalidCredentials(){
		this.get.invalidCredentials().should('exist').should('have.text', 'Invalid credentials')
	}
    
    emptyInputUsernameRequired(){
		this.get.emptyInputUsername().should('exist').should('be.visible').and('have.text', 'Required')
	}
    emptyInputPasswordRequired(){
		this.get.emptyInputPassword().should('exist').should('be.visible').and('have.text', 'Required')
	}

}

export const login = new Login();
