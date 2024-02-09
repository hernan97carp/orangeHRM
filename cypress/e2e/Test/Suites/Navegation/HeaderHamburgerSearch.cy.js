
const { adminUserData } = require('../../../../support/DATA/loginData');
const { dropDown } = require('../../../../support/POM/Drop.Down');
const { username, password} = adminUserData;



describe('US-XX--XX orange | navigation | header hamburger Button Search',()=>{

    beforeEach('Precondition: The user needs to be logged in and still on the dashboard URL',() => {
  
        cy.LoginOrange(username,password)
      
        
    });

    it('US-XX-XX TC1: There should be a search logo.',()=>{
        cy.get('g[fill="currentColor"]').eq(0).should('exist').should('have.attr', 'fill', 'currentColor');
        
    })
    it('US-XX-XX TC2:It should display a valid result when performing a search. ',()=>{
       dropDown.dropdownHeaderHamburger.itemSearch().click().type('buzz')
        cy.get('span.oxd-text.oxd-text--span.oxd-main-menu-item--name').contains('Buzz') 
    })
    it('US-XX-XX TC3:It should display all items from the dropdown menu that have the letter "d".',()=>{

        cy.get('input[placeholder="Search"]').click().type('d');

        // Verificar que se muestren las palabras esperadas
        cy.get('span.oxd-text.oxd-text--span.oxd-main-menu-item--name').each(($el) => {
          const text = $el.text();
          if (text.includes('Dashboard') || text.includes('Admin') || text.includes('Directory')) {
            cy.wrap($el).should('be.visible');
          } else {
            cy.wrap($el).should('not.exist');
          }
        });
    })



    it('US-XX-XX TC4: It should not perform a search with invalid terms or letters that do not exist in the items.',()=>{
      const invalidSearchTerms = ['!','@','w','}','ñ']
      invalidSearchTerms.forEach(term => {
       cy.performSearch(term);
       cy.get('span.oxd-text.oxd-text--span.oxd-main-menu-item--name').should('not.exist') 
       
      })
    })

    it.only('US-XX-XX TC5: It should clear the search results when the search field is cleared.', () => {
      dropDown.dropdownHeaderHamburger.itemSearch().click().type('Term to Clear');
      cy.get('span.oxd-text.oxd-text--span.oxd-main-menu-item--name').should('not.exist');
      dropDown.dropdownHeaderHamburger.itemSearch().clear();
      

      cy.get('li.oxd-main-menu-item-wrapper').should('have.length', 12)
  });
})



//'li.oxd-main-menu-item-wrapper'eq(11)