import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import { Location } from '@angular/common';
import {ProductsService} from "../../services/Products.service";
import {Products} from "../../interfaces/Products";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent {
  id: string | number | null
  location: any
  data!: Products;
  isDataLoaded: boolean = false;

  constructor(private route: ActivatedRoute, location: Location, private productsService: ProductsService) {
    this.id = this.route.snapshot.paramMap.get('id')
    this.location = location
  }

  async ngOnInit() {
    await this.fetchItem()
  }

  async fetchItem() {
    (await this.productsService.getProduct(this.id))
      .subscribe((shopping: Products) => {
        this.data = shopping
        this.isDataLoaded = true;
      })
  }

  back(): void {
    this.location.back()
  }
}
