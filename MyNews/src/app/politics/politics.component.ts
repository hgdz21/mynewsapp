import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NewsapiService } from '../newsapi.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-politics',
  standalone: true,
  imports: [
    AppComponent,
    CommonModule,
    RouterOutlet,
    RouterLink,
    MatPaginatorModule,
  ],
  templateUrl: './politics.component.html',
  styleUrl: './politics.component.css',
})
export class PoliticsComponent {
  constructor(private service: NewsapiService) {}

  politicsNewsDisplay: any = [];

  ngOnInit() {
    this.service.politicsNews().subscribe((data) => {
      this.politicsNewsDisplay = data.articles;
      this.fetchNews();
    });
  }
  length = 500;
  pageSize = 50;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;

  fetchNews() {
    this.service.politicsNews(this.pageIndex, this.pageSize).subscribe((data) => {
      this.politicsNewsDisplay = data.articles;
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
