/// <reference types="cypress"/>
import 'cypress-xpath'
import { TextBoxPage } from '../../PageObject/TextBoxPage';


describe('Text Box Page',  function() {

    const textBox = new TextBoxPage();

beforeEach(function()
  {
    cy.LaunchBrowser();
    cy.fixture('TextBox').then(function(textBoxData){ this.textBoxData = textBoxData });
  })



    it('Text box page validation', function() {
        textBox.vaidateTextBox(this.textBoxData.name,
                                this.textBoxData.email,
                                this.textBoxData.currentAddress,
                                this.textBoxData.permanentAddress);
           
    })
    } )

    


