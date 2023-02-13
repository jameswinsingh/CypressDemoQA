/// <reference types="cypress"/>
import 'cypress-xpath'
import { BrokenLinksPage } from "../../PageObject/BrokenLinksPage"



describe("Broken link - Image", function()
{


    let brokenLink = new BrokenLinksPage()


    beforeEach(function()
    {
        cy.LaunchBrowser();
        brokenLink.openBrokenLinksTab()
        cy.fixture('BrokenLinks').then(function(brokenLinkData)
        {
            this.brokenLinkData = brokenLinkData;
        })
    })


    it("Validate URL", function()
    {
        brokenLink.openBrokenLinksTab();
        cy.url().should('include',this.brokenLinkData.ExpectedLandingURL)

    })

    it("Should display a image in element div with class image", function() {
        brokenLink.validateImage();
        
      });


      it("Validate broken image", function()
      {

        brokenLink.validateBrokenImage();




      })


})