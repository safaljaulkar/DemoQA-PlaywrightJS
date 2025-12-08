// @ts-check
const { defineConfig } = require('@playwright/test');
const path = require('path');

const formatDateForReport = () => {
  const now = new Date();
  const day = now.toLocaleString('en-US', { day: '2-digit' });
  const month = now.toLocaleString('en-US', { month: 'short' });
  const year = now.getFullYear();
  const hour = now.getHours();
  const minute = now.getMinutes().toString().padStart(2, '0');
  const ampm = hour >= 12 ? 'PM' : 'AM';
  const hour12 = (hour % 12 || 12).toString().padStart(2, '0');
  return `report_${day}${month}${year}_${hour12}-${minute}${ampm}`;
};
const reportFolderName = formatDateForReport();
const baseReportFolder = `Playwright_Reports/${reportFolderName}`;


module.exports = defineConfig({
  timeout: 600 * 1000,
 reporter: [
    ['html', { outputFolder: `${baseReportFolder}/html-report`, open: 'never' }]
  ],
   testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: false,
/* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://localhost:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
    // i added this
    baseURL: 'https://192.168.22.225/now',
    ignoreHTTPSErrors: true, // ✅ bypass self-signed cert
    headless: false,
  },
  projects: [
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        headless: false,
        screenshot: 'only-on-failure', // on, off
        trace: 'on',
        viewport: null,
        launchOptions: {
          args: ['--start-maximized'],
        },
      },
    },
    // Additional projects (firefox, safari) can be configured here
  ],
});