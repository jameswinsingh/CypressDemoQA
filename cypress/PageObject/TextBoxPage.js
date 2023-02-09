export class TextBoxPage
{

    textBoxTab = "//span[contains(text(),'Text Box')]";
    userName = "#userName";
    emailId = "#userEmail";
    currentAddress = "#currentAddress";
    permanentAddress = "#permanentAddress";
    submitButton = "#submit";

//Assertion
    finalName = "//p[@id='name'] ";
    finalEmailId = "//p[@id='email']";
    finalCurrentAddress = "//p[@id='currentAddress']";
    finalPermanentAddress = "//p[@id='permanentAddress']";


    vaidateTextBox(userName, emailId, currentAddress, permanentAddress  )
    {
        cy.xpath(this.textBoxTab).click();
        cy.get(this.userName).type(userName);
        cy.get(this.emailId).type(emailId);
        cy.get(this.currentAddress).type(currentAddress);
        cy.get(this.permanentAddress).type(permanentAddress);
        cy.get(this.submitButton).click();
//Assertion
        cy.xpath(this.finalName).should('contain', userName);
        cy.xpath(this.finalEmailId).should('contain', emailId);
        cy.xpath(this.finalCurrentAddress).should('contain', currentAddress);
        cy.xpath(this.finalPermanentAddress).should('contain', permanentAddress);
        cy.get(this.submitButton).should('be.visible');
    }






















}