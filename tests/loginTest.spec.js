import { test, expect } from '@playwright/test';
//import { RegisterData } from '../pageobjects/data/Register-Data';

const { LoginAction } = require('../pageobjects/actions/Login-Actions')
const { LoginData } = require('../pageobjects/data/Login-Data')
const { RegisterData } = require('../pageobjects/data/Register-Data')



test('Verifying Login Functionality', async ({ page }) => {


  const loginAction = new LoginAction(page);
  const loginData = new LoginData(page);
  const registerData = new RegisterData(page);


  //----------------------------------
  // Verify Launch URL
  //----------------------------------
  await test.step('Launch the application.', async () => {
    await loginAction.gotoURL(loginData.appURL);

  })

  //-----------------------------------------------
  //Verify Login with correcct credentials
  //-----------------------------------------------
  await test.step('Verify Login with correct Credential.', async () => {
    await loginAction.LoginToApplication(registerData.username, registerData.password, loginData.profileURL, loginData.verifyuser);

  })


   //Verify Logout Application
  await test.step('Verify Logout functionality.', async()=>{
  await loginAction.LogoutFromApplication();
  
   })





  //await test.step('Verif login with correct username and password.', async () => {
  //await loginAction.LoginToApplication(loginData.validUsername, loginData.validPassword);

  //  })






});