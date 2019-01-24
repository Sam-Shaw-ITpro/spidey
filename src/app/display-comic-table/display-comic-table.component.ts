import { Component, OnInit, Input} from '@angular/core';
import { MarvelService } from '../marvel.service'
import * as moment from 'moment';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-display-comic-table',
  templateUrl: './display-comic-table.component.html',
  styleUrls: ['./display-comic-table.component.css']
})
export class DisplayComicTableComponent implements OnInit {
  error = '';
  allcomics: object;
  onecomic: object;
  theYear = '';

  constructor(
    private marvelservice: MarvelService,
  ) { }

  ngOnInit() {
    this.theYear = moment(new Date()).format('YYYY');
    this.getAllSpidermanComics()
  }

  getAllSpidermanComics(): void {
    this.marvelservice.getAllSpidermanComicsMethod()
      .subscribe(AllComics => {
        this.allcomics = AllComics.data.results;
        console.log('All Comics ', this.allcomics);
      },
        error => {
          this.error = error;
          console.log('error', this.error);
        });
  }

  getOneSpidermanComic(uri): void {
    this.marvelservice.getOneSpidermanComicMethod(uri)
      .subscribe(OneComic => {
        this.onecomic = OneComic.data.results[0];
        console.log('One Comic ', this.onecomic);
      },
        error => {
          this.error = error;
          console.log('error', this.error);
        });
  }
}