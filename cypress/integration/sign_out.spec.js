describe('Signout', () => {
  const email = Cypress.env('validEmail');
  const password = Cypress.env('validPassword');

  before(() => {
    cy.login(email, password);
  });

  it('sign out correctly', () => {
    cy.visit('/signout').should(() => {
      cy.get('.heading').then((element) => {
        expect(element.text()).to.eq("You've signed out, sorry to see you go.");
      });
    });
  });
});
