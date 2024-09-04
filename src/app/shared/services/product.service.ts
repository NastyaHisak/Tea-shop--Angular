import { Injectable } from '@angular/core';
import {ProductType} from "../../../types/product.type";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {OrderType} from "../../../types/order.type";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: ProductType[] = [];
  constructor(private http: HttpClient) { }

  getProducts(): Observable<ProductType[]> {
    return this.http.get<ProductType[]>('https://testologia.ru/tea');
  }
  getProduct(id: number): Observable<ProductType> {
    return this.http.get<ProductType>(`https://testologia.ru/tea?id=${id}`);
  }

  createOrder(data: OrderType) {
    return this.http.post<{ success: boolean, message?: string }>(`https://testologia.ru/order-tea`, data);
  }
}

