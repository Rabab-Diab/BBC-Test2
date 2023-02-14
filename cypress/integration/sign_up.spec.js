describe('Sign up', () => {
  beforeEach(() => {
    cy.visit('/register');
  });

  afterEach(() => {
    cy.visit('/signout');
  });

  it('sign up above 16', () => {
    cy.get('a[data-bbc-result="/register/details/age').click().then(() => {
      cy.get('#day-input').click({ force: true }).type('30', { force: true });
      cy.get('#month-input').click({ force: true }).type('07');
      cy.get('#year-input').click({ force: true }).type('1999');
      cy.get('#submit-button').click();
    });

    cy.get('#user-identifier-input')
      .type(`${Math.random().toString(36).substring(2, 7)}@fakeemail.com`);
    cy.get('#password-input').type('P@$$w0rd12345');
    cy.get('form').submit();
    cy.get('.sb-heading--headlineSmall').contains("OK you're registered");
  });

  it('sign up below 16', () => {
    cy.get('a[data-bbc-result="/register/details/guardian"]').click({ force: true });
    cy.get('.sb-heading--sectionHeading > span').should((element) => {
      expect(element.text()).contains('Sorry, only 16s and over can register outside the UK');
    });
    cy.get('#return-to-ptrt').should('have.attr', 'href').and('contain', 'https://www.bbc.co.uk');
  });
});
