import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import { ModelService } from './model.service';


@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
  @ViewChild('fileInput', {static: false}) fileInput: ElementRef;
  public blocks: string[] = ['state', 'initial_values', 'equations', 'parameters', 'internals', 'input', 'output', 'update']
  public data: any = {};

  constructor(
    private _modelService: ModelService,
  ) { }

  ngOnInit() {
    // this.data = require('./models/iaf_psc_alpha_json.json');
  }

  onSubmit() {
    this._modelService.install(this.data)
  }

  handleFileInput(event) {
    const selectedFile = event.target.files[0];
    const fileReader = new FileReader();
    fileReader.readAsText(selectedFile, "UTF-8");
    fileReader.onloadend = () => {
      this.data = JSON.parse(fileReader.result as string)
      this.fileInput.nativeElement.value = '';
    }
    fileReader.onerror = (error) => {
      console.log(error);
    }
  }

  reset() {
    this.data = {};
  }

}
