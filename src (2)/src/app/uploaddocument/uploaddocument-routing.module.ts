import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploaddocumentComponent } from './uploaddocument/uploaddocument.component';
import { UploaddocumentsComponent } from './uploaddocuments/uploaddocuments.component';

const routes: Routes = [
  {
    path: '',
    component: UploaddocumentComponent,
    children: [
      {
        path: 'uploaddocuments',
        component: UploaddocumentsComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UploaddocumentRoutingModule {}
