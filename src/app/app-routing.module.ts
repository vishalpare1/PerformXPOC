import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './pages/add-employee/add-employee.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/addemployee', pathMatch: 'full' },
  { path: 'addemployee', component: AddEmployeeComponent },
  { path: 'employeelist', component: EmployeeListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
