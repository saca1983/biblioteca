import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book1',
  standalone: true,
  imports: [],
  templateUrl: './book1.component.html',
  styleUrl: './book1.component.css'
})
export class Book1Component {

  constructor(private router: Router) {}
      
        search() {
          this.router.navigate(['/search']);
        }

}
