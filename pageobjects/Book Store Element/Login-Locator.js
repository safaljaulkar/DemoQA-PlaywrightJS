const { expect } = require('@playwright/test')

class LoginLocator{

constructor(page){

this.page=page;
this.locBookStoreApplication = page.getByText('Book Store Application');
this.locLogin =  page.locator('#login');
this.locLoginButton = page.locator('#login');
this.locToolsQATitle = page.locator("img[src='/images/Toolsqa.jpg']");
this.locVerifyUser=page.locator ('#userName-value')
this.locLogoutButton = page.locator('#submit')


//h5[contains(text(),"Book Store Application")]';


}





}
module.exports = { LoginLocator };
