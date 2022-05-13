import { newBoardConst } from "../page_objects/addBoard.js";
import { loginPage } from "../page_objects/loginPage.js";
describe("new board", () => {
  beforeEach("visit login page", () => {
    cy.visit("/");
    loginPage.emailInput.type("alexalexjason70@gmail.com");
    loginPage.passInput.type("mareljapk23");
    loginPage.logInBtn.click();
    cy.wait(5000);
  });

  it("new board", () => {
    cy.intercept({
      method:'POST',
      url:'https://cypress-api.vivifyscrum-stage.com/api/v2/boards'
    }).as('newBoard')
    newBoardconst.newBoard("Marelja");
    cy.url().should('include','/')
    cy.wait("@newBoard").then((interception) => {
      console.log("RESPONSE", interception);
      expect(interception.response.statusCode).eq(201);
      expect(interception.response.statusMessage).eq("Created");
    });
    
  });
});