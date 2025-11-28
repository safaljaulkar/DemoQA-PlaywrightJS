const { expect } = require('@playwright/test')



class BookStoreData{

constructor (page){

this.page=page;
this.appURL= 'https://demoqa.com/'
this.profileURL = 'https://demoqa.com/profile'
this.verifyuser = 'safaljaulkar'
this.firstname = 'Safal';
this.lastname = 'Jaulkar';
this.username = 'safaljaulkar';
this.password = 'Test@123';              



}
}

module.exports = { BookStoreData };
