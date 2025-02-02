import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-less',
  standalone: true,
  imports: [],
  templateUrl: './less.component.html',
  styleUrl: './less.component.css'
})
export class LessComponent {

  constructor(private router: Router) {}
      
        book2() {
          this.router.navigate(['/book2']);
        }

}
