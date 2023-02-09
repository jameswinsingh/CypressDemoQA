/// <reference types="cypress"/>
import { func } from 'assert-plus';
import 'cypress-xpath'
import { WebTablePage } from '../../PageObject/WebTablePage';

describe('Radio Button Page',  function() {

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
  })



    it('Verify Salary', function() {
       
        webTable.printSalary(this.webTableData.name)

    })
    

    















})