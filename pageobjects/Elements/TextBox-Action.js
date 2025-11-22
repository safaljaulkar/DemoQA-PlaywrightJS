const { expect } = require('@playwright/test')
const { LoginLocator } = require('../Book Store Element/Login-Locator');
const {TextBoxLocator} = require('../Elements/TextBox-Locator');



class TextBoxAction {
    constructor(page) {
        this.page = page;
        this.loginLocator = new LoginLocator(page)
        this.textBoxLocator = new TextBoxLocator(page);


    }
    async gotoURL(str_URLName) {
        await this.page.goto(str_URLName);
        console.log("hitting the URL: " + str_URLName);
        await expect(this.loginLocator.locToolsQATitle).toBeVisible();
        console.log("Title Verified");
    }

    async VerifyTextBox(fullName, email, currentAddress, permanantAddeess) {
        await this.textBoxLocator.locElements.click();
        await this.textBoxLocator.locTextBox.click();
        await this.textBoxLocator.locFullName.fill(fullName);
        await this.textBoxLocator.locEmail.fill(email);
        await this.textBoxLocator.locCurrentAddress.fill(currentAddress);
        await this.textBoxLocator.locPermanantAddress.fill(permanantAddeess);
        await this.textBoxLocator.locSubmit.click();


        // Assertion
        await expect(this.page.locator('#name')).toContainText(fullName);
        await expect(this.page.locator('#email')).toContainText(email);

        console.log("Text Box functionality verified successfully");
    }
}
module.exports = { TextBoxAction };