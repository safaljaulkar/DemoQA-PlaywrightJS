import { test, expect } from '@playwright/test';

const { LoginAction } = require('../Actions/Login-Actions');
const { BookStoreData } = require('../Data/BookStore-Data');
const{CommonData} = require('../Data/CommonData')



test('Verifying Login Functionality@sanity', async ({ page }) => {

  const loginAction = new LoginAction(page);
  const bookStoreData = new BookStoreData(page);
  const commonData = new CommonData(page);

  //----------------------------------
  // Verify Launch URL
  //----------------------------------
  await test.step('Launch the application.', async () => {
    await loginAction.gotoURL(commonData.appURL);

  })

  //-----------------------------------------------
  //Verify Login with correcct credentials
  //-----------------------------------------------
  await test.step('Verify Login with correct Credential.', async () => {
    await loginAction.LoginToApplication(commonData.username, commonData.password, bookStoreData.profileURL, bookStoreData.verifyuser);

  })


  //Verify Logout Application
  await test.step('Verify Logout functionality.', async () => {
    await loginAction.LogoutFromApplication();

  })


  //await test.step('Verif login with correct username and password.', async () => {
  //await loginAction.LoginToApplication(loginData.validUsername, loginData.validPassword);

  //  })






});