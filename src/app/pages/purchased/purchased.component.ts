import { Component } from '@angular/core';
import { ProductsService } from '../../services/Products.service';
import { Router } from '@angular/router';
import { Products } from '../../interfaces/Products';
@Component({
  selector: 'app-purchased',
  templateUrl: './purchased.component.html',
  styleUrls: ['./purchased.component.css'],
})
export class PurchasedComponent {
  data: Products[] = [];
  search: string = '';
  loading: boolean = true;

  constructor(private productsService: ProductsService, private router: Router) {}

  async ngOnInit() {
    await this.fetchItems();
  }

  async onSearchChange() {
    await this.fetchItems();
  }

  async fetchItems() {
    this.loading = true;
    const params: any = { Status: true };
    if (this.search) {
      params['Name'] = this.search;
    }
    (await this.productsService.getProducts(params)).subscribe({
      next: (shopping: Products[]) => (this.data = shopping),
      error: (e) => console.error(e),
      complete: () => (this.loading = false),
    });
  }

  showItem(id: string | number) {
    this.router.navigate(['shopping', id]);
  }

  async deleteItem(id: string | number) {
    (await this.productsService.deleteProducts(id)).subscribe(() => {
      this.fetchItems();
    });
  }
}
