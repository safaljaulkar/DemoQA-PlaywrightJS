const { expect } = require('@playwright/test')
const { LoginLocator } = require('../BookStoreElement/Login-Locator');
const { ElementsLocator } = require('./Elements-Locator');




class TextBoxAction {
    constructor(page) {

        this.page = page;
        this.loginLocator = new LoginLocator(page)
        this.elementsLocator = new ElementsLocator(page);


    }
    //Launch Application
    async gotoURL(str_URLName) {
        await this.page.goto(str_URLName);
        console.log("hitting the URL: " + str_URLName);
        await expect(this.loginLocator.locToolsQATitle).toBeVisible();
        console.log("Title Verified");
    }

//Text Box Functionality

    async VerifyTextBox(fullName, email, currentAddress, permanantAddeess) {
        await this.elementsLocator.locElements.click();
        await this.elementsLocator.locTextBox.click();
        await this.elementsLocator.locFullName.fill(fullName);
        await this.elementsLocator.locEmail.fill(email);
        await this.elementsLocator.locCurrentAddress.fill(currentAddress);
        await this.elementsLocator.locPermanantAddress.fill(permanantAddeess);
        await this.elementsLocator.locSubmit.click();


        // Assertion
        await expect(this.page.locator('#name')).toContainText(fullName);
        await expect(this.page.locator('#email')).toContainText(email);
        console.log("Text Box functionality verified with assertion successfully");
    }
//Check Box functionality
    async VerifyCheckBox() {
        await this.elementsLocator.locCheckBox.click();
        await this.elementsLocator.expandButton.click();
        await this.elementsLocator.locCheckboxchecked.nth(0).click();
        await this.elementsLocator.locCheckboxchecked.nth(2).click();
        await this.elementsLocator.locCheckboxchecked.nth(6).click()
        await this.elementsLocator.collapsButton.click();
        await this.elementsLocator.locCheckboxchecked.nth(0).click();
        await this.elementsLocator.locCheckboxchecked.nth(2).click();
        await this.elementsLocator.locCheckboxchecked.nth(6).click()

        console.log("Check Box functionality verified successfully");
        await expect(this.page.locator('#result')).toBeVisible();
        await expect(this.page.locator('#result')).toContainText('home');
        await expect(this.page.locator('#result')).toContainText('desktop');
        await expect(this.page.locator('#result')).toContainText('documents');
        await expect(this.page.locator('#result')).toContainText('downloads');
        console.log("Check Box functionality verified with assertion successfully");
    }

   //Radio Button Functionality 
    async VerifyRadioButton() {
  await this.elementsLocator.locCheckBox.click();



    }
}
module.exports = { TextBoxAction };









