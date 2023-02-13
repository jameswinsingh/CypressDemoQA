export class BrokenLinksPage
{


    brokenLinks_Image = "//span[normalize-space()='Broken Links - Images']"
    validImage = "(//img)[3]"
    brokenImage = "(//img)[4]"




    openBrokenLinksTab()
    {
        cy.xpath(this.brokenLinks_Image).click()
    }


    validateImage()
    {
        cy.xpath(this.validImage).should('be.visible');
    }


    validateBrokenImage()
    {
        cy.xpath(this.brokenImage).should('not.be.visible')
    }





}