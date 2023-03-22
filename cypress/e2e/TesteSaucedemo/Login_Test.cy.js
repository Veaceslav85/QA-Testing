describe('Login Page', () => {


    beforeEach(function () {
        cy.visit('https://www.saucedemo.com/')
        
    })

    it('Verify User can not login to the system without user name and password', () => {

        cy.get('.login_logo').should('have.text', 'Swag Labs');
        cy.get('#login-button').should('have.value', 'Login').click();
        cy.get('[data-test=error]').should('have.text', 'Epic sadface: Username is required');

    })
})