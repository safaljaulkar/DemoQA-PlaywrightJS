import { test, expect } from '@playwright/test';

const { FormAction } = require('../Actions/Form-Action')
const { FormData } = require('../Data/Form-Data')
const { LoginAction } = require('../Actions/Login-Actions')
const { CommonData } = require('../Data/CommonData')

test('Verifying Form Functionality@regression', async ({ page }) => {

  const formAction = new FormAction(page);
  const formData = new FormData(page);
  const loginAction = new LoginAction(page);
  const commonData = new CommonData(page);

  //-----------------------------------------------
  //Launch the application.
  //-----------------------------------------------
  await test.step('Launch the application.', async () => {
    await loginAction.gotoURL(commonData.appURL);
  })


  //--------------------------------------------------------
  //Verify Form functionality
  //--------------------------------------------------------
  await test.step('Verify Form Fuctionality', async () => {
    await formAction.verifyFormFunctionality(commonData.firstname, commonData.lastname, commonData.email, commonData.mobileNumber, formData.subject1, formData.subject2, formData.subject3, commonData.currentAddress);



  })



});

