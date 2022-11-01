import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {

  constructor(private httpClient: HttpClient) { }
  data=[];
  public uploadFile(myDAta:any,file: File) {
    let formParams = new FormData();
    formParams.append('file', file)
    formParams.append('person_id', myDAta.person_id)
    // formParams.append('document_id', '5')
    formParams.append('document_type', '5')
    formParams.append('upload_date', '2022-10-19')
    formParams.append('expiry_date', '2022-12-31')
    // this.data=row;

    return this.httpClient.post('http://127.0.0.1:8000/api/fileupload', formParams);
    
  }
  
}
