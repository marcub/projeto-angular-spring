import { Expense } from './../model/expense';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  expenses: Expense[] = [
    {_id: '1', description: 'Casas Bahia', category: 'Eletrodomésticos'}
  ];
  displayedColumns = ['description', 'category'];

  constructor() {
   }

  ngOnInit(): void {
  }

}
