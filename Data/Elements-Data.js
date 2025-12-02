const { expect } = require('@playwright/test')



class ElementData{

constructor (page){

this.page=page;
this.fullName = 'Safal jaulkar'
this.email='safalj@yopmail.com'
this.currentAddress = 'Great nag road, Newyork'
this.permanantAddeess = 'Gound back side, Newyork'
this.age = "26"
this.salary =  "5000"
this.department = 'IT'




}
}

module.exports = { ElementData };
