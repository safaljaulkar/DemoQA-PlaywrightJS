const { expect } = require('@playwright/test')



class ElementData{

constructor (page){

this.page=page;
this.fullName = 'Safal jaulkar'
this.email='safalj@yopmail.com'
this.currentAddress = 'Geeat nag road, Newyork'
this.permanantAddeess = 'Gound back side, Newyork'


}
}

module.exports = { ElementData };
