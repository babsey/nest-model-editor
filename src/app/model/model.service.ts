import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModelService {

  constructor(
    private http: HttpClient,
  ) { }

  install(data) {
    var urlRoot = 'http://localhost:5000';

    this.http.post(urlRoot + '/script/model/install', data).subscribe(res => {
      console.log('res', res)
    }, error => {
      console.log('error', error)
    })
  }
}
