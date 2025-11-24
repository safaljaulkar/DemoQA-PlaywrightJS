const { expect } = require('@playwright/test')
const { LoginLocator } = require('../BookStoreElement/Login-Locator');
const { ElementsLocator } = require('./Elements-Locator');
const { BookStoreData } = require('../BookStoreElement/BookStore-Data');
const {RegisterLocator}=require('../BookStoreElement/Register-Locator'); 



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
        await this.elementsLocator.locCollapsButton.click();

        console.log("Check Box functionality verified successfully");
        await expect(this.page.locator(this.elementsLocator.locCheckboxTitle)).toBeVisible();
        await expect(this.page.locator(this.elementsLocator.locCheckboxTitle)).toContainText('home');
        await expect(this.page.locator(this.elementsLocator.locCheckboxTitle)).toContainText('desktop');
        await expect(this.page.locator(this.elementsLocator.locCheckboxTitle)).toContainText('documents');
        await expect(this.page.locator(this.elementsLocator.locCheckboxTitle)).toContainText('downloads');
        console.log("Check Box functionality verified with assertion successfully");
        //await this.waitForTimeout(2000);
    }

    //Radio Button Functionality 
    async VerifyRadioButton() {
        await this.elementsLocator.locRadioButton.click();
        await expect(this.page.getByText('Radio Button')).toBeVisible();
        console.log('Radio Button title is visible');
        await this.elementsLocator.locYesRadioButton.click();
        await this.elementsLocator.locImpressiveRadioButton.click();
        await this.elementsLocator.locNoRadio.click();

        console.log("Radio Button functionality verified successfully");

        await expect(this.page.locator('.text-success')).toBeVisible();
        console.log("Success message is visible");
        await expect(this.page.locator('.text-success')).toContainText('Yes');
        await expect(this.page.locator('.text-success')).toContainText('Impressive');
        console.log("Radio Button functionality verified with assertion successfully");
        //await this.waitForTimeout(2000);

    }
    //Web Tables Functionality
    async VerifyWebTables(firstname) {
        await this.elementsLocator.locWebTables.click();
        await expect(this.page.locator(locColumnHeader)).toBeVisible();
        console.log("All header title displays");

        //Add New Record
        await this.elementsLocator.locAddNewRecordButton.click();
        await expect(this.page.locator('#registration-form-modal')).toBeVisible();
        console.log("Registration Form Title is visible");
        await this.registerLocator.locFirstName.fill(firstname);
        await this.registerLocator.locLastName.fill(lastname);
        await this.elementsLocator.locEmail.fill(email);
        await this.page.locator('#age').fill('age');
        await this.page.locator('#salary').fill('salary');
        await this.page.locator('#department').fill('department');
        await this.page.locator('#submit').click();
        console.log("New record added successfully");
        
    }
// Buttons functionality
 async VerifyButtons(){

  await this.elementsLocator.locButtons.click();
  await expect (this.page.elementsLocator.locButtons).toBeVisible();
  console.log ("Buttons title displays");
  await this.elementsLocator.locDoubleClickMeButton.dblclick();
  await this.elementsLocator.locRightClickMeButton.click({ button: 'right' });
  await this.elementsLocator.locClickMe.click();



 }






}
module.exports = { ElementsAction };









