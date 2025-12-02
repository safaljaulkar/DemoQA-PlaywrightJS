import { test, expect } from '@playwright/test';

const { FormAction } = require('../pageobjects/Forms/Form-Action')
const { BookStoreData } = require('../pageobjects/BookStoreElement/BookStore-Data')
const { FormData } = require('../pageobjects/Forms/Form-Data')
const { LoginAction } = require('../pageobjects/BookStoreElement/Login-Actions')

test('Verifying Form Functionality', async ({ page }) => {

  const formAction = new FormAction(page);
  const bookStoreData = new BookStoreData(page);
  const formData = new FormData(page);
  const loginAction = new LoginAction(page);


  //-----------------------------------------------
  //Launch the application.
  //-----------------------------------------------
  await test.step('Launch the application.', async () => {
    await loginAction.gotoURL(bookStoreData.appURL);
  })


  //--------------------------------------------------------
  //Verify Form functionality
  //--------------------------------------------------------
  await test.step('Verify Form Fuctionality', async () => {
    await formAction.verifyFormFunctionality(bookStoreData.firstname, bookStoreData.lastname, formData.emailId, formData.mobileNumber, formData.subject1, formData.subject2, formData.subject3, formData.selectedFile, formData.CurrentAddress);



  })



});

