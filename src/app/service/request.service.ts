import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(public http: HttpClient) { }


  get(url: string) {
    return this.http.get(url);
  }

  delete(url: string) {
    return this.http.delete(url);
  }

  edit(url: string, value: any) {
    return this.http.put(url, value);
  }

  create(url: string, value: any) {
    return this.http.post(url, value);
  }
}