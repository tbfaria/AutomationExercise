import { test, expect, Page } from '@playwright/test';

export const signup_user = async (page: Page) => {
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
};