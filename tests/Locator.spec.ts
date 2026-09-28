import test, { expect } from "@playwright/test";

/*
test('login page locator',async( {page} )  => {
await page.goto('https://www.saucedemo.com/');


await expect(page).toHaveTitle('Swag Labs');6

await page.locator("//div[@class='form_group'] // input[@id='user-name']").fill('standard_user');
await page.locator("//div[@class='form_group'] // input[@id='password']").fill('secret_sauce');
await page.locator("//input[@id='login-button']").click();

})
*/

test('login page locator',async( {page} )  => {
await page.goto('https://letcode.in/radio');

//2nd radio button
await page.locator('#one').check();
const isCheckYes=await page.locator('#one').isChecked();     
console.log(isCheckYes);

await expect(page.locator('#one')).toBeChecked();

await page.locator('#two').check();
const isCheckNo=await page.locator('#two').isChecked();
console.log(isCheckNo);

//3rd radio button
await page.locator('#nobug').check();
//const ischeckYes3=page.locator('#nobug').isChecked();
//console.log(ischeckYes3);

await expect(page.locator('#bug')).not.toBeChecked();

//const ischeckNoAfterChececkeckYes=page.locator('#bug').isChecked();
//console.log(ischeckNoAfterChececkeckYes);
//await expect(page.locator('#nobug')).toBeChecked();

await page.locator('#bug').check();
await expect(page.locator('#nobug')).not.toBeChecked();  // bug found
//const ischeckYesAfterCheckedNo=page.locator('#nobug').isChecked();
//console.log(ischeckYesAfterCheckedNo);
})