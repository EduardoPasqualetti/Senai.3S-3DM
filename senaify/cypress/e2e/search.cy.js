describe('template spec', () => {
  before(() => {
    cy.visit('/')
  });


  it('Redirecionar a minha tela para a tela de busca', () => {
    cy.get("[href='/Search']").click()

    cy.scrollTo('top')
  })

  it('Pesquisar por uma musica', () => {
    cy.get("[data-testid='campoBusca']").type("Ela se Envolve")

    cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
  })

  // it('Verificar se a musica exata existe', () => {
  //   cy.get("[aria-label='music-item']").contains(/^(TMOIG)/i).click()
  // });

  it('Clicou no botao de curtir', async () => {
    cy.wait(1500)

    cy.get("[aria-label='music-item']").filter(":contains('Ela se Envolve')").then(async (item) => {
      cy.wait(1500)
      cy.wrap(item).find("[data-testid='icon-button']").click()
    })
    cy.get("[aria-label='music-item']").contains(/^(Ela se Envolve)/i).click()
    
  });

})