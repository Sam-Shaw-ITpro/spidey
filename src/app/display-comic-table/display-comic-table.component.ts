import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../marvel.service'

@Component({
  selector: 'app-display-comic-table',
  templateUrl: './display-comic-table.component.html',
  styleUrls: ['./display-comic-table.component.css']
})
export class DisplayComicTableComponent implements OnInit {
  error = '';
  onecomic: object;
  allcomics: object;
  
  constructor(
    private marvelservice: MarvelService,
    // private router: Router
  ) { }

  ngOnInit() {
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

  getOneSpidermanComic(id): void {
    this.marvelservice.getOneSpidermanComicMethod(id)
      .subscribe(OneComic => {
        this.onecomic = OneComic;
        console.log('One Comic ', this.onecomic);
      },
        error => {
          this.error = error;
          console.log('error', this.error);
        });
  }
}