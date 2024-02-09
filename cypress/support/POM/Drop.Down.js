class DropDown {


	userOptions ={
		userOptionsDropdown:() =>cy.get('.oxd-userdropdown-tab'),
		userOptionDropdownLogOut: ()=> cy.get(':nth-child(4) > .oxd-userdropdown-link')
	}

  dropdownHeaderHamburger = {
	menuDropdown: ()=>  cy.get('.oxd-main-menu-search > .oxd-icon-button'),
	itemAdmin: () =>  cy.get('a[href="/web/index.php/admin/viewAdminModule"]'),
	itemPim: () =>   cy.get('a[href="/web/index.php/pim/viewPimModule"]'),
	itemLeave: () => cy.get('a[href="/web/index.php/leave/viewLeaveModule"]'),
	itemTime: () => cy.get('a[href="/web/index.php/time/viewTimeModule"]'),
	itemRecruitment: () => cy.get('a[href="/web/index.php/recruitment/viewRecruitmentModule"]'),
	itemMyInfo: () => cy.get('a[href="/web/index.php/pim/viewMyDetails"]'),
	itemPerformance: () => cy.get('a[href="/web/index.php/performance/viewPerformanceModule"]'),
	itemDashboard: () => cy.get('a[href="/web/index.php/dashboard/index"]'),
    itemDirectory: () => cy.get('a[href="/web/index.php/directory/viewDirectory"]'),
	itemMaintenance: () => cy.get('a[href="/web/index.php/maintenance/viewMaintenanceModule"]'),
	itemClaim: () => cy.get('a[href="/web/index.php/claim/viewClaimModule"]'),
	itemBuzz: () => cy.get('a[href="/web/index.php/buzz/viewBuzz"]'),
	itemSearch: () => cy.get('input[placeholder="Search"]')
  }
  dropdownLogOut() {
	this.userOptions.userOptionsDropdown().should('be.visible').click()
		  
   this.userOptions.userOptionDropdownLogOut().click();
		
	  }
}

export const dropDown = new DropDown;