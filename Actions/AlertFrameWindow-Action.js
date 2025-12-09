const { expect } = require('@playwright/test')

const { LoginLocator } = require('../Locators/Login-Locator');
const { CommonLocator } = require('../Locators/Common-Locator');
const { AlertFrameWindowLocator } = require("../Locators/AlertFrameWindow-Locator");


class AlertFrameWindowAction {

    constructor(page) {
        this.page = page;
        this.loginLocator = new LoginLocator(page);
        this.commonLocator = new CommonLocator(page);
        this.alertFrameWindowLocator = new AlertFrameWindowLocator(page);

    }

    //Launch Application
    async gotoURL(str_URLName) {
        await this.page.goto(str_URLName);
        await expect(this.loginLocator.locToolsQATitle).toBeVisible();

    }

    //Verify Browser Window
    async VerifyBrowserWindow() {
        await this.alertFrameWindowLocator.locAlertFrameWindow.click();
        await this.alertFrameWindowLocator.locBrowserWindowsButton.click();

        //---------New Tab button----------------
        const [newTab] = await Promise.all([               //Wait for new tab
            this.page.context().waitForEvent('page'),
            this.alertFrameWindowLocator.locNewTab.click()
        ]);

        await newTab.waitForLoadState();

        // Create locator object for NEW TAB
        const newTabLocator = new AlertFrameWindowLocator(newTab);
        await expect(newTabLocator.locNewTabTitle).toHaveText("This is a sample page");
        await newTab.close();    // Optional: close tab


        //-------New Window--------------------

        const [newWindow] = await Promise.all([
            this.page.context().waitForEvent("page"),
            this.alertFrameWindowLocator.locNewWindonwButton.click()
        ]);

        await newWindow.waitForLoadState();

        // Create locators for NEW WINDOW
        const newWindowLoc = new AlertFrameWindowLocator(newWindow);

        await expect(newWindowLoc.locNewTabTitle).toHaveText("This is a sample page");
        await newWindow.close();


        //----------------New Window Message------------------------------
        const [popup] = await Promise.all([
            this.page.context().waitForEvent("page"),
            this.alertFrameWindowLocator.locNewWindowMessageButton.click()   // Click on "New Window Message"
        ]);

        await popup.waitForLoadState();

        // Message is shown in <body>
        const message = await popup.locator("body").textContent();
        console.log("POPUP MESSAGE TEXT:", message);

        // Validate text
        expect(message.trim()).toContain("Knowledge increases by sharing but not by saving. Please share this website with your friends and in your organization.");

        // Close popup
        await popup.close();
        console.log("New Window Message verified successfully");
    }
}

    /*
    //Verify Alerts
    async VerifyAlerts() {

        await this.alertFrameWindowLocator.locAlerts.click();

        //Enabling alert handling  //using this handler will automatically trigger when alert open       
        this.page.on('dialog', async dialog => {       // page.on('keyword',async variable arrow function{} 

            expect(dialog.type()).toContain('alert')
            expect(dialog.message()).toContain('You clicked a button')
            await dialog.accept();
        })
        // await this.alertFrameWindowLocator.locAlerts.click();
        await this.alertFrameWindowLocator.locAlertButton.click();


    }
*/

}
module.exports = { AlertFrameWindowAction };