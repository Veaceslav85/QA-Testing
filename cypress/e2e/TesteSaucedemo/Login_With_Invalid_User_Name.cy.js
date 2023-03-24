describe('Login With Invalid User Name', () => {


    beforeEach(function () {
        cy.visit('https://www.saucedemo.com/');
        
    })
    
    it('Verify User can not login to the system using invalid username', () => {
        cy.get('.login_logo').should('have.text', 'Swag Labs');
        cy.get('[data-test=username]').type('invalid_user').should('have.value', 'invalid_user');
        cy.get('[data-test=password]').type('secret_sauce').should('have.value','secret_sauce');
        cy.get('#login-button').should('have.value', 'Login').click();
        cy.get('[data-test=error]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');

    })
})