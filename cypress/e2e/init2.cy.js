describe('Test Set Blaze Demo', () => {
  it('Selector1', () => {
    cy.visit('https://www.demoblaze.com')
    cy.get('div > a[href="prod.html?idp_=1"]').click()
    cy.get('#login2').click()
    cy.get('#loginusername').type('usuario123')
  })
  it('Selector2', () => {
    cy.visit('https://www.demoblaze.com')
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get('#message-text').type('This is a test')
    cy.get('#exampleModal > .modal-dialog > .modal-content > .modal-header > .close > span').click()
  })
  it('Selector3', () => {
    cy.visit('https://www.demoblaze.com')
    cy.get('[onclick="byCat(\'phone\')"]').click()
    cy.get('#next2').click()
  })
 })