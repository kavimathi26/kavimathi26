import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})

export class UpdateComponent implements OnInit {
  employees: Array<object> = [];
  successMsg: any = '';
  public userId: string = '';
  public employee: any = {
    user_id: '',
    name: '',
    email: '',
    job_title: ''
  };

  constructor(private fetch: DetailsService, route: ActivatedRoute, private router: Router) {
    route.params.subscribe((params) => {
      this.userId = params['id'];
    });
  }

  send(user_ids: string, employeeDetails: object) {
    const tempRouter = this.router; //r
    Swal.fire('Are you sure to submit?');
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.fetch.fetchUpdate(employeeDetails, this.userId).subscribe(
          result => {
            this.successMsg = Object.values(result)[0];
            Swal.fire({
              position: 'center',
              icon: 'success',
              title: this.successMsg,
              showConfirmButton: true,
            }).then(result => {
              if (result.value) {
                const tempRouter = this.router;
                tempRouter.navigate(['employees']);
              }
            })
          },
          errorMsg => {
            errorMsg = errorMsg.error.error;
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: errorMsg,
            })
          }
        );
        Swal.fire('Saved!', '', 'success')
        tempRouter.navigate(['']);
        tempRouter.navigate(['']);
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info')
        tempRouter.navigate(['']);
      }
    })
  }

  backToMainPage() {
    const tempRouter = this.router;
    tempRouter.navigate(['']);
  }

  ngOnInit(): void {
    this.fetch.fetchGet1(this.userId).subscribe((response) => {
      this.employee = response;
      console.log(this.employee);

    })
  }
}