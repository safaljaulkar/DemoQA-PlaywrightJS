const { expect } = require('@playwright/test')

class CommonLocator {


    constructor(page) {
        this.page = page;

        this.locForms = this.page.locator("//h5[contains(text(), 'Forms')]");

        this.locSubmit = page.locator("#submit")


    }
}
module.exports = { CommonLocator };