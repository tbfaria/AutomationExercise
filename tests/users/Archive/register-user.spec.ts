import { test, expect } from '@playwright/test';

test.describe('Sign-Up flow', () => {
    let page;

    test.beforeAll(async ({ browser }) => {

        page = await browser.newPage();

        // Navigate to page
        await page.goto('/');
        // Accept consent
        await page.locator('.fc-dialog-container').waitFor({ state: 'visible' });
        await page.locator('.fc-button-label:has-text("Consent")').click();

    });

    test('Fill Sign-Up data', async () => {
        // Page is complete
        await expect(page.locator('#footer')).toBeVisible();

        // Click the Signup / Login button
        await page.locator('a:has-text(" Signup / Login")').click();

        // Fill Signup Data
        await expect(page.locator('text="New User Signup!"')).toBeVisible();
        await page.fill('input[data-qa="signup-name"]', 'Andres Cook');
        await page.fill('input[data-qa="signup-email"]', 'giovanna-volpato@tuamaeaquelaursa.com');
        await page.click('button[data-qa="signup-button"]');
        await expect(page.locator('text="Enter Account Information"')).toBeVisible();

        await page.click('label:has-text("Mr.")');
        await page.fill('input[data-qa="password"]', 'asd/)jh');
        await page.selectOption('select#days.form-control', { value: '1' });
        await page.selectOption('select#months.form-control', { value: '4' });
        await page.selectOption('select#years.form-control', { value: '1974' });
        await page.fill('input[data-qa="first_name"]', 'João');
        await page.fill('input[data-qa="last_name"]', 'Silva');
        await page.fill('input[data-qa="company"]', 'System Star Solutions');
        await page.fill('input[data-qa="address"]', '1562 Trails End Road');
        await page.selectOption('select#country.form-control', { value: 'United States' });
        await page.fill('input[data-qa="state"]', 'Florida');
        await page.fill('input[data-qa="city"]', 'Miami');
        await page.fill('input[data-qa="zipcode"]', 'FL 33176');
        await page.fill('input[data-qa="mobile_number"]', '954-319-1472');
        await page.click('button[data-qa="create-account"]');

        // Account created is visible
        const accountCreatedMessage = page.locator('[data-qa="account-created"]');
        await expect(accountCreatedMessage).toBeVisible();
        await expect(accountCreatedMessage).toHaveText('Account Created!');

        await page.locator('[data-qa="continue-button"]').click();
    });

    test('Delete account', async () => {
        // Delete account
        await page.locator('a:text(" Delete Account")').click();

        const accountDeletedMessage = page.locator('[data-qa="account-deleted"]');
        await expect(accountDeletedMessage).toBeVisible();
        await expect(accountDeletedMessage).toHaveText('Account Deleted!');
        await page.locator('[data-qa="continue-button"]').click();
    });

});