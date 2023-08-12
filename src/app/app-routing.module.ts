import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UserDetailsComponent } from './user-details/user-details.component';

const routes: Routes = [
  { path: 'user', component: UserDetailsComponent },
  { path: '', component: UserDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})


export class AppRoutingModule { }
