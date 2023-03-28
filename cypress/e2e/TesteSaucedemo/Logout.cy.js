describe('Logout test', () => {


    beforeEach(function () {
        cy.visit('https://www.saucedemo.com/');

    })

    it('Logout', () => {
        //Login Section
        cy.get('.login_logo').should('have.text', 'Swag Labs');
        cy.get('[data-test=username]').type('standard_user').should('have.value', 'standard_user');
        cy.get('[data-test="password"]').type('secret_sauce').should('have.value', 'secret_sauce');
        cy.get('#login-button').should('have.value', 'Login').click();
        
        //Loguot Section
        cy.get('.title').should('have.text', 'Products');
        cy.get('#react-burger-menu-btn').should('exist').click()
        cy.get('#logout_sidebar_link').should('exist').should('have.text', 'Logout').click();



        })

    })

