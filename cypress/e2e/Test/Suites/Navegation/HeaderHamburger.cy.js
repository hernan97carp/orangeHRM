const { dropDown } = require('../../../../support/POM/Drop.Down');
const { adminUserData } = require('../../../../support/DATA/loginData');
const { username, password} = adminUserData;
const dropdownMenuItems = dropDown.dropdownHeaderHamburger
describe('orange | navigation | header hamburger', () => {
    beforeEach(() => {
        cy.LoginOrange(username,password)
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index')
        
    });
    it('US-XX-XX TC1: Verify opening and closing of the dashboard dropdown menu if the text disappears (Desktop Only)',()=>{
        dropdownMenuItems.menuDropdown().click().should('be.visible')//button
     dropdownMenuItems.itemDashboard().should('not.have.text')//item
     dropdownMenuItems.menuDropdown().click().should('be.visible')//button
     dropdownMenuItems.itemDashboard().should('have.text','Dashboard')//item
    
    })
    
    it('US-XX-XX TC2:Should display and navigate correctly to the "Admin" element',()=>{
        dropdownMenuItems.itemAdmin().click()
        cy.url().should('contain','viewSystemUser')  
        cy.get('.oxd-topbar-header-title').contains('User Management')
    })
    it('US-XX-XX TC3: Should display and navigate correctly to the "Pim" element',()=>{
        dropdownMenuItems.itemPim().click()
        cy.url().should('contain','viewEmployeeList')  
        cy.get('.oxd-topbar-header-title').contains('PIM')
        
    })
    it('US-XX-XX TC4: Should display and navigate correctly to the "Leave" element',()=>{
        dropdownMenuItems.itemLeave().click()
        cy.url().should('contain','viewLeaveList')  
        cy.get('.oxd-topbar-header-title').contains('Leave')
        
        
    })
    it('US-XX-XX TC5: Should display and navigate correctly to the "Time" element',()=>{
        dropdownMenuItems.itemTime().click()
        cy.url().should('contain','viewEmployeeTimesheet')  
        cy.get('.oxd-topbar-header-title').contains('Timesheets')
        
    })
    it('US-XX-XX TC6: Should display and navigate correctly to the "Recruitment" element',()=>{
        dropdownMenuItems.itemRecruitment().click()
        cy.url().should('contain','viewCandidates')  
        cy.get('.oxd-topbar-header-title').contains('Recruitment')
       
    })
    it('US-XX-XX TC7: Should display and navigate correctly to the "My info" element',()=>{
        dropdownMenuItems.itemMyInfo().click()
        cy.url().should('contain','viewPersonalDetails')  
        cy.get('.oxd-topbar-header-title').contains('PIM')
      
    })
    it('US-XX-XX TC8: Should display and navigate correctly to the "Performance" element',()=>{
        dropdownMenuItems.itemPerformance().click()
        
        cy.url().should('contain','searchEvaluatePerformanceReview')  
        cy.get('.oxd-topbar-header-title').contains('Manage Reviews')

        
    })


    it('US-XX-XX TC9: Should display and navigate correctly to the "Dashboard" element',()=>{
        dropdownMenuItems.itemDashboard().click()
        
        cy.url().should('contain','dashboard')  
        cy.get('.oxd-topbar-header-title').contains('Dashboard')

        
    })
    it('US-XX-XX TC10: Should display and navigate correctly to the "Directory" element',()=>{
        dropdownMenuItems.itemDirectory().click()
        cy.url().should('contain','viewDirectory')  
        cy.get('.oxd-topbar-header-title').contains('Directory')

        
    })
 
    it('US-XX-XX TC11: Should display and navigate correctly to the "Maintenance" element',()=>{
        dropdownMenuItems.itemMaintenance().click()
        cy.url().should('contain','purgeEmployee')  
        cy.get('[action="/web/index.php/auth/adminVerify"]').should('be.visible').contains('Administrator Access')

        
    })
 
    it('US-XX-XX TC12: Should display and navigate correctly to the "Claim" element',()=>{
        dropdownMenuItems.itemClaim().click()
        cy.url().should('contain','viewAssignClaim')  
        cy.get('.oxd-topbar-header-title').contains('Claim')
    })
 
    it('US-XX-XX TC13: Should display and navigate correctly to the "Buzz" element',()=>{
        dropdownMenuItems.itemBuzz().click()
        cy.url().should('contain','viewBuzz')  
        cy.get('.oxd-topbar-header-title').contains('Buzz')
  
    })

  });




