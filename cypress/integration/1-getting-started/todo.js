describe('exp todo',()=>{

    it('todo active list',()=>{
        cy.visit('https://example.cypress.io/todo')
       
            // We'll store our item text in a variable so we can reuse it
            var newItem = 'Feed  Minal'
        
            // Let's get the input element and use the `type` command to
            // input our new list item. After typing the content of our item,
            // we need to type the enter key as well in order to submit the input.
            // This input has a data-test attribute so we'll use that to select the
            // element in accordance with best practices:
            // https://on.cypress.io/selecting-elements
            cy.get('.new-todo ').type(`${newItem}{enter}`)
      
        cy.get('.new-todo ').type('shopping with H & M {enter}')
        cy.get('.new-todo ').type('shopping with ZARA {enter}')
        cy.get('.new-todo ').type('shopping with M & M {enter}')
        cy.get('.new-todo ').type('shopping with Next{enter}')
       
        .should('have.length', 1)
    })
        it('displays six todo items by default', () => {
            // We use the `cy.get()` command to get all elements that match the selector.
            // Then, we use `should` to assert that there are two matched items,
            // which are the two default items.
            cy.get('.todo-list li').should('have.length', 7)
        })
       it('click on the cross button',function(){

        cy.contains('Pay electric bill')
        .parent()
        //.find('.destroy todo-button')
        .find('input[type=checkbox]')
        .click()
       })

       it('click on the cross button',function(){
          
       cy.contains('Walk the dog')
       .parent()
       .find('input[type=checkbox]')
       
       .check()
    })
    it('click on the cross button',function(){
          
        cy.contains('shopping with H & M')
        .parent()
        .find('input[type=checkbox]')
        .check()
     })

})
