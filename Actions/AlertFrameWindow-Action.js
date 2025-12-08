const { expect } = require("@playwright/test")
const AlertFrameWindowLocator = require("../Locators/AlertFrameWindow-Locator");
const { LoginLocator } = require("../Locators/Login-Locator");

class AlertFrameWindowAction {

    constructor(page) {
        this.page = page;
        this.loginLocator = new LoginLocator(page);
        this.alertFrameWindowLocator = new AlertFrameWindowLocator(page);

    }

 //Launch Application
    async gotoURL(str_URLName) {
        await this.page.goto(str_URLName);
        console.log("hitting the URL: " + str_URLName);
        await expect(this.loginLocator.locToolsQATitle).toBeVisible();
        console.log("Title Verified");
    }
  
    async VerifyBrowserWindow(){

      await this.alertFrameWindowLocator.locAlertFrameWindow.click();
      await this.alertFrameWindowLocator.locBrowserWindowsButton.click();
    await this.alertFrameWindowLocator.locNewTab.click();




        
    }








}
module.exports = AlertFrameWindowAction;