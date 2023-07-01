import { ExpensesService } from './../services/expenses.service';
import { Expense } from './../model/expense';
import { Component, OnInit } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialogComponent } from 'src/app/shared/components/error-dialog/error-dialog.component';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.component.html',
  styleUrls: ['./expenses.component.scss']
})
export class ExpensesComponent implements OnInit {

  expenses$: Observable<Expense[]>;
  displayedColumns = ['description', 'category'];

  constructor(
    private expensesService: ExpensesService,
    public dialog: MatDialog
    ) {
    this.expenses$ = this.expensesService.list()
    .pipe(
      catchError(error => {
        this.onError('Erro ao carregar lista de despesas.');
        return of([])
      })
    );
   }

   onError(errorMsg: string) {
    this.dialog.open(ErrorDialogComponent, {
      data: errorMsg,
    });
  }

  ngOnInit(): void {
  }

}
