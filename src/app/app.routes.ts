import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SearchComponent } from './pages/search/search.component';
import { MostComponent } from './pages/most/most.component';
import { LessComponent } from './pages/less/less.component';
import { ReservedComponent } from './pages/reserved/reserved.component';
import { QualifiedComponent } from './pages/qualified/qualified.component';
import { NewComponent } from './pages/new/new.component';

export const routes: Routes = [
    {path: 'welcome', component: WelcomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'most', component: MostComponent},
    {path: 'less', component: LessComponent},
    {path: 'reserved', component: ReservedComponent},
    {path: 'qualidied', component: QualifiedComponent},
    {path: 'new', component: NewComponent},
];
