import{test,expect} from '@playwright/test';

test('Handle simple Alert', async({page})=>{

await page.goto('https://letcode.in/alert');
page.on('dialog',async dialog=>{

     console.log(dialog.message());
     await dialog.accept();

});

await page.getByRole('button',{name:'Simple Alert'}).click();
await page.waitForTimeout(5000);
});


//Confirmation Alert
test('confitm alert',async({page})=> {

await page.goto('https://letcode.in/alert');
   
page.on('dialog',async dialog=>{

     console.log(dialog.message());
     await dialog.dismiss();

});

await page.getByRole('button',{name:'Confirm Alert'}).click();
await page.waitForTimeout(5000);
});

//prompt alert
test('promt alert',async({page})=>{
await page.goto('https://letcode.in/alert');

page.on('dialog',async dialog=>{

     console.log(dialog.message());
     await dialog.accept('Playwright alert');
     console.log(dialog.type());          

});
await page.locator('#prompt').click();
await page.waitForTimeout(5000);

});

//modern alert
test ('modern alert',async({page})=>{
await page.goto('https://letcode.in/alert');

await page.getByRole('button',{name:'Modern Alert'}).click();

console.log(await page.locator('.modal-content').textContent());

await page.locator('.modal-close').click();

await page.waitForTimeout(5000);
});
