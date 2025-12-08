
import { test, expect } from '@playwright/test';
import { beforeEach } from 'node:test';
import { LoginAction } from '../Actions/Login-Actions';
import { CommonData } from '../Data/CommonData';
import { ElementsAction } from '../Actions/Elements-Action';
//const {ElementsAction} =require('../Actions/Elements-Action');

test.describe('Element Regression Testing', () => {

    let loginAction;
    let commonData;
    let elementData;
    let elementsAction
})

//grouping test//groupname
test.describe('Elements Regression Tests', () => {    //grouping test with test.describe
    // tests go here

    test.beforeEach(async ({ page }) => {

        loginAction = new LoginAction(page);
        commonData = new CommonData(page);
        elementData = new ElementsAction(page);
        elementsAction = new ElementsAction(page);


        //Launching the application
        await loginAction.goToURL(CommonData.appURL);

    })

    test('TextBox functionality @regression', async ({ page }) => {
    await elementsAction.VerifyTextBox(
      commonData.fullName,
      commonData.email,
      commonData.currentAddress,
      commonData.permanantAddeess
    );
  });





});