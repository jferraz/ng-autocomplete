import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class AutoService {
  private baseURL = "https://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient) { }

  getData() {
    return this.http.get(this.baseURL);
  }
}
