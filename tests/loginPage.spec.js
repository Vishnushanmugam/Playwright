const {test,expect} =require ('@playwright/test')

test("Login Page Validating",async({page})=> {
// Navigating to the url page
await page.goto("https://www.saucedemo.com/");

// Checking the land in the page and print the page title
await expect (page).toHaveTitle("Swag Labs")
console.log(await page.title())

// User input and clciking the login button
await page.locator('#user-name').fill('standard_user');
await page.locator("[type='password']").fill('secret_sauce1');
await page.locator("[name='login-button']").click()

// Printing the error message for invalid username/password and checking the error message contains the particular text
console.log(await page.locator('.error-message-container').textContent())
await expect(page.locator('.error-message-container')).toContainText('Epic sadface:')
})
