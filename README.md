# KronoGraph Credit Card Fraud Demo - Playwright Test Framework# KronoGraph Credit Card Fraud Demo - Playwright Test Framework



This repository contains a **clean and minimal** Playwright test framework for testing the KronoGraph Credit Card Fraud Detection demo website.This repository contains a **clean and minimal** Playwright test framework for testing the KronoGraph Credit Card Fraud Detection demo website.



🔗 **Demo Website**: [KronoGraph Credit Card Fraud Detection](https://cambridge-intelligence.com/keylines/demos/credit-card-fraud-neo4j/)  🔗 **Demo Website**: [KronoGraph Credit Card Fraud Detection](https://cambridge-intelligence.com/keylines/demos/credit-card-fraud-neo4j/)  

📊 **About**: Cambridge Intelligence's KronoGraph Credit Card Fraud Detection demo website showcases interactive graph visualization for fraud detection analysis.📊 **About**: Cambridge Intelligence's KronoGraph Credit Card Fraud Detection demo website showcases interactive graph visualization for fraud detection analysis.



## 🏗️ Project Structure## 🏗️ Project Structure



``````

KronoGraph_Credit Card Fraud/KronoGraph_Credit Card Fraud/

├── tests/├── tests/

│   ├── CreditCardDemoPageTests/│   ├── CreditCardDemoPageTests/

│   │   ├── CreditCardDemoPage.spec.js      # Basic page load test│   │   ├── CreditCardDemoPage.spec.js      # Basic page load test

│   │   └── InteractiveFiltering.spec.js    # Interactive checkbox filtering tests│   │   └── InteractiveFiltering.spec.js    # Interactive checkbox filtering tests

│   ├── pages/│   ├── pages/

│   │   ├── BasePage.js                     # Minimal base class (navigate, screenshot)│   │   ├── BasePage.js                     # Minimal base class (navigate, screenshot)

│   │   └── CreditCardDemoPage.js           # Page object with locators & methods│   │   └── CreditCardDemoPage.js           # Page object with locators & methods

│   └── fixtures.js                         # Page object fixtures for scaling│   └── fixtures.js                         # Page object fixtures for scaling

├── test-results/                           # Auto-generated screenshots & reports├── test-results/                           # Auto-generated screenshots & reports

├── package.json                            # Project dependencies├── package.json                            # Project dependencies

├── playwright.config.js                    # Clean Playwright configuration├── playwright.config.js                    # Clean Playwright configuration

└── README.md                               # This file└── README.md                               # This file

``````



## 🚀 Getting Started## 🚀 Getting Started



### Prerequisites### Prerequisites



- Node.js (version 18 or higher)- Node.js (version 18 or higher)

- npm or yarn package manager- npm or yarn package manager



### Installation### Installation



1. **Navigate to the project directory:**1. **Navigate to the project directory:**

   ```bash   ```bash

   cd "d:\\Pranita\\Testing\\KronoGraph_Credit Card Fraud"   cd "d:\\Pranita\\Testing\\KronoGraph_Credit Card Fraud"

   ```   ```



2. **Install dependencies:**2. **Install dependencies:**

   ```bash   ```bash

   npm install   npm install

   ```   ```



3. **Install Playwright browsers:**3. **Install Playwright browsers:**

   ```bash   ```bash

   npm run install:browsers   npm run install:browsers

   ```   ```



## 🧪 Running Tests## 🧪 Running Tests



### Run the Test### Run the Test

```bash```bash

npm testnpm test

``````



### Run Test in Headed Mode (visible browser)### Run Test in Headed Mode (visible browser)

```bash```bash

npm run test:headednpm run test:headed

``````



### View Test Report### View Test Report

```bash```bash

npm run test:reportnpm run test:report

``````



## 📝 Test Overview## 📝 Test Overview



### 1. Basic Page Load Test: `CreditCardDemoPage.spec.js`### 1. Basic Page Load Test: `CreditCardDemoPage.spec.js`

**"should load the credit card demo page successfully"****"should load the credit card demo page successfully"**



This test performs:This test performs:

- **Navigate to Demo**: Opens the KronoGraph credit card fraud demo page- **Navigate to Demo**: Opens the KronoGraph credit card fraud demo page

- **Verify Title**: Validates the page title contains "KronoGraph"  - **Verify Title**: Validates the page title contains "KronoGraph"  

- **Verify Graph**: Ensures the graph visualization is visible- **Verify Graph**: Ensures the graph visualization is visible

- **Auto Screenshot**: Playwright automatically captures screenshots- **Auto Screenshot**: Playwright automatically captures screenshots



### 2. Interactive Filtering Tests: `InteractiveFiltering.spec.js`### 2. Interactive Filtering Tests: `InteractiveFiltering.spec.js`

**"should filter transactions by disputed/undisputed status"****"should filter transactions by disputed/undisputed status"**



These tests perform:These tests perform:

- **Checkbox Interaction**: Test disputed/undisputed transaction filtering- **Checkbox Interaction**: Test disputed/undisputed transaction filtering

- **Visual Verification**: Uses `toHaveScreenshot()` for automatic visual regression testing- **Visual Verification**: Uses `toHaveScreenshot()` for automatic visual regression testing

- **State Validation**: Verifies checkbox states and graph updates- **State Validation**: Verifies checkbox states and graph updates

- **Cross-browser Testing**: Runs on Chrome and Firefox with visual snapshots- **Cross-browser Testing**: Runs on Chrome and Firefox with visual snapshots



## 🎯 Framework Architecture## 🎯 Framework Architecture



### Clean Page Object Model### Clean Page Object Model

- **BasePage**: Essential methods for navigation and popup handling- **BasePage**: Essential methods for navigation and popup handling

- **CreditCardDemoPage**: Locators and interactive methods for checkbox filtering- **CreditCardDemoPage**: Locators and interactive methods for checkbox filtering

- **Modern Playwright**: Leverages auto-wait capabilities and visual testing- **Modern Playwright**: Leverages auto-wait capabilities and visual testing



### Locator Pattern### Locator Pattern

```javascript```javascript

// Clean locator declarations// Clean locator declarations

disputedCheckboxLabelLocator;disputedCheckboxLabelLocator;

undisputedCheckboxLabelLocator;undisputedCheckboxLabelLocator;

disputedCheckboxInputLocator;disputedCheckboxInputLocator;



// Constructor initialization// Constructor initialization

this.disputedCheckboxLabelLocator = this.page.locator('label[for="disputed"]');this.disputedCheckboxLabelLocator = this.page.locator('label[for="disputed"]');

this.undisputedCheckboxLabelLocator = this.page.locator('label[for="undisputed"]');this.undisputedCheckboxLabelLocator = this.page.locator('label[for="undisputed"]');



// Interactive methods// Interactive methods

async toggleDisputed() {async toggleDisputed() {

    await this.disputedCheckboxLabelLocator.click();    await this.disputedCheckboxLabelLocator.click();

}}



async isDisputedChecked() {async isDisputedChecked() {

    return await this.disputedCheckboxInputLocator.isChecked();    return await this.disputedCheckboxInputLocator.isChecked();

}}

``````



## 📊 Configuration### Scalable Fixtures (Ready for Expansion)

```javascript

### Playwright Configuration (`playwright.config.js`)export const test = base.extend({

- **Base URL**: Points to KronoGraph demo site  basePage: async ({ page }, use) => { ... },

- **Browsers**: Chrome, Firefox with optimized viewports (1280x720)  creditCardDemoPage: async ({ page }, use) => { ... },

- **Screenshots**: Automatic visual testing with `toHaveScreenshot()`  // Future pages ready to add here

- **HTML Reporter**: Clean visual reporting with embedded screenshots});

```

## 📸 Screenshots & Visual Testing

## 📊 Configuration

- **Automatic Visual Testing**: Uses `toHaveScreenshot()` for regression detection

- **Cross-browser Snapshots**: Visual baselines for Chrome and Firefox### Playwright Configuration (`playwright.config.js`)

- **Location**: `tests/CreditCardDemoPageTests/InteractiveFiltering.spec.js-snapshots/`- **Base URL**: Points to KronoGraph demo site

- **Auto-generated**: Screenshots saved in `test-results/` folder- **Browsers**: Chrome, Firefox, Safari (maximized viewports)

- **Screenshots**: Automatic on success/failure (`screenshot: 'on'`)

---- **Simple Setup**: Single worker, no retries for immediate feedback

- **HTML Reporter**: Clean visual reporting

**Happy Testing! 🎭**

## 📸 Screenshots

This framework focuses on clean, maintainable test automation for KronoGraph Credit Card Fraud Detection demo.
- **Automatic**: Playwright captures screenshots on test completion
- **Location**: `test-results/` with timestamp and test name
- **No manual screenshots needed** - configured in playwright.config.js

## 🔧 Modern Features

### Playwright Auto-Wait
- **No manual waits** - Playwright handles element waiting intelligently
- **Direct API usage** - `page.click()`, `page.fill()` instead of wrapper methods
- **Built-in retries** - Elements are automatically retried until visible/actionable

### Clean Assertions
```javascript
// Clean test assertions
const title = await creditCardPage.getTitle();
expect(title.toLowerCase()).toContain('kronograph');

await expect(creditCardPage.getGraphContainer()).toBeVisible();
```

## 🐛 Troubleshooting

### Common Issues

1. **Elements not found**: Check if page structure has changed
2. **Test fails**: Run in headed mode: `npm run test:headed`
3. **Graph not loading**: Playwright auto-wait handles this - no manual timeouts needed

### Debug Tips
- Use `test.step()` output in HTML report for detailed execution flow
- Check screenshots in `test-results/` folder
- Run with headed mode to visually see test execution

## 🚦 Quick Start

1. **Install**: `npm install`
2. **Install browsers**: `npm run install:browsers`  
3. **Run test**: `npm test`
4. **View report**: Open `playwright-report/index.html`

## � Scaling the Framework

### Adding New Pages
1. **Create new page object** in `tests/pages/`
2. **Add fixture** to `fixtures.js`:
   ```javascript
   loginPage: async ({ page }, use) => {
     const loginPage = new LoginPage(page);
     await use(loginPage);
   },
   ```
3. **Use in tests**:
   ```javascript
   const { test, expect } = require('./fixtures');
   
   test('login flow', async ({ loginPage, creditCardDemoPage }) => {
     await loginPage.login('user', 'pass');
     await creditCardDemoPage.navigateToDemo();
   });
   ```

### Framework Principles
- **Minimal abstraction** - Use Playwright directly where possible
- **Clean locators** - Declare, initialize, use pattern
- **No redundant utilities** - Leverage Playwright's built-in capabilities
- **Focus on value** - Only add complexity when it provides clear benefits

---

**Happy Testing! 🎭**

This clean framework prioritizes simplicity, maintainability, and modern Playwright best practices.