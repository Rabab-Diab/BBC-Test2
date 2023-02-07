
describe('Home page', () => {
    let currentDate
    before(() => {
        cy.visit('https://www.bbc.com/')
        cy.getDate().then(($val) => {
            currentDate = $val
        })

    })

    it('open the homepage correctly', () => {

        cy.get('a#idcta-link > span').then(($val) => {
            expect($val.text()).to.eq("Sign in")
        })
        cy.get('#homepage-link').should('contain', "Homepage")
        cy.get('.module--header > .module__title > span')
            .should('contain', "Welcome to BBC.com")
        cy.get('.module--header >.module__title').then($value => {
            const textValue = $value.text()
            expect(textValue.slice(18, 40)).to.eq(currentDate)
        })




    })
})