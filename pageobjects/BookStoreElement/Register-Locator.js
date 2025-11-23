const { expect } = require('@playwright/test')

class RegisterLocator {

    constructor(page) {

        this.page = page;
        this.locBookStoreApplication = page.getByText('Book Store Application');
        this.locNewUser = page.locator('#newUser');
        this.locFirstName = page.locator('#firstname');
        this.locLastName = page.locator('#lastname');
        this.locUsername = page.locator('#userName');
        this.locPassword = page.locator('#password');
        this.locCaptcha = page.locator("//div[@class = 'recaptcha-checkbox-border']");
        this.locRegisterButton = page.locator('#register');



    }
}
module.exports = { RegisterLocator };
