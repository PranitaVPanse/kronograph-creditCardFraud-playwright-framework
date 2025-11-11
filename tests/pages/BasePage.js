const { expect } = require('@playwright/test');

class BasePage {
    constructor(page) {
        this.page = page;
        this.baseURL = 'https://kronograph.cambridge-intelligence.com';
    }

    /**
     * Navigate to a specific URL with network idle wait
     * @param {string} url - The URL to navigate to
     */
    async navigate(url) {
        await this.page.goto(url, { waitUntil: 'networkidle' });
    }


    async handlePopups() {
        // Handle cookies first
        await this.acceptCookies();
        
        // Handle framework selection
        await this.selectJavaScriptFramework();
        
        // Brief wait for page to stabilize
        await this.page.waitForTimeout(1000);
    }

    /**
     * Accept cookies if banner is present
     */
    async acceptCookies() {
        try {
            const cookieButton = this.page.locator('button:has-text("Accept")').first();
            if (await cookieButton.isVisible({ timeout: 2000 })) {
                await cookieButton.click();
                await this.page.waitForTimeout(500);
            }
        } catch (e) {
            // No cookie banner found or already handled
        }
    }

    /**
     * Handle framework selection popup (choose JS over React)
     */
    async selectJavaScriptFramework() {
        try {
            // Wait for the framework selection popup to appear
            const frameworkTitle = this.page.locator('h1:has-text("Choose your framework")');
            if (await frameworkTitle.isVisible({ timeout: 5000 })) {
                // Click on the JS card using the class from DOM inspection
                const jsCard = this.page.locator('.card.card--dark.a--plain.framework-toggle__javascript').first();
                
                if (await jsCard.isVisible({ timeout: 2000 })) {
                    await jsCard.click();
                    // Brief wait for popup to disappear
                    await this.page.waitForTimeout(1000);
                }
            }
        } catch (e) {
            // Framework popup might not appear or is already handled
        }
    }

    /**
     * Take a screenshot with automatic path handling
     * @param {string} name - Screenshot name
     */
    async takeScreenshot(name) {
        await this.page.screenshot({ 
            path: `test-results/screenshots/${name}.png`,
            fullPage: true 
        });
    }
}

module.exports = { BasePage };