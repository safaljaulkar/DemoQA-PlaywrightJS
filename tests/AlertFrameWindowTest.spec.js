
import { test, expect } from '@playwright/test';

const { AlertFrameWindowAction } = require('../Actions/AlertFrameWindow-Action');
const { LoginAction } = require("../Actions/Login-Actions");
const { CommonData } = require("../Data/CommonData");

test('Verify AlertFrameWindow functionality@regression', async ({ page }) => {


  //object creation
  const alertFrameWindowAction = new AlertFrameWindowAction(page);
  const loginAction = new LoginAction(page);
  const commonData = new CommonData(page);



  //-----------------------------------------------
  //Launch the application.
  //-----------------------------------------------
  await test.step('Launch the application.', async () => {
    await loginAction.gotoURL(commonData.appURL);


  })

  await test.step('Verify AlertFrameWindow', async () => {
    await alertFrameWindowAction.VerifyAlertFrameWindow();


  })


});
