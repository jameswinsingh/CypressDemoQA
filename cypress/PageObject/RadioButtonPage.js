export class RadioButtonPage
{

    radioButtonTab = '//span[contains(text(), "Radio Button")]'
    noButton = "label[for=noRadio]"

    openRadioButtonPage()
    {
        cy.xpath(this.radioButtonTab).click()
    }

    selectRadioButton(radioBtnPageData)
    {
        cy.get('.custom-control-label').each(($el, index, $list) => {
            const product = $el.text();
           for(let element of radioBtnPageData){
                       if (product==(element)) { 
                       cy.wrap ($el).click() 
                   }
               }
         })  
    }

    selectNoButton()
    {
        cy.get(this.noButton).should('not.be.enabled')
    }



}