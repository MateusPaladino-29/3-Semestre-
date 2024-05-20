describe('template spec', () => {
  it('passes', () => {
    cy.visit('/')

    cy.viewport("iphone-xr")
  })

  it('Verificar esta Exibindo', ()=> {
    cy.get("[aria-label='title-head']")
    cy.get("[aria-label='title-head']").should("contain", "Good morning")
  })

  it('verificar se tem uma lista com playlist exibida', () => {
    cy.get("[aria-label = 'playlist-item']").should("have.length.greaterThan", 0)
  })


  it('Clicar em uma opcao de playlist e listar sua musicas', () => {
    cy.get("[aria-label = 'playlist-item']").contains("Trapperz Brasil").click()
    cy.wait(1000)
    cy.get("[aria-label = 'music-item']").should("have.length.greaterThan", 0)
  })

  it('Clicar em uma opcao de playlist e listar sua musicas', () => {
    cy.get("[aria-label = 'music-item']").contains("Filho da Noite").click()
    cy.scrollTo("top")
  })


})