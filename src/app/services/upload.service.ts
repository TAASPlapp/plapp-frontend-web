import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadService {
  SERVER_URL: string = "https://plapp-resource-service.herokuapp.com/";
  constructor(private httpClient: HttpClient) { }

  public upload(formData) {
    return this.httpClient.post<any>(this.SERVER_URL, formData, {
      reportProgress: true,
      observe: 'events'
    });
  }

}
