import { test, expect } from '@playwright/test';


const { LoginAction } = require('../pageobjects/Book Store Element/Login-Actions')
const { BookStoreData } = require('../pageobjects/Book Store Element/BookStore-Data')
const { ElementData } = require('../pageobjects/Elements/Elements-Data')
const { TextBoxAction } = require('../pageobjects/Elements/TextBox-Action')


test('Verifying Elements Functionality', async ({ page }) => {


  const loginAction = new LoginAction(page);
  const bookStoreData = new BookStoreData(page);
  const elementData = new ElementData(page);
  const textBoxAction = new TextBoxAction(page);


  //-----------------------------------------------
  //Launch the application.
  //-----------------------------------------------
  await test.step('Launch the application.', async () => {
    await loginAction.gotoURL(bookStoreData.appURL);
  })

  //-----------------------------------------------
  //Verify Text box funationality
  //-----------------------------------------------
  await test.step('Verify Text box funationality.', async () => {
    await textBoxAction.VerifyTextBox(elementData.fullName, elementData.email, elementData.currentAddress, elementData.permanantAddeess);
  })


  //-----------------------------------------------
  //Verify Check box funationality
  //-----------------------------------------------
  await test.step('Verify check box funationality.', async () => {
    await textBoxAction.VerifyCheckBox();
  })




});