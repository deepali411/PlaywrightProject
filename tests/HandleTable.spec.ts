import{test,expect} from '@playwright/test';

test('Handle tables,row and coloumn',async({page})=>{

await page.goto('https://the-internet.herokuapp.com/');
await page.getByRole('link',{name:'Sortable Data Tables'}).click();

await page.waitForLoadState('load');

//row count
const rowCount=await page.locator('#table1 tbody tr').count();
console.log('row Count:',rowCount);

// column count
const columnCount=await page.locator('#table1 thead tr th').count();
console.log('coulmn count:',columnCount);

//read data from the first row
const firstrow= page.locator('#table1 tbody tr').first();
console.log(await firstrow.textContent());

const webSiteCell=page.locator('#table1 tbody tr').filter({hasText:'jdoe@hotmail.com'}).locator('td').nth(4);
const webSiteCellText= await webSiteCell.textContent();
console.log(webSiteCellText);

//get the due amount from same row
const dueCell= page.locator('#table1 tbody tr').filter({hasText:'jdoe@hotmail.com'}).locator('td').nth(3);
const dueAmount= await dueCell.textContent();
console.log(dueAmount);

//validation
await expect(dueAmount).toContain('100.00');

console.log(await page.locator('#table1 tbody tr').allTextContents());

await page.waitForTimeout(5000);
});