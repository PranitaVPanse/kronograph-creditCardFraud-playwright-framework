const { test, expect } = require('@playwright/test');
const { CreditCardDemoPage } = require('../pages/CreditCardDemoPage');

test.describe('KronoGraph Credit Card Demo - Basic Functionality', () => {
    let creditCardPage;

    test.beforeEach(async ({ page }) => {
        creditCardPage = new CreditCardDemoPage(page);
    });

    test('should load the credit card demo page successfully', async ({ page }) => {
        // Navigate to the demo page
        await test.step('Navigate to credit card demo', async () => {
            await creditCardPage.navigateToDemo();
        });

        // Verify page loaded
        await test.step('Verify page loaded successfully', async () => {
            // Verify title contains expected content
            const title = await creditCardPage.getTitle();
            expect(title.toLowerCase()).toContain('kronograph');
        });

        // Verify graph is present
        await test.step('Verify graph visualization is present', async () => {
            await expect(creditCardPage.getGraphContainer()).toBeVisible();
        });
    });
});