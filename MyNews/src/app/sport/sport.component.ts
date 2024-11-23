import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AppComponent } from '../app.component';
import { NewsapiService } from '../newsapi.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-sport',
  standalone: true,
  imports: [
    AppComponent,
    CommonModule,
    RouterOutlet,
    RouterLink,
    MatPaginatorModule,
  ],
  templateUrl: './sport.component.html',
  styleUrl: './sport.component.css',
})
export class SportComponent {
  constructor(private service: NewsapiService) {}

  sportNewsDisplay: any = [];

  ngOnInit() {
    this.service.sportNews().subscribe((data) => {
      this.sportNewsDisplay = data.articles;
      this.fetchNews();
    });
  }
  length = 500;
  pageSize = 50;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;

  fetchNews() {
    this.service.sportNews(this.pageIndex, this.pageSize).subscribe((data) => {
      this.sportNewsDisplay = data.articles;
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
