/// <reference types="cypress"/>
import 'cypress-xpath'
import { BrokenLinksPage } from "../../PageObject/BrokenLinksPage"



describe("Broken link - Image", function()
{


    let brokenLink = new BrokenLinksPage()



    // beforeEach(function()
    // {
    //     cy.LaunchBrowser();
    //     brokenLink = new BrokenLinksPage()
    //     brokenLink.openBrokenLinksTab()
    //     cy.fixture('BrokenLinks').then(function(brokenLinkData)
    //     {
    //         this.brokenLinkData = brokenLinkData;
    //     })
    // })


    

    beforeEach(function()
    {

        cy.LaunchBrowser();
        brokenLink.openBrokenLinksTab();
        
    })



    it("Validate URL", function()
    {
        cy.fixture('BrokenLinks').then(function(brokenLinkData){this.brokenLinkData = brokenLinkData;})
        brokenLink.openBrokenLinksTab();
        cy.url().should('include',this.brokenLinkData.ExpectedLandingURL)

    })

    it("Should display a image in element div with class image", function() 
    {
        cy.fixture('BrokenLinks').then(function(brokenLinkData){this.brokenLinkData = brokenLinkData;})
        brokenLink.validateImage();
        
      });


      it("Validate broken image", function()
      {
        cy.fixture('BrokenLinks').then(function(brokenLinkData){this.brokenLinkData = brokenLinkData;})
        brokenLink.validateBrokenImage();
      })


})