/// <reference types="cypress"/>
import 'cypress-xpath'
import { CheckBoxPage } from '../../PageObject/CheckBoxPage';


describe('Check Box Page',  function() {

    const checkBox = new CheckBoxPage();

beforeEach(function()
  {
    cy.LaunchBrowser();
    cy.fixture('CheckBox').then(function(checkBoxData){ this.checkBoxData = checkBoxData });
  })


    it('Check box page validation', function() {

        checkBox.validateCheckBox(this.checkBoxData.LengthOfHomeLength)
        checkBox.selectElement(this.checkBoxData.DropDownData)

    })
    } )

    


