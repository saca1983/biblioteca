import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book5',
  standalone: true,
  imports: [],
  templateUrl: './book5.component.html',
  styleUrl: './book5.component.css'
})
export class Book5Component {

  constructor(private router: Router) {}
          
    search() {
      this.router.navigate(['/search']);
    }

}
