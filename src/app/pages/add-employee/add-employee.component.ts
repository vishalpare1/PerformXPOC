import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class AddEmployeeComponent implements OnInit {
  teams$: Observable<any>;
  public min: Date = new Date(1917, 0, 1);
  public max: Date = new Date();
  public designationList: Array<string> = [
    'Associative Software Engineer',
    'Software Engineer',
    'Lead Software Engineer',
    'Senior Software Engineer',
    'Project Manager',
    'Project Lead',
  ];
  public skillList: Array<string> = [
    'Html5',
    'CSS',
    'Javascript',
    'Jquery',
    'Angular',
    'ReactJs',
    'ASP.Net',
    '.NetCore',
  ];
  public registerForm: FormGroup = new FormGroup({
    firstName: new FormControl(),
    lastName: new FormControl(),
    birthDate: new FormControl(),
    email: new FormControl('', Validators.email),
    designation: new FormControl(),
    skills: new FormControl(),
  });
  constructor(private empService: EmployeeService) {}

  ngOnInit(): void {}

  public submitForm(): void {
    this.registerForm.markAllAsTouched();
    if (this.registerForm.status === 'VALID') {
      this.empService.addEmployee(this.registerForm.value).subscribe(
        (e) => {
          alert('Employee added successfully');
          this.registerForm.reset();
          console.log(e);
        },
        (err) => {
          alert('Something went wrong, please try again.');
          console.log(err);
        }
      );
    }
  }

  public clearForm(): void {
    this.registerForm.reset();
  }
}
