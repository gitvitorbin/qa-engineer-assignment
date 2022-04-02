/// <reference types="cypress" />

import homePage from "../page-objects/home-page"

describe('Test Automation - The Awesome Q/A Tool', () => {
    ('GIVEN I access the app', () => {
        beforeEach(() => {
            homePage.open()
        })
  
        context('WHEN I hover the mouse on the "Created questions" section title', () => {
            beforeEach(() => {
                homePage.getCreatedQuestionsTitleTxt.trigger('mouseover')       
            })
  
        it('THEN I should see a hint instructional message', () => {
            homePage.getCreatedQuestionsTitleHint.contains('Here you can find the created questions and their answers.').should('be.visible')
        })

        })

        })

        context('GIVEN I access the app', () => {
            beforeEach(() => {
                homePage.open()
            })
        
            context('WHEN I hover the mouse on the "Create a new question" section title', () => {
                beforeEach(() => {
                    homePage.getCreateNewQuestionTitleTxt.trigger('mouseover')       
                })
        
                it('THEN I should see a hint instructional message', () => {
                    homePage.getCreateNewQuestionTitleHint.contains('Here you can create new questions and their answers.').should('be.visible')
                })
            })
        })
    
        context('GIVEN I access the app', () => {
            beforeEach(() => {
                homePage.open()
            })
      
            context('WHEN I write a question, an answer and click on "Create question" button', () => {
                beforeEach(() => {
                    homePage.getQuestionFld
                        .type('my question')
                    homePage.getAnswerFld
                        .type('my answer')
                    homePage.getCreateQuestionBtn
                        .click();
                })
      
            it('THEN my question should be placed on the "Created questions" section', () => {
                homePage.getCreatedQuestionsGridRow2.should('be.visible').contains("my question")
            })
    
            it('AND when I click on my question I can see the answer', () => {
                homePage.getCreatedQuestionsGridRow2.click()
                homePage.getCreatedAnswersGridRow2.should('be.visible').contains("my answer")
            })
    
            it('AND left sidebar message should be updated with the number of questions', () => {
                homePage.getSidebarTxt.should('be.visible').contains('Here you can find 2 questions. Feel free to create your own questions!')
            })
    
            })
        })
    
        context('GIVEN I access the app', () => {
            beforeEach(() => {
                homePage.open()
                homePage.getCreatedQuestionsGridRow1.should('exist')
            })

            context('AND there is only the default quesiton on the "Created questions" grid', () => {
                beforeEach(() => {
                    homePage.getCreatedQuestionsGridRow1.should('exist')
                })    
            
                context('WHEN I click on the "Remove questions" button', () => {
                    beforeEach(() => {                
                            homePage.getRemoveQuestionsBtn
                                .click();
                })
            
                it('THEN the questions must disappear', () => {
                    homePage.getCreatedQuestionsGridRow1.should('not.exist')
                })
        
                it('AND a message informing tha there is no questions should be displayed on the Created questions section', () => {
                    homePage.getNoQuestionsYetTxt.contains('No questions yet :-(')
                })
        
                it('AND left sidebar message should be updated with the number of questions', () => {
                    homePage.getSidebarTxt.should('be.visible').contains('Here you can find no questions. Feel free to create your own questions!')
                })
        
                })
            })
        })
    
        context('GIVEN I access the app', () => {
            beforeEach(() => {
                homePage.open()
            })
        
            context('WHEN I try to create a question without informing a question', () => {
                beforeEach(() => {
                    homePage.getAnswerFld
                        .type('answer')
                    homePage.getCreateQuestionBtn
                        .click();
              })
        
            it('THEN an alert must inform the user that the field question is mandatory', () => {
                homePage.getQuestionFormStatusInvalid.should('have.length', 1)
                homePage.getQuestionFormStatusValid.should('have.length', 0)
                homePage.getQuestionFld.invoke('prop', 'validationMessage')
                    .should('equal', 'Please fill out this field.')
            })

            it('AND when I inform the field questions the alert must be disabled', () => {
    
                homePage.getQuestionFld
                        .type('question')
                homePage.getQuestionFormStatusInvalid.should('have.length', 0)
                homePage.getQuestionFormStatusValid.should('have.length', 1)
                homePage.getQuestionFld.invoke('prop', 'validationMessage')
                    .should('equal', '')            
            }) 
            
            })
        })
    
        context('GIVEN I access the app', () => {
            beforeEach(() => {
                homePage.open()
            })
        
            context('WHEN I try to create a question without informing an answer', () => {
                beforeEach(() => {
                    homePage.getQuestionFld
                        .type('my first question')
                    homePage.getCreateQuestionBtn
                        .click();
              })
        
            it('THEN an alert must inform the user that the field answer is mandatory', () => {
                cy.get('textarea:invalid').should('have.length', 1)
                cy.get('textarea:valid').should('have.length', 0)
                homePage.getAnswerFld.invoke('prop', 'validationMessage')
                    .should('equal', 'Please fill out this field.')            
            })
    
            it('AND when I inform the field answer the ', () => {
                homePage.getAnswerFld
                        .type('answer')
                cy.get('input:invalid').should('have.length', 0)
                cy.get('input:valid').should('have.length', 1)
                homePage.getAnswerFld.invoke('prop', 'validationMessage')
                    .should('equal', '')            
            })
            })
        })
    
        context('GIVEN I access the app', () => {
            beforeEach(() => {
                homePage.open()
            })
        
            context('WHEN I add ten questions and click on "Sort questions"', function() {
                let str =[]
                
                beforeEach(() => {
                    //excluding the default instructional question
                    homePage.getRemoveQuestionsBtn
                        .click();
        
                    let i
                    const questions1 = []
                    for(i=0; i<10; i++){
                        let number = Math.floor(Math.random() * 10);
                        homePage.getQuestionFld
                            .type(`${number} question`)
                        homePage.getAnswerFld
                            .type('answer')
                        homePage.getCreateQuestionBtn
                            .click();
                        
                        questions1[i] = `${number} question`            
                    }
        
                    this.str = questions1            
                    questions1.sort()
        
                    homePage.getSortQuestionsBtn
                        .click();
              })
        
            it('THEN the "Created questions" section must be ordenated properly', () => {
                homePage.getCreatedQuestionsGrid.then(($els) => {
                    const texts = Array.from($els, el => el.innerText)
                    expect(texts).to.deep.eq(this.str)
                })
            })
            })
    })
    })