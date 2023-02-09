/// <reference types="cypress"/>
import 'cypress-xpath'
import { RadioButtonPage } from '../../PageObject/RadioButtonPage';

describe('Radio Button Page',  function() {

    let radioButton = new RadioButtonPage();

beforeEach(function()
  {
    cy.LaunchBrowser();
    radioButton.openRadioButtonPage();
    cy.fixture('RadioButton').then(function(RadioButtonData){ this.RadioButtonData = RadioButtonData });
  })

//Radio Button page validation
    it('Open radio tab', function() {
        radioButton.openRadioButtonPage();
        cy.url().should('include','https://demoqa.com/radio-button')
    })
    

    it('Select specific button in the radio button page', function()
    {
        radioButton.selectRadioButton(this.RadioButtonData.radioButtonData);
    })


    it('Check "No" button is disabled', function()
    {
        radioButton.selectNoButton();
    } )















})