/// <reference types="cypress"/>
import produtosPage from "../../support/pages-objects/produtos.pages";


describe('Funcionalidade: Produtos', () => {

    beforeEach(() => {
        produtosPage.visitarUrl()

    });


    it('Deve selecionar um produto da Lista', () => {
        produtosPage.buscarProdutoLista('Aether Gym Pant')
        cy.get('.product_title').should('contain','Aether Gym Pant')
    });


    it.only('Deve buscar um produto com sucesso ', () => {
        let produto ='Taurus Elements Shell'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    });

    it('Deve visitar a página do produto ', () => {
        
    });
    
     it('Deve adicionar um produto ao carrinho ', () => {
        
    });
});