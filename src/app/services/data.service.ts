import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from '../model/product';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private apiUrl = 'https://fakestoreapi.com/products';

  constructor(private http: HttpClient) { }

  fetchDataTwo(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '?limit=2');
  }

  fetchDataThree(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '?limit=3');
  }

  fetchDataFour(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '?limit=4');
  }

  fetchDataSix(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '?limit=6');
  }

  fetchDataFilter(string: string): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl + '/category/' + string);
  }
}
