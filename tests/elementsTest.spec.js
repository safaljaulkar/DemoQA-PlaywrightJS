import { test, expect } from '@playwright/test';


const { LoginAction } = require('../Actions/Login-Actions')
const { BookStoreData } = require('../Data/BookStore-Data')
const { ElementData } = require('../Data/Elements-Data')
const { ElementsAction } = require('../Actions/Elements-Action')
const{CommonData} = require('../Data/CommonData')



test('Elements@regression', async ({ page }) => {


  const loginAction = new LoginAction(page);
  const bookStoreData = new BookStoreData(page);
  const elementData = new ElementData(page);
  const elementsAction = new ElementsAction(page);
   const commonData = new CommonData(page);

  //-----------------------------------------------
  //Launch the application.
  //-----------------------------------------------
  await test.step('Launch the application.', async () => {
    await loginAction.gotoURL(commonData.appURL);
  })

  //-----------------------------------------------
  //Verify Text box funationality
  //-----------------------------------------------
  await test.step('Verify Text box funationality.', async () => {
    await elementsAction.VerifyTextBox(commonData.fullName, commonData.email, commonData.currentAddress, commonData.permanantAddeess);
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
    await elementsAction.VerifyWebTables(commonData.firstname, commonData.lastname, commonData.email, elementData.age, elementData.salary, elementData.department);
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


