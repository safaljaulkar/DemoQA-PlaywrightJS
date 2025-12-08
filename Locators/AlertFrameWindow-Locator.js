const { expect } = require("@playwright/test")




class AlertFrameWindowLocator {

    constructor(page) {

        this.page = page;
this.locAlertFrameWindow =page.getByText('Alerts, Frame & Windows')
this.locBrowserWindowsButton = page.locator("//span[contains(text(), 'Browser Windows')]")
       

    }



}

module.exports = AlertFrameWindowLocator;