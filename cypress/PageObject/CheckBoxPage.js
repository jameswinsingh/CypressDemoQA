export class CheckBoxPage
{
    checkBox = '//span[contains(text(),"Check Box")]';
    expandHome = ".rct-collapse.rct-collapse-btn"
    homeCheckBox = '//span[contains(text(),"Home")]';



    validateCheckBox(homeDDLength)
    {   

        cy.xpath(this.checkBox).click();
        cy.get(this.expandHome).click({force: true});
        //cy.xpath(this.homeCheckBox).click();
        cy.get(".rct-title").should('have.length', homeDDLength)
    }


     selectElement(checkBoxData)
    {
        // cy.get(".rct-title").then($Message => 
        // {
        //     cy.get('.rct-title').each(($elem, index) => {
        //          if ($elem.text().includes("Desktop")) 
        //          {
        //             cy.wrap($elem).click();
        //          }
        //         })     
        // });
        cy.get('.rct-title').each(($el, index, $list) => {
             const product = $el.text();
            for(let element of checkBoxData){
                        if (product==(element)) { 
                        cy.wrap ($el).click() 
                    }
                }
          })




































    }

}