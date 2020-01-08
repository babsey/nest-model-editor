import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModelComponent } from './model.component';
import { MaterialModule } from '../modules/material.module';
import { HttpClientModule } from "@angular/common/http";



@NgModule({
  declarations: [ModelComponent],
  exports: [
    ModelComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    HttpClientModule,
  ],
})
export class ModelModule { }
