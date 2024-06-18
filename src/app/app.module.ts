import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { PurchasedComponent } from './pages/purchased/purchased.component';
import { DetailsComponent } from './pages/details/details.component';
import { HttpClientModule } from '@angular/common/http';
import { PurchasedTableComponent } from './components/purchased-table/purchased-table.component';
import { EditComponent } from './pages/edit/edit.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { ContactComponent } from './pages/contact/contact.component';
import { PurchaseComponent } from './pages/purchase/purchase.component';
import { ShoppingTableComponent } from './components/shopping-table/shopping-table.component';
import { ShoppingFormComponent } from './components/shopping-form/shopping-form.component';
import { RegisterComponent } from './pages/register/register.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    PurchaseComponent,
    PurchasedComponent,
    ShoppingTableComponent,
    DetailsComponent,
    RegisterComponent,
    ShoppingFormComponent,
    PurchasedTableComponent,
    EditComponent,
    SpinnerComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
