import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModelComponent, ModelBottomSheetComponent } from './model.component';
import { MaterialModule } from '../modules/material.module';
import { HttpClientModule } from "@angular/common/http";

import { FontAwesomeModule, FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';



@NgModule({
  declarations: [
    ModelBottomSheetComponent,
    ModelComponent,
  ],
  entryComponents: [
    ModelBottomSheetComponent,
  ],
  exports: [
    ModelBottomSheetComponent,
    ModelComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    FontAwesomeModule,
    HttpClientModule,
  ],
})
export class ModelModule {
  constructor(
    private library: FaIconLibrary,
  ) {
    library.addIconPacks(fas);
  }
 }
