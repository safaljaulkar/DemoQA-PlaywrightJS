const { expect } = require('@playwright/test')
const { LoginLocator } = require('../locators/Login-Locator/');
const { RegisterLocator } = require('../locators/Register-Locator');
const { ElementsLocator } = require('../locators/Elements-Locator')

class ElementsAction {
    constructor(page) {
        this.page = page;
        this.loginLocator = new LoginLocator(page);
        this.registerLocator = new RegisterLocator(page);
        this.elementLocator = new ElementsLocator(page);


    }
    async gotoURL(str_URLName) {
        await this.page.goto(str_URLName);
        console.log("hitting the URL: " + str_URLName);
        await expect(this.loginLocator.locToolsQATitle).toBeVisible();
        console.log("Title Verified");
    }

    async LoginToApplication(username, password) {
        await this.loginLocator.locBookStoreApplication.click();
        await this.loginLocator.locLogin.click();
        await this.registerLocator.locUsername.fill(username);
        await this.registerLocator.locPassword.fill(password);
        await this.loginLocator.locLoginButton.click();
        console.log(" login successfully")
        await this.elementLocator.locElements.click();
    }

    async VerifyTextBox(fullName,email,currentAddress,permanantAddeess) {
        
        await this.elementLocator.locTextBox.click();
        await this.elementLocator.locFullName.fill(fullName);
        await this.elementLocator.locEmail.fill(email);
        await this.elementLocator.locCurrentAddress.fill(currentAddress);
        await this.elementLocator.locPermanantAddress.fill(permanantAddeess);
        await this.elementLocator.locSubmit.click();

 

    // Fill text fields
   // await this.page.locator('#userName').fill(fullName);
    //await this.page.locator('#userEmail').fill(email);
    //await this.page.locator('#currentAddress').fill(currentAddress);
   // await this.page.locator('#permanentAddress').fill(permanentAddress);

    // Click Submit
   // await this.page.locator('#submit').click();

    // Assertion
    await expect(this.page.locator('#name')).toContainText(fullName);
    await expect(this.page.locator('#email')).toContainText(email);

    console.log("Text Box functionality verified successfully");
    }






}
module.exports = { ElementsAction };