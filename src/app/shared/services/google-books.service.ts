import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { Product } from '../models';

@Injectable()
export class GoogleBooksService {
  private API_PATH = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) {}

  searchBooks(queryTitle: string): Observable<Product[]> {
    return this.http
      .get<{ items: Product[] }>(`${this.API_PATH}?orderBy=newest&q=${queryTitle}`)
      .pipe(map((books) => books.items || []));
  }

  retrieveBook(volumeId: string): Observable<Product> {
    return this.http.get<Product>(`${this.API_PATH}/${volumeId}`);
  }
}
