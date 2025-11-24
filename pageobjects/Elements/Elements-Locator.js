const { expect } = require('@playwright/test')

class ElementsLocator{

    constructor(page){

this.page=page;
this.locElements=page.getByText('Elements')

//TextBox locators
this.locTextBox = page.getByText('Text Box');
this.locFullName =page.locator("//input[@id='userName']");
this.locEmail =page.locator('#userEmail');
this.locCurrentAddress=page.locator('#currentAddress');
this.locPermanantAddress = page.locator('#permanentAddress')
this.locSubmit = page.locator('#submit')

//CheckBox locators
this.locCheckBox = page.getByText('Check Box');
this.locCheckboxchecked = page.locator('//span[@class = "rct-checkbox"]');
this.expandButton = page.locator('//button[@class = "rct-option rct-option-expand-all"]');
this.collapsButton=page.locator('//button[@class = "rct-option rct-option-collapse-all"]')


//Radio Button locators
this.locRadioButton = page.getByText('Radio Button');
this.locYesRadioButton = page.locator('//label[@for="yesRadio"]');
this.locImpressiveRadioButton = page.locator('//label[@for="impressiveRadio"]');
this.locNoRadio = page.locator('//label[@for="noRadio"]');
this.locSuccessMessage=page.locator('//span[@class = "text-success"]');

//Web Tables locators
this.locWebTables = page.getByText('Web Tables');
this.locColumnHeader = page.locator('//div[@class = "rt-tr"]');
this.locAddNewRecordButton = page.locator('//button[@id = "addNewRecordButton"]');
this.locEmail = page.locator('#userEmail');












    }
}
module.exports={ElementsLocator};