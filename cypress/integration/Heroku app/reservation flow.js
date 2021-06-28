/// <reference types="cypress" />
describe('resevation to an appointment',()=>{

    it('Book an appointment with valid data',()=>{
        cy.visit('https://katalon-demo-cura.herokuapp.com/')
        cy.get('#btn-make-appointment').click()
        //cy.url().should('have.text','profile.php#login')

        cy.get('#txt-username').type('John Doe')
        cy.get('#txt-password').type('ThisIsNotAPassword')
        cy.get('#btn-login').click()

    })

    it('make Appointment page',()=>{
        cy.get('#combo_facility').select('Hongkong CURA Healthcare Center')
        cy.get('#chk_hospotal_readmission').check()
        cy.get('#radio_program_medicaid').check()
        cy.get('#txt_visit_date').type('24/11/2021')
        cy.get('#txt_comment').click({ force: true });
        cy.get('#txt_comment').type('booooked ')
        cy.get('#btn-book-appointment').click()
    })

        it('Back to Home Page',()=>{

        cy.contains('Go to Homepage').click()

        })

    
        
    })

