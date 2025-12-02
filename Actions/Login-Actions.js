const { expect } = require('@playwright/test')
const {LoginLocator}= require('../Locators/Login-Locator');
const {RegisterLocator}= require ('../Locators/Register-Locator');


class LoginAction {
    constructor(page) {
        this.page = page;
        this.loginLocator = new LoginLocator(page);
        this.registerLocator = new RegisterLocator(page);

    }
    //Launch Application
    async gotoURL(str_URLName) {
        await this.page.goto(str_URLName);
        console.log("hitting the URL: " + str_URLName);
        await expect(this.loginLocator.locToolsQATitle).toBeVisible();
        console.log("Title Verified");
    }

    //Verify Login Functionality Application
    async LoginToApplication(username, password) {
        await this.loginLocator.locBookStoreApplication.click();
        await this.loginLocator.locLogin.click();
        await this.registerLocator.locUsername.fill(username);
        await this.registerLocator.locPassword.fill(password);
        await this.loginLocator.locLoginButton.click();

        console.log(" login successfully")

        await expect(this.loginLocator.locVerifyUser).toBeVisible();
        await expect(this.loginLocator.locVerifyUser).toHaveText(username);

        console.log("Verified text")

        //   await expect(this.page).toHaveURL(profileURL);
        //  console.log("After login successfully, the current URL is " + profileURL);

    }
    //Verify Logout Functionality Application
    async LogoutFromApplication() {   ///expected 
        await this.loginLocator.locLogoutButton.waitFor({ state: 'visible' });
        await this.loginLocator.locLogoutButton.click();

        console.log("Logout Successfully.");

        await expect(this.loginLocator.locLoginButton).toBeVisible();
        console.log("Verified logout page loaded.");


    }

}
module.exports = { LoginAction };