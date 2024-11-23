import { CommonModule } from '@angular/common';
import { Component, NgModule } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NgxSpinnerModule } from 'ngx-spinner';
import { NewsapiService } from './newsapi.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { ArticlesComponent } from './articles/articles.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    CommonModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    ArticlesComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'news-app';
  searchForm: FormGroup = new FormGroup({
    search: new FormControl(''),
  });

  public searchList: Array<any> = [];
  public filteredResults: Array<any> = [];
  public showResults: boolean = false;
  public hidenews: boolean = true;

  constructor(private service: NewsapiService) {
    this.searchForm
      .get('search')!
      .valueChanges.pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        switchMap((data) => this.service.getSearchNews(data))
      )
      .subscribe((data) => {
        this.searchList = data?.articles;
        this.filterResults();
      });
  }

  filterResults() {
    const searchTerm = this.searchForm.get('search')!.value.toLowerCase();
    this.filteredResults = this.searchList.filter((article) =>
      article.title.toLowerCase().includes(searchTerm)
    );
  }
  onSearch() {
    this.filterResults();
    this.showResults = true;
    this.hidenews = false;
  }
}
