import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book2',
  standalone: true,
  imports: [],
  templateUrl: './book2.component.html',
  styleUrl: './book2.component.css'
})
export class Book2Component {

  constructor(private router: Router) {}
        
    search() {
      this.router.navigate(['/search']);
    }

}
