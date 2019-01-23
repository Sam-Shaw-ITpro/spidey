import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DisplayComicTableComponent } from './display-comic-table/display-comic-table.component';
import { IssueDetailsComponent } from './issue-details/issue-details.component';

const routes: Routes = [
  { path: '', redirectTo: '/comics', pathMatch: 'full' },
    { path: 'comics', component: DisplayComicTableComponent },
  { path: 'details', component: IssueDetailsComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
