import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
import { Router } from '@angular/router'
import { AddDetailsComponent } from '../add-details/add-details.component';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  employees: Array<any> = [];
  count: number = 0;
  limit: number = 0;
  page: number = 0;
  ngOnInit(): void {
  }
  constructor(
    private fetch: DetailsService, private router: Router
  ) {
    this.fetch.fetchData().subscribe(response => {
      this.employees = response.Data;
      this.count = response.count;
      this.limit = response.Limit;
      this.page = response.Page;
      console.log(this.employees);
      console.log(this.count);
      console.log(this.limit);
      console.log(this.page);
    }
    )
  }

  editUser(id: any) {
    // this.fetch.editFetch(id, name, email, job_role);
    this.router.navigateByUrl('employees/update/' + id);
  }
  deleteUser(employee: object,data: string) {
    Swal.fire({
      title: 'Are you sure to Delete this ID?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Yes',
      denyButtonText: `No`,
    }).then((result) => {
      if (result.isConfirmed) {
        this.fetch.fetchDelete(employee,data).subscribe((response: any) => {
          console.log(response);
          Swal.fire(response.msg).then((result => {
            if(result.isConfirmed) {
              window.location.reload();
            }
          }))
        }); 
      } else if (result.isDenied) {
        Swal.fire('Cancelled')
      }
    })
  }
  
  p: number = 1;
  items: number = 10;
}

