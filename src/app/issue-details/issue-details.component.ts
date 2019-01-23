import { Component, OnInit } from '@angular/core';
import { MarvelService } from '../marvel.service';
import { ActivatedRoute } from '@angular/router';
import { OneComic } from '../comicModel'

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.css']
})
export class IssueDetailsComponent implements OnInit {
  error = '';
  onecomic: object;
  characters: object;
  items: object;
  results: object;
  data: object;

  // uri = '';

  constructor(
    private marvelservice: MarvelService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params => {
      var uri = params['uri'];
      console.log('in details ', uri)
      this.getOneSpidermanComic(uri)
    },
      error => {
        this.error = error;
        console.log('error', this.error);
      });
  }

    getOneSpidermanComic(uri): void {
          this.marvelservice.getOneSpidermanComicMethod(uri)
            .subscribe(OneComic => {
              // this.onecomic = OneComic;
              this.onecomic = OneComic.data.results[0];
              console.log('One Comic ', this.onecomic);
            },
              error => {
                this.error = error;
                console.log('error', this.error);
              });
        }
  }
