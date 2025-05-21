/// <reference types="cypress"/>
import produtosPage from "../../support/pages-objects/produtos.pages";


describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()

    });


    it('Deve selecionar um produto da Lista', () => {
        produtosPage.buscarProdutoLista('Aether Gym Pant')
        cy.get('.product_title').should('contain', 'Aether Gym Pant')
    });


    it('Deve buscar um produto com sucesso ', () => {
        let produto = 'Taurus Elements Shell'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto ', () => {

        produtosPage.visitarProduto('Taurus elements shell')
        cy.get('.product_title').should('contain', 'Taurus Elements Shell')

    });

    it.only('Deve adicionar um produto ao carrinho ', () => {
           let qtd = 7
            produtosPage.buscarProduto('Abominable Hoodie')
            produtosPage.addProdutoCarrinho('M','Red', qtd)
            cy.get('.woocommerce-message').should('contain', qtd + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });
});