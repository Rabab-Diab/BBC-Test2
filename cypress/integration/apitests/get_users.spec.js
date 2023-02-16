describe('get users tests', () => {
  const env = Cypress.env();

  it('get users', () => {
    cy.request({
      method: 'GET',
      url: '/users',
      headers: {
        authorization: env.accessToken,
      },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body[0].id).to.be.exist;
      expect(response.body[0].email).to.be.exist;
      expect(response.body[0].name).to.be.exist;
      expect(response.body[0].gender).to.be.exist;
      expect(response.body[0].status).to.be.exist;
    });
  });

  it('get specific user', () => {
    cy.createuser().then((value) => {
      cy.request({
        method: 'GET',
        url: `/users/${value}`,
        headers: {
          authorization: env.accessToken,
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.email).to.eq(env.email);
        expect(response.body.gender).to.eq(env.userGender);
        expect(response.body.name).to.eq(env.userName);
        expect(response.body.status).to.eq(env.userStatus);
      });
    });
  });

  it('get invalid user by id', () => {
    cy.request({
      method: 'GET',
      url: '/users/11111111',
      failOnStatusCode: false,
      headers: {
        authorization: env.accessToken,
      },
    }).then((response) => {
      expect(response.status).to.eq(404);
      expect(response.body.message).to.eq('Resource not found');
    });
  });
});
