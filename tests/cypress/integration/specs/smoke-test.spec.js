/// <reference types="cypress" />

import homePage from "../page-objects/home-page"

describe('Test Automation - The Awesome Q/A Tool', () => {
    it('Smoke Test', () => {
        homePage.open()
        cy.log(' <<<< ADD QUESTION >>>> ')
        homePage.getQuestionFld
            .type('my question')
        homePage.getAnswerFld
            .type('my answer')
        homePage.getCreateQuestionBtn
            .click();    
        cy.log(' <<<< CLICK SORT >>>> ')
        homePage.getSortQuestionsBtn
            .click();
        cy.log(' <<<< CLICK REMOVE >>>> ')
        homePage.getRemoveQuestionsBtn
            .click();
    })
})