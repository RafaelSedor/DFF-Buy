import {Component} from '@angular/core';
import {ProductsService} from "../../services/Products.service";
import {Router} from "@angular/router";
import {Products} from "../../interfaces/Products";

@Component({
  selector: 'app-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.css'],
})
export class PurchaseComponent {
  data: Products[] = []
  search: string = '';
  loading: boolean = true;

  constructor(private productsService: ProductsService, private router: Router) {
  }


  async ngOnInit() {
      await this.fetchItems()
  }

  async onSearchChange() {
      await this.fetchItems();
  }

  async fetchItems() {
      this.loading = true
      const params: any = {Status: false};
      if (this.search) {
          params['Name'] = this.search;
      }
      (await this.productsService.getProducts(params))
          .subscribe({
              next: (shopping: Products[]) => this.data = shopping,
              error: (err) => console.error('Erro ao buscar', err),
              complete: () => this.loading = false
          })
  }

  showItem(id: string | number) {
      this.router.navigate(['shopping', id])
  }

  async checkItem(id: string | number) {
      (await this.productsService.markAsReady(id))
          .subscribe({
              next: () => this.fetchItems(),
              error: (err) => console.error('Erro ao alterar', err)
          })
  }

  editItem(id: string | number) {
      this.router.navigate(['shopping', id, 'edit'])
  }

  async deleteItem(id: string | number) {
      (await this.productsService.deleteProducts(id))
          .subscribe({
              next: () => this.fetchItems(),
              error: (err) => console.error('Erro ao remover', err)
          })
  }
}
