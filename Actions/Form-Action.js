const { expect } = require('@playwright/test')

const { RegisterLocator } = require('../Locators/Register-Locator')
const { FormLocator } = require('../Locators/Form-Locator')
const { LoginLocator } = require('../Locators/Login-Locator')
const { CommonLocator } = require('../Locators/Common-Locator')

class FormAction {

        constructor(page) {
                this.page = page;
                this.formLocator = new FormLocator(page);
                this.registerLocator = new RegisterLocator(page);
                this.loginLocator = new LoginLocator(page);
                this.commonLocator = new CommonLocator(page);

        }

        //Launch Application
        async gotoURL(str_URLName) {
                await this.page.goto(str_URLName);
                console.log("hitting the URL: " + str_URLName);
                await expect(this.loginLocator.locToolsQATitle).toBeVisible();
                console.log("Title Verified");
        }


        async verifyFormFunctionality(firstname, lastname, emailId, mobileNumber, subject1, subject2, subject3, CurrentAddress) {

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
                await this.page.waitForTimeout(1000); // 1 second
                await this.formLocator.locSubjects.type(subject2);
                await this.page.keyboard.press('Enter');
                await this.page.waitForTimeout(1000); // 1 second
                await this.formLocator.locSubjects.type(subject3);
                await this.page.keyboard.press('Enter');

                await this.page.waitForTimeout(1000); // 1 second
                await this.formLocator.locHobbies.click();
                // Scroll and click checkbox safely
                // await this.formLocator.locHobbies.scrollIntoViewIfNeeded();
                //  await this.formLocator.locHobbies.click({ force: true });

                await this.formLocator.locChooseFile.setInputFiles('Upload files\\pexels-lilartsy.jpg');    //file chooser
                await this.formLocator.locCurrentAddress.fill(CurrentAddress)


                //dropdown selection
                //We can also use '.selectOptions' method but here dropdown options are not visible.

                await this.formLocator.locDropdownClick.first().click();    //here clicking the dropdown first to open state dropdown
                await this.page.waitForTimeout(1000); // 1 second
                await this.page.getByText('NCR', { exact: true }).click();  //selecting state as NCR and to ensure exact click, used exact: true
                await this.page.waitForTimeout(1000); // 1 second
                await this.formLocator.locStateAndDropdown.click();       //pointing city dropdown arrow
                await this.page.waitForTimeout(1000); // 1 second
                await this.page.getByText('Delhi', { exact: true }).click();    //selecting city as Delhi and to ensure exact click, used exact: true


                await this.commonLocator.locSubmit.click();
                console.log('Form submitted successfully')
                //Asssertion
                await expect(this.formLocator.locSubmittingFormTitle).toBeVisible();
                await expect(this.formLocator.locStudentNametitle).toContainText("Safal Jaulkar");
                await expect(this.formLocator.locStudentEmailtitle).toContainText('safalj@yopmail.com');
                await expect(this.formLocator.locStudentGendertitle).toContainText('Male');
                await expect(this.formLocator.locStudentMobiletitle).toContainText('9895656544');
                await expect(this.formLocator.locStudentDOBtitle).toContainText('28 September,1997');
                await expect(this.formLocator.locStudentSubjecttitle).toContainText('Maths, English, Computer Science');
                await expect(this.formLocator.locStudentHobbiestitle).toContainText('Sports');
                await expect(this.formLocator.locStudentPicturetitle).toContainText('pexels-lilartsy.jpg');
                await expect(this.formLocator.locStudentAddresstitle).toContainText('Great nag road, Newyork');
                await expect(this.formLocator.locStateAndCity).toContainText('NCR Delhi');


                console.log('Verified form functionality with assertion')

                await this.formLocator.locCloseButton.click();



        }
}

module.exports = { FormAction };



