// @ts-check
const { defineConfig, devices } = require('@playwright/test');
const CustomHTMLReporter = require('./Utils/custom-html-reporter');

// Playwright configuration
module.exports = defineConfig({

  testDir: './tests',    //testfolder

  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,

  // ----------- REPORTERS -----------
  reporter: [
    ['list'],                                //Terminal output
    ['./utils/custom-html-reporter.js'],     //Date-Time HTML report
    ['html']                                 //Playwright default HTML report
  ],

  //------------SCREENSHOT-------------------------
  use: {
    headless: true,
    trace: 'on',
    screenshot: 'only-on-failure', //captures screenshot automatically on failed test
  },
//------------ --BROWSER------------------------
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] }
    }
  ]
});