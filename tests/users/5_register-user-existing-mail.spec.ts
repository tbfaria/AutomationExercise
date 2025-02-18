import { test, expect } from '@playwright/test';
import { delete_user } from './delete';
import { consentCookie } from '../consent';

test.describe('Correct signup flow', () => {
    let page;

    test.beforeAll(async ({ browser }) => {

        page = await browser.newPage();
        //Consent Cookies and navigate to homepage
        await consentCookie(page);
    });

    test('Login with existing mail', async () => {
        // Click the Signup / Login button
        await page.locator('a:has-text(" Signup / Login")').click();
        
        await expect(page.locator('text="New User Signup!"')).toBeVisible();
        await page.fill('input[data-qa="signup-name"]', 'Andres Silva');
        await page.fill('input[data-qa="signup-email"]', 'giovanna-volpato@tuamaeaquelaursa.com');
        await page.click('button[data-qa="signup-button"]');

        // Warning about the already used email
        await expect(page.locator('text="Email Address already exist!"')).toBeVisible();
    });



})