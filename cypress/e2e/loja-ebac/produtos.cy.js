/// <reference types="cypress"/>
import produtosPages from "../../support/pages-objects/produtos.pages";
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

    it('Deve adicionar um produto ao carrinho ', () => {
           let qtd = 7
            produtosPage.buscarProduto('Abominable Hoodie')
            produtosPage.addProdutoCarrinho('M','Red', qtd)
            cy.get('.woocommerce-message').should('contain', qtd + ' × “Abominable Hoodie” foram adicionados no seu carrinho.')
    });

    it('Deve adicionar um produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
            produtosPage.buscarProduto(dados[2].nomeProduto)
            produtosPage.addProdutoCarrinho(
                dados[2].tamanho,
                dados[2].cor,
                dados[2].quantidade)

            cy.get('.woocommerce-message').should('contain',dados[2].nomeProduto )

        })

    });
});