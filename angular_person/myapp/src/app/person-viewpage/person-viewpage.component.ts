import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FileUploadService } from '../services/file-upload.service';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-person-viewpage',
  templateUrl: './person-viewpage.component.html',
  styleUrls: ['./person-viewpage.component.scss']
})
export class PersonViewpageComponent implements OnInit {
  params:any;
  persons:any[]=[];
  myData:any;
  file: any;

  constructor(private activatedRoute:ActivatedRoute, private service:PersonService,private fileUploadService: FileUploadService) { }

  ngOnInit(): void {
    this.params = this.activatedRoute.snapshot.params['id'];
    //  console.log(this.params)
     this.getList();
  }

  getList(){
    this.service.list().subscribe(response => {
      this.persons=Object(response).data;
      
      for( let person of this.persons) {
        if(person.person_id == this.params) {
          this.myData=person;
        console.log("myDAta=>",this.myData.get_documents)
        }
      }
      // console.log(this.persons)
    // this.dataSource=new MatTableDataSource(this.persons);

    });
    // console.log(this.persons)
   
  }

  onFilechange(event: any,) {
    console.log(event.target.files[0])
    this.file = event.target.files[0]

  }

  uploadFile() {
    if (this.file){
      // console.log(row);
      this.fileUploadService.uploadFile(this.myData,this.file).subscribe(resp => {
        // alert("Uploaded")
      })
    }
  } 

}
