import { Component, OnInit } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';
// import * as moment from 'moment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'spidey';
  // theYear = '';

  ngOnInit() {
    // this.theYear = moment(new Date()).format('YYYY');
  }
}