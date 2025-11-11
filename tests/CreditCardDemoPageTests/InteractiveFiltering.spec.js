const { test, expect } = require('../fixtures');

test.describe('KronoGraph Credit Card Demo - Interactive Filtering', () => {

    test('should filter disputed transactions when checkbox is unchecked', async ({ creditCardDemoPage }) => {
        // Navigate to demo page
        await test.step('Navigate to credit card demo', async () => {
            await creditCardDemoPage.navigateToDemo();
        });

        // Verify initial state - both checkboxes should be checked
        await test.step('Verify initial state', async () => {
            await expect(creditCardDemoPage.getUndisputedCheckbox()).toBeChecked();
            await expect(creditCardDemoPage.getDisputedCheckbox()).toBeChecked();
        });

        // Take baseline screenshot with both transaction types visible
        await test.step('Take baseline screenshot', async () => {
            await expect(creditCardDemoPage.getGraphContainer()).toHaveScreenshot('baseline-both-types-visible.png');
        });

        // Uncheck disputed transactions
        await test.step('Uncheck disputed transactions', async () => {
            await creditCardDemoPage.toggleDisputedTransactions(false);
        });

        // Verify disputed checkbox is unchecked, undisputed still checked
        await test.step('Verify checkbox states after filtering', async () => {
            await expect(creditCardDemoPage.getDisputedCheckbox()).not.toBeChecked();
            await expect(creditCardDemoPage.getUndisputedCheckbox()).toBeChecked();
        });

        // Take screenshot after filtering
        await test.step('Take screenshot after filtering', async () => {
            await expect(creditCardDemoPage.getGraphContainer()).toHaveScreenshot('filtered-undisputed-only.png');
        });

        // Re-enable disputed transactions to verify toggle works both ways
        await test.step('Re-enable disputed transactions', async () => {
            await creditCardDemoPage.toggleDisputedTransactions(true);
            await expect(creditCardDemoPage.getDisputedCheckbox()).toBeChecked();
        });

        // Take final screenshot to verify red lines return
        await test.step('Verify disputed transactions return', async () => {
            await expect(creditCardDemoPage.getGraphContainer()).toHaveScreenshot('restored-both-types.png');
        });
    });

    test('should filter undisputed transactions when checkbox is unchecked', async ({ creditCardDemoPage }) => {
        // Navigate to demo page  
        await test.step('Navigate to credit card demo', async () => {
            await creditCardDemoPage.navigateToDemo();
        });

        // Take baseline screenshot
        await test.step('Take baseline screenshot', async () => {
            await expect(creditCardDemoPage.getGraphContainer()).toHaveScreenshot('baseline-for-undisputed-test.png');
        });

        // Uncheck undisputed transactions (should show only red/disputed lines)
        await test.step('Uncheck undisputed transactions', async () => {
            await creditCardDemoPage.toggleUndisputedTransactions(false);
        });

        // Verify checkbox states
        await test.step('Verify checkbox states', async () => {
            await expect(creditCardDemoPage.getUndisputedCheckbox()).not.toBeChecked();
            await expect(creditCardDemoPage.getDisputedCheckbox()).toBeChecked();
        });

        // Take screenshot showing only disputed (red) transactions
        await test.step('Take screenshot with disputed only', async () => {
            await expect(creditCardDemoPage.getGraphContainer()).toHaveScreenshot('filtered-disputed-only.png');
        });

        // Restore undisputed transactions
        await test.step('Restore undisputed transactions', async () => {
            await creditCardDemoPage.toggleUndisputedTransactions(true);
            await expect(creditCardDemoPage.getUndisputedCheckbox()).toBeChecked();
        });
    });
});