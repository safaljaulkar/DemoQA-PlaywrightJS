const { expect } = require('@playwright/test')

class RegisterLocator {

    constructor(page) {

        this.page = page;
        this.locBookStoreApplication = page.getByText('Book Store Application');
        this.locNewUser = page.locator('#newUser');
        this.locFirstName = page.locator("//input[@placeholder = 'First Name']");
        this.locLastName = page.locator("//input[@placeholder = 'Last Name']");
        this.locUsername = page.locator('#userName');
        this.locPassword = page.locator('#password');
        this.locRegisterButton = page.locator('#register');



    }
}
module.exports = { RegisterLocator };
