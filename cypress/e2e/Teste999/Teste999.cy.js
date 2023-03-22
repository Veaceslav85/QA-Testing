describe('Site TestSauceDemo', () =>{
    
    
    it('Test loging width a wrong login ', () =>{
        cy.visit('https://www.999.md/');
         
        
        cy.get('#m__user_panel > ul > :nth-child(2) > a').should('exist').click();
        cy.origin('https://simpalsid.com', () => {
    
        cy.get('input[name=login]').type('Mati zaibit v doscu pidarasi').should('have.value', 'Mati zaibit v doscu pidarasi');
        cy.get('input[name=password]').type('Mati zaibit v doscu pidarasi').should('have.value', 'Mati zaibit v doscu pidarasi');
    })

        

        


       
    })
})