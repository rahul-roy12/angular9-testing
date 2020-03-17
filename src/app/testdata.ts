import {InMemoryDbService} from 'angular-in-memory-web-api';

export class Testdata implements InMemoryDbService{
    createDb(){
        let bookDetails = [
            {id:'100', name:'PHP book', category:'Web Application'},
            {id:'101', name:'Angular book', category:'Mobile Application'},
            {id:'102', name:'QA Testin book', category:'Testing'},
        ]
        
        return {book:bookDetails};
    }
}