/// <reference types='cypress' />

describe("Teste para a home", () => {
    beforeEach(() => {
    cy.visit("https://agenda-contatos-react.vercel.app/");
    });
    it("Deve incluir informações no formulário", () => {
    cy.get('input[type="text"]').type("teste teste"); 
    cy.get('input[type="email"]').type("teste@teste");
    cy.get('input[type="tel"]').type("9999999");
    cy.contains("Adicionar").click(); 
    });
    it("Deve alterar a informação da lista", () => {
    cy.get(":nth-child(2) > .sc-gueYoa > .edit").click(); 
    cy.get('input[type="text"]').clear().type("Denis Oliveira");
    cy.get('input[type="email"]').clear().type("denis@denis");
    cy.get('input[type="tel"]').clear().type("99999999");
    cy.get(".alterar").click(); 
    cy.screenshot("teste-editar");
    });
    it("Deve remover um contato da lista", () => {
    cy.get(":nth-child(3) > .sc-gueYoa > .delete").click();
    cy.screenshot("teste-remover"); 
    });
});