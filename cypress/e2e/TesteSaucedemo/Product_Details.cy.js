describe('Open Details of Product', () => {


    beforeEach(function () {
        cy.visit('https://www.saucedemo.com/');

    })

    it('Verify if exist products an view details ', () => {
        //Login Section
        cy.get('.login_logo').should('have.text', 'Swag Labs');
        cy.get('[data-test=username]').type('standard_user').should('have.value', 'standard_user');
        cy.get('[data-test="password"]').type('secret_sauce').should('have.value', 'secret_sauce');
        cy.get('#login-button').should('have.value', 'Login').click();
        cy.get('.title').should('have.text', 'Products');
        cy.get('.inventory_list').should('exist');
        cy.get('#item_5_title_link > .inventory_item_name').should('exist').click();
        cy.get('.inventory_details_desc_container').should('exist');
        cy.get('[data-test="back-to-products"]').should('have.text', 'Back to products').click();
        
    })

    })