const { expect } = require('@playwright/test')
const { LoginLocator } = require('../Locators/Login-Locator');
const { RegisterLocator } = require('../Locators/Register-Locator');
const { CommonLocator } = require('../Locators/Common-Locator')


class RegisterAction {
    constructor(page) {
        this.page = page;
        this.loginLocator = new LoginLocator(this.page);
        this.registerLocator = new RegisterLocator(this.page);
        this.commonLocator = new CommonLocator(page);
    }


    async gotoURL(str_URLName) {
        await this.page.goto(str_URLName);
        console.log("hitting the URL: " + str_URLName);
    }

    async RegisterNewUser(firstname, lastname, username, password) {
        await this.loginLocator.locBookStoreApplication.click();
        await this.loginLocator.locLogin.click();
        await this.registerLocator.locNewUser.click();

        await this.registerLocator.locFirstName.fill(firstname)
        await this.registerLocator.locLastName.fill(lastname)
        await this.registerLocator.locUsername.fill(username);
        await this.registerLocator.locPassword.fill(password);

        //await this.registerLocator.locCaptcha.click();
        await this.page.waitForTimeout(10000);
        await this.registerLocator.locRegisterButton.click();





        // await expect(this.registerLocator.locTooltip).toBeVisible({ timeout: 5000 });
        // Validate the text
        //await expect(this.registerLocator.locTooltip).toHaveText('User registered successfully');
    }


}
module.exports = { RegisterAction };