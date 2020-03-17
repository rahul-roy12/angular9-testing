import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {
  message:any;
  count:number=0;
  constructor() { }

  increaseByone(){
    this.count=this.count+1;
    this.message=this.count;
  }

  descreaseByone(){
    this.count=this.count-1;
    this.message=this.count;
  }

  ngOnInit(): void {
  }

}
