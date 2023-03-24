describe('Login With Invalid Password', () => {


    beforeEach(function () {
        cy.visit('https://www.saucedemo.com/');
        
    })
    
    it('Verify User can not login to the system using invalid password', () => {
        cy.get('.login_logo').should('have.text', 'Swag Labs');
        cy.get('[data-test=username]').type('standard_user').should('have.value', 'standard_user');
        cy.get('[data-test="password"]').type('invalid_password').should('have.value','invalid_password');
        cy.get('#login-button').should('have.value', 'Login').click();
        cy.get('[data-test=error]').should('have.text', 'Epic sadface: Username and password do not match any user in this service');

    })
})