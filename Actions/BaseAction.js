const { expect } = require("@playwright/test");
const { CommonLocator } = require("../Locators/Common-Locator");


class BaseAction {

    constructor(page) {
        this.page = page; 
        this.commonLocator = new CommonLocator(page);

    }

    async VerifyLoginFunctionality(URL) {
        await this.page.goto(URL)
        console.log("Launched URL" + URL)

        await expect(this.commonLocator.locToolsQATitle).toBeVisible();
        console.log("Application Launched Successfully")

    }

}
module.exports = { BaseAction };