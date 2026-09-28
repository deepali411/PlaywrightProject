import {chromium, test} from '@playwright/test';

test('has title',async ({ page }) => {
    await page.goto('https://www.google.com/');

});


test.only ('test without fixture', async () => {

    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    await page.goto('https://www.amazon.com/');
    
});


