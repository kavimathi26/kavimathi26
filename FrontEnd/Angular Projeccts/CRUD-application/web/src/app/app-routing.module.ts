import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDetailsComponent } from './add-details/add-details.component';
import { AppComponent } from './app.component';
import { UpdateComponent } from './update/update.component';
import { MainPageComponent } from './main-page/main-page.component';

const routes: Routes = [{ path: 'employees/add', component: AddDetailsComponent },
{ path: '',   redirectTo: 'employees', pathMatch: 'full' },
{ path: 'employees/update/:id', component: UpdateComponent,
children:[
  {
    path:'employees/update/:id',
    component:UpdateComponent
  }
] },
{ path: 'employees', component: MainPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
