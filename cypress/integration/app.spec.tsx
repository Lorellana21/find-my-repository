/// <reference types="Cypress" />



it("should work", () => {
    cy.visit("http:localhost:3001");
    cy.get("p").should("have.text", "Hola");
});