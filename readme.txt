In this project I combine Page object Model with commands!


describe('orange | navigation | header hamburger ',()=>{

beforeEach(()=>{

cy.session("login",()=>{
 
    cy.LoginOrange(username, password);
})


 
})
it.only('US-XX-XX TC1: Verify opening and closing of the dashboard dropdown menu',()=>{
    cy.get(':nth-child(8) > .oxd-main-menu-item').should('be.visible').should('have.text','Dashboard')
 cy.get('.oxd-main-menu-search > .oxd-icon-button').click().should('be.visible')
 cy.get(':nth-child(8) > .oxd-main-menu-item').should('not.have.text')
 cy.get('.oxd-main-menu-search > .oxd-icon-button').click().should('be.visible')
 cy.get(':nth-child(8) > .oxd-main-menu-item').should('have.text','Dashboard')

})

it.only('US-XX-XX TC2:Should display and navigate correctly to the "Admin" element',()=>{
    dropdownMenuItems.itemAdmin().click()
    cy.get('.oxd-topbar-header-breadcrumb-level').contains('User Management').should('exist')
    cy.url().should('contain','viewSystemUser')  
})
it.only('US-XX-XX TC3: Should display and navigate correctly to the "Pim" element',()=>{
    dropdownMenuItems.itemPim().click()
  
    
})
it.only('US-XX-XX TC4: Should display and navigate correctly to the "Leave" element',()=>{
    dropdownMenuItems.itemLeave().click()
  
    
})
it.only('US-XX-XX TC5: Should display and navigate correctly to the "Time" element',()=>{
    dropdownMenuItems.itemTime().click()
  
    
})
it.only('US-XX-XX TC6: Should display and navigate correctly to the "Recruitment" element',()=>{
    dropdownMenuItems.itemRecruitment().click()
  
    
})
it.only('US-XX-XX TC7: Should display and navigate correctly to the "My info" element',()=>{
    dropdownMenuItems.itemMyInfo().click()
  
    
})
it.only('US-XX-XX TC7: Should display and navigate correctly to the "Performance" element',()=>{
    dropdownMenuItems.itemPerformance().click()
    
})
})