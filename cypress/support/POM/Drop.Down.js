class DropDown {


	userOptions ={
		userOptionsDropdown:() =>cy.get('.oxd-userdropdown-tab'),
        imgProfile: ()=> cy.get('img.oxd-userdropdown-img'),
		profileName: () => cy.get('p.oxd-userdropdown-name'),
		menu: () => cy.get('ul.oxd-dropdown-menu'),
		itemAbout: () => cy.get('a[role="menuitem"]').eq(0),
		itemSupport: () => cy.get('a[role="menuitem"]').eq(1),
		itemChangePassword: () => cy.get('a[role="menuitem"]').eq(2),
		itemLogOut: () => cy.get('a[role="menuitem"]').eq(3),
		
		
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
		  
   this.userOptions.itemLogOut().click();
		
	  }

	 verifyItemsUserDropDown(){
		//Improved readability by utilizing 'within' for better context management.
		this.userOptions.menu().within(()=>{
			this.userOptions.itemAbout().should('exist').should('contain.text','About')
			this.userOptions.itemSupport().should('exist').should('contain.text','Support')
			this.userOptions.itemChangePassword().should('exist').should('contain.text','Change Password')
			this.userOptions.itemLogOut().should('exist').should('contain.text','Logout')
		   })
	 } 
}

export const dropDown = new DropDown();