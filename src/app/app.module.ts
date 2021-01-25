import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { ButtonsModule } from '@progress/kendo-angular-buttons';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { NavigationModule } from '@progress/kendo-angular-navigation';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CommonModule } from '@angular/common';

import { LayoutModule } from '@progress/kendo-angular-layout';
import { IndicatorsModule } from '@progress/kendo-angular-indicators';
import { IconsModule } from '@progress/kendo-angular-icons';
import { DateInputsModule } from '@progress/kendo-angular-dateinputs';
import { LabelModule } from '@progress/kendo-angular-label';
import { InputsModule } from '@progress/kendo-angular-inputs';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { DropDownsModule } from '@progress/kendo-angular-dropdowns';
import { GridModule } from '@progress/kendo-angular-grid';


@NgModule({
  declarations: [AppComponent, AddEmployeeComponent, EmployeeListComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ButtonsModule,
    NavigationModule,
    BrowserAnimationsModule,
    CommonModule,
    LayoutModule,
    IndicatorsModule,
    IconsModule,
    DateInputsModule,
    FormsModule,
    ReactiveFormsModule,
    LabelModule,
    InputsModule,
    DropDownsModule,
    HttpClientModule,
    GridModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
