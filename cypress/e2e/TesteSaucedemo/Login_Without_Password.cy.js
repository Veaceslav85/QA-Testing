describe('Login Without Password', () => {


    beforeEach(function () {
        cy.visit('https://www.saucedemo.com/');
        
    })

    it('Verify User can not login to the system without password', () => {

        cy.get('.login_logo').should('have.text', 'Swag Labs');
        cy.get('[data-test=username]').type('standard_user').should('have.value','standard_user');
        cy.get('#login-button').should('have.value', 'Login').click();
        cy.get('[data-test=error]').should('have.text', 'Epic sadface: Password is required');

    })
})