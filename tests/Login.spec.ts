import{test,expect} from'@playwright/test';
import { LoginPage } from '../pages/LoginPage';
//import testData from '../TestData/testData.json';
import{ExcelUtils}from'../Utils/ExcelUtils';

test('valid Login',async({page})=>{

    const loginpage=new LoginPage(page);
    const userData=ExcelUtils.getData('.TestData/credential.xlsx','Sheet1',0)

await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

await expect(loginpage.loginImag).toBeVisible();

//await loginpage.Login(testData.username,testData.password);
 await loginpage.Login(userData.username,userData.password);

await expect(loginpage.dashboardHeading).toBeVisible();



})