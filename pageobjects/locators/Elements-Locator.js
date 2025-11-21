const { expect } = require('@playwright/test')

class ElementsLocator{

    constructor(page){

this.page=page;
this.locElements=page.getByText('#Elements')
this.locTextBox = page.getByText('Text Box');
this.locFullName =page.locator("//input[@id='userName']");
this.locEmail =page.locator('#userEmail');
this.locCurrentAddress=page.locator('#currentAddress');
this.locPermanantAddress = page.locator('#permanentAddress')
this.locSubmit = page.locator('#submit')



    }


}
module.exports={ElementsLocator};