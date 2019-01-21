import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Authorization': `Bearer nGbkm3vZ4aJXGGbcQXuUwHTpV11iMHpMJZZcdmbguQsiGGEXEqajFDQY4UQAVc4bSwpqENszU1X5CxUxSZ1wspiXu35s8FmF6y0QpRYJVBWXp9zo-OnUgbc51ZkaXHYx`,
  })
};

@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(
    private http: HttpClient
  ) { }

  }
