import { test, expect } from '@playwright/test';


const { LoginAction } = require('../pageobjects/BookStoreElement/Login-Actions')
const { BookStoreData } = require('../pageobjects/BookStoreElement/BookStore-Data')
const { ElementData } = require('../pageobjects/Element/Elements-Data')
const { ElementsAction } = require('../pageobjects/Element/Elements-Action')


test('Verifying Elements Functionality', async ({ page }) => {


  const loginAction = new LoginAction(page);
  const bookStoreData = new BookStoreData(page);
  const elementData = new ElementData(page);
  const elementsAction = new ElementsAction(page);


  //-----------------------------------------------
  //Launch the application.
  //-----------------------------------------------
  await test.step('Launch the application.', async () => {
    await loginAction.gotoURL(bookStoreData.appURL);
  })

  //-----------------------------------------------
  //Verify Text box funationality
  //-----------------------------------------------
  await test.step('Verify Text box funationality.', async () => {
    await elementsAction.VerifyTextBox(elementData.fullName, elementData.email, elementData.currentAddress, elementData.permanantAddeess);
  })

  //----------------------------------------------
  //Verify Check box funationality
  //-----------------------------------------------
  await test.step('Verify check box funationality.', async () => {
    await elementsAction.VerifyCheckBox();
  })

  //----------------------------------------------
  //Verify Radio Button funationality
  //-----------------------------------------------
  await test.step('Verify Radio Button funationality.', async () => {
    await elementsAction.VerifyRadioButton();
  })

  //----------------------------------------------
  //Verify Web Table funationality
  //-----------------------------------------------
  await test.step('Verify Web Table funationality.', async () => {
    await elementsAction.VerifyWebTables(bookStoreData.firstname, bookStoreData.lastname, elementData.email, elementData.age, elementData.salary, elementData.department);
  })

  //-----------------------------------------------
  //Verify Buttons Functionality
  //-----------------------------------------------
  await test.step('Verify buttons funationality.', async () => {
    await elementsAction.VerifyButtons();
  })

  //-----------------------------------------------
  //Verify links Functionality
  //-----------------------------------------------
  await test.step('Verify links funationality.', async () => {
    await elementsAction.VerifyLinks();
  })

  //-------------------------------------------
  //Verify Broken links Image functionality
  //-------------------------------------------
  await test.step('Verify broken link image functionality', async () => {
    await elementsAction.VerifyBrokenLinkImages();
  })





});


