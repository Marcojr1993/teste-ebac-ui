/// <reference types="cypress"/>


describe('Funcionalidade: Produtos', () => {

  beforeEach(() => {

        cy.visit('produtos')

    });

    afterEach(() => {

        cy.screenshot()

    });


    it('Deve selecionar um produto da Lista', () => {
        cy.get('.product-block')
            //.first()
            //.last()
            //.eq(5)
            .contains('Argus All-Weather Tank')
            .click()
            cy.get('#tab-title-description > a').should('contain','Descrição')


        
    });
});