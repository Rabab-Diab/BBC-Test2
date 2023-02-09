describe('Home page', () => {
  before(() => {
    cy.visit('https://www.bbc.com/');
    cy.getDate();
  });

  it('open the homepage correctly', () => {
    cy.get('a#idcta-link > span').then((val) => {
      expect(val.text()).to.eq('Sign in');
    });
    cy.get('#homepage-link').contains('Homepage');
    cy.get('.module--header > .module__title > span').contains('Welcome to BBC.com');
    cy.get('.module--header >.module__title').then((value) => {
      expect(value.text().substring(18, 40)).to.eq(Cypress.env('currentDate'));
    });
  });
});
