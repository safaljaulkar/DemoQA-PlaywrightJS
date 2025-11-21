const { expect } = require('@playwright/test')



class LoginData{

constructor (page){

this.page=page;
this.appURL= 'https://demoqa.com/'
this.profileURL = 'https://demoqa.com/profile'
this.verifyuser = 'safaljaulkar'




}
}

module.exports = { LoginData };
