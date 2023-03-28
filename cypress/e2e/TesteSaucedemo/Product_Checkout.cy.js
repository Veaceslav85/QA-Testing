describe('Product Checkout', () => {


    beforeEach(function () {
        cy.visit('https://www.saucedemo.com/');

    })

    it('Verify if exist products an add to cart, verify cart if exist product on it and checkout ', () => {
        //Login Section
        cy.get('.login_logo').should('have.text', 'Swag Labs');
        cy.get('[data-test=username]').type('standard_user').should('have.value', 'standard_user');
        cy.get('[data-test="password"]').type('secret_sauce').should('have.value', 'secret_sauce');
        cy.get('#login-button').should('have.value', 'Login').click();
        cy.get('.title').should('have.text', 'Products');
        //Add Products to cart
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').should('have.text','Add to cart').click();
        cy.get('.shopping_cart_link').should('exist').click();
        cy.get('.cart_list').should('exist');
        cy.get('[data-test="checkout"]').should('exist').click();
        cy.get('#checkout_info_container').should('exist');
        cy.get('.checkout_info').should('exist');
        cy.get('[data-test="firstName"]').should('have.attr', 'placeholder', 'First Name').type('FirstName',{delay:50}).should('have.value','FirstName');
        cy.get('[data-test="lastName"]').should('have.attr', 'placeholder', 'Last Name').type('LastName',{delay:50}).should('have.value','LastName');
        cy.get('[data-test="postalCode"]').should('have.attr', 'placeholder', 'Zip/Postal Code').type('PostalCode',{delay:50}).should('have.value','PostalCode');
        cy.get('[data-test="continue"]').should('contain', 'Continue').click();
        cy.get('#checkout_summary_container > :nth-child(1)').should('exist');
        cy.get('.summary_info > :nth-child(1)').should('have.text','Payment Information');
        cy.get('.summary_info > :nth-child(3)').should('have.text','Shipping Information');
        cy.get('.summary_info > :nth-child(5)').should('have.text','Price Total');
        cy.get('[data-test="finish"]').should('contain', 'Finish').click();
        cy.get('#checkout_complete_container').should('exist');
        cy.get('.complete-header').should('have.text','Thank you for your order!');
        cy.get('[data-test="back-to-products"]').should('exist').click();
    
    
    })

    })