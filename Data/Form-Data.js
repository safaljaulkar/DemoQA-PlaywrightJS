import { test, expect } from '@playwright/test';

class FormData {

    constructor(page) {
        this.page = page;

        this.mobileNumber = '9895656544';
        this.emailId = 'safalj@yopmail.com';
        this.year = '1997';
        this.month = 'September';
        this.date = '28';
        this.subject1 = 'Math';
        this.subject2 = 'English';
        this.subject3 = 'Science';
        this.selectedFile = 'C:\Users\admin\Downloads\pexels-lilartsy-1213447.jpg'
        this.CurrentAddress = 'Ring Road, Newyork'
    }

}
module.exports = { FormData }