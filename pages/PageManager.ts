import {LoginPage}from '../pages/LoginPage';
import {PIMPage} from '../pages/PIMPage';
import{Page}from '@playwright/test';


export class PageManager{


readonly page:Page;
readonly loginpage:LoginPage;
readonly pimpage:PIMPage;

constructor(page:Page){

    this.page=page;
    this.loginpage=new LoginPage(page);
    this.pimpage=new PIMPage(page);
}


}