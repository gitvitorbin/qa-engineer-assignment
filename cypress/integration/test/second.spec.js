/* busca.spec.js
 *
 * Como um usuário da world-wide web
 * Quero realizar buscas por assuntos do meu interesse
 * Para aprofundar meus conhecimentos
 */

describe('Test Automation - The Awesome Q/A Tool', () => {
    context('GIVEN I access the app', () => {
        beforeEach(() => {
            cy.visit('http://localhost:8000/')
        })
  
        context('WHEN I write a question, an answer and click on "Create question" button', () => {
            beforeEach(() => {
                cy.get('#question')
                    .type('my first question')
                cy.get('#answer')
                    .type('my first answer')
                cy.get('.form > .btn')
                    .click();
            })
  
        it('THEN my question should be placed on the "Created questions" section', () => {
            cy.get(':nth-child(2) > .question__question').should('be.visible').contains("my first question")
        })

        it('AND when I click on my question I can see the answer', () => {
            cy.get(':nth-child(2) > .question__question').click()
            cy.get(':nth-child(2) > .question__answer').should('be.visible').contains("my first answer")
        })

        it('AND left sidebar message should be updated', () => {
            cy.get('.sidebar').should('be.visible').contains('Here you can find 2 questions. Feel free to create your own questions!')
        })

        })
    })

    context('GIVEN I access the app', () => {
        beforeEach(() => {
            cy.visit('http://localhost:8000/')
        })
    
        context('WHEN I click on the "Remove questions" button', () => {
            beforeEach(() => {                
                    cy.get('.btn-danger')
                    .click();
          })
    
        it('THEN the questions must disappear', () => {
            cy.get('.question__question').should('not.exist')
        })

        it('AND a message informing tha there is no questions should be displayed on the Created questions section', () => {
            cy.get('.alert').contains('No questions yet :-(')
        })

        })
    })

    context('GIVEN I access the app', () => {
        beforeEach(() => {
            cy.visit('http://localhost:8000/')
        })
    
        context('WHEN I try to create a question without informing a question', () => {
            beforeEach(() => {
                cy.get('#answer')
                    .type('answer')
                cy.get('.form > .btn')
                    .click();
          })
    
        it('THEN an alert must inform the user that the field question is mandatory', () => {
            cy.get('input:invalid').should('have.length', 1)
            cy.get('input:valid').should('have.length', 0)
            cy.get('#question').invoke('prop', 'validationMessage')
                .should('equal', 'Please fill out this field.')
        
        it('AND when I inform the field questions the alert must be disabled', () => {

            cy.get('#question')
                    .type('question')
            cy.get('input:invalid').should('have.length', 0)
            cy.get('input:valid').should('have.length', 1)
            cy.get('#question').invoke('prop', 'validationMessage')
                .should('equal', '')            
        })

            
        })
        })
    })

    context('GIVEN I access the app', () => {
        beforeEach(() => {
            cy.visit('http://localhost:8000/')
        })
    
        context('WHEN I try to create a question without informing an answer', () => {
            beforeEach(() => {
                cy.get('#question')
                    .type('my first question')
                cy.get('.form > .btn')
                    .click();
          })
    
        it('THEN an alert must inform the user that the field answer is mandatory', () => {
            cy.get('textarea:invalid').should('have.length', 1)
            cy.get('textarea:valid').should('have.length', 0)
            cy.get('#answer').invoke('prop', 'validationMessage')
                .should('equal', 'Please fill out this field.')            
        })

        it('AND when I inform the field answer the ', () => {
            cy.get('#answer')
                    .type('answer')
            cy.get('input:invalid').should('have.length', 0)
            cy.get('input:valid').should('have.length', 1)
            cy.get('#answer').invoke('prop', 'validationMessage')
                .should('equal', '')            
        })
        })
    })


})