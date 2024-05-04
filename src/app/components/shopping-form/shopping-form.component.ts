import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Products} from "../../interfaces/Products";

@Component({
  selector: 'app-shopping-form',
  templateUrl: './shopping-form.component.html',
  styleUrls: ['./shopping-form.component.css']
})
export class ShoppingFormComponent {
  @Input() item: Products = {
    Name: '',
    Brand: '',
    Amount: '',
    Date: ''
  }
  @Output() submit = new EventEmitter<Products>()

  model: Products = {
    Name: '',
    Brand: '',
    Amount: '',
    Date: ''
  }

  ngOnInit() {
      Object.assign(this.model, this.item)
  }

  onSubmit() {
    this.submit.emit(this.item)
  }
}
