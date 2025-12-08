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
        this.locDropdownClick = page.locator("(//*[@class = 'css-19bqh2r'])[5]")
        this.locStateAndDropdown = page.locator("(//*[@class = 'css-19bqh2r'])[6]")

        this.locSubmit = page.locator("#submit")

        this.locSubmittingFormTitle = page.locator("//div[@id = 'example-modal-sizes-title-lg']");
        this.locStudentNametitle = page.locator("//td[contains(text(), 'Safal Jaulkar')]");
        this.locStudentEmailtitle = page.locator("//td[contains(text(), 'safalj@yopmail.com')]");
        this.locStudentGendertitle = page.locator("//td[contains(text(), 'Male')]");
        this.locStudentMobiletitle = page.locator("//td[contains(text(), '9895656544')]");
        this.locStudentDOBtitle = page.locator("//td[contains(text(), '28 September,1997')]")
        this.locStudentSubjecttitle = page.locator("//td[contains(text(), 'Maths, English, Computer Science')]")
        this.locStudentHobbiestitle = page.locator("//td[contains(text(), 'Sports')]")
        this.locStudentPicturetitle = page.locator("//td[contains(text(), 'pexels-lilartsy.jpg')]")
        this.locStudentAddresstitle = page.locator("//td[contains(text(), 'Great nag road, Newyork')]")
        this.locStateAndCity = page.locator("//td[contains(text(), 'NCR Delhi')]")

        this.locCloseButton = page.locator("//button[@id =  'closeLargeModal']")








    }
}
module.exports = { FormLocator };