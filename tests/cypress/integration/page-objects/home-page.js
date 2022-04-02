class HomePage {

    open(){
        cy.visit('http://localhost:8000/')
    }

    get getSortQuestionsBtn(){
        return cy.get('.btn-primary');
    }

    get getRemoveQuestionsBtn(){
        return cy.get('.btn-danger');
    }
    
    get getCreateQuestionBtn(){
        return cy.get('.btn-success');
    }

    get getQuestionFld(){
        return cy.get('#question');
    }

    get getAnswerFld(){
        return cy.get('#answer');
    }

    get getCreatedQuestionsTitleTxt(){
        return cy.get('.questions > .tooltipped-title > .tooltipped-title__title');
    }

    get getCreatedQuestionsTitleHint(){
        return cy.get('.questions > .tooltipped-title > .tooltipped-title__tooltip');
    }

    get getCreateNewQuestionTitleTxt(){
        return cy.get('.question-maker > .tooltipped-title > .tooltipped-title__title');
    }

    get getCreateNewQuestionTitleHint(){
        return cy.get('.question-maker > .tooltipped-title > .tooltipped-title__tooltip');
    }

    get getCreatedQuestionsGridRow1(){
        return cy.get(':nth-child(1) > .question__question');
    }

    get getCreatedQuestionsGridRow2(){
        return cy.get(':nth-child(2) > .question__question');
    }
    
    get getCreatedQuestionsGridRow3(){
        return cy.get(':nth-child(3) > .question__question');
    }
    
    get getCreatedQuestionsGridRow4(){
        return cy.get(':nth-child(4) > .question__question');
    }
    
    get getCreatedQuestionsGridRow5(){
        return cy.get(':nth-child(5) > .question__question');
    }
    
    get getCreatedQuestionsGridRow6(){
        return cy.get(':nth-child(6) > .question__question');
    }
    
    get getCreatedQuestionsGridRow7(){
        return cy.get(':nth-child(7) > .question__question');
    }
    
    get getCreatedQuestionsGridRow8(){
        return cy.get(':nth-child(8) > .question__question');
    }
    
    get getCreatedQuestionsGridRow9(){
        return cy.get(':nth-child(9) > .question__question');
    }
    
    get getCreatedQuestionsGridRow10(){
        return cy.get(':nth-child(10) > .question__question');
    }

    get getCreatedAnswersGridRow1(){
        return cy.get(':nth-child(1) > .question__answer');
    }

    get getCreatedAnswersGridRow2(){
        return cy.get(':nth-child(2) > .question__answer');
    }

    get getSidebarTxt(){
        return cy.get('.sidebar');
    }

    get getNoQuestionsYetTxt(){
        return cy.get('.alert')
    }

    get getCreatedQuestionsGrid(){
        return cy.get(".question__question")
    }

    get getQuestionFormStatusValid(){
        return cy.get('input:valid')
    }

    get getQuestionFormStatusInvalid(){
        return cy.get('input:invalid')
    }

    get getAnswerFormStatusValid(){
        return cy.get('textarea:valid')
    }

    get getAnswerFormStatusInvalid(){
        return cy.get('textarea:invalid')
    }
}

export default new HomePage();
