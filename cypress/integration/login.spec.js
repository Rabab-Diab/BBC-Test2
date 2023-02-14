describe('Sign In page', () => {
  const envVar = Cypress.env();

  beforeEach(() => {
    cy.visit('/signin');
  });

  after(() => {
    cy.visit('/signout');
  });

  it('click cancel button', () => {
    cy.get('.scaling-svg__svg').click().then(() => {
      cy.get('.international > .orb-nav-homedotcom > a').contains('Home');
      cy.get('.module--header').contains('Welcome to BBC.com');
      cy.url().should('include', 'bbc.com');
    });
  });

  it('login with invalid email and password', () => {
    cy.get('#user-identifier-input').type(envVar.invalidEmail);
    cy.get('#password-input').type(envVar.validPassword);
    cy.get('#submit-button').click();
    cy.get('.form-message__text > span')
      .contains('Looks like either the email/username or password is wrong');
    cy.url().should('include', '/signin');
  });

  it('login with valid credentiails', () => {
    cy.get('#user-identifier-input').type(envVar.validEmail);
    cy.get('#password-input').type(envVar.validPassword);
    cy.get('#submit-button').click().then(() => {
      cy.url().should('contain', 'bbc.com/');
    });
  });
});
