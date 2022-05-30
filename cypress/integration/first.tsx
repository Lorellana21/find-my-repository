/// <reference types="Cypress" />
it('simple', () => {
    cy.visit('https://www.google.es');
    cy.get('.gLFyf').type('Cypress');
    })