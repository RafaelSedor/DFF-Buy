import { Component } from '@angular/core';
import { MainPurchaseComponent } from '../../components/main-purchase/main-purchase.component';

@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [ MainPurchaseComponent],
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.css'
})
export class PurchaseComponent {

}
