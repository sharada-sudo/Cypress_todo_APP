describe('exp todo', () => {
    beforeEach(()=>{
        cy.visit('https://example.cypress.io/todo')

    })

    it('todo active list', () => {
        
        // We'll store our item text in a variable so we can reuse it
        var newItem = 'Feed  Minal'
        cy.get('.new-todo ').type(`${newItem}{enter}`)
        cy.get('.new-todo ').type('shopping with H & M {enter}')
        cy.get('.new-todo ').type('shopping with ZARA {enter}')
        cy.get('.new-todo ').type('shopping with M & M {enter}')
        cy.get('.new-todo ').type('shopping with Next{enter}')
        cy.get('.todo-list li')
        .should('have.length', 7)
    })
    
    it('click on the check button ', function () {

        cy.contains('Pay electric bill')
            .parent()
            .find('input[type=checkbox]')
            .click()
    })

    it('click on the cross button', function () {

        cy.contains('Walk the dog')
            .parent()
            .find('input[type=checkbox]')
            .check()
    })
    it('click on the cross button', function () {
        cy.get('.todo-list li .destroy')
        .eq(1)
        .click({ force: true })
    })

    it('count in the items left', () => {

        cy.contains('Active').click()
        .should('have.length', 1)
    })

    it('count in the items left', () => {

        cy.get('.clear-completed').click({ force: true })

    })


})
