class NewBoard {
    get pageHeading(){
      return cy.get('.vs-c-my-organization__title').first();
    }
    get addBtn() {
      return cy.get('li[title="Add new Board"]');
    }
    get organizationName() {
      return cy.get('input[name="name"]');
    }
    get nextBtn() {
      return cy.get("button").last();
    }
    get kanban() {
      return cy.get(":nth-child(2) > .vs-c-radio > .vs-c-radio-check");
    }
    get nextBtn1() {
      return cy.get('button[name="next_btn"]');
    }
  
    get nextBtn2() {
      return cy.get('button[name="next_btn"]');
    }
    get nextBtn3() {
      return cy.get("button").last();
    }
    get finish() {
      return cy.get("button").last();
    }
    newBoard(title) {
      this.addBtn.click();
      this.organizationName.type(title);
      this.nextBtn.click();
      this.kanban.click();
      this.nextBtn1.click();
      this.nextBtn2.click();
      this.nextBtn3.click();
      this.nextBtn3.click();
    }
  }
  export const newBoardConst = new NewBoard();