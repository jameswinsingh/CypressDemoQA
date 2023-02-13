/// <reference types="cypress"/>
import 'cypress-xpath'
import { LinksPage } from '../../PageObject/LinksPage';

describe('Link Page',  function() {

    let link = new LinksPage();


beforeEach(function()
  {
    cy.LaunchBrowser();
    link.openLinkPage()
    cy.fixture('Links').then(function(linksPageData){ this.linksPageData = linksPageData });
  })



// Links page validation
  it("Validate URL", function()
  {
    link.openLinkPage()
    cy.url().should('include',this.linksPageData.ExpectedURL)
  })


it("Click on Home to open new tab", function()
{
    link.Home(this.linksPageData.ChildTabURL)
})
    

    















})