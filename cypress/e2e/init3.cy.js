describe('Test Set Blaze Demo', () => {
    it('Assert1', () => {
      cy.visit('https://www.demoblaze.com')
      cy.get('#tbodyid > div:nth-child(4) > div > div > h4').should('exist').and('have.text','Samsung galaxy s7')
    })
    it('Assert2', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.get('#cartur').click()
        cy.get('#page-wrapper > div > div.col-lg-8 > div > table').should('exist').and('contain','Price')
      })
      it('Assert3', () => {
        cy.visit('https://www.demoblaze.com/')
        cy.get('#carouselExampleIndicators > div > div:nth-child(1) > img').should('have.attr', 'src', 'Samsung1.jpg');
      })
   })


   