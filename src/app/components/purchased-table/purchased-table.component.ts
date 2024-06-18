import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Products} from "../../interfaces/Products";

@Component({
  selector: 'app-purchased-table',
  templateUrl: './purchased-table.component.html',
  styleUrls: ['./purchased-table.component.css']
})
export class PurchasedTableComponent {
  @Input() items: Products[] = []
  @Output() show = new EventEmitter<string | number>()
  @Output() delete = new EventEmitter<string | number>()
}
