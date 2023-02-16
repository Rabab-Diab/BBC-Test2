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

Cypress.Commands.add('createuser', () => {
  const env = Cypress.env();
  Cypress.env('userName', Math.random().toString(36).substring(2, 7));
  Cypress.env('email', `${Math.random().toString(36).substring(2, 7)}@fakeemail.com`);

  cy.request({
    method: 'POST',
    url: '/users',
    headers: {
      authorization: env.accessToken,
    },
    body: {
      name: env.userName,
      gender: env.userGender,
      email: env.email,
      status: env.userStatus,
    },
  }).then((response) => {
    const value = response.body.id;
    return value;
  });
});
