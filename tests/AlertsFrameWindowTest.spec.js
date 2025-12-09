import { test, expect } from '@playwright/test';

const { LoginAction } = require('../Actions/Login-Actions')
const { CommonData } = require('../Data/CommonData')
const { AlertFrameWindowAction} = require ('../Actions/AlertFrameWindow-Action');

test('Verifying Form Functionality@regression', async ({ page }) => {

  
  const loginAction = new LoginAction(page);
  const commonData = new CommonData(page);
  const alertFrameWindowAction = new AlertFrameWindowAction(page);

  //-----------------------------------------------
  //Launch the application.
  //-----------------------------------------------
  await test.step('Launch the application.', async () => {
    await loginAction.gotoURL(commonData.appURL);
  })


//Verify VerifyBrowserWindow
 await test.step('Verify BrowserWindow', async () => {
    await alertFrameWindowAction.VerifyBrowserWindow();


  })
/*
//Verify VerifyAlerts
  await test.step('Verify alerts', async () => {
    await alertFrameWindowAction.VerifyAlerts();

  })
 */


});
