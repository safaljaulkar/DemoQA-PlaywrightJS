import { test, expect } from '@playwright/test';

const { LoginAction } = require('../pageobjects/actions/Login-Actions')
const { LoginData } = require('../pageobjects/data/Login-Data')
const { RegisterAction } = require('../pageobjects/actions/Register-Action')
const { RegisterData } = require('../pageobjects/data/Register-Data')

test('Verifying Registration Functionality', async ({ page }) => {

  const loginAction = new LoginAction(page);
  const loginData = new LoginData(page);
  const registerAction = new RegisterAction(page);
  const registerData = new RegisterData(page);
 

  //----------------------------------
  // Verify Launch URL
  //----------------------------------

  await test.step('Launch the application.', async () => {
    await loginAction.gotoURL(loginData.appURL);
  })

  //-----------------------------------------------
  //Verify Register new user functionality
  //-----------------------------------------------
  await test.step('Verify Register new user funnctionality.', async () => {
    await registerAction.RegisterNewUser(registerData.firstname, registerData.lastname, registerData.username, registerData.password);


  })


});