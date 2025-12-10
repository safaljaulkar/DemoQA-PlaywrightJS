const { expect } = require("@playwright/test")


class AlertFrameWindowLocator {

    constructor(page) {

        this.page = page;
        this.locAlertFrameWindow = page.locator("//h5[contains(text(), 'Alerts, Frame & Windows')]");

        //Browser Window 
        this.locBrowserWindowsButton = page.locator("//span[contains(text(), 'Browser Windows')]");
        this.locNewTab = page.locator('#tabButton');
        this.locNewTabTitle = page.locator("//h1[contains(text(), 'This is a sample page')]");       //New Tab
        this.locNewWindonwButton = page.locator("//button[@id='windowButton']");      //New Window
        this.locNewWindowMessageButton = page.locator("//button[@id='messageWindowButton']")     //New Window Message Button

        //Alerts
        this.locAlerts = page.locator("//span[contains(text(), 'Alerts')]");
        this.locAlertButton = page.locator("//button[@id='alertButton']");
        this.locTimerAlertButton = page.locator("//button[@id='timerAlertButton']");
        this.locConfirmButton = page.locator("//button[@id='confirmButton']");
        this.locConfirmResultText =page.locator("//span[@id='confirmResult']")
        this.locPromptButton = page.locator("//button[@id='promtButton']");
  this.locPromptResultText = page.locator("//span[@id='promptResult']")





    }

}

module.exports = { AlertFrameWindowLocator };