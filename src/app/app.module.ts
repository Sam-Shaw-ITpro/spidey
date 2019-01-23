import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DisplayComicTableComponent } from './display-comic-table/display-comic-table.component';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { MarvelService } from './marvel.service';
import { IssueDetailsComponent } from './issue-details/issue-details.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayComicTableComponent,
    IssueDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [HttpClient, MarvelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
