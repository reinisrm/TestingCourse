import BasePage from "./base.page";

class CheckBoxPage extends BasePage {
    static get url(){
        return "/checkbox";
    }

    static get expandButton() {
        return cy.get(".rct-option-expand-all");
    }
    static get checkboxTitles() {
        return cy.get(".rct-title");
    }
    static get result() {
        return cy.get("#result");
    }
 
}

export default CheckBoxPage;