class DeleteBoard {
    get button() {
     return cy.get('.vs-l-project__menu').find('li'
    )}
    get delete() {
     return cy
      .get(
       "button"
      ).eq(3)
    }
    get clickYes() {
     return cy.get("button").last();
    }
   }
   export const deleteBoard = new DeleteBoard();