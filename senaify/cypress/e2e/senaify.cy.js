describe('template spec', () => {

    before(() => {
        cy.visit('/')
    })

    it('Verificar se o header esta visivel', () => {
        cy.get('[aria-label="title-head"]').should("be.visible")
        cy.get('[aria-label="title-head"]').should("contain", 'Good morning')
    });

    it("Verificar se existe itens na listagem de playlist", async () => {
        await cy.get('[aria-label="playlist-item"]').should("have.length.greaterThan", 0)
    });

    it("Clicar no primeiro item da lista, para listar musicas", () => {
        cy.wait(2000)
        cy.get('[aria-label="playlist-item"]').first().click()
        cy.get('[aria-label="music-item"]').should("have.length.greaterThan", 0)
    })

    it("Clicar na musica desejada e executar o audio", () => {
        cy.wait(2000)
        cy.get('[aria-label="music-item"]').first().click()
    })

    it('Voltar para listagem de playlists', () => {
        cy.wait(3000)
        cy.get("[data-testid='button-return']").click()
    });

    it('Clicar na segunda playlist e ver a lista das musicas', () => {
        cy.wait(2000)
        cy.get('[aria-label="playlist-item"]').eq(1).click()
    });

    it('Clicar na primeira musica e comecar a tocar', () => {
        cy.wait(2000)
        cy.get('[aria-label="music-item"]').first().click()
    });


    it('Redirecionar a minha tela para a tela de busca', () => {
        cy.wait(2000)
        cy.get("[href='/Search']").click()
    })

    it('Pesquisar por uma musica', () => {
        cy.wait(1500)
        cy.get("[data-testid='campoBusca']").type("Ela se Envolve")

        cy.get("[aria-label='music-item']").should("have.length.greaterThan", 0)
    })

    it('Clicar na primeira musica e tocar', () => {
        cy.get("[aria-label='music-item']").filter(":contains('Ela se Envolve')").click()
    });

    it('Clicar no icon para curtir a musica', () => {

        cy.get("[aria-label='music-item']").filter(":contains('Ela se Envolve')").then(async (item) => {
            cy.wait(1500)
            cy.wrap(item).find("[data-testid='icon-button']").click()
        })
    });


    it('Redirecionar para a tela de favoritas', () => {
        cy.wait(3000)
        cy.get("[href='/Favorites']").click()
        cy.scrollTo('top')
    });

    it('Clicar na musica favorita e tocar', () => {
        cy.wait(2000)
        cy.get('[aria-label="music-item"]').first().click({ force: true })``
    });
})