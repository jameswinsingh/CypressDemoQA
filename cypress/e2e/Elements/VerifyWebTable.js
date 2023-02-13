/// <reference types="cypress"/>
import 'cypress-xpath'
import { WebTablePage } from '../../PageObject/WebTablePage';

describe('Web Table Page',  function() {

    let webTable = new WebTablePage();

beforeEach(function()
  {
    cy.LaunchBrowser();
    webTable.openWebTable()
    cy.fixture('WebTable').then(function(webTableData){ this.webTableData = webTableData });
  })

// Web table page validation
  it("Validate URL", function()
  {
    webTable.openWebTable()
    cy.url().should('include',this.webTableData.ExpectedURL)
  })


  it('Verify Salary', function() {
       
    webTable.printSalary(this.webTableData.name, this.webTableData.validateName, this.webTableData.salary)

  })
    

    















})