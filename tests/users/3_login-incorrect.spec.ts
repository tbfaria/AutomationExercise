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

    test('Correct login', async () => {
        // Click the Signup / Login button
        await page.locator('a:has-text(" Signup / Login")').click();

        // Login User
        await expect(page.locator('text="Login to your account"')).toBeVisible();
        await page.fill('input[data-qa="login-email"]', 'giovanna-volpato@tuamaquelaursa.com');
        await page.fill('input[data-qa="login-password"]', 'as)jh');
        await page.click('button[data-qa="login-button"]');
        
        // Login inavalid message
        await expect(page.locator('text="Your email or password is incorrect!"')).toBeVisible();
    });

 

})