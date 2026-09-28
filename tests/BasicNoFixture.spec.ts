import {test, chromium} from '@playwright/test';



test ('test', async () => {

    const browser = await chromium.launch();
    const page = await browser.newPage();
    
    await page.goto('https://www.amazon.com/');
    
});