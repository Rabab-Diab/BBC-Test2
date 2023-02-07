describe('Sign In page', () => {
    beforeEach(() => {
        cy.visit('/signin')

    })
    after(() => {
        cy.visit('/signout')
    })

    it('click cancel button', () => {
        cy.get('.scaling-svg__svg').click().then(() => {
            cy.get('.international > ul > .orb-nav-homedotcom > a > span')
                .should('contain', "Home")
            cy.get('.module--header > .module__title > span')
                .should('contain', "Welcome to BBC.com")
            cy.url().should('include', 'bbc.com')
        })
    })

    it('login with invalid email and password', () => {
        cy.get('#user-identifier-input').type(Cypress.env('invalidEmail'))
        cy.get('#password-input').type(Cypress.env('invalidPassword'))
        cy.get('#submit-button').click()
        cy.get('.form-message__text > span').then(($val) => {
            expect($val.text()).to.contain("Looks like either the email/username or password is wrong")
            cy.url().should('include', 'https://account.bbc.com/signin')

        })

    })

    it('login with valid credentiails', () => {
        cy.get('#user-identifier-input').type(Cypress.env('validEmail'))
        cy.get('#password-input').type(Cypress.env('validPassword'))
        cy.get('#submit-button').click().then(() => {
            cy.url().should('eq', 'https://www.bbc.com/')
        })
    })

})