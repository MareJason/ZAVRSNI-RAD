/// < reference types="Cypress" />

import { loginPage } from "../page_objects/loginPage";

describe('login test', () => {

    it('login with valid data', () => {
        cy.intercept({
            method:'POST',
            url:'https://cypress-api.vivifyscrum-stage.com/api/v2/login'
        }).as('login with valid data');
        cy.visit('/');
        loginPage.login('alexalexjason70@gmail.com','mareljapk23');
        cy.url().should('include','/my-organizations');
        cy
        cy.wait('@login with valid data').then(interception => {
            console.log('RESPONSE',interception);
            expect(interception.response.statusCode).eq(200);
            expect(interception.response.statusMessage).eq('OK');
        })
    })
})