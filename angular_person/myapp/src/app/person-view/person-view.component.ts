import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PersonComponent } from '../person/person.component';

@Component({
  selector: 'app-person-view',
  templateUrl: './person-view.component.html',
  styleUrls: ['./person-view.component.scss']
})
export class PersonViewComponent implements OnInit {
  recData: any;

  constructor(public dialogREf:MatDialogRef<PersonComponent>,
    @Inject(MAT_DIALOG_DATA) public data:any,){ this.recData=data}     

  ngOnInit(): void {
    console.log(this.recData );
    // for (var document of this.recData.document){
    //   console.log("mydoc",document)
    // }
  }

}
