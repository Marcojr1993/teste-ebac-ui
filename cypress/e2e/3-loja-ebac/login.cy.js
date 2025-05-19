/// <reference types="cypress"/>
const perfil = require ('../../fixtures/perfil.json')

describe('Funcionalidade Login', () => {

    beforeEach(() => {

        cy.visit('minha-conta')

    });

    afterEach(() => {

        cy.screenshot ()

    });


    it('Deve fazer login com sucesso', () => {

        cy.get('#username').type('marco.suelio@hotmail.com')
        cy.get('#password').type('123456')
        cy.get('#rememberme').click()
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, marco.suelio (não é marco.suelio? Sair)')

    })

    it('Deve exibir mensagem de erro ao inserir usuario inválido', () => {

        cy.get('#username').type('errouser@hotmail.com')
        cy.get('#password').type('123456')
        cy.get('#rememberme').click()
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Endereço de e-mail desconhecido.')

    });

    it('Deve exibir mensagem de erro ao inserir senha inválida', () => {

        cy.get('#username').type('marco.suelio@hotmail.com')
        cy.get('#password').type('1234567')
        cy.get('#rememberme').click()
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-error > li').should('contain', 'Erro: A senha fornecida para o e-mail marco.suelio@hotmail.com está incorreta.')

    });

    it('Deve fazer login com sucesso - Usando massa de dados', () => {

        cy.get('#username').type(perfil.usuario)
        cy.get('#password').type(perfil.senha)
        cy.get('#rememberme').click()
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, marco.suelio (não é marco.suelio? Sair)')

    });

    it.only('Deve fazer login com sucesso - Usando massa Fixture', () => {

        cy.fixture('perfil').then( dados => {
        cy.get('#username').type(dados.usuario , { log: false})
        cy.get('#password').type(dados.senha , { log: false})
        cy.get('#rememberme').click()
        cy.get('.woocommerce-form > .button').click()
        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain', 'Olá, marco.suelio (não é marco.suelio? Sair)')

         })
    })

})