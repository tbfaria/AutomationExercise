import { test, expect } from '@playwright/test';
import { consentCookie } from '../consent';


test.describe('Contact us flow', () => {
    let page;

    test.beforeAll(async ({ browser }) => {

        page = await browser.newPage();
        //Consent Cookies and navigate to homepage
        await consentCookie(page);
    });

    test('Contact us form', async () => {
        // Click the Contact Us button
        await page.locator('a:has-text(" Contact us")').click();
        // Get In Touch is visible
        await expect(page.locator('text="Get In Touch"')).toBeVisible();

        await page.fill('input[data-qa="name"]', 'Andres Silva');
        await page.fill('input[data-qa="email"]', 'giovanna-volpato@tuamaeaquelaursa.com');
        await page.fill('input[data-qa="subject"]', 'Complaint');
        await page.fill('input[data-qa="message"]', 'I wish to make a complaint');

        // Start waiting for file chooser before clicking. Note no await.
        const fileChooserPromise = page.waitForEvent('filechooser');
        await page.locator('input[name="upload_file"]').click();
        const fileChooser = await fileChooserPromise;
        await fileChooser.setFiles('./tests/assets/automation.png');
        //await page.click('button:has-text("Submit")');

        await page.locator('input[data-qa="submit-button"]').click();
        //await page.locator('input[data-qa="submit-button"]').click();
        //await page.locator('input[data-qa="submit-button"]').click();
        //await page.click('button[data-qa="login-button"]');

        /*page.once('dialog', async dialog => {
            console.log(`Confirmação detectada: ${dialog.message()}`);
            await dialog.accept(); // Clicar em "OK"
        });*/
    });





});
