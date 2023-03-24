describe('Login With Valide User Name and Password', () => {


    beforeEach(function () {
        cy.visit('https://www.saucedemo.com/');
        
    })
    
    it('Verify User login to the system using  valide username and password', () => {
        cy.get('.login_logo').should('have.text', 'Swag Labs');
        cy.get('[data-test=username]').type('standard_user').should('have.value', 'standard_user');
        cy.get('[data-test="password"]').type('secret_sauce').should('have.value', 'secret_sauce');
        cy.get('#login-button').should('have.value', 'Login').click();
        cy.get('.title').should('have.text', 'Products');

    })
})