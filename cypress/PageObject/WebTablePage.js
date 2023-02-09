export class WebTablePage
{





    openWebTable()
    {
        cy.xpath('//span[contains(text(), "Web Tables")]').click()
    }





    printSalary(userName)
    {
        
            // cy.get('.custom-control-label').each(($el, index, $list) => {
            //     const product = $el.text();
            //    for(let element of userName){
            //                if (product==(element)) { 
            //                cy.wrap ($el).click() 
            //            }
            //        }
            //  })  

        for(let i=0; i<userName.length; i++)
        {
            if(userName[i] == "Kierra")
            {
                var priceLoc= '(//div[contains(text(),"NAME")]/following::div[@class="rt-td"])[4]'
                priceLoc = priceLoc.replace("NAME","Kierra")
                cy.xpath(priceLoc).each(($e1, index, $list) =>
                {
                    const copyText = $e1.text()
                    expect(copyText).to.equal('2000')
            
                }
            )}
        }


        
    }

}


































// let arryStore = ["Cierra","Alden", "Kierra"]


// for(let i=0; i<arryStore.length; i++)
// {

//     if(arryStore[i] === "Cierra" )
//     {

//         var priceLoc= '(//div[contains(text(),"NAME")]/following::div[@class="rt-td"])[4]'
//         priceLoc = priceLoc.replace("NAME","Cierra")

    //     cy.xpath(priceLoc).each(($e1, index, $list) =>
    // {
    //     const copyText = $e1.text()
    //     expect(copyText).to.equal('10000')

    // })

    // }