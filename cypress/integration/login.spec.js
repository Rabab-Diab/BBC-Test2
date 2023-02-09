describe('Sign In page', () => {
  const email = Cypress.env('validEmail');
  const password = Cypress.env('validPassword');
  const invalidEmail = Cypress.env('invalidEmail');
  const invalidPassword = Cypress.env('invalidPassword');
  beforeEach(() => {
    cy.visit('/signin');
  });

  after(() => {
    cy.visit('/signout');
  });

  it('click cancel button', () => {
    cy.get('.scaling-svg__svg').click().then(() => {
      cy.get('.international > ul > .orb-nav-homedotcom > a > span').contains('Home');
      cy.get('.module--header > .module__title > span').contains('Welcome to BBC.com');
      cy.url().should('include', 'bbc.com');
    });
  });

  it('login with invalid email and password', () => {
    cy.get('#user-identifier-input').type(invalidEmail);
    cy.get('#password-input').type(invalidPassword);
    cy.get('#submit-button').click();
    cy.get('.form-message__text > span')
      .contains('Looks like either the email/username or password is wrong');
    cy.url().should('include', '/signin');
  });

  it('login with valid credentiails', () => {
    cy.get('#user-identifier-input').type(email);
    cy.get('#password-input').type(password);
    cy.get('#submit-button').click().then(() => {
      cy.url().should('eq', 'https://www.bbc.com/');
    });
  });
});
