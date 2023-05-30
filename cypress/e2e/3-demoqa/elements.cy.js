import TextBoxPage from "../../pageObjects/textBoxPage.page";

describe("Elements", () => {

    context("Text box scenarios", () => {
        beforeEach(() => {     
            TextBoxPage.visit();
        });

        it("Text box Positive", () => {
            // Interactions with elements
            TextBoxPage.usernameField.type("Donald Trump");
            TextBoxPage.emailField.type("random@email.com");
            TextBoxPage.currentAddressField.type("Random current address");
            TextBoxPage.permanentAdressField.type("Random permanent address");
            TextBoxPage.submitButton.click();
            //Validation
            TextBoxPage.nameSection.should('have.text', 'Name:Donald Trump');
            TextBoxPage.emailSection.should('have.text', 'Email:random@email.com');
            TextBoxPage.currentAddressSection.should("contain.text", 
            "Current Address :Random current address");
            TextBoxPage.permanentAddressSection.should("contain.text", 
            "Permananet Address :Random permanent address");
                 
        });   
        it.only("Text box Negative", () => {
            TextBoxPage.emailField.should("not.have.class", "field-error");
            TextBoxPage.emailField.type("random@email@asdsada.com");
            TextBoxPage.submitButton.click();
            TextBoxPage.emailField.should("have.class", "field-error");

        });


    });
});
  