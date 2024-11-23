import { Component } from '@angular/core';
import { AppComponent } from '../app.component';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterOutlet } from '@angular/router';
import { NewsapiService } from '../newsapi.service';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-economy',
  standalone: true,
  imports: [
    AppComponent,
    CommonModule,
    RouterOutlet,
    RouterLink,
    MatPaginatorModule,
  ],
  templateUrl: './economy.component.html',
  styleUrl: './economy.component.css',
})
export class EconomyComponent {
  constructor(private service: NewsapiService) {}

  economyNewsDisplay: any = [];

  ngOnInit() {
    this.service.economyNews().subscribe((data) => {
      this.economyNewsDisplay = data.articles;
      this.fetchNews();
    });
  }
  length = 500;
  pageSize = 50;
  pageIndex = 0;
  pageSizeOptions = [5, 10, 25];
  showFirstLastButtons = true;

  fetchNews() {
    this.service.economyNews(this.pageIndex, this.pageSize).subscribe((data) => {
      this.economyNewsDisplay = data.articles;
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
