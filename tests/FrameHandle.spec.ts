import {test,expect} from "@playwright/test";

test('handle frames and nested frames', async({page})=>{
await page.goto('https://letcode.in/frame');

const frame1=page.frameLocator('iframe#firstFr')   //frame1 locator
await frame1.getByPlaceholder('Enter name').fill('Playwright test'); //.lovcator(input[name='fname'])

console.log(await frame1.getByPlaceholder('Enter name').inputValue());
await expect(frame1.getByPlaceholder('Enter name')).toHaveValue('Playwright test');


//Nested Frames
const frame2=frame1.frameLocator("[src='/innerframe']");
await frame2.getByPlaceholder('Enter email').fill('frame2testmail@mailnator.com');

console.log(await frame2.getByPlaceholder('Enter email').inputValue());
await expect(frame2.getByPlaceholder('Enter email')).toHaveValue('frame2testmail@mailnator.com');


//count frame 
console.log(page.frames().length);

})