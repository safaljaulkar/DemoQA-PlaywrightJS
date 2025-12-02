import { test, expect } from '@playwright/test';

const { LoginAction } = require('../Actions/Login-Actions')
const { BookStoreData } = require('../Data/BookStore-Data')
const { RegisterAction } = require('../Actions/Register-Action')

test('Verifying Registration Functionality', async ({ page }) => {

  const loginAction = new LoginAction(page);
  const bookStoreData = new BookStoreData(page);
  const registerAction = new RegisterAction(page);



  //----------------------------------
  // Verify Launch URL
  //----------------------------------

  await test.step('Launch the application.', async () => {
    await loginAction.gotoURL(bookStoreData.appURL);
  })

  //-----------------------------------------------
  //Verify Register new user functionality
  //-----------------------------------------------
  await test.step('Verify Register new user funnctionality.', async () => {
    await registerAction.RegisterNewUser(bookStoreData.firstname, bookStoreData.lastname, bookStoreData.username, bookStoreData.password);


  })


});