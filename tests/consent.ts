import { Page, test } from '@playwright/test';

export const consentCookie = async ( page: Page) => {
    // Navigate to page
    await page.goto('/');
    // Accept consent
    await page.locator('.fc-dialog-container').waitFor({ state: 'visible' });
    await page.locator('.fc-button-label:has-text("Consent")').click();
};