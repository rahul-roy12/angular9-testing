import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MyserviceService} from './myservice.service';
import { FormGroup, FormControl,FormBuilder,Validators,FormArray } from '@angular/forms';
import { signfrm } from './signfrm';
import {BookService} from './book.service';
import {Book} from './book';
import * as $ from 'jquery';
@Component({ 
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[MyserviceService]
})

export class AppComponent {
  title = 'angular9';
  text:string;
  students:any[];
  signform:FormGroup; 
  addrow:FormGroup;
  bookFrm:FormGroup;
  fname:string='';
  lname:string='';
  firstname:string='';
  lasttname:string='';
  mybooks:Book[];
  datasaved=false;
  bookIdtoupdate=null;

  constructor(private router:Router, private myservice:MyserviceService,
    private formBuilder:FormBuilder, private bookservice:BookService){
    
      this.signform=formBuilder.group({
        fname:['',Validators.required],
        lname:['',Validators.required],
      });

      this.bookFrm=formBuilder.group({
        id:['',Validators.required],
        name:['',Validators.required],
        category:['',Validators.required],
      });


    this.students=[
    {
      id:1,
      name:'Richa',
      age:24,
      course:'BCA'
    },

    {
      id:2,
      name:'Rahul',
      age:24,
      course:'M Tech'
    },
    {
      id:3,
      name:'Priya',
      age:22,
      course:'BCA'
    },
    {
      id:4,
      name:'Virat',
      age:30,
      course:'B.Tech'
    },

  ]
  }

  getmorestudents():void{
    this.students=[
      {
        id:1,
        name:'Richa',
        age:24,
        course:'BCA'
      },
  
      {
        id:2,
        name:'Rahul',
        age:24,
        course:'M Tech'
      },
      {
        id:3,
        name:'Priya',
        age:22,
        course:'BCA'
      },
      {
        id:4,
        name:'Virat',
        age:30,
        course:'B.Tech'
      },
      {
        id:5,
        name:'Rohit',
        age:30,
        course:'B.Tech'
      }
    ]
  }

trackbyStudentId(index, student):string{
  return student.id;
}

countryDetails:any[]=[
{
  country:'INDIA',
  people:[
  {
    name:'Rahul', 
  },
  {
    name:'Richa'
  },
  {
    name:'Jannat'
  }
]
},

{
  country:'USA',
  people:[
  {
    name:'John', 
  },
  {
    name:'Sarica'
  },
  {
    name:'Jasmin'
  }
]
},
]

pepoles:any[]=[
  {
    "country":'India',
    "name":'Riya',
  },
  {
    "country":'UK',
    "name":'John',
  },
  {
    "country":'USA',
    "name":'abs',
  },
  {
    "country":'India',
    "name":'Riya',
  },
  {
    "country":'UK',
    "name":'azf',
  },
]
getcolor(country){
  switch(country){
    case 'India':
      return 'red';
    case 'UK':
      return 'green';
    case 'USA':
      return 'blue';
  }
    
}

towwaydata="Rahul";
dataModel = "Richa";

employ:any[] = [
  {
    name:"ajeet", gender:'male'
  },

  {
    name:"Adarsh", gender:'male'
  },

  {
    name:"Tanu", gender:'female'
  },

  {
    name:"Abhi", gender:'male'
  },

  {
    name:"Richa", gender:'female'
  },

]

gotostudent(){
    this.router.navigate(['/student']);
}

ngOnInit(){
  $(document).ready(function(){
    $('#test_jq').click(function(){
      console.log('yes clicked');
    });
  });

  this.text = this.myservice.display();
  this.signform.get('fname').valueChanges.subscribe(
    fname=>{
      console.log('fname changes ' +fname);
    } 
  )

this.signform.valueChanges.subscribe((frmdata:signfrm)=>{
    console.log('fname '+ frmdata.fname);
    console.log('lname '+ frmdata.lname);
});

// this.addrow = this.formBuilder.group({
//   itemRows:this.formBuilder.array([this.initiemRow()]),
// });
// }

// initiemRow(){
//   return this.formBuilder.group({
//     firstname:[''],
//     lastname:['']
//   })

this.getBooks();

 }


register(regData:any){
  var fname=regData.value.name;
  console.log(fname);
}

postData(signform:any){
  console.log(signform.value);
}

getBooks(){
  this.bookservice.getbookfromstore().subscribe(book1=>this.mybooks=book1);
}

addBook(){
  let book = this.bookFrm.value;
  if(this.bookIdtoupdate == null){
    this.insertbook(book);
  }else{
    book.id = this.bookIdtoupdate;
    this.bookservice.updateBook(book).subscribe(book=>{
      this.getBooks();
      this.datasaved=true;
      this.bookIdtoupdate=null;

    });

  }
  
  this.bookFrm.reset();
}

insertbook(book:Book){
  this.bookservice.insertBook(book).subscribe(book=>{
    this.getBooks();
    this.datasaved=true;
    this.bookIdtoupdate=null;
  });
}

editBook(bookid){
  //console.log(bookid);
  this.getBookById(bookid);
}

getBookById(bookid){
  this.bookservice.getBookbyId(bookid).subscribe(book=>{
    console.log(book);
    this.bookIdtoupdate=bookid;
    this.bookFrm.controls['id'].setValue(book.id);
    this.bookFrm.controls['name'].setValue(book.name);
    this.bookFrm.controls['category'].setValue(book.category);
  })
}

delBook(bid){
  this.bookservice.deleteBook(bid).subscribe(book=>{
       console.log(book);
      this.getBooks();
  });
}

}
