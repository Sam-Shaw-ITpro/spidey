import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
// import { Place } from './place.model';
// import { Results } from './results.model';

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
  getAllSpidermanComicsMethod(): Observable<AllComicsfromApi> {
    return this.http.get<AllComicsfromApi>(`http://gateway.marvel.com/v1/public/characters/1016825?apikey=6918d3b162edb8a846c8954d776e325c&ts=12121212&hash=7a29c937f783447960add3e3ac6b0d42`, httpOptions);
  }

  

  getOneSpidermanComicMethod(id): Observable<OneComicfromApi> {
    return this.http.get<OneComicfromApi>(`http://gateway.marvel.com/v1/public/characters/1017100?apikey=6918d3b162edb8a846c8954d776e325c&ts=12121212&hash=7a29c937f783447960add3e3ac6b0d42`, httpOptions);
  }

}
