// @ts-check
const { defineConfig, devices } = require('@playwright/test');

/**
 * @see https://playwright.dev/docs/test-configuration
 */
module.exports = defineConfig({
  testDir: './tests/CreditCardDemoPageTests',
  /* Run tests one by one for easier following */
  fullyParallel: false,
  /* No retries - see failures immediately */
  retries: 0,
  /* Use single worker for simplicity */
  workers: 1,
  /* Global test timeout */
  timeout: 60000,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['html']
  ],
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'https://kronograph.cambridge-intelligence.com',
    
    /* Take screenshot */
    screenshot: 'on', 
    
    /* Global timeout for each action */
    actionTimeout: 30000,
    
    /* Global timeout for navigation */
    navigationTimeout: 60000,
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { 
        ...devices['Desktop Chrome'],
        viewport: { width: 1280, height: 720 }
      },
    },

    {
      name: 'firefox',
      use: { 
        ...devices['Desktop Firefox'],
        viewport: { width: 1280, height: 720 }
      },
    },
  ],
});