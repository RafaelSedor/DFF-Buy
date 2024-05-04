import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Products} from "../../interfaces/Products";

@Component({
  selector: 'app-shopping-table',
  templateUrl: './shopping-table.component.html',
  styleUrls: ['./shopping-table.component.css']
})

export class ShoppingTableComponent {
  @Input() products: Products[] = []
  @Output() show = new EventEmitter<string | number>()
  @Output() edit = new EventEmitter<string | number>()
  @Output() check = new EventEmitter<string | number>()
  @Output() delete = new EventEmitter<string | number>()
}

