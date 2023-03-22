describe('Site LinkedIn', () =>{
    it('Logare',() => {
        cy.visit('https://www.linkedin.com/');
        cy.get('.nav__button-secondary').type('{enter}');
        cy.get('#username').type('retrype@gmail.com'); 
        cy.get('#password').type('');
        cy.get('.btn__primary--large').click();
        cy.get('#phone-input').type('79647421');
        cy.get('.primary-action').click();



    })
} )