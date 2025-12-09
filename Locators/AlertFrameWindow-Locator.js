const { expect } = require("@playwright/test")


class AlertFrameWindowLocator {

    constructor(page) {

        this.page = page;
        this.locAlertFrameWindow = page.locator("//h5[contains(text(), 'Alerts, Frame & Windows')]");
        this.locBrowserWindowsButton = page.locator("//span[contains(text(), 'Browser Windows')]");

         //New Tab
        this.locNewTab = page.locator('#tabButton');
        this.locNewTabTitle = page.locator("//h1[contains(text(), 'This is a sample page')]");    // This is a sample page

          //New Window
         this.locNewWindonwButton = page.locator("//button[@id='windowButton']");
         
         //New Window Message Button
          this.locNewWindowMessageButton = page.locator("//button[@id='messageWindowButton']")




        
        this.locAlerts = page.locator("//span[contains(text(), 'Alerts')]");
        this.locAlertButton = page.locator("//button[@id='alertButton']");
        this.locTimerAlertButton = page.locator("//button[@id='timerAlertButton']");
        this.locConfirmButton = page.locator("//button[@id='confirmButton']");
        this.locPromptButton = page.locator("//button[@id='promtButton']");




        //window handle


    }

}

module.exports = {AlertFrameWindowLocator};