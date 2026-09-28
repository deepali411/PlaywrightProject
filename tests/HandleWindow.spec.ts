import{test,expect} from '@playwright/test';

test('Handle child Window',async({page,context})=>{

await page.goto('https://letcode.in/window');
console.log(page.url());

const[newpage]=await Promise.all([

    context.waitForEvent('page'),
await page.getByRole('button',{name:'Open Home Page'}).click()
 ]);

await newpage.waitForLoadState();
console.log(newpage.url());

await newpage.getByRole('link',{name:'Contact'}).first().click();

await expect(newpage.getByRole('heading',{name:'Koushik Chatterjee'})).toBeVisible();

await page.bringToFront();  // navigate  to parent window

await newpage.bringToFront()  // navigate to child window

await newpage.close();

await page.waitForTimeout(5000);

});