import {Component} from '@angular/core';
import {Products} from "../../interfaces/Products";
import {Router} from "@angular/router";
import {ProductsService} from "../../services/Products.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent {

  constructor(private router: Router, private productsService: ProductsService) {
  }

  async onSubmit(form: Products) {
    if (!form.Name) {
      console.log(form)
      return
    }
    (await this.productsService.createProducts({...form, Status: false})).subscribe({
      next: () => this.router.navigate(['']),
      error: (e) => console.error('Erro ao criar produto:', e)
    });
  }
}
