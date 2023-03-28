describe('Acces Menu Side Bar', () => {


    beforeEach(function () {
        cy.visit('https://www.saucedemo.com/');

    })

    it('Verify if exist menu sidebar and interact ', () => {
        //Login Section
        cy.get('.login_logo').should('have.text', 'Swag Labs');
        cy.get('[data-test=username]').type('standard_user').should('have.value', 'standard_user');
        cy.get('[data-test="password"]').type('secret_sauce').should('have.value', 'secret_sauce');
        cy.get('#login-button').should('have.value', 'Login').click();
        
        //Accesing Menu Sidebar
        cy.get('.title').should('have.text', 'Products');
        cy.get('#react-burger-menu-btn').should('exist').click();
        cy.get('.bm-menu').should('exist');
        cy.get('#react-burger-cross-btn').should('exist').click();

        })

    })