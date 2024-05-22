describe('template spec', () => {

  before (() => {
    cy.visit('/')
  })

  it('Verificar se o header esta visivel', () => {
    // Capturar o elemento title,e ver se ele esta visivel
    cy.get('[aria-label="title-head"]').should("be.visible")
    cy.get('[aria-label="title-head"]').should("contain", 'Good morning')
  });

  it("Verificar se existe itens na listagem de playlist",async  () => {
    cy.wait(2000)
    await cy.get('[aria-label="playlist-item"]').should("have.length.greaterThan", 0)
  });

  it("Clicar no primeiro item da lista, para listar musicas", () => {
    cy.get('[aria-label="playlist-item"]').first().click()

    cy.get('[aria-label="music-item"]').should("have.length.greaterThan", 0)
  })


  it("Clicar na musica desejada e executar o audio", () => {
    cy.get('[aria-label="music-item"]').contains("Samba").click()
  })
})