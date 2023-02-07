
describe('Signout', () => {

    before(() => {
        cy.login(Cypress.env('validEmail'), Cypress.env('validPassword'))
    })

    it.only('sign out correctly', () => {
        cy.visit('/signout').should(() =>{
            cy.get('.heading').then(($element) =>{
                expect($element.text()).to.eq("You've signed out, sorry to see you go.")

            })
        })


    })
})


