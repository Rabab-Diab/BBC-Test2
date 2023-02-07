// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
// Cypress.Commands.add("makeid", (length) => {
//     var result = '';
//     var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     var charactersLength = characters.length;
//     for (var i = 0; i < length; i++) {
//         result += characters.charAt(Math.floor(Math.random() * charactersLength));
//     }
//     console.log(result)
//     return result;
// })



// Cypress.Commands.add("login", (email, password) => {
//     cy.get('input[placeholder="Email"]').type(email)
//     cy.get('input[placeholder="Password"]').type(password)
//     cy.get('form').submit()
// })

//generate date command Format Tuesday, 31 January
Cypress.Commands.add("getDate", () => {

    const monthNames = ["January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];
    const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"
    ];


    const d = new Date();
    let month = monthNames[d.getMonth()]; //Current Month Ex: January
    let dayDate = d.getDate(); // today date Ex: 31
    let day = dayNames[d.getDay()]; //Tuesday

    // // This arrangement can be altered based on how we want the date's format to appear.
    let currentDate = `${day}, ${dayDate} ${month}`;
    return currentDate;

})

// Login command
Cypress.Commands.add("login", (email, password) => {
    cy.visit('/signin')
    cy.get('#user-identifier-input').type(Cypress.env('validEmail'))
    cy.get('#password-input').type(Cypress.env('validPassword'))
    cy.get('#submit-button').click()

})
// Logout command
Cypress.Commands.add("logout", () => {
    cy.visit('/signout')
})


Cypress.Commands.add("generateData", (length) => {
        let result = ''
        let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let charactersLength = characters.length
        for (let i = 0; i < length; i++) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return (result)

  
})
