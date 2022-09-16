import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './UI/pages/guest/login/login.component';
import { GuestComponent } from './UI/templates/guest/guest.component';

const routes: Routes = [
  {
    path: "guest",
    component: GuestComponent,
    children: [
      { path: "login", component: LoginComponent },
      { path: "", redirectTo: "login", pathMatch: "full" },
    ],
  },
  { path: "", redirectTo: "guest", pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
