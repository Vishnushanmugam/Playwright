const {test}=require('@playwright/test');

// The 'async' is a keyword used to declare an asynchronous function. It allows us to use await inside the function and always returns a Promise.
// The 'await' is waits for that promise to complete before moving next step
test('first playwright test', async({browser})=>{ 
const a=await browser.newContext();
const page =await a.newPage();
await page.goto("https://www.w3schools.com/js/js_async.asp");
})

// The 'Page' context is directly call the browser page and navigate to directly.
// The 'only' is used to run that particular one case in several one
test.only("Using Page Playwright test", async({page})=>{
    await page.goto("https://www.w3schools.com/gen_ai/gen_ai_bard.php");
})