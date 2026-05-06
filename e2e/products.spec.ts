import { test, expect } from '@playwright/test'

test('All products should have title as "Sauce Labs"', async ( {page} ) => {
    test.fail();
    await test.step('Login', async () => {
        await page.goto('https://saucedemo.com');
        await expect(page).toHaveTitle('Swag Labs');
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
    });
    
    await test.step('Verify product title', async () => {
        const titleList = await page.locator('.inventory_item_name');
        const titleText = await titleList.allTextContents();

        for (const text of titleText) {
            await expect(text).toContain('Sauce Labs');
        }
    });
});