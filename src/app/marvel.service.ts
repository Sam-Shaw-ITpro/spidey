import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { OneComic } from './comicModel'
import { AllComics } from './allcomicsModel'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
};

// Params: {
//   "apikey": "6918d3b162edb8a846c8954d776e325c",
//   "ts": "12121212",
//   "hash": "7a29c937f783447960add3e3ac6b0d42"
// }

@Injectable({
  providedIn: 'root'
})

export class MarvelService {

  constructor(
    private http: HttpClient
  ) { }

  // I'll do this with variables and params if I have time. 
  getAllSpidermanComicsMethod(): Observable<AllComics> {
    return this.http.get<AllComics>(`https://gateway.marvel.com:443/v1/public/comics?characters=1016825&apikey=6918d3b162edb8a846c8954d776e325c&ts=12121212&hash=7a29c937f783447960add3e3ac6b0d42`, httpOptions);
  }

  getOneSpidermanComicMethod(uri): Observable<OneComic> {
    return this.http.get<OneComic>(`${uri}?apikey=6918d3b162edb8a846c8954d776e325c&ts=12121212&hash=7a29c937f783447960add3e3ac6b0d42`, httpOptions);
  }
  // https://cors-anywhere.herokuapp.com/
}
