describe('get users tests', () => {
  const env = Cypress.env();
  env.userName = Math.random().toString(36).substring(2, 7);
  env.email = `${Math.random().toString(36).substring(2, 7)}@fakeemail.com`;

  it('create user', () => {
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
      expect(response.status).to.eq(201);
      expect(response.body.id).to.be.exist;
      expect(response.body.email).to.eq(env.email);
      expect(response.body.name).to.eq(env.userName);
      expect(response.body.gender).to.eq(env.userGender);
      expect(response.body.status).to.eq(env.userStatus);
    });
  });

  it('create user where fields are blank', () => {
    cy.request({
      method: 'POST',
      url: '/users',
      failOnStatusCode: false,
      headers: {
        authorization: env.accessToken,
      },
      body: {
        name: '',
        gender: '',
        email: '',
        status: '',
      },
    }).then((response) => {
      expect(response.status).to.eq(422);
      expect(response.body[0].field).to.eq('email');
      expect(response.body[0].message).to.eq("can't be blank");
      expect(response.body[1].field).to.eq('name');
      expect(response.body[1].message).to.eq("can't be blank");
      expect(response.body[2].field).to.eq('gender');
      expect(response.body[2].message).to.eq("can't be blank, can be male of female");
      expect(response.body[3].field).to.eq('status');
      expect(response.body[3].message).to.eq("can't be blank");
    });
  });
});
