import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SearchComponent } from './pages/search/search.component';

export const routes: Routes = [
    {path: 'welcome', component: WelcomeComponent},
    {path: 'search', component: SearchComponent},
];
