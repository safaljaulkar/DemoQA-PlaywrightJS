const { expect } = require('@playwright/test')



class BookStoreData{

constructor (page){

this.page=page;
this.profileURL = 'https://demoqa.com/profile'
this.verifyuser = 'safaljaulkar'
this.username = 'safaljaulkar';
this.password = 'Test@123';              



}
}

module.exports = { BookStoreData };
