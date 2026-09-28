import {test,expect} from '@playwright/test';
import { PageManager } from '../pages/PageManager';



test('add new employee',async({page})=>{

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

const pm=new PageManager(page)

await pm.loginpage.Login('Admin','admin123');

const employeeID=await pm.pimpage.addEmployee('Rajesh','kumar','sharma');

console.log(employeeID)
})