import { test, expect } from '@playwright/test';
//import { RegisterData } from '../pageobjects/data/Register-Data';

const { LoginAction } = require('../pageobjects/BookStoreElement/Login-Actions');
const { BookStoreData } = require('../pageobjects/BookStoreElement/BookStore-Data');




test('Verifying Login Functionality', async ({ page }) => {

  const loginAction = new LoginAction(page);
  const bookStoreData = new BookStoreData(page);


  //----------------------------------
  // Verify Launch URL
  //----------------------------------
  await test.step('Launch the application.', async () => {
    await loginAction.gotoURL(bookStoreData.appURL);

  })

  //-----------------------------------------------
  //Verify Login with correcct credentials
  //-----------------------------------------------
  await test.step('Verify Login with correct Credential.', async () => {
    await loginAction.LoginToApplication(bookStoreData.username, bookStoreData.password, bookStoreData.profileURL, bookStoreData.verifyuser);

  })


  //Verify Logout Application
  await test.step('Verify Logout functionality.', async () => {
    await loginAction.LogoutFromApplication();

  })


  //await test.step('Verif login with correct username and password.', async () => {
  //await loginAction.LoginToApplication(loginData.validUsername, loginData.validPassword);

  //  })






});