import { NgModule } from '@angular/core';
import { headerroute } from './header/header-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header/header.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'header',
    pathMatch: 'full',
  },
  {
    path: 'header',
    component: HeaderComponent,
    children: headerroute,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
