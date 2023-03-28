describe('Adding Product to Shopping Cart', () => {


    beforeEach(function () {
        cy.visit('https://www.saucedemo.com/');

    })

    it('Verify if exist products an add to cart, verify cart if exist product on it ', () => {
        //Login Section
        cy.get('.login_logo').should('have.text', 'Swag Labs');
        cy.get('[data-test=username]').type('standard_user').should('have.value', 'standard_user');
        cy.get('[data-test="password"]').type('secret_sauce').should('have.value', 'secret_sauce');
        cy.get('#login-button').should('have.value', 'Login').click();
        cy.get('.title').should('have.text', 'Products');
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('have.text','Add to cart').click();
        cy.get('.shopping_cart_link').should('exist').click();
        cy.get('.cart_list').should('exist');
        
    })

    })