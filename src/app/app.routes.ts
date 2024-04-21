import { Routes } from '@angular/router';
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { PurchasedComponent } from './pages/purchased/purchased.component';

export const routes: Routes = [
    {path: 'purchase', component: PurchaseComponent},
    {path: 'purchased', component: PurchasedComponent}
];
