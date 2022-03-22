import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const headerroute: Routes = [
  {
    path: 'uploaddocument',
    loadChildren: () =>
      import('src/app/uploaddocument/uploaddocument.module').then(
        (module) => module.UploaddocumentModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(headerroute)],
  exports: [RouterModule],
})
export class HeaderRoutingModule {}
