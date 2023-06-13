describe('Api', () => {
    const poke = 'pikachu'
    it('Api test', () => {
      cy.request('GET','https://pokeapi.co/api/v2/pokemon/pikachu').its('status').should('equal',200)
    })
    it('Api test', () => {
      cy.request({method:"GET", url:"https://pokeapi.co/api/v2/pokemon/beltran",failOnStatusCode:false }).its('status').should('equal',404)
    })
    it('Api test', () => {
      cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/'+poke).its('body.name').should('equal','pikachu')  
    })
    it('Api test', () => {
      cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/'+poke).its('body.types[0].type.name').should('equal','electric')  
    })
    it('Api test', () => {
      cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/'+poke).then(
        (response)=>{
          expect(response.body).to.have.property('name',poke)
          expect(response.body.types[0].type).to.have.properties('name','electric')
        })  
    })
  })