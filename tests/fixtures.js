const { test: base, expect } = require('@playwright/test');

const { BasePage } = require('./pages/BasePage');
const { CreditCardDemoPage } = require('./pages/CreditCardDemoPage');

/**
 * Custom Playwright fixtures for page objects
 * Extend this as you add more pages to the framework
 */
export const test = base.extend({
  basePage: async ({ page }, use) => {
    const basePage = new BasePage(page);
    await use(basePage);
  },
  creditCardDemoPage: async ({ page }, use) => {
    const creditCardDemoPage = new CreditCardDemoPage(page);
    await use(creditCardDemoPage);
  },
  
  // Add more page fixtures here as you expand:
  // loginPage: async ({ page }, use) => {
  //   const loginPage = new LoginPage(page);
  //   await use(loginPage);
  // },
  
  // dashboardPage: async ({ page }, use) => {
  //   const dashboardPage = new DashboardPage(page);
  //   await use(dashboardPage);
  // },
});

module.exports = { test, expect };