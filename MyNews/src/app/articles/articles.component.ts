import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { NewsapiService } from '../newsapi.service';
import { RouterLink, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-articles',
  standalone: true,
  imports: [
    AppComponent,
    CommonModule,
    RouterOutlet,
    RouterLink,
    MatPaginatorModule,
  ],
  templateUrl: './articles.component.html',
  styleUrl: './articles.component.css',
})
export class ArticlesComponent {
  constructor(private service: NewsapiService) {}

  NewsDisplay: any = [];

  ngOnInit() {
    this.service.displayNews().subscribe((data) => {
      this.NewsDisplay = data.articles;
      this.fetchNews();
    });
  }

  length = 500;
  pageSize = 50;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;

  fetchNews() {
    this.service
      .displayNews(this.pageIndex, this.pageSize)
      .subscribe((data) => {
        this.NewsDisplay = data.articles;
        this.length = data.totalResults;
      });
  }
  handlePageEvent(event: PageEvent) {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;
    this.fetchNews();
  }
}
