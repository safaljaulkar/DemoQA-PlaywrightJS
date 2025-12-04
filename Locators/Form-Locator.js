const { expect } = require('@playwright/test')

class FormLocator {


    constructor(page) {
        this.page = page;

        this.locForms = this.page.locator("//h5[contains(text(), 'Forms')]");
        this.locPracticeForm = this.page.locator("//span[contains(text(), 'Practice Form')]");
        this.locPracticeFormTitle = this.page.locator("//h1[contains(text(), 'Practice Form')]");

        this.locFormHeading = page.locator("//h5[contains(text(), 'Student Registration Form')]")
        this.locGender = page.locator("//label[text() = 'Male']")
        this.locEmaild = page.locator("//input[@placeholder = 'name@example.com']")
        this.locMobileNo = page.locator("//input[@placeholder = 'Mobile Number']")

        this.locCalendar = page.locator("//input[@id = 'dateOfBirthInput']")
        this.locCalendarYear = page.locator("//select[@class = 'react-datepicker__year-select']")
        this.locCalendarMonth = page.locator("//select[@class = 'react-datepicker__month-select']")
        this.locCalendarDate = page.locator("//div[@class='react-datepicker__month'] //div[text() ='28']")
        this.locSubjects = page.locator("//input[@id = 'subjectsInput']")
        this.locHobbies = page.getByText('Sports')
        this.locChooseFile = page.locator("#uploadPicture")
        this.locCurrentAddress = page.locator("#currentAddress")
        this.locStateAndCityDropdown = page.locator("//div[@class = ' css-2b097c-container']//div[@class = ' css-tlfecz-indicatorContainer']")
        //this.locStateAndCityDropdown = page.locator('.css-19bqh2r')
  this.locSelectCity = page.locator('.css-tlfecz-indicatorContainer > .css-19bqh2r');

        this.locSubmit = page.locator("#submit")
        this.locSubmittingFormTitle = page.getByText('Thanks for submitting the form')
        this.locStudentNametitle = page.getByText('Student Name')
        this.locStudentEmailtitle = page.getByText('Student Email')
        this.locStudentGendertitle = page.getByText('Gender')
        this.locStudentMobiletitle = page.getByText('Mobile')
        this.locStudentDOBtitle = page.getByText('Date of Birth')
        this.locStudentSubjecttitle = page.getByText('Subjects')
        this.locStudentHobbiestitle = page.getByText('Hobbies')
        this.locStudentPicturetitle = page.getByText('Picture')
        this.locStudentAddresstitle = page.getByText('Address')










    }
}
module.exports = { FormLocator };