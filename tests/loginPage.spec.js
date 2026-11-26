const {test,expect} =require ('@playwright/test')

test("Login Page Validating",async({page})=> {
await page.goto("https://www.saucedemo.com/");
await page.locator('#user-name').fill('standard_user');
await page.locator("[type='password']").fill('secret_sauce');
await page.locator("[name='login-button']").click()
await expect (page).toHaveTitle("Swag Labs")

console.log(await page.title())

})