import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import {Book} from './book';

@Injectable({
  providedIn: 'root'
}) 
export class BookService {
  bookUrl:any='/api/book';
  constructor(private http:HttpClient) {}
  insertBook(book:Book):Observable<Book>{
    let httpHeader = new HttpHeaders().set('Content-Type', 'application/json');
    let options={
      headers:httpHeader
    };

    return this.http.post<Book>(this.bookUrl,book,options);
  }

  getbookfromstore():Observable<Book[]>{
    return this.http.get<Book[]>(this.bookUrl);
  }

  getBookbyId(bid):Observable<Book>{
    console.log(bid);
    return this.http.get<Book>(this.bookUrl+'/'+bid);
  }

  updateBook(book:Book):Observable<number>{
    let httpHeader = new HttpHeaders().set('Content-Type', 'application/json');
    let options={
      headers:httpHeader
    };

    return this.http.put<number>(this.bookUrl+'/'+book.id,book,options);
  }

  deleteBook(bookid:string):Observable<number>{
  
    return this.http.delete<number>(this.bookUrl+'/'+bookid);
  }

}
