import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit {
  public gridData: any[];
  constructor(private empService: EmployeeService) {}

  ngOnInit(): void {
    this.empService.getEmployees().subscribe((e) => {
      this.gridData = e;
      console.log(e);
    });
  }
}
