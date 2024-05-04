import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PurchaseComponent} from "./pages/purchase/purchase.component";
import {PurchasedComponent} from "./pages/purchased/purchased.component";
import {DetailsComponent} from "./pages/details/details.component";
import {RegisterComponent} from "./pages/register/register.component";
import {EditComponent} from "./pages/edit/edit.component";
import {simpleGuardGuard} from "./guards/simple-guard.guard";
import {ContactComponent} from "./pages/contact/contact.component";

const routes: Routes = [
  {
    path: '',
    component: PurchaseComponent,
    children: [
      { path: 'contact', component: ContactComponent }
    ]
  },
  { path: 'shopping/create', component: RegisterComponent },
  { path: 'shopping/:id', component: DetailsComponent },
  { path: 'shopping/:id/edit', component: EditComponent },
  { path: 'purchased', component: PurchasedComponent, canActivate: [simpleGuardGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
