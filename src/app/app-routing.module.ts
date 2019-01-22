import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { DisplayComicTableComponent } from './display-comic-table/display-comic-table.component'


const routes: Routes = [
  { path: '', redirectTo: '/displaycomic', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'displaycomic', component: DisplayComicTableComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
