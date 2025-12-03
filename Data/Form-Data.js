import { test, expect } from '@playwright/test';

class FormData {

    constructor(page) {
        this.page = page;
        this.year = '1997';
        this.month = 'September';
        this.date = '28';
        this.subject1 = 'Math';
        this.subject2 = 'English';
        this.subject3 = 'Science';
        this.selectedFile = 'C:\Users\admin\Downloads\pexels-lilartsy-1213447.jpg'
      
    }

}
module.exports = { FormData }