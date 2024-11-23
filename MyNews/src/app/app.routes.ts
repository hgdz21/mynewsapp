import { Routes } from '@angular/router';
import { ArticlesComponent } from './articles/articles.component';
import { SportComponent } from './sport/sport.component';
import { EconomyComponent} from './economy/economy.component';
import { PoliticsComponent } from './politics/politics.component';

export const routes: Routes = [
    { path: 'latestnews', component: ArticlesComponent },
    { path: 'economy', component: EconomyComponent },
    { path: 'politics', component: PoliticsComponent },
    { path: 'sport', component: SportComponent },
    { path: '', redirectTo: '/latestnews', pathMatch: 'full' } // Redirect to home on empty path
];