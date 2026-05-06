import { test, expect } from '@playwright/test';

//describe('login', async () =>{
//});

test('should login successfully', async ( {page} ) =>{
    await page.goto('https://saucedemo.com');
    await expect(page).toHaveTitle('Swag Labs');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('secret_sauce');
    await page.locator('[data-test="login-button"]').click();
    
    //assertion time
    await expect(await page.url()).toBe('https://www.saucedemo.com/inventory.html');
    
    const productTitle = await page.locator('.header_secondary_container > span');
    await expect(productTitle ).toHaveText('Products');
  });