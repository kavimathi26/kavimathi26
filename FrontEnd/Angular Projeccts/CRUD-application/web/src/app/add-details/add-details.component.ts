import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-add-details',
  templateUrl: './add-details.component.html',
  styleUrls: ['./add-details.component.css']
})
export class AddDetailsComponent implements OnInit {

  employees: Array<object> = [];
  constructor(
    private fetch: DetailsService, private route: Router
  ) { }

  // send(data: any) {
  //   console.log(data);
  //   const tempRouter = this.route;
  //   Swal.fire({
  //     title: 'Do you want to save the changes?',
  //     showDenyButton: true,
  //     showCancelButton: true,
  //     confirmButtonText: 'Save',
  //     denyButtonText: `Don't save`,
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //   this.fetch.onCreate(data).subscribe();
  //       Swal.fire('Saved!', '', 'success')
  //       tempRouter.navigate(['employees']);
  //     } else if (result.isDenied) {
  //       Swal.fire('Changes are not saved', '', 'info')
  //       tempRouter.navigate(['employees']);
  //     }
  //   })
  // }

  successMsg: string = '';
  send(data: any) {
    const tempRouter = this.route;
    this.fetch.onCreate(data).subscribe(
      result => {
        this.successMsg = Object.values(result)[0];
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: this.successMsg,
          showConfirmButton: true,
        }).then(result => {
          if (result.value) {
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
  }

  backToMainPage() {
    const tempRouter = this.route;
    tempRouter.navigate(['employees']);
  }
  ngOnInit(): void {
  }

}
