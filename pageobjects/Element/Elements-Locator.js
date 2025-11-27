const { expect } = require('@playwright/test')

class ElementsLocator {

    constructor(page) {

        this.page = page;
        this.locElements = page.getByText('Elements')

        //TextBox locators
        this.locTextBox = page.getByText('Text Box');
        this.locFullName = page.locator("//input[@id='userName']");
        this.locEmail = page.locator('#userEmail');
        this.locCurrentAddress = page.locator('#currentAddress');
        this.locPermanantAddress = page.locator('#permanentAddress')
        this.locSubmit = page.locator('#submit')

        //CheckBox locators
        this.locCheckBox = page.getByText('Check Box');
        this.locCheckboxchecked = page.locator('//span[@class = "rct-checkbox"]');
        this.locExpandButton = page.locator('//button[@class = "rct-option rct-option-expand-all"]');
        this.locCollapsButton = page.locator('//button[@class = "rct-option rct-option-collapse-all"]')

        this.locHomeCheckbox = page.locator('//span[@class="rct-title" and text()="Home"]');
        this.locDesktopCheckbox = page.locator('//span[@class="rct-title" and text()="Desktop"]');
        this.locDocumentCheckbox = page.locator('//span[@class="rct-title" and text()="Documents"]');
        this.locDownloadCheckbox = page.locator('//span[@class="rct-title" and text()="Downloads"]');
        this.locCheckboxResult = page.locator('#result');


        //Radio Button locators
        this.locRadioButton = page.getByText('Radio Button');
        this.locRadioButtonTitle = page.locator('//h1[contains(text(), "Radio Button")]');
        this.locYesRadioButton = page.locator('//label[@for="yesRadio"]');
        this.locImpressiveRadioButton = page.locator('//label[@for="impressiveRadio"]');
        this.locNoRadio = page.locator('//input[@id = "noRadio"]');
        this.locSuccessMessage = page.locator('//span[@class = "text-success"]');

        //Web Tables locators
        this.locWebTables = page.getByText('Web Tables');
        this.locColumnHeader = page.locator("//div[@class = 'rt-tr']");
        this.locAddNewRecordButton = page.locator("//button[@id = 'addNewRecordButton']");
        this.locRegistratioFormTitle = page.locator("//div[contains(text(), 'Registration Form')]");

        this.locAge = page.locator('//input[@placeholder = "Age"]');
        this.locSalary = page.locator("//input[@placeholder = 'Salary']");
        this.locDepartment = page.locator('//input[@placeholder = "Department"]');
        this.locEmail = page.locator('//input[@placeholder = "name@example.com"]');
        this.locRegistrationSubmit = page.locator('//button[contains(text(), "Submit")] ');


        //Buttonslocators
        this.locButtons = page.getByText('Buttons')
        this.locButtonTitle = page.locator("//h1[contains(text(), 'Buttons')]")
        this.locDoubleClickMeButton = page.locator('#doubleClickBtn');
        this.locDoubleClickMessage = page.locator('#doubleClickMessage');
        this.locRightClickMeButton = page.locator('#rightClickBtn');
        this.locRightClickMessage = page.locator('#rightClickMessage');
        this.locClickMe = page.locator("//button[text() ='Click Me']");
        this.locClickMeMessage = page.locator('#dynamicClickMessage');


        //LinksLocator
        this.locLinks = page.locator("//span[text() = 'Links']");
        this.locLinksTitle = page.locator("//h1[text() = 'Links']");
        this.locHomeLink = page.locator("//a[@id = 'simpleLink']");
        this.locHomeDynamicLink = page.locator("//a[@id = 'dynamicLink']");

        //Broken Links -Images
        this.locBrokenLinkImages = page.locator("//span[text() = 'Broken Links - Images']");
        this.locBrokenLinksTitle = page.locator("//h1[text() = 'Broken Links - Images']");
        this.locValidImg = page.locator("(//p[text()='Valid image']/following-sibling::img)[1]");
        this.locBrokenImg = page.locator("(//p[text()='Broken image']/following-sibling::img)[1]");
        this.locValidLink = page.locator("//a[text() = 'Click Here for Valid Link']");
        this.locInvalidLink = page.locator("//a[text() = 'Click Here for Broken Link']")





    }
}
module.exports = { ElementsLocator };