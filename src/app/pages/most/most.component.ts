import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-most',
  standalone: true,
  imports: [],
  templateUrl: './most.component.html',
  styleUrl: './most.component.css'
})
export class MostComponent {

  constructor(private router: Router) {}
    
      book1() {
        this.router.navigate(['/book1']);
      }

}
