export class LinksPage
{

    childTab = "(//span[normalize-space()='Links'])[1]"



    openLinkPage()
    {
        cy.xpath(this.childTab).click();
    }

    Home(expectedURL)
    {
        cy.get('#simpleLink').invoke('removeAttr', 'target').click();
        cy.url().should('include', expectedURL )
    }




}