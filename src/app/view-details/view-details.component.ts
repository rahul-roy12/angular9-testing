import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from '../book';

@Component({
  selector: 'app-view-details',
  templateUrl: './view-details.component.html',
  styleUrls: ['./view-details.component.css']
})
export class ViewDetailsComponent implements OnInit {
  bdetails:Book;
  constructor(private route:ActivatedRoute, private bookservice:BookService) { }

  ngOnInit(): void {
    //var id = parseInt(this.route.snapshot.params.id);
    // var id = parseInt(this.route.snapshot.paramMap.get('id'));
    // console.log('id='+id);
    // this.bookservice.getBookbyId(id).subscribe(book=>{
    //   this.bdetails = book
    // })

    this.route.paramMap.subscribe(params=>{
      var id = params.get('id');
      console.log('obs:'+id);
      this.bookservice.getBookbyId(id).subscribe(book =>this.bdetails = book)

    });


  }

}
