const { expect } = require('@playwright/test')



class RegisterData{

constructor (page){

this.page=page;
this.firstname = 'Safal';
this.lastname = 'Jaulkar';
this.username='safaljaulkar'
this.password = 'Test@123'





}
}

module.exports = { RegisterData };
