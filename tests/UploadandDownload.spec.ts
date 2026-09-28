import{test,expect} from "@playwright/test"
// single upload
/*
test('Upload with input tag', async({page})=>{

await page.goto('https://letcode.in/file');

await page.setInputFiles("input[type='file']","F:/New folder");

await expect(page.getByText('New Text Document.txt')).toBeVisible();

});
*/
//single upload without input tag
/*
test('File upload without input tag',async({page})=>{

    await page.goto('https://trace.playwright.dev/');
    
  const[filechooser]=await Promise.all([

  page.waitForEvent('filechooser'),await page.getByRole('button',{name:'Select file'}).click()

  ]);
  await filechooser.setFiles("F:/New folder");
  await page.waitForTimeout(5000);

  //await expect(page.locator('.title').first()).toContainText('HandleAlert.spec.ts');
   
  await expect(page.getByText('HandleAlert.spec.ts')).toBeVisible();

});

//upload multiple file using input
test('Upload Multiple Files', async({page})=>{

  await page.goto('https://letcode.in/file');  //webside not work givn error
  await page.setInputFiles("input[type='file']",["F:\Test Document\Test Case Execution","F:\Test Document\Test Case preparation"

  ]);

  await expect(page.getByAltText('')).toBeVisible();

});
*/
//Download file
test('Files Download',async({page})=>{

  await page.goto('https://letcode.in/file');
  
  const [Download]=await Promise.all([
      
      page.waitForEvent('download'),
      await page.getByRole('link',{name:'Downlod Excel'}).click()

  ]);

     await Download.saveAs('uploads/excel-download.xlsx');
     


});