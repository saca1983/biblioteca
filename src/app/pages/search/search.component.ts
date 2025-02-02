import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {

  constructor(private router: Router) {}
  
    square1() {
      this.router.navigate(['/most']);
    }

    square2() {
      this.router.navigate(['/less']);
    }

    square3() {
      this.router.navigate(['/reserved']);
    }

    square4() {
      this.router.navigate(['/qualidied']);
    }

    square5() {
      this.router.navigate(['/new']);
    }
}
