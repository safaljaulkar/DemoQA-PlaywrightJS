const { expect } = require('@playwright/test')

const { RegisterLocator } = require('../Locators/Register-Locator')
const { FormLocator } = require('../Locators/Form-Locator')
const { LoginLocator } = require('../Locators/Login-Locator')

class FormAction {
        constructor(page) {
                this.page = page;
                this.formLocator = new FormLocator(page);
                this.registerLocator = new RegisterLocator(page);
                this.loginLocator = new LoginLocator(page);

        }
        //Launch Application
        async gotoURL(str_URLName) {
                await this.page.goto(str_URLName);
                console.log("hitting the URL: " + str_URLName);
                await expect(this.loginLocator.locToolsQATitle).toBeVisible();
                console.log("Title Verified");
        }


        async verifyFormFunctionality(firstname, lastname, emailId, mobileNumber, subject1, subject2, subject3, selectedFile, CurrentAddress) {

                await this.formLocator.locForms.click();
                await this.formLocator.locPracticeForm.click();

                await expect(this.formLocator.locPracticeFormTitle).toBeVisible();
                await expect(this.formLocator.locFormHeading).toBeVisible();
                await this.registerLocator.locFirstName.fill(firstname);
                await this.registerLocator.locLastName.fill(lastname);
                await this.formLocator.locEmaild.fill(emailId);
                await this.formLocator.locGender.click();
                await this.formLocator.locMobileNo.fill(mobileNumber)
                await this.formLocator.locCalendar.click();

                //Date Selection
                await this.formLocator.locCalendarYear.selectOption({ value: '1997' });
                await this.formLocator.locCalendarMonth.selectOption({ label: 'September' });
                await this.formLocator.locCalendarDate.click();

                //Subject selection
                await this.formLocator.locSubjects.type(subject1);
                await this.page.keyboard.press('Enter');
                await this.formLocator.locSubjects.type(subject2);
                await this.page.keyboard.press('Enter');
                await this.formLocator.locSubjects.type(subject3);
                await this.page.keyboard.press('Enter');

                await this.formLocator.locHobbies.click();
                console.log("hobbies selected ")
              //  await this.formLocator.locChooseFile.SetInputFiles('pageobjects/Forms/pexels-lilartsy-1213447.jpg')

                //  console.log("file selected  ")
                await this.formLocator.locCurrentAddress.fill(CurrentAddress)
                await this.formLocator.locStateAndCityDropdown.selectOption("NCR")
                await this.formLocator.locSubmit.click();





        }
}

module.exports = { FormAction };