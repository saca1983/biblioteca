import { Routes } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SearchComponent } from './pages/search/search.component';
import { MostComponent } from './pages/most/most.component';
import { LessComponent } from './pages/less/less.component';
import { ReservedComponent } from './pages/reserved/reserved.component';
import { QualifiedComponent } from './pages/qualified/qualified.component';
import { NewComponent } from './pages/new/new.component';
import { Book1Component } from './pages/book1/book1.component';
import { Book2Component } from './pages/book2/book2.component';
import { Book3Component } from './pages/book3/book3.component';
import { Book4Component } from './pages/book4/book4.component';
import { Book5Component } from './pages/book5/book5.component';

export const routes: Routes = [
    {path: 'home', component: WelcomeComponent},
    {path: 'search', component: SearchComponent},
    {path: 'most', component: MostComponent},
    {path: 'less', component: LessComponent},
    {path: 'reserved', component: ReservedComponent},
    {path: 'qualidied', component: QualifiedComponent},
    {path: 'new', component: NewComponent},
    {path: 'book1', component: Book1Component},
    {path: 'book2', component: Book2Component},
    {path: 'book3', component: Book3Component},
    {path: 'book4', component: Book4Component},
    {path: 'book5', component: Book5Component},
];
