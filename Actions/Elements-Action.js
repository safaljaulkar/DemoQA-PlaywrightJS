const { expect } = require('@playwright/test')
const { LoginLocator } = require('../Locators/Login-Locator');
const { ElementsLocator } = require('../Locators/Elements-Locator');
const { BookStoreData } = require('../Data/BookStore-Data');
const { RegisterLocator } = require('../Locators/Register-Locator');
const {CommonLocator} = require('../Locators/Common-Locator')


class ElementsAction {
    constructor(page) {

        this.page = page;
        this.loginLocator = new LoginLocator(page);
        this.elementsLocator = new ElementsLocator(page);
        this.bookStoreData = new BookStoreData(page);
        this.registerLocator = new RegisterLocator(page);
        this.commonLocator = new CommonLocator(page);
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
        await this.commonLocator.locSubmit.click();

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
    async VerifyWebTables(firstname, lastname, email, age, salary, department) {
        await this.elementsLocator.locWebTables.click();
        await expect(this.elementsLocator.locColumnHeader).toBeVisible();

        //Add New Record
        await this.elementsLocator.locAddNewRecordButton.click();
        await expect(this.elementsLocator.locRegistratioFormTitle).toBeVisible();
        await this.registerLocator.locFirstName.fill(firstname);
        await this.registerLocator.locLastName.fill(lastname);
        await this.elementsLocator.locEmail.fill(email);
        await this.elementsLocator.locAge.fill(age);
        await this.elementsLocator.locSalary.fill(salary);
        await this.elementsLocator.locDepartment.fill(department);
        await this.elementsLocator.locRegistrationSubmit.click();
        console.log("New record added successfully");
        console.log("WebTable functionality verified with assertion successfully");

    }
    // Buttons functionality
    async VerifyButtons() {
        await this.elementsLocator.locButtons.click();
        await expect(this.elementsLocator.locButtonTitle).toBeVisible();
        await this.elementsLocator.locDoubleClickMeButton.dblclick();
        await expect(this.elementsLocator.locDoubleClickMessage).toBeVisible();
        await this.elementsLocator.locRightClickMeButton.click({ button: 'right' });
        await expect(this.elementsLocator.locRightClickMessage).toBeVisible();
        await this.elementsLocator.locClickMe.click();
        await expect(this.elementsLocator.locClickMeMessage).toBeVisible();
        console.log("Buttons functionality verified with assertion successfully");

    }

    // Links functionality
    async VerifyLinks() {
        await this.elementsLocator.locLinks.click();
        await this.elementsLocator.locLinksTitle.click();
        await this.elementsLocator.locHomeLink.click();
        await this.elementsLocator.locHomeDynamicLink.click();
        console.log("Links functionality verified with assertion successfully");

    }
    /*
    //BrokenLink-Images functionality

    async VerifyBrokenLinkImages() {
        await this.elementsLocator.locBrokenLinkImages.click();
        await expect(this.elementsLocator.locBrokenLinksTitle).toBeVisible();
        await expect(this.elementsLocator.locValidImg).toBeVisible();

        //Borken Image
        const imgLocator = this.elementsLocator.locBrokenImg;  //store the locator in imgLocator
        const isBroken = await imgLocator.evaluate(img => img.naturalWidth === 0);
        //Checks if image failed to load 
        //fail to load - naturalWidth == 0, load correctly-naturalWidth > 0

        if (isBroken) {
            console.log("Image is broken");
        } else {
            console.log("Image is valid");
        }

        await this.elementsLocator.locValidLink.click();

        // Broken link
        const brokenURL = await this.elementsLocator.locInvalidLink.getAttribute('href');
        const brokenResponse = await this.page.request.get(brokenURL);
        expect(brokenResponse.status()).not.toBe(500);
        console.log("Broken functionality verified ")
        return isBroken;
    }
*/
 
//Verify Upload and Download functionality

async  VerifyUploadDownload(){
 await this.elementsLocator.locUploadDownload.click();
 await expect (this.elementsLocator.locUploadDownloadTitle).toBeVisible();
 await this.elementsLocator.locDownloadButton.click();


}

}
module.exports = { ElementsAction };









