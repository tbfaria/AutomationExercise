import { test, expect } from '@playwright/test';
import { delete_user } from './delete';

test.describe('Correct signup flow', () => {
    let page;

    test.beforeAll(async ({ browser }) => {

        page = await browser.newPage();

        // Navigate to page
        await page.goto('/');
        // Accept consent
        await page.locator('.fc-dialog-container').waitFor({ state: 'visible' });
        await page.locator('.fc-button-label:has-text("Consent")').click();
    });

    test('Correct login', async () => {
        // Click the Signup / Login button
        await page.locator('a:has-text(" Signup / Login")').click();

        // Login User
        await expect(page.locator('text="Login to your account"')).toBeVisible();
        await page.fill('input[data-qa="login-email"]', 'giovanna-volpato@tuamaeaquelaursa.com');
        await page.fill('input[data-qa="login-password"]', 'asd/)jh');
        await page.click('button[data-qa="login-button"]');
        //await expect(page.locator('text="Enter Account Information"')).toBeVisible();
    });

    test('Verify logout', async ()=> {
        const userGreeting = page.locator('.i.fa.fa-user');
        await expect(userGreeting).toHaveText('Logged in as Andres Cook');

        await page.locator('a:text(" Logout")').click();
    })

})