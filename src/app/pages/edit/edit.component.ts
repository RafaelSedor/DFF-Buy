import {Component} from '@angular/core';
import {Products} from "../../interfaces/Products";
import {Location} from '@angular/common';
import {ActivatedRoute} from "@angular/router";
import {ProductsService} from "../../services/Products.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  id: string | number | null
  location: any
  data!: Products;
  isDataLoaded: boolean = false;

  constructor(private route: ActivatedRoute, private router: Router, private wishService: ProductsService, location: Location) {
    this.id = this.route.snapshot.paramMap.get('id')
    this.location = location
    this.router = router
  }

  async ngOnInit() {
    await this.fetchItem()
  }

  async fetchItem() {
    (await this.wishService.getProduct(this.id))
      .subscribe((shopping: Products) => {
        this.data = shopping
        this.isDataLoaded = true;
      })
  }

  async onSubmit(form: Products) {
    if (!form.id) {
      return
    }
    (await this.wishService.editProducts(form.id, {...form, Status: false})).subscribe({
      next: () => this.router.navigate(['']),
      error: (e) => console.error('Erro ao editar desejo:', e)
    });
  }

  back(): void {
    this.location.back()
  }
}
