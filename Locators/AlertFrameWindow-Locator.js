const { expect } = require("@playwright/test")




class AlertFrameWindowLocator {

    constructor(page) {

        this.page = page;
this.locAlertFrameWindow =page.getByText('Alerts, Frame & Windows')
this.locBrowserWindowsButton = page.locator("//span[contains(text(), 'Browser Windows')]")
       this.locNewTab = page.locator("//button[@id =  'tabButton']");
   this.locNewTabTitle = page.locator("//h1[@id = 'sampleHeading']");    // This is a sample page
      

   //window handle


    }



}

module.exports = AlertFrameWindowLocator;