import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ExpenseEntryComponent } from './expense-entry/expense-entry.component';
import { ExpenseEntryListComponent } from './expense-entry-list/expense-entry-list.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { AppRoutingModule } from './app-routing.module';

const routes:Routes=[
        {path:'expenses',component:ExpenseEntryListComponent},
        {path:'expenses/detail/:id',component:ExpenseEntryComponent},
        {path:'',redirectTo:'expense',pathMatch:'full'}
];
@NgModule({
    declarations: [
    AppComponent,
    ExpenseEntryComponent,
    ExpenseEntryListComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
