import { Component, OnInit, ViewChild, ElementRef, ViewEncapsulation } from '@angular/core';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material/bottom-sheet';

import { ModelService } from './model.service';



@Component({
  selector: 'app-model-bottom-sheet',
  templateUrl: './model-bottom-sheet.html',
})
export class ModelBottomSheetComponent {
  @ViewChild('fileInput', { static: false }) fileInput: ElementRef;

  constructor(
    private _bottomSheetRef: MatBottomSheetRef<ModelBottomSheetComponent>,
    private _modelService: ModelService,
  ) { }

  handleFileInput(event: any): void {
    const selectedFile = event.target.files[0];
    event.target.value = '';
    const fileReader = new FileReader();
    fileReader.readAsText(selectedFile, "UTF-8");
    fileReader.onloadend = () => {
      this._modelService.selectedModel = JSON.parse(fileReader.result as string);
      this._modelService.data.models.push(this._modelService.selectedModel);
      this.fileInput.nativeElement.value = '';
      this._bottomSheetRef.dismiss();
    }
    fileReader.onerror = (error) => {
      console.log(error);
    }
  }
}


@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css'],
  encapsulation : ViewEncapsulation.None,
})
export class ModelComponent implements OnInit {
  public blocks: string[] = ['state', 'initial_values', 'equations', 'parameters', 'internals', 'input', 'output', 'update']


  constructor(
    private _bottomSheet: MatBottomSheet,
    public _modelService: ModelService,
  ) { }

  ngOnInit() {
    // this.data = require('../../assets/models/iaf_psc_alpha_json.json');
  }

  add(): void {
    this._bottomSheet.open(ModelBottomSheetComponent);
  }

  summit(): void {
    this._modelService.install()
  }


}
