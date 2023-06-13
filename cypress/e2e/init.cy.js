describe('Test Set Blaze Demo', () => {
  it('enter demoblaze', () => {
    cy.visit('https://www.demoblaze.com')
  })
  it('check product in demoblaze',()=>{
    cy.visit('https://www.demoblaze.com/prod.html?idp_=1')
  })
})
