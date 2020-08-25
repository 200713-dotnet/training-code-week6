import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { ImageUrlData } from '../data/image_data.model';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http: HttpClient) {}

  getImageUrl(): Observable<string> {
    //let result: string; // synchronous

    // fetch('http://localhost:5000/api/image').then((res) => {
    //   res.text().then(fn)
    // }); // asynchronous

    //return result; // synchronous - undefined
    return this.http.get<ImageUrlData>('http://localhost:5000/api/image').pipe(map(function (res) { return res.value })); // 'placecorgi.com'
    // return this.http.get<any>('assets/data.json').pipe(map((res) => res.value));
    // imageurldata | value |  return
  }
}
// EXECUTION
/*
10
11
12
13 Promise Returns
18 14
19 15
20 16
-- 17
*/
