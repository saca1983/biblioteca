import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book3',
  standalone: true,
  imports: [],
  templateUrl: './book3.component.html',
  styleUrl: './book3.component.css'
})
export class Book3Component {

  constructor(private router: Router) {}
          
      search() {
        this.router.navigate(['/search']);
      }

}
