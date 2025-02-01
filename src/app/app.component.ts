import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { SearchComponent } from './pages/search/search.component';
import { MostComponent } from './pages/most/most.component';
import { LessComponent } from './pages/less/less.component';
import { ReservedComponent } from './pages/reserved/reserved.component';
import { QualifiedComponent } from './pages/qualified/qualified.component';
import { NewComponent } from './pages/new/new.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, WelcomeComponent, SearchComponent, MostComponent, LessComponent, ReservedComponent, QualifiedComponent, NewComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'biblioteca';
}
