import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FileUploadService } from '../services/file-upload.service';

@Component({
  selector: 'app-dsw-documents',
  templateUrl: './dsw-documents.component.html',
  styleUrls: ['./dsw-documents.component.scss']
})
export class DswDocumentsComponent implements OnInit {

  constructor(private fileUploadService: FileUploadService) { }
  
  file:  any;



  ngOnInit(): void {
  }


  onFilechange(event: any) {
   console.log(event.target.files[0])
   this.file = event.target.files[0]
 }
 
 upload() {
   if (this.file) {
     this.fileUploadService.uploadfile(this.file).subscribe(resp => {
       alert("Uploaded")
     })
   } else {
     alert("Please select a file first")
   }
 }
}
