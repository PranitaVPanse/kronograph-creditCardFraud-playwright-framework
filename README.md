# KronoGraph Credit Card Fraud Demo - Playwright Test Framework

This repository contains a **clean and minimal** Playwright test framework for testing the basic functionality of the KronoGraph Credit Card Fraud Detection demo website.

## 🏗️ Project Structure

```
KronoGraph_Credit Card Fraud/
├── tests/
│   ├── pages/
│   │   ├── BasePage.js              # Minimal base class (navigate, screenshot)
│   │   └── CreditCardDemoPage.js    # Clean page object with proper locators
│   ├── CreditCardDemoPage.spec.js   # Single focused test
│   └── fixtures.js                  # Page object fixtures for scaling
├── test-results/                    # Auto-generated screenshots & reports
├── package.json                     # Project dependencies
├── playwright.config.js             # Clean Playwright configuration
└── README.md                        # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 18 or higher)
- npm or yarn package manager

### Installation

1. **Navigate to the project directory:**
   ```bash
   cd "d:\\Pranita\\Testing\\KronoGraph_Credit Card Fraud"
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Install Playwright browsers:**
   ```bash
   npm run install:browsers
   ```

## 🧪 Running Tests

### Run the Test
```bash
npm test
```

### Run Test in Headed Mode (visible browser)
```bash
npm run test:headed
```

### View Test Report
```bash
npm run test:report
```

## 📝 Test Overview

### Single Test: `CreditCardDemoPage.spec.js`
**"should load the credit card demo page successfully"**

This focused test performs:
1. **Navigate to Demo**: Opens the KronoGraph credit card fraud demo page
2. **Verify Title**: Validates the page title contains "KronoGraph"
3. **Verify Graph**: Ensures the graph visualization is visible
4. **Auto Screenshot**: Playwright automatically captures screenshots

## 🎯 Framework Architecture

### Clean Page Object Model
- **BasePage**: Only essential methods (navigate, takeScreenshot)
- **CreditCardDemoPage**: Proper locator declarations and clean methods
- **No unnecessary abstractions** - leverages Playwright's auto-wait capabilities

### Modern Locator Pattern
```javascript
// Readonly locator declarations
pageContainerLocator;
loadingIndicatorLocator;
graphContainerLocator;

// Constructor initialization
this.pageContainerLocator = this.page.locator('.demo-container, .main-content, body');
this.graphContainerLocator = this.page.locator('.kg-container, .kronograph-container, #kronograph, canvas');

// Clean method usage
async verifyGraphPresent() {
    await expect(this.graphContainerLocator).toBeVisible();
}
```

### Scalable Fixtures (Ready for Expansion)
```javascript
export const test = base.extend({
  basePage: async ({ page }, use) => { ... },
  creditCardDemoPage: async ({ page }, use) => { ... },
  // Future pages ready to add here
});
```

## 📊 Configuration

### Playwright Configuration (`playwright.config.js`)
- **Base URL**: Points to KronoGraph demo site
- **Browsers**: Chrome, Firefox, Safari (maximized viewports)
- **Screenshots**: Automatic on success/failure (`screenshot: 'on'`)
- **Simple Setup**: Single worker, no retries for immediate feedback
- **HTML Reporter**: Clean visual reporting

## 📸 Screenshots

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