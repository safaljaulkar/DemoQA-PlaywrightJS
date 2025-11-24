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
this.password = 'Safal@12345';              



}
}

module.exports = { BookStoreData };
