import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private baseUrl = 'https://jsonplaceholder.typicode.com/comments';

  constructor(private httpClient: HttpClient) {}
  getComments(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.baseUrl);
  }
}
