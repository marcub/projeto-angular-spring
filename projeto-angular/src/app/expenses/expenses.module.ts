import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { ExpensesRoutingModule } from './expenses-routing.module';
import { ExpensesComponent } from './expenses/expenses.component';
import { AppMaterialModule } from '../shared/app-material/app-material.module';




@NgModule({
  declarations: [
    ExpensesComponent
  ],
  imports: [
    CommonModule,
    ExpensesRoutingModule,
    AppMaterialModule
  ]
})
export class ExpensesModule { }
