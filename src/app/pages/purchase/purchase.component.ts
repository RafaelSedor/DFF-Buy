import { Component } from '@angular/core';
import { TesteComponent } from '../../Components/teste/teste.component';
import { Teste2Component } from '../../Components/teste2/teste2.component';

@Component({
  selector: 'app-purchase',
  standalone: true,
  imports: [TesteComponent, Teste2Component],
  templateUrl: './purchase.component.html',
  styleUrl: './purchase.component.css'
})
export class PurchaseComponent {

}
