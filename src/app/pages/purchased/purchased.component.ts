import { Component } from '@angular/core';
import { MainPurchasedComponent } from '../../components/main-purchased/main-purchased.component';

@Component({
  selector: 'app-purchased',
  standalone: true,
  imports: [MainPurchasedComponent],
  templateUrl: './purchased.component.html',
  styleUrl: './purchased.component.css'
})
export class PurchasedComponent {

}
