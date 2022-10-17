import { Component, OnInit } from '@angular/core';
import { PersonService } from '../services/person.service';
import { IPerson } from './person';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit {

  // private persons = <IPerson[]>{};
  persons:any[]=[];

  constructor(private service:PersonService) { }

  ngOnInit(): void {
    this.getList();

  }
  getList(){
    this.service.list()
    .subscribe(response => {
      this.persons=Object(response).data;
      console.log(this.persons)
    });
      
   
  }
  


}
