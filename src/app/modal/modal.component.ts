import { Component, Input, OnInit } from '@angular/core';
import { MarvelService } from '../marvel.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {
  error = '';
  onecomic: object;
  uri = '';
  @Input() samcharacter;
  @Input() show = false;
  // @Input() customClass = '';
  @Input() closeCallback = () => (false);
  // @Input() uri = '';

  // @Input() hero: Hero;

  // [character]="character"

   constructor(
    private marvelservice: MarvelService,
  ) { }

  ngOnInit() {
    // have it check first
    this.uri = localStorage.getItem('uri');
    console.log('in modal ', this.uri)
    this.getOneSpidermanComic(this.uri)
     }

  getOneSpidermanComic(uri): void {
    this.marvelservice.getOneSpidermanComicMethod(uri)
      .subscribe(OneComic => {
        this.onecomic = OneComic.data.results;
        console.log('One Comic ', this.onecomic);
      },
        error => {
          this.error = error;
          console.log('error', this.error);
        });
  }



}