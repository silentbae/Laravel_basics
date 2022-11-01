import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { FileUploadService } from '../services/file-upload.service';
import { PersonService } from '../services/person.service';
import { IPerson } from './person';
import { Route, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { PersonViewComponent } from '../person-view/person-view.component';


@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})

export class PersonComponent implements OnInit {

  // private persons = <IPerson[]>{};
  persons:any[]=[];
  file:  any;
  data ="";
  mydoc: any;

  displayedColumns:string[]= ['First','Last','Email','House','Address Type','Location','Land Mark','Phone Type','Phone','Action',];
  dataSource!: MatTableDataSource<any>;
  constructor(private service:PersonService,private fileUploadService: FileUploadService,private route:Router,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getList();
    // this.dataSource=new MatTableDataSource(this.persons);
      // console.log(this.persons)

    // console.log(this.dataSource)

  }
  getList(){
    this.service.list().subscribe(response => {
      this.persons=Object(response).data;
      console.log(this.persons)
    this.dataSource=new MatTableDataSource(this.persons);

    });
    // console.log(this.persons)
   
  }
  // public uploadFile(row: any, index:any) {
  //   console.log(row, index);
    

  // }
  onFilechange(event: any,) {
    console.log(event.target.files[0])
    this.file = event.target.files[0]

  }
  
  uploadFile(row:any,index:any) {
    // console.log(row, index);
    if (this.file){
      console.log(row);
      this.fileUploadService.uploadFile(row,this.file).subscribe(resp => {
        // alert("Uploaded")
      })
    } 
    // else {
    //   alert("Please select a file first")
    // }
    
  } 
  viewButton(row:any,index:any){
    // this.route.navigate(['/personview'],this.data=row);
    // this.fileUploadService.uploadFile(row,this.file).subscribe(resp => {
    // })
    // console.log(row.person_id);
    // this.data = row;
    // console.log(this.data);
      // console.log("myDoc",row.get_documents)
    let  i=0;
// for (let i in row.get_documents ){
  // console.log("myDoc",row.get_documents[i].document_name)
  // console.log(i)
  //  myDoc=row.get_documents[i].document_name;

// }

    // const dialogRef = this.dialog.open(PersonViewComponent,{
    //   width:'500px',
    //   data:{id:row.person_id,firstname:row.first_name,lastname:row.last_name,email:row.email,phone:row.get_phone[0].ph_number,phone_type:row.get_phone[0].contact_number_type_value,house_type:row.get_address[0].address_type_value,house_name:row.get_address[0].house_name,location:row.get_address[0].location,landmark:row.get_address[0].land_mark,documents:row.get_documents}
    // });
    this.route.navigate(['/viewpage/'+row.person_id]);
  }



}
