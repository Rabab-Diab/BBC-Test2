describe('Signout', () => {
  const env = Cypress.env();

  before(() => {
    cy.login(env.validEmail, env.validPassword);
  });

  it('sign out correctly', () => {
    cy.visit('/signout').should(() => {
      cy.get('.heading').then((element) => {
        expect(element.text()).to.eq("You've signed out, sorry to see you go.");
      });
    });
  });
});
