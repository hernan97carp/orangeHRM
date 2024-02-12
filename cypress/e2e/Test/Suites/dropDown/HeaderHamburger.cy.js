const { dropDown } = require('../../../../support/POM/Drop.Down');
const { LoginUserData } = require('../../../../support/DATA/loginData');
const { usernameLogin, passwordLogin } = LoginUserData;
const dropdownMenuItems = dropDown.dropdownHeaderHamburger;

describe('orange | dropDown | header hamburger', () => {
	beforeEach(() => {
		cy.LoginOrange(usernameLogin, passwordLogin);
		cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index');
	});
	it('US-02 TC1: Verify opening and closing of the dashboard dropdown menu if the text disappears (Desktop Only)', () => {
		dropdownMenuItems.menuDropdown().click().should('be.visible'); //button
		dropdownMenuItems.itemDashboard().should('not.have.text'); //item
		dropdownMenuItems.menuDropdown().click().should('be.visible'); //button
		dropdownMenuItems.itemDashboard().should('have.text', 'Dashboard'); //item
	});

	it('US-02 TC2:Should display and navigate correctly to the "Admin" element', () => {
		dropdownMenuItems.itemAdmin().click();
		cy.url().should('contain', 'viewSystemUser');
		cy.get('.oxd-topbar-header-title').contains('User Management');
	});
	it('US-02 TC3: Should display and navigate correctly to the "Pim" element', () => {
		dropdownMenuItems.itemPim().click();
		cy.url().should('contain', 'viewEmployeeList');
		cy.get('.oxd-topbar-header-title').contains('PIM');
	});
	it('US-02 TC4: Should display and navigate correctly to the "Leave" element', () => {
		dropdownMenuItems.itemLeave().click();
		cy.url().should('contain', 'viewLeaveList');
		cy.get('.oxd-topbar-header-title').contains('Leave');
	});
	it('US-02 TC5: Should display and navigate correctly to the "Time" element', () => {
		dropdownMenuItems.itemTime().click();
		cy.url().should('contain', 'viewEmployeeTimesheet');
		cy.get('.oxd-topbar-header-title').contains('Timesheets');
	});
	it('US-02 TC6: Should display and navigate correctly to the "Recruitment" element', () => {
		dropdownMenuItems.itemRecruitment().click();
		cy.url().should('contain', 'viewCandidates');
		cy.get('.oxd-topbar-header-title').contains('Recruitment');
	});
	it('US-02 TC7: Should display and navigate correctly to the "My info" element', () => {
		dropdownMenuItems.itemMyInfo().click();
		cy.url().should('contain', 'viewPersonalDetails');
		cy.get('.oxd-topbar-header-title').contains('PIM');
	});
	it('US-02 TC8: Should display and navigate correctly to the "Performance" element', () => {
		dropdownMenuItems.itemPerformance().click();

		cy.url().should('contain', 'searchEvaluatePerformanceReview');
		cy.get('.oxd-topbar-header-title').contains('Manage Reviews');
	});

	it('US-02 TC9: Should display and navigate correctly to the "Dashboard" element', () => {
		dropdownMenuItems.itemDashboard().click();

		cy.url().should('contain', 'dashboard');
		cy.get('.oxd-topbar-header-title').contains('Dashboard');
	});
	it('US-02 TC10: Should display and navigate correctly to the "Directory" element', () => {
		dropdownMenuItems.itemDirectory().click();
		cy.url().should('contain', 'viewDirectory');
		cy.get('.oxd-topbar-header-title').contains('Directory');
	});

	it('US-02 TC11: Should display and navigate correctly to the "Maintenance" element', () => {
		dropdownMenuItems.itemMaintenance().click();
		cy.url().should('contain', 'purgeEmployee');
		cy.get('[action="/web/index.php/auth/adminVerify"]')
			.should('be.visible')
			.contains('Administrator Access');
	});

	it('US-02 TC12: Should display and navigate correctly to the "Claim" element', () => {
		dropdownMenuItems.itemClaim().click();
		cy.url().should('contain', 'viewAssignClaim');
		cy.get('.oxd-topbar-header-title').contains('Claim');
	});

	it('US-02 TC13: Should display and navigate correctly to the "Buzz" element', () => {
		dropdownMenuItems.itemBuzz().click();
		cy.url().should('contain', 'viewBuzz');
		cy.get('.oxd-topbar-header-title').contains('Buzz');
	});
});

describe('orange | navigation | header hamburger Button Search', () => {
	beforeEach(
		'Precondition: The user needs to be logged in and still on the dashboard URL',
		() => {
			cy.LoginOrange(usernameLogin, passwordLogin);
		},
	);

	it('US-02 TC1: There should be a search logo.', () => {
		cy.get('g[fill="currentColor"]')
			.eq(0)
			.should('exist')
			.should('have.attr', 'fill', 'currentColor');
	});
	it('US-02 TC2:It should display a valid result when performing a search. ', () => {
		dropdownMenuItems.itemSearch().click().type('buzz');
		cy.get('span.oxd-text.oxd-text--span.oxd-main-menu-item--name').contains('Buzz');
	});
	it('US-02 TC3:It should display all items from the dropdown menu that have the letter "d".', () => {
		dropdownMenuItems.itemSearch().click().type('d');

		cy.get('span.oxd-text.oxd-text--span.oxd-main-menu-item--name').each(($el) => {
			const text = $el.text();
			if (
				text.includes('Dashboard') ||
				text.includes('Admin') ||
				text.includes('Directory')
			) {
				cy.wrap($el).should('be.visible');
			} else {
				cy.wrap($el).should('not.exist');
			}
		});
	});

	it('US-02 TC4: It should not perform a search with invalid terms or letters that do not exist in the items.', () => {
		const invalidSearchTerms = ['!', '@', 'w', '}', 'ñ'];
		invalidSearchTerms.forEach((term) => {
			cy.performSearch(term);
			cy.get('span.oxd-text.oxd-text--span.oxd-main-menu-item--name').should('not.exist');
		});
	});

	it('US-02 TC5: It should clear the search results when the search field is cleared.', () => {
		dropdownMenuItems.itemSearch().click().type('Term to Clear');
		cy.get('span.oxd-text.oxd-text--span.oxd-main-menu-item--name').should('not.exist');
		dropdownMenuItems.itemSearch().clear();
		cy.get('li.oxd-main-menu-item-wrapper').should('have.length', 12);
	});
});
