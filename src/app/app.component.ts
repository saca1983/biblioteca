import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
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

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WelcomeComponent, SearchComponent, MostComponent, LessComponent, ReservedComponent, QualifiedComponent, NewComponent, Book1Component, Book2Component, Book3Component, Book4Component, Book5Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'biblioteca';
}
