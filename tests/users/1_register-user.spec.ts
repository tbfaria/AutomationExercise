import { test, expect } from '@playwright/test';
import { delete_user } from './delete';
import { signup_user } from './signup';
import { consentCookie } from '../consent';

test.describe('Sign-Up flow', () => {
    let page;

    test.beforeAll(async ({ browser }) => {

        page = await browser.newPage();

        // Navigate to page
        //await page.goto('/');
        // Accept consent
        //await page.locator('.fc-dialog-container').waitFor({ state: 'visible' });
        //await page.locator('.fc-button-label:has-text("Consent")').click();
        await consentCookie(page);

    });

    test('Fill Sign-Up data', async () => {
        // Page is complete
        await expect(page.locator('#footer')).toBeVisible();

        // Click the Signup / Login button
        await page.locator('a:has-text(" Signup / Login")').click();

        // Fill Signup Data
        await signup_user(page);

        // Account created is visible
        const accountCreatedMessage = page.locator('[data-qa="account-created"]');
        await expect(accountCreatedMessage).toBeVisible();
        await expect(accountCreatedMessage).toHaveText('Account Created!');
        await page.locator('[data-qa="continue-button"]').click();
    });

    test('Delete account', async () => {
        // Delete account
        await delete_user(page);
    });

});