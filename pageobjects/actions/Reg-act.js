const { expect } = require('@playwright/test')
const { LoginLocator } = require('../locators/Login-Locator/');
const { RegisterLocator } = require('../locators/Register-Locator');


class RegAct {
    constructor(page) {
        this.page = page;
        this.loginLocator = new LoginLocator(this.page);
        this.registerLocator = new RegisterLocator(this.page);
    }

    async gotoURL(str_URLName) {
        await this.page.goto(str_URLName);
        console.log("hitting the URL: " + str_URLName);
    }

    // Helper function to generate random strings
    generateRandomString(length = 6) {
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let result = '';
        for (let i = 0; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * chars.length);
            result += chars[randomIndex];
        }
        return result;
    }


    // Register new user with random firstname, lastname, username
    async RegisterNewUser() {

        await this.loginLocator.locBookStoreApplication.click();
        await this.loginLocator.locLogin.click();
        await this.registerLocator.locNewUser.click();

        const firstname = this.generateRandomString(6);
        const lastname = this.generateRandomString(6);
        const username = this.generateRandomString(8);
        const password = 'Test@123'; // keep static or generate dynamically if needed



        //await this.registerLocator.locFirstName.fill(firstname);
        //await this.registerLocator.locLastName.fill(lastname);
        //await this.registerLocator.locUsername.fill(username);
        //await this.registerLocator.locPassword.fill(password);
        await this.page.waitForTimeout(10000);
        await this.registerLocator.locRegisterButton.click();

       


        // await expect(this.registerLocator.locTooltip).toBeVisible({ timeout: 5000 });
        // Validate the text
        //await expect(this.registerLocator.locTooltip).toHaveText('User registered successfully');
    }


}
module.exports = { RegAct };