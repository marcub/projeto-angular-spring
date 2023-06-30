import { ExpensesService } from './../services/expenses.service';
import { Expense } from './../model/expense';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  expenses$: Observable<Expense[]>;
  displayedColumns = ['description', 'category'];

  constructor(private expensesService: ExpensesService) {
    this.expenses$ = this.expensesService.list();
   }

  ngOnInit(): void {
  }

}
