/// <reference types="cypress" />

const { faker } = require('@faker-js/faker');

describe('Funcionalidade Pré Cadastro', () => {

    beforeEach(() => {
        cy.visit('minha-conta')
    });

it('Deve completar o Pré Cadastro com Sucesso', () => {
    let nomeFaker = faker.name.firstName()
    let sobrenomeFaker = faker.name.lastName()
    let emailFaker = faker.internet.email(nomeFaker)

    cy.get('#reg_email').type(faker.internet.email())
    cy.get('#reg_password').type('!teste@teste$')
    cy.get(':nth-child(4) > .button').click()

    cy.get('.woocommerce-MyAccount-navigation-link--edit-account').click()
    cy.get('#account_first_name').type (faker.name.firstName())
    cy.get('#account_last_name').type(faker.name.lastName())
    cy.get('.woocommerce-Button').click
});

it('Deve completar o pré cadastro com sucesso usando comandos customzados', () =>{
    let emailFaker2 = faker.internet.email()
    cy.preCadastro(emailFaker2, 'senha!@forte', 'Silvio', 'Fonseca')
    
})
    
});

