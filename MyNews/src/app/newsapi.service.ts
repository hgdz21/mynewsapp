import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NewsapiService {
  constructor(private http: HttpClient) {}

  displayNews(page: number = 0, pageSize: number = 10): Observable<any> {
    const newsApiUrl = `https://newsapi.org/v2/everything?q=headlines&page=${
      page + 1
    }&pageSize=${pageSize}&apiKey=your-api-key`;
    return this.http.get(newsApiUrl);
  }
  economyNews(page: number = 0, pageSize: number = 10): Observable<any> {
    const economynewsApiUrl = `https://newsapi.org/v2/everything?q=economy&page=${
      page + 1
    }&pageSize=${pageSize}&apiKey=your-api-key`;
    return this.http.get(economynewsApiUrl);
  }
  politicsNews(page: number = 0, pageSize: number = 10): Observable<any> {
    const politicsnewsApiUrl = `https://newsapi.org/v2/everything?q=politics&page=${
      page + 1
    }&pageSize=${pageSize}&apiKey=your-api-key`;
    return this.http.get(politicsnewsApiUrl);
  }
  sportNews(page: number = 0, pageSize: number = 10): Observable<any> {
    const sportnewsApiUrl = `https://newsapi.org/v2/everything?q=sport&page=${
      page + 1
    }&pageSize=${pageSize}&apiKey=your-api-key`;
    return this.http.get(sportnewsApiUrl);
  }
 
  getSearchNews(search: string): Observable<any> {
    return this.http.get(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=your-api-key`
    );
  }
}

// JUST REPLACE |your-api-key| WITH YOUR ACTUAL API KEY
// YOU CAN GET AN API FROM     https://newsapi.org 
