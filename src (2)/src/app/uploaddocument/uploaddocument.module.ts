import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploaddocumentRoutingModule } from './uploaddocument-routing.module';
import { UploaddocumentComponent } from './uploaddocument/uploaddocument.component';
import { UploaddocumentsComponent } from './uploaddocuments/uploaddocuments.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [UploaddocumentComponent, UploaddocumentsComponent],
  imports: [
    CommonModule,
    UploaddocumentRoutingModule,
    ReactiveFormsModule,
    FormsModule,
  ],
})
export class UploaddocumentModule {}
