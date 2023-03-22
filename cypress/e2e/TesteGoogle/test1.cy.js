describe('Site Google.com', () => {
    //suita de teste
    //Testul numarul 1
    it('Functioneaza cu o cautare basic', ()=>{
        cy.visit('https://google.com');
        cy.get('.gLFyf').type('Girlea Veaceslav').type('{enter}');
    
        
        
        
        
        cy.get('#result-stats', { timeout: 10000 }).should('exist');
    
    
    })

   
})