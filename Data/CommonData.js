const {expect} = require ('@playwright/test');


class CommonData{

constructor(page) {


    this.page = page;
    this.appURL= 'https://demoqa.com/'
    this.username = 'safaljaulkar';
this.password = 'Test@123';  
this.firstname = 'Safal';
this.lastname = 'Jaulkar';
this.fullName = 'Safal jaulkar'
this.email='safalj@yopmail.com'
 this.mobileNumber = '9895656544';
 this.currentAddress = 'Great nag road, Newyork'
 this.permanantAddeess = 'Gound back side, Newyork'



}

}
module.exports = {CommonData}