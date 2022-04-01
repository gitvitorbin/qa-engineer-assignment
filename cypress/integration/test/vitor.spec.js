describe('Test Automation - The Awesome Q/A Tool', () => {
context('GIVEN I access the app', () => {
    beforeEach(() => {
        cy.visit('http://localhost:8000/')
    })

    context('WHEN I add ten questions and click on "Sort questions"', function() {
        let str =[]
        //let str2 = []
        beforeEach(() => {
            //exclui o primeiro
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