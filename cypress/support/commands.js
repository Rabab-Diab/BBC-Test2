// ***********************************************

// generate date command Format : Tuesday, 31 January
Cypress.Commands.add('getDate', () => {
  const date = new Date();
  const month = Cypress.env('monthNames')[date.getMonth()];
  const dayDate = date.getDate();
  const day = Cypress.env('dayNames')[date.getDay()];
  return `${day}, ${dayDate} ${month}`;
});

// Login command
Cypress.Commands.add('login', (email, password) => {
  cy.visit('/signin');
  cy.get('#user-identifier-input').type(email);
  cy.get('#password-input').type(password);
  cy.get('#submit-button').click();
});

// Logout command
Cypress.Commands.add('logout', () => {
  cy.visit('/signout');
});
