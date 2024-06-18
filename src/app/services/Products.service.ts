import {Injectable} from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Products} from "../interfaces/Products";

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private apiUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) { }

  async getProducts(params?: any): Promise<Observable<Products[]>> {
    return this.http.get<any[]>(this.apiUrl, {params});
  }

  async getProduct(id: number | string | null): Promise<Observable<Products>> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  async createProducts(products: Products): Promise<Observable<any>> {
    return this.http.post<any>(this.apiUrl, products);
  }

  async editProducts(id: number | string | null, products: Products): Promise<Observable<any>> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, products);
  }

  async markAsReady(id: number | string | null): Promise<Observable<any>> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, { Status: 'true' });
  }

  async deleteProducts(id: number | string | null): Promise<Observable<any>> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}