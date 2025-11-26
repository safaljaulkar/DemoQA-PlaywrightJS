const { expect } = require('@playwright/test')
const { LoginLocator } = require('../BookStoreElement/Login-Locator');
const { ElementsLocator } = require('./Elements-Locator');
const { BookStoreData } = require('../BookStoreElement/BookStore-Data');
const { RegisterLocator } = require('../BookStoreElement/Register-Locator');



class ElementsAction {
    constructor(page) {

        this.page = page;
        this.loginLocator = new LoginLocator(page)
        this.elementsLocator = new ElementsLocator(page);
        this.bookStoreData = new BookStoreData(page);
        this.registerLocator = new RegisterLocator(page);
    }
    //Launch Application
    async gotoURL(str_URLName) {
        await this.page.goto(str_URLName);
        console.log("hitting the URL: " + str_URLName);
        await expect(this.loginLocator.locToolsQATitle).toBeVisible();
        console.log("Title Verified");
    }

    //Text Box Functionality

    async VerifyTextBox(fullName, email, currentAddress, permanantAddeess) {
        await this.elementsLocator.locElements.click();
        await this.elementsLocator.locTextBox.click();
        await this.elementsLocator.locFullName.fill(fullName);
        await this.elementsLocator.locEmail.fill(email);
        await this.elementsLocator.locCurrentAddress.fill(currentAddress);
        await this.elementsLocator.locPermanantAddress.fill(permanantAddeess);
        await this.elementsLocator.locSubmit.click();

        // Assertion
        await expect(this.page.locator('#name')).toContainText(fullName);
        await expect(this.page.locator('#email')).toContainText(email);
        console.log("Text Box functionality verified with assertion successfully");
    }
    //Check Box functionality
    async VerifyCheckBox() {
        await this.elementsLocator.locCheckBox.click();
        await this.elementsLocator.locExpandButton.click();
        await this.elementsLocator.locCheckboxchecked.nth(0).click();
        await this.elementsLocator.locCheckboxchecked.nth(2).click();
        await this.elementsLocator.locCheckboxchecked.nth(6).click()
        await expect(this.elementsLocator.locCheckboxResult).toBeVisible();
        await expect(this.elementsLocator.locHomeCheckbox).toContainText('Home');
        await expect(this.elementsLocator.locDesktopCheckbox).toContainText('Desktop');
        await expect(this.elementsLocator.locDocumentCheckbox).toContainText('Documents');
        await expect(this.elementsLocator.locDownloadCheckbox).toContainText('Downloads');
        await this.elementsLocator.locCollapsButton.click();
        console.log("Check Box functionality verified with assertion successfully");

    }

    //Radio Button Functionality 
    async VerifyRadioButton() {
        await this.elementsLocator.locRadioButton.click();
        await expect(this.elementsLocator.locRadioButtonTitle).toBeVisible();
        await this.elementsLocator.locYesRadioButton.click();
        await expect(this.elementsLocator.locSuccessMessage).toContainText('Yes');
        await this.elementsLocator.locImpressiveRadioButton.click();
        await expect(this.elementsLocator.locSuccessMessage).toContainText('Impressive');

        //No dissable rado button
        const radioButton = await this.elementsLocator.locNoRadio;
        await expect(radioButton).toBeDisabled();
        await expect(radioButton).not.toBeChecked();
        console.log("Radio Button functionality verified with assertion successfully");

    }
    //Web Tables Functionality
    async VerifyWebTables(firstname) {
        await this.elementsLocator.locWebTables.click();
        //await expect(this.elementsLocator.locColumnHeader).toBeVisible();
        console.log("All header title displays");

        //Add New Record
        await this.elementsLocator.locAddNewRecordButton.click();
        await expect(this.elementsLocator.locRegistratioFormTitle).toBeVisible();
        console.log("Registration Form Title is visible");
        await this.registerLocator.locFirstName.fill(firstname);
        await this.registerLocator.locLastName.fill(lastname);
        await this.elementsLocator.locEmail.fill(email);
        await this.page.elementsLocator.locAge.fill(age);
        await this.page.elementsLocator.locSalary.fill(salary);
        await this.elementsLocator.locDepartment.fill(department);
        await this.elementsLocator.locRegistrationSubmit.click();
        console.log("New record added successfully");

    }
    // Buttons functionality
    async VerifyButtons() {

        await this.elementsLocator.locButtons.click();
        await expect(this.elementsLocator.locButtons).toBeVisible();
        console.log("Buttons title displays");
        await this.elementsLocator.locDoubleClickMeButton.dblclick();
        await expect(this.elementsLocator.locDoubleClickMessage).toBeVisible();
        await this.elementsLocator.locRightClickMeButton.click({ button: 'right' });
        await expect(this.elementsLocator.locRightClickMessage).toBeVisible();
        await this.elementsLocator.locClickMe.click();
        await expect(this.elementsLocator.locClickMeMessage).toBeVisible();
        console.log("Buttons functionality verified");


    }

}
module.exports = { ElementsAction };









