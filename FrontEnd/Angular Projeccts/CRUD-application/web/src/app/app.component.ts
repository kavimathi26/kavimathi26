import { Component, OnInit } from '@angular/core';
import { AddDetailsComponent } from './add-details/add-details.component';
import { Router } from '@angular/router';
import { DetailsService } from './details.service';
import { UpdateComponent } from './update/update.component';
import { MainPageComponent } from './main-page/main-page.component';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  ngOnInit() { }
  public addDetailsComponent = AddDetailsComponent;
  constructor() {}
}

