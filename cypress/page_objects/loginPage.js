/// <reference types="Cypress" />

class LoginPage{

    get emailInput() {
        return cy.get('input').first();
    }
    get passInput() {
        return cy.get('input[type="password"]');
    }
    get logInBtn() {
        return cy.get('button[type="submit"]');
    }
    
    login(email,pass) {
        this.emailInput.type(email);
        this.passInput.type(pass);
        this.logInBtn.click();
    }
}
export const loginPage = new LoginPage();