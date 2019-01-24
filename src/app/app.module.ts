import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DisplayComicTableComponent } from './display-comic-table/display-comic-table.component';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { MarvelService } from './marvel.service';
import { IssueDetailsComponent } from './issue-details/issue-details.component';
import { IssueDetailsModalComponent } from './issue-details-modal/issue-details-modal.component';


@NgModule({
  declarations: [
    AppComponent,
    DisplayComicTableComponent,
    IssueDetailsComponent,
    IssueDetailsModalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [HttpClient, MarvelService],
  bootstrap: [AppComponent]
})
export class AppModule { }
