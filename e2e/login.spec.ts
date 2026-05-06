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

  test('should display error message for invalid credentials', async ( {page} ) =>{
    await page.goto('https://saucedemo.com');
    await expect(page).toHaveTitle('Swag Labs');
    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('random_12345');
    await page.locator('[data-test="login-button"]').click();
    
    //assertion time  
    const errorText = await page.getByText(/Username and password do not match/);
    await expect(errorText ).toBeVisible();
  });