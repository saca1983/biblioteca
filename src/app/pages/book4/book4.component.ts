import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-book4',
  standalone: true,
  imports: [],
  templateUrl: './book4.component.html',
  styleUrl: './book4.component.css'
})
export class Book4Component {

  constructor(private router: Router) {}
          
    search() {
      this.router.navigate(['/search']);
    }

}
