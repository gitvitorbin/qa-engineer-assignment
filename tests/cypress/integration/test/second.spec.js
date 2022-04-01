

describe('Test Automation - The Awesome Q/A Tool', () => {
    ('GIVEN I access the app', () => {
        beforeEach(() => {
            cy.visit('http://localhost:8000/')
        })
  
        context('WHEN I hover the mouse on the "Created questions" section title', () => {
            beforeEach(() => {
                cy.get('.questions > .tooltipped-title > .tooltipped-title__title').trigger('mouseover')       
            })
  
        it('THEN I should see a hint instructional message', () => {
            cy.get('.questions > .tooltipped-title > .tooltipped-title__tooltip').contains('Here you can find the created questions and their answers.').should('be.visible')
        })

        })

        })


    context('GIVEN I access the app', () => {
        beforeEach(() => {
            cy.visit('http://localhost:8000/')
        })
    
        context('WHEN I hover the mouse on the "Create a new question" section title', () => {
            beforeEach(() => {
                cy.get('.question-maker > .tooltipped-title > .tooltipped-title__title').trigger('mouseover')       
            })
    
        it.only('THEN I should see a hint instructional message', () => {
            cy.get('.question-maker > .tooltipped-title > .tooltipped-title__tooltip').contains('Here you can create new questions and their answers.').should('be.visible')
        })

        })

        })
    context('GIVEN I access the app', () => {
        beforeEach(() => {
            cy.visit('http://localhost:8000/')
        })
  
        context('WHEN I write a question, an answer and click on "Create question" button', () => {
            beforeEach(() => {
                cy.get('#question')
                    .type('my question')
                cy.get('#answer')
                    .type('my answer')
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

        it('AND left sidebar message should be updated with the number of questions', () => {
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

        it('AND left sidebar message should be updated with the number of questions', () => {
            cy.get('.sidebar').should('be.visible').contains('Here you can find no questions. Feel free to create your own questions!')
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

    context('GIVEN I access the app', () => {
        beforeEach(() => {
            cy.visit('http://localhost:8000/')
        })
    
        context('WHEN I add ten questions and click on "Sort questions"', function() {
            let str =[]
            
            beforeEach(() => {
                //excludiug the default instructional question
                cy.get('.btn-danger')
                    .click();
    
                let i
                const questions1 = []
                for(i=0; i<10; i++){
                    let number = Math.floor(Math.random() * 10);
                    cy.get('#question')
                        .type(`${number} question`)
                    cy.get('#answer')
                        .type('answer')
                    cy.get('.form > .btn')
                        .click();
                    
                    questions1[i] = `${number} question`            
                }
    
                this.str = questions1            
                questions1.sort()
    
                cy.get('.btn-primary').click();
        
    
          })
    
        it('THEN the "Created questions" section must be ordenated properly', () => {
            cy.get(".question__question").then(($els) => {
                const texts = Array.from($els, el => el.innerText)
                expect(texts).to.deep.eq(this.str)
            })
        })
        })
})

})