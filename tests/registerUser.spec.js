import { test, expect } from '@playwright/test';

const { LoginAction } = require('../Actions/Login-Actions')
const { RegisterAction } = require('../Actions/Register-Action')
const {CommonData} = require ('../Data/CommonData')



test('Verifying Registration Functionality', async ({ page }) => {

  const loginAction = new LoginAction(page);
  const registerAction = new RegisterAction(page);
  const commonData = new CommonData (page);

  //----------------------------------
  // Verify Launch URL
  //----------------------------------

  await test.step('Launch the application.', async () => {
    await loginAction.gotoURL(commonData.appURL);
  })

  //-----------------------------------------------
  //Verify Register new user functionality
  //-----------------------------------------------
  await test.step('Verify Register new user funnctionality.', async () => {
    await registerAction.RegisterNewUser(commonData.firstname, commonData.lastname, commonData.username, commonData.password);


  })


});