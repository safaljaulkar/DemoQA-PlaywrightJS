import { test, expect } from '@playwright/test';


const { LoginAction } = require('../pageobjects/actions/Login-Actions')
const { LoginData } = require('../pageobjects/data/Login-Data')
const { RegisterData } = require('../pageobjects/data/Register-Data')
const {ElementData} =require('../pageobjects/data/Elements-Data')
const{ElementAction} = require('../pageobjects/actions/Elements-Action')

test('Verifying Login Functionality', async ({ page }) => {


  const loginAction = new LoginAction(page);
  const loginData = new LoginData(page);
  const registerData = new RegisterData(page);
  const elementData = new ElementData(page);
const elementAction = new ElementAction(page);



  await test.step('Launch the application.', async () => {
    await loginAction.gotoURL(loginData.appURL);

  })

  await test.step('Verify Login with correct Credential.', async () => {
    await loginAction.LoginToApplication(registerData.username, registerData.password, loginData.profileURL, loginData.verifyuser);

  })
     await test.step('Verify Text bos funationality.', async () => {
    await elementAction.VerifyTextBox(elementData.fullName,elementData.email,elementData.currentAddress,elementData.permanantAddeess);





     })


});