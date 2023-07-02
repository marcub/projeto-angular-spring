import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Expense } from '../model/expense';
import { delay, first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private readonly API = 'api/expenses';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Expense[]>(this.API)
    .pipe(
      first(),
      delay(1000),
      tap(expenses => console.log(expenses))
      );
  }
}
