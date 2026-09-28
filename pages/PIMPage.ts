import{Page,Locator} from '@playwright/test';

export class PIMPage{

 readonly page:Page;

 constructor(page:Page){
    this.page = page;
}

    get pimlink():Locator{
        return  this.page.getByRole('link',{name:'PIM'});

    }

    get pimHeading():Locator{
        return this.page.getByRole('heading',{name:'PIM'});
    }

    get addButton():Locator{
        return this.page.getByRole('button',{name:'Add'});
    }

    get employeeFullNameText():Locator{
        return this.page.getByText('Employee Full Name');
    }
    get firstNameField():Locator{
        return this.page.getByPlaceholder('First Name');
    }
    get middleNameField():Locator{
        return this.page.getByPlaceholder('Middle Name');
    }
    get LastNameField():Locator{
        return this.page.getByPlaceholder('Last Name');
    }
    get employeeIDField():Locator{
        return this.page.locator('.oxd-input-group').filter({has:this.page.locator('label',{hasText:'Employee Id'})}).locator('.oxd-input.oxd-input--active');
    }
    get saveButton():Locator{
        return this.page.getByRole('button',{name:'Save'});
    }

    async addEmployee(firstName:string,middleName:string,lastName:string){
       await this.pimlink.click();

        await this.pimHeading.waitFor({state:'visible'});
        await this.addButton.click();
        
        await this.employeeFullNameText.waitFor({state:'visible'});
        await this.firstNameField.fill(firstName);
        await this.middleNameField.fill(middleName);
        await this.LastNameField.fill(lastName);
        const employeeIDValue=await this.employeeIDField.inputValue();
        await this.saveButton.click();

        return employeeIDValue;


    }

}