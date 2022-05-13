import { loginPage} from "../page_objects/loginPage.js";
import { deleteBoard } from "../page_objects/deleteBoard.js";
import { newBoard  } from "../page_objects/addBoard.js";
describe("delete the board", () => {
  before("", () => {
    cy.visit("/");
    loginPage.emailInput.type('alexalexjason70@gmail.com');
    loginPage.passInput.type('mareljapk23');
    loginPage.logInBtn.click();
    newBoard.newBoard('New organization');
  });

  it("deleting board", () => {
    cy.intercept({
      method:'GET',
      url:'https://cypress-api.vivifyscrum-stage.com/api/v2/organizations/13332/boards-data'
    }).as('deleting board')
    deleteBoard.button.click();
    
    deleteBoard.delete.click({ force: true });
    deleteBoard.clickYes.click();
    cy.url().should("include", "/");

    cy.wait("@deleting board").then((interception) => {
      console.log("RESPONSE", interception);
      expect(interception.response.statusCode).eq(200);
      expect(interception.response.statusMessage).eq("OK");
    });
  });
});