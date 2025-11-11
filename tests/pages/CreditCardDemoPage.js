const { expect } = require('@playwright/test');
const { BasePage } = require('./BasePage');

/**
 * Page Object Model for KronoGraph Credit Card Fraud Demo
 * Simplified version with only essential methods for basic page loading test
 */
class CreditCardDemoPage extends BasePage {
    // Readonly locator declarations (abstraction layer)
    pageContainerLocator;
    loadingIndicatorLocator;
    graphContainerLocator;
    undisputedCheckboxLocator;
    disputedCheckboxLocator;

    constructor(page) {
        super(page);
        this.demoUrl = '/demos/creditcard';
        
        // Initialize locators in constructor
        this.pageContainerLocator = this.page.locator('.demo-container, .main-content, body');
        this.loadingIndicatorLocator = this.page.locator('.loading, .spinner, .loader');
        this.graphContainerLocator = this.page.locator('.kg-container, .kronograph-container, #kronograph, canvas');
        
        // Interactive elements for filtering - using labels that control the checkboxes
        this.undisputedCheckboxLocator = this.page.locator('label[for="filterundisputedtransaction"]');
        this.disputedCheckboxLocator = this.page.locator('label[for="filterdisputedtransaction"]');
        
        // Also keep references to actual checkboxes for state checking
        this.undisputedCheckboxInput = this.page.locator('#filterundisputedtransaction');
        this.disputedCheckboxInput = this.page.locator('#filterdisputedtransaction');
    }

    async navigateToDemo() {
        await this.navigate(this.baseURL + this.demoUrl);
        await this.handlePopups(); // Handle all popups (cookies, framework selection, etc.)
    }

    /**
     * Get page title
     * @returns {Promise<string>} Page title
     */
    async getTitle() {
        return await this.page.title();
    }

    /**
     * Get graph container locator for assertions
     * @returns {Locator} Graph container locator
     */
    getGraphContainer() {
        return this.graphContainerLocator;
    }

    /**
     * Get undisputed checkbox locator for assertions
     * @returns {Locator} Undisputed checkbox input locator
     */
    getUndisputedCheckbox() {
        return this.undisputedCheckboxInput;
    }

    /**
     * Get disputed checkbox locator for assertions
     * @returns {Locator} Disputed checkbox input locator
     */
    getDisputedCheckbox() {
        return this.disputedCheckboxInput;
    }

    /**
     * Toggle disputed transactions visibility
     * @param {boolean} checked - Whether to check or uncheck the disputed checkbox
     */
    async toggleDisputedTransactions(checked) {
        // Get current state of the checkbox
        const isCurrentlyChecked = await this.disputedCheckboxInput.isChecked();
        
        // Only click if we need to change the state
        if (isCurrentlyChecked !== checked) {
            await this.disputedCheckboxLocator.click();
        }
        
        // Brief wait for graph re-render
        await this.page.waitForTimeout(1000); // Reduced from 1500ms
    }

    /**
     * Toggle undisputed transactions visibility
     * @param {boolean} checked - Whether to check or uncheck the undisputed checkbox
     */
    async toggleUndisputedTransactions(checked) {
        // Get current state of the checkbox
        const isCurrentlyChecked = await this.undisputedCheckboxInput.isChecked();
        
        // Only click if we need to change the state
        if (isCurrentlyChecked !== checked) {
            await this.undisputedCheckboxLocator.click();
        }
        
        // Brief wait for graph re-render
        await this.page.waitForTimeout(1000); // Reduced from 1500ms
    }

    /**
     * Take screenshot of the graph area specifically
     * @param {string} name - Screenshot name
     */
    async takeGraphScreenshot(name) {
        await this.graphContainerLocator.screenshot({ 
            path: `test-results/graph-screenshots/${name}.png`,
            animations: 'disabled'
        });
    }
}

module.exports = { CreditCardDemoPage };