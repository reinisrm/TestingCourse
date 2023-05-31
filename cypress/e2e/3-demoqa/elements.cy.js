import TextBoxPage from "../../pageObjects/textBoxPage.page";
import CheckBoxPage from "../../pageObjects/checkbox.page";
import radioButtonPage from "../../pageObjects/radioButton.page";
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
        it("Text box Negative", () => {
            TextBoxPage.emailField.should("not.have.class", "field-error");
            TextBoxPage.emailField.type("random@email@asdsada.com");
            TextBoxPage.submitButton.click();
            TextBoxPage.emailField.should("have.class", "field-error");

        });
    });
    //Checkbox scenarios
    context("Check Box scenarios", () => {
        beforeEach(() => {     
            CheckBoxPage.visit();
        });

        it('Checkbox select items', () => {
            //Click Expand (+) Button
            CheckBoxPage.expandButton.click();
            //Click Notes, Angular, Private, Excel File.doc
            CheckBoxPage.checkboxTitles.contains("Notes").click();
            CheckBoxPage.checkboxTitles.contains("Angular").click();
            CheckBoxPage.checkboxTitles.contains("Private").click();
            CheckBoxPage.checkboxTitles.contains("Excel File.doc").click();
            //Validate that selected items are registered
            CheckBoxPage.result.should("have.text",
             "You have selected :notesangularprivateexcelFile");
        }); 
        it('Checkbox click Desktop', () => {
            //Click Expand (+) Button
            CheckBoxPage.expandButton.click();
            //Click Desktop
            CheckBoxPage.checkboxTitles.contains("Desktop").click();
            //Validate success message - you have selected :dekstopnotescommands
            CheckBoxPage.result.should("have.text",
             "You have selected :desktopnotescommands");
        });
    });
    context.only("Check Box scenarios", () => {
        beforeEach(() => {     
            radioButtonPage.visit();
        });
        it("Click buttons nad validate", () => {
            //Click yes button
            radioButtonPage.yesButton.contains("Yes").click();
            //Validate message - you have selected yes
            radioButtonPage.successMessage.should("have.text", "Yes");
            //Click impressive button
            radioButtonPage.impressiveButton.click({force: true});
            //Validate message - you have selected Impressive
            radioButtonPage.successMessage.should("have.text", "Impressive");
            //validate that no button is disabled
            radioButtonPage.noButton.should("have.class", "disabled");

        });
    });



});
  