import {test,expect} from "@playwright/test";

test('waits and sync',async({page})=>{

  page.goto('https://www.automationexercise.com/');
  
  //page related
  //to check htmal content load or not
    await page.waitForLoadState('domcontentloaded');

    //load- HTML CSS images script
    await page.waitForLoadState('load');

    //Netwok request
    await page.waitForLoadState('networkidle');

    //element states
    await page.locator('h2.title.text-center').waitFor({state:'attached',timeout:15000});
    await page.locator('h2.title.text-center').waitFor({state:'visible',timeout:15000});
    await page.locator('h2.title.text-center').waitFor({state:'detached',timeout:15000});
    await page.locator('h2.title.text-center').waitFor({state:'hidden',timeout:15000});

    //expect
    await expect(page.locator('#shopping card')).toBeVisible();
    await page.locator('h2.title.text-center').waitFor({state:'attached',timeout:1500});

    //wait for event trigger
    await page.waitForEvent('dialog');

    //wait for url
    await page.locator('#Product').click();
    await page.waitForURL('https://www.automationexercise.com/products');

    //hard wait
    await page.waitForTimeout(50000);
});