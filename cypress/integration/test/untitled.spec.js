/// <reference types="Cypress" />

describe('Test Suit', function() {
    it('Test Case', function() {
        cy.visit('http://localhost:8000/')
        cy.get('#question').type('my first question')
        cy.get('#answer').type('my first answer')
        cy.get('.form > .btn').click();
    })
})