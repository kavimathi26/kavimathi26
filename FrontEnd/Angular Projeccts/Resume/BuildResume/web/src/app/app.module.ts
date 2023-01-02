import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSliderModule } from '@angular/material/slider';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialExampleModule } from '../material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import {MatButtonModule} from '@angular/material/button';
// import { CountService } from 'src/service/count-service';
// import { ChildComponentComponent } from './child-component/child-component.component';
// import { Child2Component } from './child2/child2.component';

@NgModule({
  declarations: [
    AppComponent,
    // ChildComponentComponent,
    // Child2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatStepperModule,
    MatSliderModule,
    BrowserAnimationsModule,
    MaterialExampleModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    MatButtonModule

  ],
  // providers: [CountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
