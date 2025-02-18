import { test, expect, Page } from '@playwright/test';

export const delete_user = async (page: Page) => {
    await page.goto('/');
    // Delete account
    await page.locator('a:text(" Delete Account")').click();
    const accountDeletedMessage = page.locator('[data-qa="account-deleted"]');
    await expect(accountDeletedMessage).toBeVisible();
    await expect(accountDeletedMessage).toHaveText('Account Deleted!');
    await page.locator('[data-qa="continue-button"]').click();

}





