import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ModelService {
  public data: any = {
    'module_name': 'nestmlmodule',
    'models': [],
  };
  public selectedModel: any = {};
  public status: string = 'ready';

  constructor(
    private http: HttpClient,
  ) { }

  reset(): void {
    this.data = {
      'module_name': 'nestmlmodule',
      'models': [],
    };
    this.selectedModel = {};
    this.status = 'ready';
  }


  install() {
    var urlRoot = 'http://localhost:5000';
    this.status = 'install';
    this.http.post(urlRoot + '/script/model/install', this.data).subscribe(res => {
      this.status = res['response'].status == 'ok' ? 'success' : 'failed';
      setTimeout(() => this.status = 'ready', 2000)
      console.log('res', res)
    }, error => {
      this.status = 'failed';
      setTimeout(() => this.status = 'ready', 2000)
      console.log('error', error)
    })
  }
}
